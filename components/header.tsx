'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
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
    <header className="sticky top-0 z-50 border-b border-[#d4a574]/10 bg-[#0a0a0a]/95 backdrop-blur-xl" style={{ height: '70px' }}>
      {/* CLASSY COPPER AMBIENT GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4a574]/5 to-transparent pointer-events-none" />

      <nav className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        
        {/* LOGO UNIT - Clean and Centered in its space */}
        <div 
          className="flex items-center cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-[#d4a574] bg-white shadow-[0_0_20px_rgba(212,165,116,0.25)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[#d4a574]/40">
            <Image 
              src="/logo.jpg" 
              alt="VardhanFlow" 
              fill
              className="object-cover scale-110" 
              priority
            />
          </div>
        </div>

        {/* DESKTOP NAVIGATION - High-End Spacing */}
        <div className="hidden items-center gap-10 md:flex">
          <button onClick={() => scrollToSection('products')} className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400 hover:text-[#d4a574] transition-all">Products</button>
          <button onClick={() => scrollToSection('about')} className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400 hover:text-[#d4a574] transition-all">About Us</button>
          <button onClick={() => scrollToSection('architecture')} className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400 hover:text-[#d4a574] transition-all">Architecture</button>
          <a
            href="https://wa.me/918874377426"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-8 py-2.5 text-[10px] font-black text-black tracking-[0.15em] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#d4a574]/10"
            style={{ background: 'linear-gradient(135deg, #d4a574 0%, #b88a5e 100%)' }}
          >
            CUSTOM INTEGRATION
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-[#d4a574] md:hidden p-2">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MOBILE DRAWER */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-[70px] border-b border-[#d4a574]/20 bg-[#0d0d0d] p-8 md:hidden animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col gap-8">
              <button onClick={() => scrollToSection('products')} className="text-xs font-black tracking-widest text-zinc-300 text-left uppercase">Products</button>
              <button onClick={() => scrollToSection('about')} className="text-xs font-black tracking-widest text-zinc-300 text-left uppercase">About Us</button>
              <button onClick={() => scrollToSection('architecture')} className="text-xs font-black tracking-widest text-zinc-300 text-left uppercase">Architecture</button>
              <a
                href="https://wa.me/918874377426"
                className="flex h-14 items-center justify-center rounded-xl text-xs font-black tracking-widest text-black"
                style={{ background: 'linear-gradient(135deg, #d4a574 0%, #b88a5e 100%)' }}
              >
                CUSTOM INTEGRATION
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}