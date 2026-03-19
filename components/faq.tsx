'use client';

import { ChevronDown, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How fast is the engineering setup?',
      answer: 'Our "Flow Pilot" for Smart QR Menus is live within 24 to 48 hours of the mobilization fee settlement. Enterprise custom integrations typically follow a 7-day sprint cycle.',
    },
    {
      question: 'What are the payment protocols?',
      answer: 'VardhanFlow operates on a professional 60/40 milestone model: a 60% Mobilization Fee is required to initiate engineering and secure resources, with the remaining 40% due upon orchestration delivery and final deployment.',
    },
    {
      question: 'Can I manage digital updates myself?',
      answer: 'Yes. While we offer managed "Pro Flow" subscriptions where we handle everything for you, our systems are built on high-sovereignty architectures that allow you to request or execute instant updates.',
    },
    {
      question: 'Is VardhanFlow limited to Prayagraj?',
      answer: 'While we are headquartered in Prayagraj for local physical handovers (like Premium QR stands), we provide digital orchestration and enterprise web services for clients globally.',
    },
  ];

  return (
    <section id="faq" className="relative border-t border-[#d4a574]/10 bg-[#0a0a0a] px-4 py-32 sm:px-6 lg:px-8">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-full max-w-[800px] bg-[#d4a574]/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4a574]/30 bg-[#d4a574]/5 px-4 py-1 mb-6 shadow-[0_0_15px_rgba(212,165,116,0.1)]">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d4a574]">Inquiry Desk</span>
          </div>
          <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl">
            Engineering <span className="text-[#d4a574] drop-shadow-[0_0_15px_rgba(212,165,116,0.3)]">FAQs</span>
          </h2>
          <p className="mt-4 text-lg font-medium text-zinc-500">
            Transparency is the foundation of our digital orchestration.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500 ${
                openIndex === index 
                ? 'border-[#d4a574]/60 bg-[#d4a574]/10 shadow-[0_0_25px_rgba(212,165,116,0.2)]' 
                : 'border-[#d4a574]/20 bg-[#d4a574]/5 hover:border-[#d4a574]/40 hover:shadow-[0_0_15px_rgba(212,165,116,0.1)]'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-8 py-6 text-left focus:outline-none"
              >
                <span className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                  openIndex === index ? 'text-[#d4a574]' : 'text-zinc-300 group-hover:text-white'
                }`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-colors duration-300 ${openIndex === index ? 'bg-[#d4a574]/20' : 'bg-transparent group-hover:bg-[#d4a574]/10'}`}>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-[#d4a574] transition-transform duration-500 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Answer Content */}
              {openIndex === index && (
                <div className="border-t border-[#d4a574]/20 px-8 py-6 text-zinc-400 text-sm leading-relaxed bg-black/20 animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 rounded-3xl border border-[#d4a574]/20 bg-[#d4a574]/5 p-10 text-center backdrop-blur-xl shadow-[0_0_30px_rgba(212,165,116,0.1)] transition-all hover:border-[#d4a574]/40">
          <h3 className="text-xl font-bold text-white mb-2">Still have technical questions?</h3>
          <p className="mb-8 text-zinc-400 text-sm">Our lead engineers are available for direct consultation.</p>
          <a
            href="https://wa.me/918874377426"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full px-10 py-4 text-[11px] font-black text-black uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,165,116,0.3)]"
            style={{
              background: 'linear-gradient(135deg, #d4a574 0%, #b88a5e 100%)'
            }}
          >
            <MessageCircle size={18} className="transition-transform group-hover:-rotate-12" />
            Connect via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}