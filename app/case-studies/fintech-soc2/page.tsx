import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, Calendar, Clock, Users, Building } from "lucide-react"

export default function FintechCaseStudyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary hover:bg-primary text-white">Case Study</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">$1.2M Pipeline Unlocked</h1>
            <p className="text-xl text-muted-foreground dark:text-white mb-8">
              Fintech platform closes enterprise deals post-SOC 2
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Overview */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">The Challenge</h2>
              <p className="text-muted-foreground mb-6">
                PaySecure (name changed for confidentiality) is a rapidly growing fintech startup that provides payment
                processing solutions for e-commerce businesses. As they began targeting enterprise customers, they
                encountered a significant roadblock: potential clients required SOC 2 compliance before signing
                contracts.
              </p>
              <p className="text-muted-foreground mb-6">
                With several enterprise deals in the pipeline—worth over $1.2M in annual recurring revenue—PaySecure
                needed to achieve SOC 2 Type I compliance quickly. However, they faced several challenges:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Limited internal resources dedicated to security and compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>A complex cloud infrastructure spanning multiple AWS services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Minimal existing documentation and formal security policies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>A tight timeline of 2-3 months to achieve compliance</span>
                </li>
              </ul>
              <p className="text-muted-foreground">
                PaySecure approached Via Comply to help them navigate the SOC 2 compliance process efficiently and
                effectively, without disrupting their core business operations.
              </p>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Building className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Industry</p>
                        <p className="text-muted-foreground">Financial Technology</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Company Size</p>
                        <p className="text-muted-foreground">50 employees</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Project Timeline</p>
                        <p className="text-muted-foreground">8 weeks</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Compliance Achieved</p>
                        <p className="text-muted-foreground">SOC 2 Type I</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-10">Our Approach</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Comprehensive Gap Assessment",
                description:
                  "We conducted a thorough assessment of PaySecure's existing security controls against SOC 2 requirements, identifying gaps and prioritizing remediation efforts.",
              },
              {
                step: "2",
                title: "Tailored Remediation Plan",
                description:
                  "We developed a customized remediation plan focused on addressing the highest-priority gaps first, with a clear timeline and resource allocation.",
              },
              {
                step: "3",
                title: "Policy Development & Implementation",
                description:
                  "We created and implemented essential security policies and procedures, tailored to PaySecure's specific business operations and technology stack.",
              },
              {
                step: "4",
                title: "Audit Preparation & Support",
                description:
                  "We prepared PaySecure for the audit process, including evidence collection, documentation organization, and auditor interactions.",
              },
            ].map((phase, i) => (
              <Card key={i} className="relative overflow-hidden border-none shadow-md">
                <div className="absolute top-0 left-0 bg-primary text-white w-10 h-10 flex items-center justify-center font-bold rounded-br-lg">
                  {phase.step}
                </div>
                <CardContent className="pt-12 p-6">
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Challenges & Solutions */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-10">Key Challenges & Solutions</h2>
          <div className="space-y-8">
            {[
              {
                challenge: "Complex AWS Infrastructure",
                solution:
                  "We conducted a detailed review of PaySecure's AWS environment, identifying security configuration issues and implementing automated monitoring and remediation using AWS Security Hub and Config.",
              },
              {
                challenge: "Limited Security Documentation",
                solution:
                  "We developed a comprehensive set of security policies and procedures tailored to PaySecure's operations, focusing on practical implementation rather than theoretical frameworks.",
              },
              {
                challenge: "Access Control Management",
                solution:
                  "We implemented a role-based access control system with regular access reviews, and integrated single sign-on (SSO) with multi-factor authentication across all critical systems.",
              },
              {
                challenge: "Vendor Risk Management",
                solution:
                  "We established a vendor risk assessment process and conducted reviews of critical vendors, implementing a continuous monitoring approach for ongoing compliance.",
              },
            ].map((item, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="bg-muted p-6">
                    <h3 className="text-xl font-bold mb-2">Challenge</h3>
                    <p>{item.challenge}</p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Solution</h3>
                    <p className="text-muted-foreground">{item.solution}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Results</h2>
              <p className="text-muted-foreground mb-6">
                With our guidance and support, PaySecure successfully achieved SOC 2 Type I compliance in just 8 weeks,
                significantly faster than the industry average of 3-6 months. This rapid achievement led to several
                significant business outcomes:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Closed $1.2M in Enterprise Deals</h3>
                    <p className="text-sm text-muted-foreground">
                      PaySecure closed three enterprise deals worth over $1.2M in annual recurring revenue within one
                      month of achieving compliance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Strengthened Security Posture</h3>
                    <p className="text-sm text-muted-foreground">
                      The compliance process identified and remediated several security vulnerabilities, significantly
                      improving PaySecure's overall security posture.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Streamlined Sales Process</h3>
                    <p className="text-sm text-muted-foreground">
                      SOC 2 compliance simplified the security questionnaire process, reducing the sales cycle by an
                      average of 3 weeks for enterprise prospects.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Established Compliance Foundation</h3>
                    <p className="text-sm text-muted-foreground">
                      The policies, procedures, and controls implemented for SOC 2 created a strong foundation for
                      ongoing compliance and future frameworks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/fintech-results.png"
                alt="FinTech Results"
                width={600}
                height={400}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="text-4xl text-primary absolute -top-8 -left-8">"</div>
              <div className="text-4xl text-primary absolute -bottom-8 -right-8">"</div>
              <blockquote className="text-xl italic text-center px-8 py-4">
                Via Comply's approach to SOC 2 compliance was refreshingly practical and efficient. They focused on what
                really mattered, helping us achieve compliance in record time without unnecessary overhead. Their
                expertise was invaluable, and the ROI was immediate—we closed over $1M in deals within weeks of getting
                our SOC 2 report.
              </blockquote>
            </div>
            <div className="flex items-center justify-center mt-8">
              <Image src="/cto-portrait.png" alt="Sarah Johnson" width={60} height={60} className="rounded-full mr-4" />
              <div>
                <p className="font-semibold">Alex Chen</p>
                <p className="text-sm text-muted-foreground">CTO, PaySecure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Ready to achieve compliance quickly?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to discuss how we can help your organization achieve compliance efficiently and
              effectively, just like we did for PaySecure.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <a
                  href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Vxu3mWG4YQPBDvvUz9CX7sNoH_BBnmcGmKPRSYAiQD9S_xtFPB8TmIU_J4LtUeU_aCTmUEgzh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Consultation
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
