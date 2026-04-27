'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AnalysisResultPage() {
  const router = useRouter();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'ScamVoice AI Alert',
          text: 'I just used ScamVoice AI to analyze a suspicious call. High risk detected!',
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      alert('Sharing is not supported on this browser.');
    }
  };

  return (
    <div className="bg-[#0A0F1E] text-on-surface min-h-screen pb-32 font-['Plus_Jakarta_Sans']">
      {/* TopAppBar */}
      <header className="flex justify-between items-center w-full px-5 h-16 bg-[#0A0F1E] font-bold tracking-tight border-b border-[#161E31] sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <span 
            onClick={() => router.push('/analyze')}
            className="material-symbols-outlined text-slate-400 cursor-pointer"
          >
            arrow_back
          </span>
          <span className="text-white text-lg font-extrabold tracking-widest uppercase">ScamVoice AI</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#E24B4A] fill">shield</span>
          <span className="text-[#E24B4A] text-xs font-bold tracking-widest uppercase">PRIVATE</span>
        </div>
      </header>

      <main className="px-5 pt-10 max-w-2xl mx-auto pb-24">
        {/* Hero Risk Ring Section */}
        <div className="flex flex-col items-center mb-12">
          <div className="relative w-72 h-72 flex items-center justify-center">
            {/* Outer Track */}
            <div className="absolute inset-0 rounded-full border-[12px] border-[#161E31] shadow-inner"></div>
            {/* Conic Progress */}
            <div className="risk-ring absolute inset-0 mask-[radial-gradient(transparent_58%,white_60%)] shadow-2xl"></div>
            {/* Internal Content */}
            <div className="text-center z-10">
              <span className="block text-6xl font-extrabold text-white leading-none mb-2">91%</span>
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">LIKELIHOOD</span>
            </div>
          </div>
          <div className="mt-10 bg-[#E24B4A] px-8 py-3 rounded-full border-2 border-white/20 ambient-shadow flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
            <span className="font-bold text-sm text-white uppercase tracking-widest">SCAM DETECTED</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Evidence */}
          <section>
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">KEY EVIDENCE</h3>
            <div className="bg-white rounded-2xl p-6 ambient-shadow border-l-[6px] border-[#E24B4A] h-full">
              <span className="material-symbols-outlined text-[#E24B4A] text-2xl mb-4 block fill opacity-20">format_quote</span>
              <p className="text-[#0A0F1E] font-medium text-base italic leading-relaxed mb-6">
                "Your account will freeze immediately unless you verify your identity through the external secure portal we are sending..."
              </p>
              <div className="flex items-center gap-3 py-3 border-t border-slate-100">
                <span className="w-3 h-3 rounded-full bg-[#E24B4A] animate-pulse"></span>
                <span className="text-[10px] text-[#0A0F1E] uppercase font-extrabold tracking-wider">Urgency Trigger Detected</span>
              </div>
            </div>
          </section>

          {/* Right Column: Tactics */}
          <section>
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">WHAT THEY DID</h3>
            <div className="space-y-4">
              {/* Tactic Row 1 */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex justify-between items-center transition-all hover:bg-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-[#E24B4A]/10 rounded-lg">
                    <span className="material-symbols-outlined text-[#E24B4A]">alarm</span>
                  </div>
                  <span className="font-bold text-white text-sm">Sense of Urgency</span>
                </div>
                <span className="bg-[#E24B4A] text-white px-3 py-1 rounded-md text-[9px] font-black uppercase">HIGH</span>
              </div>
              {/* Tactic Row 2 */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex justify-between items-center transition-all hover:bg-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-[#E24B4A]/10 rounded-lg">
                    <span className="material-symbols-outlined text-[#E24B4A]">badge</span>
                  </div>
                  <span className="font-bold text-white text-sm">Impersonation</span>
                </div>
                <span className="bg-[#E24B4A] text-white px-3 py-1 rounded-md text-[9px] font-black uppercase">HIGH</span>
              </div>
              {/* Tactic Row 3 */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex justify-between items-center transition-all hover:bg-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-slate-700/50 rounded-lg">
                    <span className="material-symbols-outlined text-slate-300">terminal</span>
                  </div>
                  <span className="font-bold text-white text-sm">Technical Jargon</span>
                </div>
                <span className="bg-[#161E31] text-white px-3 py-1 rounded-md text-[9px] font-black uppercase">MEDIUM</span>
              </div>
            </div>
          </section>
        </div>

        {/* Action Box */}
        <section className="mt-10 mb-12">
          <div className="bg-[#2E7D32]/5 border border-[#2E7D32]/20 p-8 rounded-3xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#2E7D32]/20 rounded-lg">
                <span className="material-symbols-outlined text-[#2E7D32] fill">task_alt</span>
              </div>
              <h3 className="font-black text-[#2E7D32] uppercase tracking-[0.2em] text-xs">SAFE ACTIONS TO TAKE</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-3">
                <span className="w-8 h-8 rounded-full bg-[#2E7D32] text-white flex items-center justify-center font-black text-xs shadow-lg shadow-[#2E7D32]/30">1</span>
                <p className="text-sm text-slate-300 font-medium leading-relaxed">Disconnect the call immediately.</p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="w-8 h-8 rounded-full bg-[#2E7D32] text-white flex items-center justify-center font-black text-xs shadow-lg shadow-[#2E7D32]/30">2</span>
                <p className="text-sm text-slate-300 font-medium leading-relaxed">Ignore any links sent via SMS.</p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="w-8 h-8 rounded-full bg-[#2E7D32] text-white flex items-center justify-center font-black text-xs shadow-lg shadow-[#2E7D32]/30">3</span>
                <p className="text-sm text-slate-300 font-medium leading-relaxed">Report number in app logs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button 
            onClick={() => window.open('tel:', '_self')}
            className="bg-[#E24B4A] py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 active:scale-95 shadow-xl shadow-[#E24B4A]/20 hover:brightness-110 group"
          >
            <span className="material-symbols-outlined text-white text-2xl group-hover:rotate-12 transition-transform">call</span>
            <span className="font-bold text-white uppercase tracking-widest">CALL TRUSTED</span>
          </button>
          <button 
            onClick={handleShare}
            className="border-2 border-white/20 py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 active:scale-95 hover:bg-white/5 group"
          >
            <span className="material-symbols-outlined text-white text-2xl group-hover:-translate-y-1 transition-transform">share</span>
            <span className="font-bold text-white uppercase tracking-widest">SHARE ALERT</span>
          </button>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-4 bg-[#0A0F1E]/90 backdrop-blur-lg border-t border-[#161E31] shadow-[0_-4px_30px_rgba(0,0,0,0.8)]">
        <Link href="/home" className="flex flex-col items-center justify-center text-slate-500 gap-1 active:scale-90 transition-all hover:text-white group">
          <span className="material-symbols-outlined group-hover:scale-110 transition-transform">home</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Home</span>
        </Link>
        <Link href="/live" className="flex flex-col items-center justify-center text-slate-500 gap-1 active:scale-90 transition-all hover:text-white group">
          <span className="material-symbols-outlined group-hover:scale-110 transition-transform">security</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Protect</span>
        </Link>
        <Link href="/learn" className="flex flex-col items-center justify-center text-slate-500 gap-1 active:scale-90 transition-all hover:text-white group">
          <span className="material-symbols-outlined group-hover:scale-110 transition-transform">menu_book</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Learn</span>
        </Link>
        <Link href="/history" className="flex flex-col items-center justify-center text-[#E24B4A] gap-1 active:scale-90 transition-all group">
          <span className="material-symbols-outlined fill group-hover:scale-110 transition-transform">history</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Logs</span>
        </Link>
      </nav>

    </div>
  );
}
