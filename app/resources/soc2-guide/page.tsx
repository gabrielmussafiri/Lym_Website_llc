import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, CheckCircle, FileText } from "lucide-react"

export default function SOC2GuidePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/soc2-guide-hero.png" alt="SOC 2 Guide" fill priority className="object-cover" />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary hover:bg-primary text-white">Comprehensive Guide</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
              The Ultimate Guide to SOC 2 Compliance
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Everything you need to know about SOC 2 compliance, from understanding the framework to achieving
              certification.
            </p>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
              <Download className="mr-2 h-4 w-4" />
              Download PDF Version
            </Button>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Introduction to SOC 2</h2>
              <p className="text-muted-foreground mb-6">
                SOC 2 (System and Organization Controls 2) is a framework developed by the American Institute of CPAs
                (AICPA) that defines criteria for managing customer data based on five "trust service principles":
                security, availability, processing integrity, confidentiality, and privacy.
              </p>
              <p className="text-muted-foreground mb-6">
                For startups and growing companies, achieving SOC 2 compliance demonstrates your commitment to security
                and can be a significant competitive advantage when selling to enterprise customers. This guide will
                walk you through everything you need to know about SOC 2 compliance, from understanding the framework to
                achieving certification.
              </p>
              <p className="text-muted-foreground mb-6">
                Whether you're just starting your compliance journey or looking to optimize your existing security
                program, this guide provides practical, actionable insights to help you achieve SOC 2 compliance
                efficiently and effectively.
              </p>
              <div className="my-10 p-6 bg-muted rounded-lg">
                <h3 className="text-xl font-bold mb-4">In this guide, you'll learn:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>What SOC 2 is and why it matters for your business</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>The difference between SOC 2 Type I and Type II</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>The five trust service criteria and what they mean</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>A step-by-step approach to achieving SOC 2 compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Common challenges and how to overcome them</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Tips for maintaining compliance over time</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    <a href="#understanding-soc2" className="block text-primary hover:underline">
                      1. Understanding SOC 2
                    </a>
                    <a href="#trust-service-criteria" className="block text-primary hover:underline">
                      2. The Five Trust Service Criteria
                    </a>
                    <a href="#type-i-vs-type-ii" className="block text-primary hover:underline">
                      3. SOC 2 Type I vs. Type II
                    </a>
                    <a href="#preparation" className="block text-primary hover:underline">
                      4. Preparing for SOC 2
                    </a>
                    <a href="#implementation" className="block text-primary hover:underline">
                      5. Implementing Controls
                    </a>
                    <a href="#audit-process" className="block text-primary hover:underline">
                      6. The Audit Process
                    </a>
                    <a href="#maintaining" className="block text-primary hover:underline">
                      7. Maintaining Compliance
                    </a>
                    <a href="#resources" className="block text-primary hover:underline">
                      8. Additional Resources
                    </a>
                  </nav>
                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-semibold mb-2">Download Resources</h4>
                    <div className="space-y-3">
                      <a href="#" className="flex items-center text-sm text-primary hover:underline">
                        <FileText className="h-4 w-4 mr-2" />
                        SOC 2 Readiness Checklist
                      </a>
                      <a href="#" className="flex items-center text-sm text-primary hover:underline">
                        <FileText className="h-4 w-4 mr-2" />
                        Sample Security Policies
                      </a>
                      <a href="#" className="flex items-center text-sm text-primary hover:underline">
                        <FileText className="h-4 w-4 mr-2" />
                        Control Implementation Worksheet
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding SOC 2 */}
      <section id="understanding-soc2" className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">1. Understanding SOC 2</h2>
            <div className="prose max-w-none">
              <p>
                SOC 2 is a voluntary compliance standard developed by the American Institute of CPAs (AICPA) that
                focuses on how organizations manage customer data. Unlike other compliance frameworks that focus on
                specific industries or data types (like HIPAA for healthcare or PCI DSS for payment card data), SOC 2 is
                applicable to any service provider that stores, processes, or transmits customer data in the cloud.
              </p>
              <h3>Why SOC 2 Matters</h3>
              <p>
                In today's digital economy, data security is a top concern for businesses of all sizes. When companies
                outsource services to vendors who will have access to their data, they need assurance that those vendors
                have appropriate security controls in place. SOC 2 provides that assurance through a standardized
                framework and third-party validation.
              </p>
              <p>For service providers, SOC 2 compliance offers several benefits:</p>
              <ul>
                <li>
                  <strong>Competitive Advantage:</strong> Many enterprise customers require SOC 2 compliance from their
                  vendors, making it a prerequisite for winning and retaining business.
                </li>
                <li>
                  <strong>Streamlined Sales Process:</strong> Having a SOC 2 report simplifies security questionnaires
                  and vendor assessments, potentially shortening your sales cycle.
                </li>
                <li>
                  <strong>Improved Security Posture:</strong> The process of achieving SOC 2 compliance helps identify
                  and address security vulnerabilities, reducing your risk of data breaches.
                </li>
                <li>
                  <strong>Trust and Credibility:</strong> SOC 2 compliance demonstrates your commitment to security and
                  builds trust with customers and partners.
                </li>
              </ul>
              <h3>Who Needs SOC 2 Compliance?</h3>
              <p>
                SOC 2 is particularly relevant for SaaS (Software as a Service) companies, cloud service providers, data
                centers, and any organization that stores, processes, or transmits customer data. If your customers are
                asking about your security practices or requesting evidence of your security controls, SOC 2 compliance
                may be right for you.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg my-6">
                <h4 className="font-bold">Key Takeaway</h4>
                <p className="mb-0">
                  SOC 2 is not just a checkbox for compliance—it's a framework for building and maintaining a robust
                  security program that protects your customers' data and builds trust in your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Five Trust Service Criteria */}
      <section id="trust-service-criteria" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">2. The Five Trust Service Criteria</h2>
            <div className="prose max-w-none">
              <p>
                SOC 2 is based on five "trust service criteria" (TSC) that define the framework for evaluating an
                organization's controls. While the Security criterion is required for all SOC 2 reports, the other four
                criteria are optional and can be included based on your business needs and customer requirements.
              </p>
              <h3>Security (Required)</h3>
              <p>
                The Security criterion focuses on protecting information and systems against unauthorized access,
                unauthorized disclosure of information, and damage to systems. Controls in this category include:
              </p>
              <ul>
                <li>Access controls (authentication and authorization)</li>
                <li>Firewalls and network security</li>
                <li>Vulnerability management</li>
                <li>Security incident response</li>
                <li>Physical security</li>
              </ul>
              <h3>Availability (Optional)</h3>
              <p>
                The Availability criterion addresses whether systems and information are available for operation and use
                as committed or agreed. Controls in this category include:
              </p>
              <ul>
                <li>System monitoring and performance</li>
                <li>Disaster recovery and business continuity</li>
                <li>Capacity planning</li>
                <li>Backup and restoration</li>
              </ul>
              <h3>Processing Integrity (Optional)</h3>
              <p>
                The Processing Integrity criterion focuses on whether system processing is complete, valid, accurate,
                timely, and authorized. Controls in this category include:
              </p>
              <ul>
                <li>Quality assurance procedures</li>
                <li>Process monitoring</li>
                <li>Input and output validation</li>
                <li>Error handling</li>
              </ul>
              <h3>Confidentiality (Optional)</h3>
              <p>
                The Confidentiality criterion addresses the protection of information designated as confidential.
                Controls in this category include:
              </p>
              <ul>
                <li>Encryption of sensitive data</li>
                <li>Non-disclosure agreements</li>
                <li>Data classification policies</li>
                <li>Secure disposal of confidential information</li>
              </ul>
              <h3>Privacy (Optional)</h3>
              <p>
                The Privacy criterion focuses on the collection, use, retention, disclosure, and disposal of personal
                information in conformity with an organization's privacy notice and applicable regulations. Controls in
                this category include:
              </p>
              <ul>
                <li>Privacy policies and notices</li>
                <li>Consent mechanisms</li>
                <li>Data subject rights (access, correction, deletion)</li>
                <li>Data minimization and purpose limitation</li>
              </ul>
              <div className="bg-primary/10 p-4 rounded-lg my-6">
                <h4 className="font-bold">Choosing the Right Criteria</h4>
                <p className="mb-0">
                  Most organizations start with the Security criterion (which is required) and add additional criteria
                  based on their specific business needs and customer requirements. For example, a SaaS platform that
                  processes financial transactions might include Processing Integrity, while a healthcare application
                  might include Privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/resources">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Resources
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
