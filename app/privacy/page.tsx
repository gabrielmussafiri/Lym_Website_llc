import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Complianta — Privacy Policy</h1>
          <p className="text-muted-foreground mb-2">Effective Date: 05/15/2025</p>
          <p className="text-lg text-muted-foreground mb-6">At Complianta, your privacy is critically important to us. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website or engage with our services.</p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto">
          <div className="space-y-8 text-base text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Personal Information:</strong> When you submit a form, schedule a consultation, or subscribe, we may collect your name, email address, company, phone number, and service interest.</li>
                <li><strong>Usage Data:</strong> We collect non-identifiable usage data via cookies and analytics tools to improve performance and usability.</li>
                <li><strong>Third-Party Integrations:</strong> If you use tools like Calendly or subscribe to newsletters, your data may be shared securely with these providers.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">2. How We Use Information</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>To respond to your inquiries and deliver services</li>
                <li>To customize user experience and improve site functionality</li>
                <li>For marketing with your consent (you may opt-out at any time)</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">3. How We Share Information</h2>
              <p>We do not sell or rent personal data. We may share information with:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Authorized service providers and subcontractors</li>
                <li>Legal authorities, when required</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">4. Data Retention & Security</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>We retain personal data as long as necessary to fulfill its purpose and comply with law.</li>
                <li>We implement administrative and technical controls to secure your data, including encryption and access controls.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
              <p>You have the right to access, update, or delete your personal data. Email us at <a href="mailto:info@complianta.com" className="text-foreground underline hover:text-primary">info@complianta.com</a> for any requests.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">6. Children's Privacy</h2>
              <p>Our website and services are not intended for individuals under 18. We do not knowingly collect data from minors.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">7. Changes to This Policy</h2>
              <p>We may update this policy periodically. Material changes will be communicated via our website.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 