'use client';

export function Privacy() {
  return (
    <section id="privacy" className="relative border-t border-border bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Privacy <span className="text-primary">Policy</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Your data security is our highest priority
            </p>
          </div>

          {/* Content */}
          <div className="rounded-2xl border border-border bg-card/50 backdrop-blur p-8 sm:p-12 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Data Sovereignty</h3>
              <p className="text-foreground leading-relaxed">
                VardhanFlow prioritizes data sovereignty. All client and customer data within our ecosystem is encrypted and strictly confidential. We do not sell or share data with third-party aggregators.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="text-xl font-semibold mb-4">Data Protection Measures</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>End-to-end encryption for all sensitive data transfers and storage</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Strict access controls limiting data access to authorized personnel only</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Regular security audits and compliance assessments</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Complete data isolation between clients to prevent unauthorized access</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="text-xl font-semibold mb-4">No Third-Party Sharing</h3>
              <p className="text-foreground leading-relaxed">
                Your data is never sold, shared, or used for any purpose beyond providing our services. We maintain strict confidentiality agreements with all team members and service partners. Client data remains your exclusive property.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="text-xl font-semibold mb-4">Your Rights</h3>
              <p className="text-foreground leading-relaxed">
                You have the right to request access to, modification of, or deletion of your personal data at any time. Contact us at support@vardhanflow.com for any privacy-related inquiries or data requests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
