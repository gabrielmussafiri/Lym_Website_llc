import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Complianta — Privacy Policy</h1>
          <p className="text-muted-foreground mb-2">Effective Date: May 17, 2025</p>
          <p className="text-lg text-muted-foreground mb-6">This Privacy Policy explains how Complianta LLC ("Complianta," "we," or "us") collects, uses, shares, and protects information through our services, websites, applications, and any other interactions you have with us (collectively, the "Services").</p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto">
          <div className="space-y-8 text-base text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold mb-2">1. Scope of This Policy</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Our Services, including compliance and security offerings</li>
                <li>Our public website (e.g., www.complianta.com)</li>
                <li>Communications such as email, support, and marketing</li>
              </ul>
              <p className="mt-2">It does not apply to third-party services that may integrate with Complianta. These are governed by their own policies.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>a. Service Data:</strong> Information uploaded by customers to use our platform, such as security control data, audit evidence, and user configuration files.</li>
                <li><strong>b. Account and Contact Information:</strong> Including full name, work email, company name, and billing information (if applicable).</li>
                <li><strong>c. Usage & Device Information:</strong> IP address, browser, device type, pages visited, timestamps, actions, log files, and diagnostics.</li>
                <li><strong>d. Cookies & Tracking Technologies:</strong> Our site uses cookies to enhance user experience and analyze usage trends. Users can manage cookies via browser settings or our cookie banner.</li>
                <li><strong>e. Third-Party Integrations:</strong> If you enable integrations (e.g., AWS, GCP, Drata), we may receive metadata (e.g., username, API token permissions) for configuration and analysis purposes.</li>
                <li><strong>f. Other Information:</strong> Such as communications with support, survey responses, and webinar or event registrations.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">3. How We Use Information</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Provide, maintain, and improve the Services</li>
                <li>Authenticate and authorize access</li>
                <li>Respond to support requests</li>
                <li>Manage billing and accounts</li>
                <li>Monitor system performance and detect fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-2">Aggregated or de-identified data may be used for analytics and industry benchmarking.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">4. Data Sharing and Disclosure</h2>
              <p>We do not sell personal information. We may share information with:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Subprocessors and service providers under confidentiality agreements (e.g., hosting, analytics, CRM)</li>
                <li>Third-party integration partners, as authorized by the customer</li>
                <li>Government authorities, only as legally required</li>
                <li>Affiliates, for internal business operations</li>
                <li>In connection with a business transfer, such as a merger or acquisition</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">5. Data Retention</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Customer data: Retained per the contract (MSA) or 365 days after account closure</li>
                <li>Job applicant data: Up to 3 years</li>
                <li>Marketing/contact inquiries: Retained as long as reasonably necessary</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">6. Data Security</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Encryption (in transit and at rest)</li>
                <li>Least-privilege access controls</li>
                <li>Regular audits and penetration testing</li>
              </ul>
              <p className="mt-2">Despite safeguards, no system is 100% secure. If you suspect a data incident, contact us immediately.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
              <p>Depending on your jurisdiction (e.g., California, EEA, UK), you may have the right to:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Access your data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion</li>
                <li>Opt out of marketing communications</li>
              </ul>
              <p className="mt-2">To exercise these rights, contact us at <a href="mailto:legal@complianta.com" className="text-foreground underline hover:text-primary">legal@complianta.com</a>.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">8. International Data Transfers</h2>
              <p>Complianta is based in the U.S. and may transfer data globally. We use Standard Contractual Clauses (SCCs) and other lawful mechanisms to protect data transfers from the EEA, UK, and Switzerland.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">9. Children's Privacy</h2>
              <p>Our Services are not intended for children under 16. If we become aware of data collected from such individuals, we will delete it promptly.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy. The latest version will always be posted on our site. If material changes occur, we will notify users via email or in-app messaging.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
              <p>Complianta LLC<br />[Your Registered Business Address]<br />Email: <a href="mailto:legal@complianta.com" className="text-foreground underline hover:text-primary">legal@complianta.com</a></p>
              <p>If you have questions or complaints about our privacy practices, we encourage you to contact us directly.</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mt-8">This Privacy Policy is designed to meet regulatory requirements under GDPR, CCPA, and applicable U.S. privacy laws.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 