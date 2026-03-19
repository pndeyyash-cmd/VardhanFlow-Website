'use client';

import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative border-t border-[#d4a574]/10 bg-[#0a0a0a] px-4 py-24 sm:px-6 lg:px-8">
      {/* Background Ambience to match products */}
      <div className="absolute top-0 left-0 h-full w-full pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-0 h-[500px] w-[500px] bg-[#d4a574]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4a574]/30 bg-[#d4a574]/5 px-4 py-1 mb-2 shadow-[0_0_15px_rgba(212,165,116,0.1)]">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d4a574]">Genesis</span>
            </div>
            <h2 className="text-4xl font-black sm:text-5xl tracking-tighter text-white">
              About <span className="text-[#d4a574] drop-shadow-[0_0_15px_rgba(212,165,116,0.3)]">VardhanFlow</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium">
              Pioneering the future of digital orchestration.
            </p>
          </div>

          {/* Main Content Grid: Mission + Journey */}
          <div className="grid gap-8 md:grid-cols-2">
            
            {/* The Mission */}
            <div className="rounded-2xl border border-[#d4a574]/30 bg-[#d4a574]/5 backdrop-blur p-8 sm:p-10 shadow-[0_0_15px_rgba(212,165,116,0.15)] transition-all duration-500 hover:border-[#d4a574]/60 hover:shadow-[0_0_30px_rgba(212,165,116,0.25)]">
              <h3 className="text-xl font-bold mb-4 text-white border-b border-[#d4a574]/20 pb-4 uppercase tracking-wider text-sm">Corporate Mission</h3>
              <p className="text-base leading-relaxed text-zinc-400 mb-4">
                <span className="font-bold text-[#d4a574]">VardhanFlow</span> is a digital orchestration firm dedicated to bridging the gap between physical operations and high-performance digital ecosystems.
              </p>
              <p className="text-base leading-relaxed text-zinc-400">
                We don't just build websites; we engineer the flow of your business. From Smart QR menus to enterprise integrations, we create solutions that scale, perform, and deliver absolute measurable value.
              </p>
            </div>

            {/* The Architect's Journey */}
            <div className="rounded-2xl border border-[#d4a574]/30 bg-[#d4a574]/5 backdrop-blur p-8 sm:p-10 shadow-[0_0_15px_rgba(212,165,116,0.15)] transition-all duration-500 hover:border-[#d4a574]/60 hover:shadow-[0_0_30px_rgba(212,165,116,0.25)]">
              <h3 className="text-xl font-bold mb-4 text-[#d4a574] border-b border-[#d4a574]/20 pb-4 uppercase tracking-wider text-sm">The Architect's Journey</h3>
              <p className="text-base leading-relaxed text-zinc-400 mb-4">
                This ecosystem didn't start in a boardroom. It began with a <strong className="text-white">3rd-year BCA student</strong> who realized that learning raw syntax wasn't enough—local businesses were drowning in operational friction.
              </p>
              <p className="text-base leading-relaxed text-zinc-400">
                From winning entrepreneurship hackathons like <em className="text-white font-semibold">Lion's Den 2.0</em> to launching live SaaS architecture, VardhanFlow represents the evolution from writing code to engineering real-world business leverage.
              </p>
            </div>

          </div>

          {/* Core Values Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Innovation */}
            <div className="rounded-xl border border-[#d4a574]/30 bg-[#d4a574]/5 p-6 shadow-[0_0_15px_rgba(212,165,116,0.15)] transition-all duration-500 hover:border-[#d4a574]/60 hover:shadow-[0_0_25px_rgba(212,165,116,0.25)] group">
              <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-4 border border-[#d4a574]/20 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-[#d4a574]">∞</span>
              </div>
              <h3 className="font-bold text-white mb-2 uppercase tracking-wide text-sm">Innovation</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Constantly pushing boundaries to deliver cutting-edge orchestration.
              </p>
            </div>

            {/* Reliability */}
            <div className="rounded-xl border border-[#d4a574]/30 bg-[#d4a574]/5 p-6 shadow-[0_0_15px_rgba(212,165,116,0.15)] transition-all duration-500 hover:border-[#d4a574]/60 hover:shadow-[0_0_25px_rgba(212,165,116,0.25)] group">
              <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-4 border border-[#d4a574]/20 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-[#d4a574]">✓</span>
              </div>
              <h3 className="font-bold text-white mb-2 uppercase tracking-wide text-sm">Reliability</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Enterprise-grade systems you can depend on 24/7 without fail.
              </p>
            </div>

            {/* Excellence */}
            <div className="rounded-xl border border-[#d4a574]/30 bg-[#d4a574]/5 p-6 shadow-[0_0_15px_rgba(212,165,116,0.15)] transition-all duration-500 hover:border-[#d4a574]/60 hover:shadow-[0_0_25px_rgba(212,165,116,0.25)] group">
              <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-4 border border-[#d4a574]/20 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-[#d4a574]">★</span>
              </div>
              <h3 className="font-bold text-white mb-2 uppercase tracking-wide text-sm">Excellence</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Delivering premium, high-sovereignty quality in every deployment.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-8">
            <a
              href="https://wa.me/918874377426"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 rounded-full px-10 py-4.5 text-sm font-black text-black uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,165,116,0.3)]"
              style={{
                background: 'linear-gradient(135deg, #d4a574 0%, #b88a5e 100%)'
              }}
            >
              Let's Work Together
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}