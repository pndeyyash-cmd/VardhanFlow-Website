'use client';

import { ArrowUpRight } from 'lucide-react';

export function Portfolio() {
  const projects = [
    {
      name: "Vardhan's Wear",
      description: 'A high-performance MERN E-commerce engine featuring secure authentication, real-time inventory synchronization, and seamless payment orchestration.',
      tags: ['High-Scale MERN E-Commerce', 'Flagship'],
      color: 'from-primary/30 to-secondary/20',
      flagship: true,
    },
    {
      name: 'SentinelFace',
      description: 'Advanced facial recognition system with real-time threat detection and security protocols',
      tags: ['Security', 'AI/ML', 'Enterprise'],
      color: 'from-primary/20 to-primary/5',
    },
    {
      name: 'Cashlytic',
      description: 'Financial analytics platform providing deep insights into cash flow and transactions',
      tags: ['Finance', 'Analytics', 'Real-time'],
      color: 'from-accent/20 to-accent/5',
    },
  ];

  return (
    <section id="architecture" className="relative border-t border-border bg-card px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Architecture Behind <span className="text-primary">the Flow</span>
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Explore our engineering excellence through high-security, enterprise-grade projects that power global businesses
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`grid gap-6 ${projects.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} mb-12`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl border border-border bg-background p-8 transition-all hover:border-primary/50 ${project.flagship ? 'md:col-span-1' : ''}`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`}></div>

              {/* Content */}
              <div className="relative space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                  <div className="rounded-lg bg-primary/10 p-2 transition-all group-hover:bg-primary/20">
                    <ArrowUpRight className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <p className="text-muted-foreground">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
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
        <div className="flex justify-center">
          <a
            href="https://pndeyyash-cmd.github.io/my-portfolio/#projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-95"
          >
            View Full Engineering Portfolio
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
