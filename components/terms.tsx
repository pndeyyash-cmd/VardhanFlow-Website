'use client';

export function Terms() {
  return (
    <section id="terms" className="relative border-t border-border bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Terms & <span className="text-primary">Conditions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our commitment to transparent and fair service terms
            </p>
          </div>

          {/* Content */}
          <div className="rounded-2xl border border-border bg-card/50 backdrop-blur p-8 sm:p-12 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Service Agreement</h3>
              <p className="text-foreground leading-relaxed">
                By utilizing VardhanFlow services, clients agree to our project orchestration protocols. All custom digital assets become the property of the client upon final settlement. We ensure delivery within agreed-upon sprints.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="text-xl font-semibold mb-4">Project Execution</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>All deliverables are executed according to agreed specifications and timelines</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Custom digital assets become client property upon final payment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Project delivery follows sprint-based methodologies for optimal results</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="text-xl font-semibold mb-4">Intellectual Property</h3>
              <p className="text-foreground leading-relaxed">
                Upon completion and final settlement of payment, all custom-built digital assets, including but not limited to code, designs, and documentation, become the intellectual property of the client. VardhanFlow retains rights to general methodologies and frameworks used in project delivery.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="text-xl font-semibold mb-4">Payment Terms</h3>
              <p className="text-foreground leading-relaxed mb-4">
                VardhanFlow operates on a structured milestone-based payment model to ensure transparency and mutual success:
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>60% Mobilization Fee:</strong> Due prior to engineering start to secure resources and initiate project setup</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>40% Final Settlement:</strong> Due upon orchestration delivery and successful project completion</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>All invoices are due within the agreed-upon payment terms. Late payments may incur interest as per legal standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
