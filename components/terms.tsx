'use client';

export function Terms() {
  return (
    <section id="terms" className="relative border-t border-[#d4a574]/10 bg-[#0a0a0a] px-4 py-32 sm:px-6 lg:px-8">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-full max-w-[800px] bg-[#d4a574]/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl">
        <div className="space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4a574]/30 bg-[#d4a574]/5 px-4 py-1 mb-2 shadow-[0_0_15px_rgba(212,165,116,0.1)]">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d4a574]">Legal Protocol</span>
            </div>
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl">
              Terms & <span className="text-[#d4a574] drop-shadow-[0_0_15px_rgba(212,165,116,0.3)]">Conditions</span>
            </h2>
            <p className="text-lg font-medium text-zinc-500">
              Our commitment to transparent and fair service orchestration.
            </p>
          </div>

          {/* Content Card */}
          <div className="rounded-3xl border border-[#d4a574]/30 bg-[#d4a574]/5 backdrop-blur-md p-8 sm:p-12 space-y-8 shadow-[0_0_30px_rgba(212,165,116,0.1)] transition-all hover:border-[#d4a574]/50 hover:shadow-[0_0_40px_rgba(212,165,116,0.15)]">
            
            {/* Section 1 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider text-sm">Service Agreement</h3>
              <p className="text-zinc-400 leading-relaxed">
                By utilizing VardhanFlow services, clients agree to our project orchestration protocols. All custom digital assets become the property of the client upon final settlement. We ensure delivery within agreed-upon sprints.
              </p>
            </div>

            {/* Section 2 */}
            <div className="border-t border-[#d4a574]/20 pt-8">
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider text-sm">Project Execution</h3>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex items-start gap-4">
                  <span className="text-[#d4a574] font-black mt-1 shadow-sm">•</span>
                  <span className="leading-relaxed">All deliverables are executed according to agreed specifications and timelines.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#d4a574] font-black mt-1 shadow-sm">•</span>
                  <span className="leading-relaxed">Custom digital assets become client property upon final payment.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#d4a574] font-black mt-1 shadow-sm">•</span>
                  <span className="leading-relaxed">Project delivery follows sprint-based methodologies for optimal results.</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="border-t border-[#d4a574]/20 pt-8">
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider text-sm">Intellectual Property</h3>
              <p className="text-zinc-400 leading-relaxed">
                Upon completion and final settlement of payment, all custom-built digital assets, including but not limited to code, designs, and documentation, become the intellectual property of the client. VardhanFlow retains rights to general methodologies and frameworks used in project delivery.
              </p>
            </div>

            {/* Section 4 */}
            <div className="border-t border-[#d4a574]/20 pt-8">
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider text-sm">Payment Terms</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                VardhanFlow operates on a structured milestone-based payment model to ensure transparency and mutual success:
              </p>
              <ul className="space-y-5 text-zinc-400">
                <li className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[#d4a574] font-black mt-1">•</span>
                  <span className="leading-relaxed">
                    <strong className="text-white">60% Mobilization Fee:</strong> Due prior to engineering start to secure resources and initiate project setup.
                  </span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[#d4a574] font-black mt-1">•</span>
                  <span className="leading-relaxed">
                    <strong className="text-white">40% Final Settlement:</strong> Due upon orchestration delivery and successful project completion.
                  </span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[#d4a574] font-black mt-1">•</span>
                  <span className="leading-relaxed">
                    All invoices are due within the agreed-upon payment terms. Late payments may incur interest as per legal standards.
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}