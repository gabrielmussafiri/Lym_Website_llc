import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Complianta — Terms of Service</h1>
          <p className="text-muted-foreground mb-2">Effective Date: 05/15/2025</p>
          <p className="text-lg text-muted-foreground mb-6">These Terms govern your access to and use of the Complianta website and services. By using our site, you agree to comply with these Terms.</p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto">
          <div className="space-y-8 text-base text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold mb-2">1. Services Overview</h2>
              <p>Complianta provides consulting and advisory services in cybersecurity and compliance. Engagement terms are governed by written agreements.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">2. Intellectual Property</h2>
              <p>All content, materials, and branding on this site are the property of Complianta LLC. Unauthorized use is prohibited.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">3. Use of Site</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Use the site for unlawful purposes</li>
                <li>Attempt to access restricted parts of our infrastructure</li>
                <li>Reverse-engineer any part of the site</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">4. Disclaimers</h2>
              <p>Complianta provides information "as is." We make no warranties regarding fitness for a particular purpose. Consulting engagements are governed by separate contracts.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
              <p>We are not liable for any direct, indirect, incidental, or consequential damages resulting from your use of this site.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">6. Governing Law</h2>
              <p>These Terms are governed by the laws of the State of Texas, USA. Any disputes will be resolved in Harris County, Texas.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
              <p>For questions, email us at <a href="mailto:info@complianta.com" className="text-foreground underline hover:text-primary">info@complianta.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 