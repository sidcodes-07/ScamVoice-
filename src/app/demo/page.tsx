'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DemoModePage() {
  const router = useRouter();

  const scenarios = [
    {
      id: 'digital-arrest',
      title: 'Digital Arrest',
      description: 'Simulate a high-pressure video call from "Police" claiming legal violations.',
      icon: 'policy',
      type: 'Critical'
    },
    {
      id: 'bank-kyc',
      title: 'Bank KYC Update',
      description: 'Experience a call demanding immediate KYC verification via a link.',
      icon: 'account_balance',
      type: 'High Risk'
    },
    {
      id: 'courier-scam',
      title: 'Courier Fraud',
      description: 'A simulation where a courier agent claims illegal drugs in your package.',
      icon: 'local_shipping',
      type: 'Medium Risk'
    }
  ];

  return (
    <div className="bg-[#0A0F1E] text-on-surface font-['Plus_Jakarta_Sans'] min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 z-50 bg-[#0A0F1E] border-b border-[#161E31] shadow-none flex justify-between items-center w-full px-5 h-16">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push('/home')}>
          <span className="material-symbols-outlined text-[#E24B4A]">shield</span>
          <h1 className="text-white text-lg font-extrabold tracking-widest uppercase font-['Plus_Jakarta_Sans']">ScamVoice AI</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#E24B4A] font-bold tracking-tight font-['Plus_Jakarta_Sans'] text-sm uppercase">DEMO MODE</span>
        </div>
      </header>

      <main className="flex-grow pt-24 px-5 max-w-2xl mx-auto w-full">
        {/* Back Button */}
        <button 
          onClick={() => router.push('/home')}
          className="flex items-center gap-2 text-slate-400 mb-6 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          <span className="font-label-bold uppercase text-xs tracking-widest">Back to Home</span>
        </button>

        {/* Hero Section */}
        <section className="mb-10 text-center">
          <h2 className="font-headline-xl text-headline-xl text-white mb-2">Interactive Simulations</h2>
          <p className="font-body-md text-body-md text-slate-400 leading-relaxed">
            Practice identifying scam patterns in a safe, simulated environment.
          </p>
        </section>

        {/* Scenario Selection */}
        <div className="space-y-6">
          {scenarios.map((scenario) => (
            <div 
              key={scenario.id}
              className="bg-[#161E31] rounded-2xl border border-[#2A354F] p-6 hover:border-[#E24B4A]/50 transition-all cursor-pointer group"
              onClick={() => router.push('/live')}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-[#E24B4A]/10 rounded-xl group-hover:bg-[#E24B4A]/20 transition-colors">
                  <span className="material-symbols-outlined text-[#E24B4A] text-3xl">{scenario.icon}</span>
                </div>
                <span className={`px-3 py-1 rounded-full font-label-bold text-[10px] uppercase tracking-wider ${
                  scenario.type === 'Critical' ? 'bg-[#E24B4A] text-white' : 'bg-[#161E31] text-slate-400 border border-[#2A354F]'
                }`}>
                  {scenario.type}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{scenario.title}</h3>
              <p className="text-slate-400 text-sm mb-6">{scenario.description}</p>
              <button className="w-full py-3 bg-[#161E31] text-white border border-[#2A354F] rounded-xl font-label-bold uppercase text-xs tracking-widest group-hover:bg-[#E24B4A] group-hover:border-[#E24B4A] transition-all">
                Launch Simulation
              </button>
            </div>
          ))}
        </div>

        {/* Sandbox Note */}
        <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
          <span className="material-symbols-outlined text-slate-500">info</span>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            These simulations use pre-recorded scripts to help you understand how our AI detection works during live calls.
          </p>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-2 bg-[#0A0F1E] border-t border-[#161E31] shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
        <Link href="/home" className="flex flex-col items-center justify-center text-slate-500 gap-1 active:scale-90 duration-150 transition-colors hover:text-white">
          <span className="material-symbols-outlined">home</span>
          <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-semibold uppercase tracking-tighter">Home</span>
        </Link>
        <Link href="/live" className="flex flex-col items-center justify-center text-slate-500 gap-1 active:scale-90 duration-150 transition-colors hover:text-white">
          <span className="material-symbols-outlined">security</span>
          <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-semibold uppercase tracking-tighter">Protect</span>
        </Link>
        <Link href="/learn" className="flex flex-col items-center justify-center text-slate-500 gap-1 active:scale-90 duration-150 transition-colors hover:text-white">
          <span className="material-symbols-outlined">menu_book</span>
          <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-semibold uppercase tracking-tighter">Learn</span>
        </Link>
        <button className="flex flex-col items-center justify-center text-slate-500 gap-1 active:scale-90 duration-150 transition-colors hover:text-white">
          <span className="material-symbols-outlined">history</span>
          <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-semibold uppercase tracking-tighter">Logs</span>
        </button>
      </nav>
    </div>
  );
}
