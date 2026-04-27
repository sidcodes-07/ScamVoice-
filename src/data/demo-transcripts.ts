import { AnalysisResult } from '@/lib/analyzer';

export const DEMO_ANIMATION = [
  { 
    speaker: 'CALLER', 
    text: 'Hello, am I speaking with the account holder?',
    risk: 12,
    tactics: []
  },
  { 
    speaker: 'USER', 
    text: 'Yes, who is this?',
    risk: 12,
    tactics: []
  },
  { 
    speaker: 'CALLER', 
    text: 'Sir I am calling from SBI customer care. Your KYC has expired today. Account will be blocked in 10 minutes if not updated.',
    risk: 45,
    tactics: ['Urgency pressure', 'Impersonation']
  },
  { 
    speaker: 'USER', 
    text: 'Oh what do I need to do?',
    risk: 45,
    tactics: []
  },
  { 
    speaker: 'CALLER', 
    text: 'I am sending OTP to your number. Please share immediately. Only 5 minutes remaining.',
    risk: 72,
    tactics: ['Urgency pressure', 'Impersonation', 'OTP request']
  },
  { 
    speaker: 'USER', 
    text: 'Okay I got the OTP...',
    risk: 80,
    tactics: []
  },
  { 
    speaker: 'CALLER', 
    text: 'Please share quickly sir. Account will be permanently blocked and case will be filed.',
    risk: 91,
    tactics: ['Urgency pressure', 'Impersonation', 'OTP request', 'Fear manipulation']
  }
];

export const DEMO_FINAL_RESULT: AnalysisResult = {
  risk_score: 92,
  verdict: 'SCAM',
  confidence: 'HIGH',
  detected_tactics: [
    {
      tactic: 'Urgency pressure',
      evidence: 'Account will be blocked in 10 minutes if not updated.',
      severity: 'HIGH'
    },
    {
      tactic: 'Impersonation',
      evidence: 'I am calling from SBI customer care.',
      severity: 'MEDIUM'
    },
    {
      tactic: 'Credential harvesting',
      evidence: 'Please share that OTP with me to complete the verification process.',
      severity: 'HIGH'
    }
  ],
  summary: 'The caller is impersonating SBI bank staff and using intense time pressure to steal an OTP. This is a classic KYC scam pattern.',
  recommended_action: 'Hang up immediately. Do not share the OTP. Block this number and report it on the Chakshu portal.',
  scam_type: 'KYC Fraud',
  language_detected: 'English',
  trigger_panic_mode: false
};
