import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Complianta Master Subscription Agreement (MSA)</h1>
          <p className="text-muted-foreground mb-2">Effective Date: May 17, 2025</p>
          <p className="text-lg text-muted-foreground mb-6">This Master Subscription Agreement ("MSA") is entered into by and between Complianta LLC, a Texas limited liability company with a place of business at 12436 FM 1960 Rd W Unit #1621 Houston, TX 77065 ("Complianta"), and the entity or individual (i) executing an order form for Complianta's services that references this MSA, (ii) accepting an order form through a cloud marketplace offer, or (iii) registering to use trial services, each agreeing to be bound by this MSA ("Customer"). Each of Complianta and Customer is a "Party" and collectively, the "Parties."</p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto">
          <div className="space-y-8 text-base text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold mb-2">Section 1. Services and Support</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">1.1 Services</h3>
                  <p>Complianta will provide services listed in the applicable Order Form, including compliance packages, cloud security reviews, vCISO advisory, and AI governance consulting. Services are provided for the term specified in the Order Form.</p>
                </div>
                <div>
                  <h3 className="font-medium">1.2 Support</h3>
                  <p>Complianta offers commercially reasonable support during the subscription period, including email-based and scheduled advisory sessions.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Section 2. Fees and Payment</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">2.1 Fees and Payment</h3>
                  <p>Fees are set forth in the Order Form. Unless otherwise specified, all payments are due within 15 days of invoice. Late payments may incur a 1.5% monthly interest or the maximum permitted by law.</p>
                </div>
                <div>
                  <h3 className="font-medium">2.2 Taxes</h3>
                  <p>Fees are exclusive of applicable taxes. Customer is responsible for taxes related to the purchase of services, excluding Complianta's income taxes.</p>
                </div>
                <div>
                  <h3 className="font-medium">2.3 Trial Services and Promotions</h3>
                  <p>Trial Services are offered as-is, for evaluation only. Promotional pricing is valid for the initial service period only unless otherwise stated.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Section 3. Term and Termination</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">3.1 Term</h3>
                  <p>This MSA remains effective while any Order Form is active. Subscriptions auto-renew unless canceled with 30-day notice.</p>
                </div>
                <div>
                  <h3 className="font-medium">3.2 Termination</h3>
                  <p>Either Party may terminate with 10-day notice if the other Party materially breaches this MSA and fails to cure. Upon termination, Customer access will be revoked.</p>
                </div>
                <div>
                  <h3 className="font-medium">3.3 Effect of Termination</h3>
                  <p>Customer will cease use of services. Outstanding fees remain due. Certain sections (e.g., confidentiality, IP, and liability) will survive.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Section 4. Intellectual Property and Data</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">4.1 Ownership</h3>
                  <p>Complianta retains ownership of its service methodologies, tools, templates, and intellectual property. Customer retains ownership of all submitted data.</p>
                </div>
                <div>
                  <h3 className="font-medium">4.2 Feedback</h3>
                  <p>Customer may provide feedback, which Complianta may use to improve services.</p>
                </div>
                <div>
                  <h3 className="font-medium">4.3 License</h3>
                  <p>Complianta grants Customer a non-transferable, non-exclusive license to access services for internal use only.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Section 5. Confidentiality</h2>
              <p>Both Parties agree to maintain confidentiality regarding proprietary or sensitive information received during the term. Confidentiality obligations survive termination for 3 years.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Section 6. Data Protection and Security</h2>
              <p>Complianta will implement industry-standard technical and administrative safeguards to protect customer data and comply with applicable U.S. data protection laws.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Section 7. Warranties and Disclaimers</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">7.1 Warranties</h3>
                  <p>Each Party represents that it has the authority to enter into this MSA.</p>
                </div>
                <div>
                  <h3 className="font-medium">7.2 Disclaimer</h3>
                  <p>Services are provided "as-is." Complianta disclaims all warranties, express or implied, including merchantability and fitness for a particular purpose.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Section 8. Limitation of Liability</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">8.1 No Indirect Damages</h3>
                  <p>Neither Party is liable for indirect or consequential damages.</p>
                </div>
                <div>
                  <h3 className="font-medium">8.2 Cap on Liability</h3>
                  <p>Liability is capped at the total fees paid by Customer to Complianta in the 12 months preceding the claim.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Section 9. Indemnification</h2>
              <p>Each Party agrees to indemnify the other for third-party claims arising from their own negligence, fraud, or material breach of this MSA.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Section 10. Miscellaneous</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">10.1 Entire Agreement</h3>
                  <p>This MSA, including all referenced documents, constitutes the full agreement.</p>
                </div>
                <div>
                  <h3 className="font-medium">10.2 Governing Law</h3>
                  <p>This Agreement is governed by the laws of the State of Texas. Venue lies in Harris County, Texas.</p>
                </div>
                <div>
                  <h3 className="font-medium">10.3 Assignment</h3>
                  <p>Neither Party may assign this Agreement without prior written consent, except in cases of merger or acquisition.</p>
                </div>
                <div>
                  <h3 className="font-medium">10.4 Amendments</h3>
                  <p>No amendment is valid unless in writing and signed by both Parties.</p>
                </div>
                <div>
                  <h3 className="font-medium">10.5 Force Majeure</h3>
                  <p>Neither Party is liable for delays due to causes beyond their control.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
              <p>
                Complianta LLC<br />
                12436 FM 1960 Rd W<br />
                Unit #1621<br />
                Houston, TX 77065<br />
                Email: <a href="mailto:legal@complianta.com" className="text-foreground underline hover:text-primary">legal@complianta.com</a><br />
                Phone: +1 (972) 399-9143
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 