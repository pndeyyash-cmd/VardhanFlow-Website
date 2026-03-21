'use client';

import Image from 'next/image';
import { Zap, Lock, BarChart3, ChevronRight } from 'lucide-react';

export function ProductShowcase() {
  const scrollToArchitecture = () => {
    const element = document.getElementById('architecture');
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
    <section 
      id="products" 
      className="relative border-t border-[#d4a574]/10 bg-[#0a0a0a] px-4 py-32 sm:px-6 lg:px-8 transform-gpu will-change-transform"
      style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 h-full w-full pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-[#d4a574]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4a574]/30 bg-[#d4a574]/5 px-4 py-1 mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d4a574]">Product Ecosystem</span>
          </div>
          <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl lg:text-6xl">
            VardhanFlow <span className="text-[#d4a574]">Products</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg font-medium text-zinc-400">
            Precision-engineered digital tools designed to orchestrate and scale your business impact.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-24">
          {[
            { icon: Zap, title: "Engineered Speed", desc: "Ultra-responsive interfaces optimized for high-conversion mobile flow.", color: "#d4a574" },
            { icon: Lock, title: "Secure Vault", desc: "Enterprise-grade encryption protecting every digital touchpoint.", color: "#e8a599" },
            { icon: BarChart3, title: "Flow Analytics", desc: "Real-time decision-making data via comprehensive engineering dashboards.", color: "#d4a574" },
            { icon: Zap, title: "24/7 Reliability", desc: "Constant orchestration support ensuring your systems never skip a beat.", color: "#e8a599" }
          ].map((feature, i) => (
            <div key={i} className="group relative rounded-2xl border border-[#d4a574]/30 bg-[#d4a574]/5 p-8 shadow-[0_0_15px_rgba(212,165,116,0.15)] transition-all hover:border-[#d4a574]/60 hover:shadow-[0_0_25px_rgba(212,165,116,0.25)]">
              <div className="mb-6 inline-flex rounded-xl bg-black p-3 shadow-inner border border-[#d4a574]/20 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6" style={{ color: feature.color }} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-white uppercase tracking-tight">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-500 group-hover:text-zinc-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Main Product Card: SMART QR MENU */}
        <div 
          id="smart-qr-menu" 
          className="group relative overflow-hidden rounded-[2rem] border border-[#d4a574]/30 bg-black shadow-[0_0_30px_rgba(212,165,116,0.15)] transform-gpu will-change-transform"
          style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}
        >
          <div className="grid gap-0 md:grid-cols-2">
            
            {/* Left Content */}
            <div className="flex flex-col justify-center p-10 sm:p-16 relative z-10 bg-black">
              <div className="mb-6 inline-flex items-center gap-2">
                <span className="h-[1px] w-8 bg-[#d4a574]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d4a574]">SaaS Solution</span>
              </div>
              
              <h3 className="mb-6 text-3xl font-black text-white sm:text-4xl uppercase tracking-tighter">
                Smart QR <br/> Menu Revolution
              </h3>
              
              <div className="mb-12 space-y-6">
                <div className="rounded-2xl border border-white/5 bg-white/5 p-8 space-y-6">
                  {/* Part 1: Base Setup */}
                  <div className="space-y-4">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#d4a574]">Base Architecture Setup</h4>
                    <div className="grid gap-3 text-sm">
                      <div className="flex justify-between items-center text-zinc-400 font-bold uppercase tracking-widest text-[10px]">
                        <span>Standard (&lt;100 items)</span>
                        <span className="text-white">₹599</span>
                      </div>
                      <div className="flex justify-between items-center text-zinc-400 font-bold uppercase tracking-widest text-[10px]">
                        <span>Extended (100–300 items)</span>
                        <span className="text-white">₹699</span>
                      </div>
                      <div className="flex justify-between items-center text-zinc-400 font-bold uppercase tracking-widest text-[10px]">
                        <span>Enterprise (300+ items)</span>
                        <span className="text-white">₹799</span>
                      </div>
                    </div>
                  </div>

                  {/* Dashed line separator */}
                  <div className="h-[1px] w-full border-t border-dashed border-[#d4a574]/20" />

                  {/* Part 2: Menu Updation*/}
                  <div className="space-y-4">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#d4a574]">Menu Updation</h4>
                    <div className="grid gap-3 text-sm">
                      <div className="flex justify-between items-center text-zinc-400 font-bold uppercase tracking-widest text-[10px]">
                        <span>Standard Tier</span>
                        <span className="text-white">₹199</span>
                      </div>
                      <div className="flex justify-between items-center text-zinc-400 font-bold uppercase tracking-widest text-[10px]">
                        <span>Extended Tier</span>
                        <span className="text-white">₹299</span>
                      </div>
                      <div className="flex justify-between items-center text-zinc-400 font-bold uppercase tracking-widest text-[10px]">
                        <span>Enterprise Tier</span>
                        <span className="text-white">₹399</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Physical Handover & Add-ons */}
                <div className="space-y-3">
                  <div className="p-4 rounded-xl border border-[#d4a574]/10 bg-[#d4a574]/5">
                    <p className="text-[10px] leading-relaxed text-[#d4a574] uppercase font-bold tracking-widest text-center">
                      Physical Handover: Premium QR included (Local) | Global: ₹70 Credit
                    </p>
                  </div>
                  <div className="p-3 rounded-xl border border-[#d4a574]/20 bg-transparent">
                    <p className="text-[9px] leading-relaxed text-[#d4a574] uppercase font-bold tracking-widest text-center">
                      Includes 1 Premium Physical Stand. Additional Units at ₹70/QR.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={scrollToArchitecture}
                className="group inline-flex items-center justify-center gap-3 rounded-full px-10 py-4 text-sm font-black text-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,165,116,0.3)]"
                style={{ background: 'linear-gradient(135deg, #d4a574 0%, #b88a5e 100%)' }}
              >
                Explore Architecture
                <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right Side: Pure Black, No Ambient Blur */}
            <div className="relative flex items-center justify-center bg-black p-8 sm:p-12 lg:p-16">
              
              {/* The Frame Placeholder - Perfect Fit Zoom & Sharp Outer Drop-Shadow */}
              <div className="relative z-10 aspect-square w-full max-w-[400px] rounded-3xl border border-[#d4a574]/40 bg-black overflow-hidden shadow-[0_0_60px_rgba(212,165,116,0.35)]">
                <Image
                  src="/vardhanflow_demo.jpeg"
                  alt="VardhanFlow QR Frame"
                  fill
                  className="object-cover scale-[1.05] transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>
            </div>

          </div>
        </div>

        {/* Future Product Teaser */}
        <div className="mt-12 text-center">
          <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.5em]">Future Engineering Pipelines incoming...</p>
        </div>
      </div>

      {/* Seamless Bottom Transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}