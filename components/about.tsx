'use client';

import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative border-t border-border bg-gradient-to-br from-background via-card/50 to-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 mb-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Genesis</span>
            </div>
            <h2 className="text-4xl font-black sm:text-5xl tracking-tighter text-foreground">
              About <span className="text-primary drop-shadow-[0_0_15px_rgba(212,165,116,0.2)]">VardhanFlow</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              Pioneering the future of digital orchestration.
            </p>
          </div>

          {/* Main Content Grid: Mission + Journey */}
          <div className="grid gap-8 md:grid-cols-2">
            
            {/* The Mission */}
            <div className="rounded-2xl border border-border bg-card/50 backdrop-blur p-8 sm:p-10 transition-all hover:border-primary/30">
              <h3 className="text-xl font-bold mb-4 text-foreground border-b border-border pb-4 uppercase tracking-wider text-sm">Corporate Mission</h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                <span className="font-bold text-primary">VardhanFlow</span> is a digital orchestration firm dedicated to bridging the gap between physical operations and high-performance digital ecosystems.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                We don't just build websites; we engineer the flow of your business. From Smart QR menus to enterprise integrations, we create solutions that scale, perform, and deliver absolute measurable value.
              </p>
            </div>

            {/* The Architect's Journey */}
            <div className="relative rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur p-8 sm:p-10 overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(212,165,116,0.15)]">
              <div className="absolute -right-4 -top-4 opacity-5 pointer-events-none">
                <span className="text-9xl font-black italic">VF</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 text-primary border-b border-primary/20 pb-4 uppercase tracking-wider text-sm">The Architect's Journey</h3>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  This ecosystem didn't start in a boardroom. It began with a <strong className="text-foreground">3rd-year BCA student</strong> who realized that learning raw syntax wasn't enough—local businesses were drowning in operational friction.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  From winning entrepreneurship hackathons like <em className="text-foreground font-semibold">Lion's Den 2.0</em> to launching live SaaS architecture, VardhanFlow represents the evolution from writing code to engineering real-world business leverage.
                </p>
              </div>
            </div>

          </div>

          {/* Core Values Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Innovation */}
            <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 hover:bg-primary/5 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 border border-primary/20 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-primary">∞</span>
              </div>
              <h3 className="font-bold text-foreground mb-2 uppercase tracking-wide text-sm">Innovation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Constantly pushing boundaries to deliver cutting-edge orchestration.
              </p>
            </div>

            {/* Reliability */}
            <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 hover:bg-primary/5 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 border border-accent/20 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-accent">✓</span>
              </div>
              <h3 className="font-bold text-foreground mb-2 uppercase tracking-wide text-sm">Reliability</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Enterprise-grade systems you can depend on 24/7 without fail.
              </p>
            </div>

            {/* Excellence */}
            <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 hover:bg-primary/5 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 border border-secondary/20 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-secondary">★</span>
              </div>
              <h3 className="font-bold text-foreground mb-2 uppercase tracking-wide text-sm">Excellence</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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