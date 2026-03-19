'use client';

export function Privacy() {
  return (
    <section id="privacy" className="relative border-t border-[#d4a574]/10 bg-[#0a0a0a] px-4 py-32 sm:px-6 lg:px-8">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-full max-w-[800px] bg-[#d4a574]/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl">
        <div className="space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4a574]/30 bg-[#d4a574]/5 px-4 py-1 mb-2 shadow-[0_0_15px_rgba(212,165,116,0.1)]">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d4a574]">Security Protocol</span>
            </div>
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl">
              Privacy <span className="text-[#d4a574] drop-shadow-[0_0_15px_rgba(212,165,116,0.3)]">Policy</span>
            </h2>
            <p className="text-lg font-medium text-zinc-500">
              Your data security is our highest priority.
            </p>
          </div>

          {/* Content Card */}
          <div className="rounded-3xl border border-[#d4a574]/30 bg-[#d4a574]/5 backdrop-blur-md p-8 sm:p-12 space-y-8 shadow-[0_0_30px_rgba(212,165,116,0.1)] transition-all hover:border-[#d4a574]/50 hover:shadow-[0_0_40px_rgba(212,165,116,0.15)]">
            
            {/* Section 1 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider text-sm">Data Sovereignty</h3>
              <p className="text-zinc-400 leading-relaxed">
                VardhanFlow prioritizes data sovereignty. All client and customer data within our ecosystem is encrypted and strictly confidential. We do not sell or share data with third-party aggregators.
              </p>
            </div>

            {/* Section 2 */}
            <div className="border-t border-[#d4a574]/20 pt-8">
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider text-sm">Data Protection Measures</h3>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-white/5 transition-colors hover:border-[#d4a574]/20">
                  <span className="text-[#d4a574] font-black mt-1 shadow-sm">•</span>
                  <span className="leading-relaxed">End-to-end encryption for all sensitive data transfers and storage.</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-white/5 transition-colors hover:border-[#d4a574]/20">
                  <span className="text-[#d4a574] font-black mt-1 shadow-sm">•</span>
                  <span className="leading-relaxed">Strict access controls limiting data access to authorized personnel only.</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-white/5 transition-colors hover:border-[#d4a574]/20">
                  <span className="text-[#d4a574] font-black mt-1 shadow-sm">•</span>
                  <span className="leading-relaxed">Regular security audits and compliance assessments.</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-white/5 transition-colors hover:border-[#d4a574]/20">
                  <span className="text-[#d4a574] font-black mt-1 shadow-sm">•</span>
                  <span className="leading-relaxed">Complete data isolation between clients to prevent unauthorized access.</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="border-t border-[#d4a574]/20 pt-8">
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider text-sm">No Third-Party Sharing</h3>
              <p className="text-zinc-400 leading-relaxed">
                Your data is never sold, shared, or used for any purpose beyond providing our services. We maintain strict confidentiality agreements with all team members and service partners. Client data remains your exclusive property.
              </p>
            </div>

            {/* Section 4 */}
            <div className="border-t border-[#d4a574]/20 pt-8">
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider text-sm">Your Rights</h3>
              <p className="text-zinc-400 leading-relaxed">
                You have the right to request access to, modification of, or deletion of your personal data at any time. Contact us at <a href="mailto:support@vardhanflow.com" className="text-[#d4a574] hover:underline font-bold">support@vardhanflow.com</a> for any privacy-related inquiries or data requests.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}