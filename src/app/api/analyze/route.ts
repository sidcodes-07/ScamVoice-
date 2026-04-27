import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { SCAMVOICE_ANALYZE_PROMPT } from '@/lib/prompts';
import { validateResult, FALLBACK_RESULT } from '@/lib/analyzer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { transcript } = body;

    // Validate transcript
    if (!transcript || typeof transcript !== 'string' || transcript.trim().length === 0) {
      return NextResponse.json(
        { error: 'Transcript is required and must be a non-empty string.' },
        { status: 400 }
      );
    }

    if (transcript.length > 5000) {
      return NextResponse.json(
        { error: 'Transcript exceeds maximum length of 5000 characters.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'placeholder_replace_this') {
      console.error('GEMINI_API_KEY is not set or is a placeholder.');
      return NextResponse.json(FALLBACK_RESULT);
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    // TRD mentions Gemini 2.5 Pro, but standard SDK identifier is gemini-1.5-pro or gemini-2.0-flash-exp
    // Using gemini-1.5-pro as the robust reasoning model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    const fullPrompt = SCAMVOICE_ANALYZE_PROMPT.replace('{TRANSCRIPT}', transcript);

    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();
    
    // Parse JSON response safely
    try {
      // Remove potential markdown formatting if LLM ignores "ONLY JSON" instruction
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      const jsonString = jsonMatch ? jsonMatch[0] : text;
      
      const parsed = JSON.parse(jsonString);
      const validated = validateResult(parsed);

      return NextResponse.json(validated);
    } catch (parseError) {
      console.error('JSON Parse Error:', parseError, 'Raw Text:', text);
      return NextResponse.json(FALLBACK_RESULT);
    }

  } catch (error) {
    console.error('API /api/analyze error:', error);
    return NextResponse.json(FALLBACK_RESULT);
  }
}
