import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Complianta — Cookie Policy</h1>
          <p className="text-muted-foreground mb-2">Effective Date: 05/15/2025</p>
          <p className="text-lg text-muted-foreground mb-6">This Cookie Policy explains how we use cookies and similar technologies on our website.</p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto">
          <div className="space-y-8 text-base text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold mb-2">1. What Are Cookies?</h2>
              <p>Cookies are small data files stored on your device to enhance site functionality and user experience.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">2. Types of Cookies We Use</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Essential Cookies:</strong> Necessary for basic functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the website</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and choices</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">3. Third-Party Cookies</h2>
              <p>We may use third-party tools like Google Analytics. These providers may place cookies on your device for tracking performance.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">4. Managing Cookies</h2>
              <p>You can control cookies via your browser settings. Disabling cookies may impact your user experience.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">5. Consent</h2>
              <p>By using our site, you consent to our use of cookies. You can opt-out by adjusting settings in your browser or clicking cookie banners.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Contact</h2>
              <p>For more information about our data and security practices, contact us at: <a href="mailto:info@complianta.com" className="text-foreground underline hover:text-primary">info@complianta.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 