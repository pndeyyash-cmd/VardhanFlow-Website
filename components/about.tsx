'use client';

import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative border-t border-border bg-gradient-to-br from-background via-card/50 to-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold sm:text-5xl">
              About <span className="text-primary">VardhanFlow</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pioneering the future of digital orchestration
            </p>
          </div>

          {/* Main Content */}
          <div className="rounded-2xl border border-border bg-card/50 backdrop-blur p-8 sm:p-12">
            <p className="text-lg leading-relaxed text-foreground mb-6">
              <span className="font-semibold">VardhanFlow</span> is a digital orchestration firm dedicated to bridging the gap between physical operations and high-performance digital ecosystems. We don't just build websites; we engineer the flow of your business.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Our mission is to transform how businesses operate by seamlessly integrating digital solutions with real-world processes. From restaurant management systems to enterprise integrations, we create solutions that scale, perform, and deliver measurable value.
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Innovation */}
            <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">∞</span>
              </div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Constantly pushing boundaries to deliver cutting-edge solutions
              </p>
            </div>

            {/* Reliability */}
            <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-accent">✓</span>
              </div>
              <h3 className="font-semibold mb-2">Reliability</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade systems you can depend on 24/7
              </p>
            </div>

            {/* Excellence */}
            <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-secondary">★</span>
              </div>
              <h3 className="font-semibold mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Delivering premium quality in every project we undertake
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-8">
            <a
              href="https://wa.me/918874377426"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 rounded-lg px-8 py-3 text-base font-semibold text-primary-foreground overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/50 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #d4a574 0%, #e8a599 100%)'
              }}
            >
              Let's Work Together
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
