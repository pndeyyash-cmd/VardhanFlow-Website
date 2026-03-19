'use client';

import { ArrowUpRight } from 'lucide-react';

export function Portfolio() {
  const projects = [
    {
      name: "Vardhan's Wear",
      description: 'A high-performance MERN E-commerce engine featuring secure authentication, real-time inventory synchronization, and seamless payment orchestration.',
      tags: ['High-Scale MERN', 'E-Commerce', 'Flagship'],
      color: 'from-[#d4a574]/20 to-transparent',
      flagship: true,
    },
    {
      name: 'SentinelFace',
      description: 'Advanced facial recognition system with real-time threat detection and security protocols.',
      tags: ['Security', 'AI/ML', 'Enterprise'],
      color: 'from-[#d4a574]/15 to-transparent',
    },
    {
      name: 'Cashlytic',
      description: 'Financial analytics platform providing deep insights into cash flow and transactions.',
      tags: ['Finance', 'Analytics', 'Real-time'],
      color: 'from-[#d4a574]/10 to-transparent',
    },
  ];

  return (
    <section id="architecture" className="relative border-t border-[#d4a574]/10 bg-[#0a0a0a] px-4 py-24 sm:px-6 lg:px-8">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 h-full w-full pointer-events-none opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-[#d4a574]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4a574]/30 bg-[#d4a574]/5 px-4 py-1 mb-2 shadow-[0_0_15px_rgba(212,165,116,0.1)]">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d4a574]">Engineering</span>
          </div>
          <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl lg:text-6xl">
            Architecture Behind <span className="text-[#d4a574] drop-shadow-[0_0_15px_rgba(212,165,116,0.3)]">the Flow</span>
          </h2>
          <p className="max-w-2xl text-lg text-zinc-400 font-medium">
            Explore our engineering excellence through high-security, enterprise-grade projects that power global businesses.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`grid gap-6 ${projects.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} mb-12`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border border-[#d4a574]/30 bg-[#d4a574]/5 backdrop-blur p-8 shadow-[0_0_15px_rgba(212,165,116,0.15)] transition-all duration-500 hover:border-[#d4a574]/60 hover:shadow-[0_0_30px_rgba(212,165,116,0.25)] ${project.flagship ? 'md:col-span-1' : ''}`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} z-0`}></div>

              {/* Content */}
              <div className="relative z-10 space-y-5">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-black text-white">{project.name}</h3>
                  <div className="rounded-xl bg-black border border-[#d4a574]/20 p-2.5 shadow-inner transition-transform duration-300 group-hover:scale-110">
                    <ArrowUpRight className="h-5 w-5 text-[#d4a574]" />
                  </div>
                </div>

                <p className="text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#d4a574]/10">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex rounded-md bg-[#d4a574]/10 border border-[#d4a574]/20 px-3 py-1 text-[10px] font-black text-[#d4a574] uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <a
            href="https://pndeyyash-cmd.github.io/my-portfolio/#projects"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 rounded-full px-10 py-4 text-sm font-black text-black uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,165,116,0.3)]"
            style={{ background: 'linear-gradient(135deg, #d4a574 0%, #b88a5e 100%)' }}
          >
            View Full Engineering Portfolio
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}