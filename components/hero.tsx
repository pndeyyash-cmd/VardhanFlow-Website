'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center overflow-hidden bg-[#0a0a0a] px-4 py-20 md:py-32 sm:px-6 lg:px-8">
      {/* CLASSY COPPER RADIAL AMBIENCE */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1000px] w-[1000px] opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(212,165,116,0.1) 0%, rgba(10,10,10,1) 80%)'
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid gap-12 md:gap-20 md:grid-cols-2 md:items-center">
          
          {/* Content Side */}
          <div className="flex flex-col space-y-8 md:space-y-10">
            <div className="space-y-6">
              
              {/* THE BADGE */}
              <div className="inline-flex items-center gap-3 rounded-full border border-[#d4a574]/30 bg-[#d4a574]/5 px-4 py-1.5 md:px-5 md:py-2 backdrop-blur-sm shadow-[0_0_15px_rgba(212,165,116,0.1)]">
                <div className="relative h-5 w-5 md:h-6 md:w-6 overflow-hidden rounded-full border-2 border-[#d4a574] bg-white">
                  <Image src="/logo.jpg" alt="VF" fill className="object-cover scale-110" />
                </div>
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-[#d4a574]">
                  VardhanFlow Engineering
                </span>
              </div>

              {/* GORGEOUS WORDMARK VAULT - Untouched and perfectly preserved */}
              <div className="w-full max-w-[320px] md:max-w-[480px]"> 
                <div className="relative aspect-[4/1.2] w-full overflow-hidden rounded-xl md:rounded-2xl border-2 md:border-4 border-[#d4a574] bg-black shadow-[0_0_30px_rgba(212,165,116,0.4)] md:shadow-[0_0_50px_rgba(212,165,116,0.5)] transition-all duration-500 hover:shadow-[#d4a574]/70">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4a574]/5 to-transparent pointer-events-none z-10" />
                  <Image 
                    src="/wordmark.jpg" 
                    alt="VardhanFlow" 
                    fill 
                    className="object-cover object-center brightness-125 contrast-110 p-[1px]"
                    priority
                  />
                </div>
              </div>

              {/* TYPOGRAPHY */}
              <h1 className="text-4xl font-black leading-tight tracking-tighter text-white sm:text-6xl lg:text-7xl">
                The Future of <br className="hidden lg:block"/>
                <span className="text-[#d4a574] drop-shadow-[0_0_15px_rgba(212,165,116,0.2)]">Digital Flow</span>
              </h1>
              
              <p className="max-w-2xl text-base md:text-xl font-medium text-zinc-400 sm:text-2xl leading-relaxed">
                Enterprise-grade orchestration. We engineer high-performance business ecosystems.
              </p>
            </div>

            {/* CALLS TO ACTION */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-2">
              <a
                href="https://wa.me/918874377426"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-3 rounded-full px-8 py-3.5 md:px-12 md:py-4.5 text-xs md:text-sm font-black text-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#d4a574]/20"
                style={{ background: 'linear-gradient(135deg, #d4a574 0%, #b88a5e 100%)' }}
              >
                Custom Integration
                <ArrowRight size={18} />
              </a>
              <button
                onClick={() => scrollToSection('architecture')}
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#d4a574]/30 bg-[#d4a574]/5 px-8 py-3.5 md:px-12 md:py-4.5 text-xs md:text-sm font-black text-white uppercase tracking-widest transition-all hover:bg-[#d4a574]/15 hover:border-[#d4a574]/60"
              >
                Architecture
              </button>
            </div>
          </div>

          {/* Visual Side (Code Card - UPGRADED to VardhanFlow Copper Standard) */}
          <div className="relative mt-12 md:mt-0 w-full max-w-lg mx-auto md:ml-auto">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-[#d4a574]/20 to-transparent blur-2xl" />
            <div className="relative rounded-3xl border border-[#d4a574]/30 bg-[#050505]/90 p-8 md:p-10 backdrop-blur-2xl shadow-[0_0_30px_rgba(212,165,116,0.15)] hover:border-[#d4a574]/50 transition-all duration-500">
              <div className="space-y-4 md:space-y-5 font-mono text-xs md:text-sm leading-relaxed text-zinc-400">
                
                <div className="flex items-center gap-3 border-b border-[#d4a574]/20 pb-4">
                  <span className="text-[#d4a574] font-black text-lg">{'>'}</span>
                  <span className="text-white font-bold tracking-tight text-base md:text-lg">VardhanFlow<span className="text-[#d4a574]">.</span>execute()</span>
                </div>
                
                <div className="pl-5 border-l-2 border-[#d4a574]/30 space-y-3 pt-2">
                  <p className="flex justify-between items-center">
                    <span className="text-zinc-500">Target Ecosystem:</span> 
                    <span className="text-white font-medium">Enterprise</span>
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="text-zinc-500">Active Module:</span> 
                    <span className="text-[#d4a574] font-bold tracking-wide">SmartQR_SaaS</span>
                  </p>
                  <div className="flex justify-between items-center pt-3 mt-3 border-t border-white/5">
                    <span className="text-zinc-500">System Status:</span> 
                    <span className="inline-flex items-center gap-2 text-emerald-400 font-bold bg-emerald-400/10 px-3 py-1 rounded-full text-[10px] md:text-xs tracking-widest">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      ONLINE
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}