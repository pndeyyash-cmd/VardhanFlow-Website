'use client';

import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const scrollTo = (id: string) => {
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
    <footer className="relative border-t border-[#d4a574]/10 bg-[#050505] px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 h-[300px] w-[300px] bg-[#d4a574]/5 blur-[100px] pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4 mb-20">
          
          {/* Brand - High Sovereignty Badge */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#d4a574]/40 bg-white shadow-[0_0_15px_rgba(212,165,116,0.2)] transition-transform group-hover:scale-110">
                <Image 
                  src="/logo.jpg" 
                  alt="VF" 
                  fill 
                  className="object-cover scale-110"
                />
              </div>
              <span className="text-xl font-black tracking-tighter text-white uppercase italic">Vardhan<span className="text-[#d4a574]">Flow</span></span>
            </div>
            <p className="text-sm font-medium leading-relaxed text-zinc-500">
              Engineering the future of digital flow with enterprise-grade integration and high-sovereignty orchestration.
            </p>
          </div>

          {/* Ecosystem (Product Links) */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d4a574]">Ecosystem</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
              <li>
                <button onClick={() => scrollTo('products')} className="transition-colors hover:text-[#d4a574] text-left">
                  Smart QR Menus
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('architecture')} className="transition-colors hover:text-[#d4a574] text-left">
                  Corporate Web Services
                </button>
              </li>
              <li>
                <a href="https://wa.me/918874377426" target="_blank" className="transition-colors hover:text-[#d4a574]">
                  Custom Engineering
                </a>
              </li>
            </ul>
          </div>

          {/* Governance (Refined Navigation) */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d4a574]">Governance</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
              <li>
                <button onClick={() => scrollTo('about')} className="transition-colors hover:text-[#d4a574] text-left">
                  About Infrastructure
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('faq')} className="transition-colors hover:text-[#d4a574] text-left">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('privacy')} className="transition-colors hover:text-[#d4a574] text-left">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Us - The Direct Link */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d4a574]">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="mailto:support@vardhanflow.com"
                className="flex items-center gap-3 text-xs font-bold text-zinc-400 transition-colors hover:text-[#d4a574]"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/5"><Mail size={14} /></div>
                support@vardhanflow.com
              </a>
              <a
                href="https://wa.me/918874377426"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs font-bold text-zinc-400 transition-colors hover:text-[#d4a574]"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/5"><Phone size={14} /></div>
                +91 887 437 7426
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM TERMINAL */}
        <div className="pt-10 border-t border-white/5 flex flex-col items-center justify-between gap-8 md:flex-row">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
            © 2026 VardhanFlow // All Digital Assets Secured.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: Github, url: "https://github.com/pndeyyash-cmd", label: "GitHub" },
              { icon: Linkedin, url: "https://www.linkedin.com/in/yash-pandey-fullstack/", label: "LinkedIn" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/5 transition-all hover:border-[#d4a574]/40 hover:bg-[#d4a574]/10"
                aria-label={social.label}
              >
                <social.icon size={18} className="text-zinc-500 transition-colors group-hover:text-[#d4a574]" />
              </a>
            ))}
            <a
              href="https://www.youtube.com/channel/UCS8CRyAxM0zG6hRsVUNhcEw"
              target="_blank"
              className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/5 transition-all hover:border-[#d4a574]/40 hover:bg-[#d4a574]/10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-500 group-hover:text-[#d4a574]">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}