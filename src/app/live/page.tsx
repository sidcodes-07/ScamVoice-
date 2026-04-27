'use client';

import { useRouter } from 'next/navigation';

export default function LiveProtectionPage() {
  const router = useRouter();

  const handleCallTrusted = () => {
    window.open('tel:', '_self');
  };

  return (
    <div className="font-body-md text-on-background min-h-screen pb-40 bg-[#0A0F1E]">
      {/* TopAppBar */}
      <header className="bg-[#0A0F1E] border-b border-[#161E31] shadow-none flex justify-between items-center w-full px-5 h-16 fixed top-0 z-50">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push('/home')}>
          <span className="material-symbols-outlined text-[#E24B4A]">shield</span>
          <h1 className="text-white text-lg font-extrabold tracking-widest uppercase font-['Plus_Jakarta_Sans']">ScamVoice AI</h1>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-[#161E31] rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#E24B4A] pulse-ring"></span>
          <span className="font-label-bold text-[#E24B4A] text-sm">PRIVATE</span>
        </div>
      </header>

      <main className="pt-24 px-5 space-y-6 max-w-xl mx-auto pb-48">
        {/* Status Indicator */}
        <div className="flex justify-center items-center py-5 bg-[#161E31]/60 rounded-2xl border border-[#2A354F]/40 backdrop-blur-lg shadow-xl">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#E24B4A] pulse-ring"></span>
              <span className="text-[#E24B4A] font-bold text-xl tracking-tight uppercase">
                LISTENING
              </span>
            </div>
            <div className="w-[1px] h-6 bg-[#2A354F]"></div>
            <span className="text-slate-200 font-mono text-2xl font-semibold">01:24</span>
          </div>
        </div>

        {/* Threat Analysis Card */}
        <section className="bg-[#161E31] rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden border border-[#2A354F]">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-white font-headline-md uppercase tracking-tight leading-none mb-1">Threat Analysis</h2>
              <p className="text-slate-500 text-[10px] font-bold tracking-widest uppercase">Real-time Risk Assessment</p>
            </div>
            <span className="bg-[#E24B4A] text-white font-bold px-3 py-1 rounded-full text-[10px] shadow-lg shadow-[#E24B4A]/20">HIGH RISK</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-28 h-28 flex-shrink-0 flex items-center justify-center">
              {/* Circular Gauge */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" fill="transparent" r="44" stroke="#f1f5f9" strokeWidth="8"></circle>
                <circle cx="50" cy="50" fill="transparent" r="44" stroke="#E24B4A" strokeDasharray="276.46" strokeDashoffset="77.4" strokeLinecap="round" strokeWidth="8"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-white text-3xl font-extrabold leading-none">72%</span>
              </div>
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-3">
                <span className="bg-[#E24B4A]/10 text-[#E24B4A] font-bold px-2 py-1 rounded text-[9px] uppercase border border-[#E24B4A]/20">Urgency</span>
                <span className="bg-[#E24B4A]/10 text-[#E24B4A] font-bold px-2 py-1 rounded text-[9px] uppercase border border-[#E24B4A]/20">Authority</span>
                <span className="bg-[#E24B4A]/10 text-[#E24B4A] font-bold px-2 py-1 rounded text-[9px] uppercase border border-[#E24B4A]/20">Isolation</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">Multiple psychological triggers detected. Caller is attempting to pressure financial action.</p>
            </div>
          </div>
        </section>

        {/* Live Transcript Card */}
        <section className="bg-[#161E31] rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-[#2A354F]">
          <div className="flex items-center gap-3 mb-5 border-b border-[#2A354F] pb-3">
            <span className="material-symbols-outlined text-slate-400 text-xl">article</span>
            <h3 className="text-white font-bold uppercase tracking-wide text-sm">Live Transcript</h3>
          </div>
          
          <div className="space-y-6 max-h-[280px] overflow-y-auto transcript-gradient pr-2 custom-scrollbar">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#2A354F] flex items-center justify-center">
                <span className="material-symbols-outlined text-slate-400 text-lg">person</span>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-slate-400 text-[10px] tracking-widest uppercase">[CALLER]</span>
                <p className="text-slate-200 text-sm leading-relaxed">Hello, I am calling from the bank regarding an unauthorized transaction of ₹48,000 on your account.</p>
              </div>
            </div>

            <div className="flex gap-4 justify-end">
              <div className="space-y-1 text-right order-1">
                <span className="font-bold text-slate-400 text-[10px] tracking-widest uppercase">YOU</span>
                <p className="text-slate-500 text-sm leading-relaxed">Which bank? I didn't get any SMS alert.</p>
              </div>
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#E24B4A]/10 flex items-center justify-center order-2">
                <span className="material-symbols-outlined text-[#E24B4A] text-lg">face</span>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#2A354F] flex items-center justify-center">
                <span className="material-symbols-outlined text-slate-400 text-lg">person</span>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-[#E24B4A] text-[10px] tracking-widest uppercase">[CALLER]</span>
                <p className="text-slate-200 text-sm leading-relaxed">We have blocked the SMS to prevent further data breach. You must confirm your identity now or your account will be permanently frozen in 5 minutes.</p>
              </div>
            </div>

            <div className="flex gap-4 animate-pulse">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#2A354F] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#E24B4A] text-lg">psychology</span>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-[#E24B4A] text-[10px] tracking-widest uppercase">SYSTEM</span>
                <p className="text-[#E24B4A] text-xs leading-relaxed italic font-medium">Analyzing: High-pressure tactics detected. Stay calm.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Contact Card */}
        <div className="bg-[#161E31] border border-[#2A354F] rounded-2xl p-4 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#2A354F] shadow-inner">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgxJ4eEy46S6YnW17rHv73TphFnzm5psy-P5NNfwWj1mjvzwX_wwfgZ6NuEkBkaVNXLbKjE_PQI4RFsZf8T7oaxWr1aidjf8mSQZ1dhcz3jKtS1CQacQqR13wENpJ37Ahwz6hoEEc1n5zdKTbzsCEsWPQchtekunDkeJAgrxdyo8QVvEJONFeLO0PG7UsyC7JX3TFuLj38XfGSdIBEEJv66FVg0UXbXZUobtYP6UkeSBZSbdt8k6YxxAKF-wWO3-N3J7idZHW_cCQ" 
                alt="Emergency Contact"
              />
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-none mb-1">Rahul (Brother)</p>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Emergency Contact</p>
            </div>
          </div>
          <button 
            onClick={handleCallTrusted}
            className="text-white border border-white/20 px-4 py-2 rounded-xl text-xs font-bold hover:bg-white/5 transition-all active:scale-95 bg-white/5"
          >
            NOTIFY
          </button>
        </div>
      </main>

      {/* Bottom Action Bar */}
      <footer className="fixed bottom-0 left-0 w-full z-50 bg-[#0A0F1E]/80 backdrop-blur-md border-t border-[#161E31] p-6 pb-8">
        <div className="max-w-xl mx-auto space-y-4">
          <button 
            onClick={() => router.push('/home')}
            className="w-full bg-[#E24B4A] text-white py-5 rounded-2xl font-bold uppercase tracking-widest shadow-2xl shadow-[#E24B4A]/30 active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg"
          >
            <span className="material-symbols-outlined fill text-2xl">call_end</span>
            END CALL NOW
          </button>
          <button 
            onClick={handleCallTrusted}
            className="w-full border-2 border-slate-700 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-white/5 active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-sm opacity-80"
          >
            <span className="material-symbols-outlined text-xl">contact_phone</span>
            CALL TRUSTED CONTACT
          </button>
        </div>
      </footer>

    </div>
  );
}
