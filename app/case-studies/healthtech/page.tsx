import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, Calendar, Clock, Users, Building } from "lucide-react"

export default function HealthTechCaseStudyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary hover:bg-primary text-white">Case Study</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">HealthTech Startup Achieves HIPAA Compliance</h1>
            <p className="text-xl text-muted-foreground dark:text-white mb-8">
              Healthcare SaaS secures PHI and passes hospital audit with cloud hardening
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
                Medix (name changed for confidentiality) is a healthcare SaaS startup handling protected health information (PHI) for hospitals. Before onboarding a major hospital network, they needed to meet HIPAA requirements but lacked internal documentation, formal policies, and infrastructure safeguards.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Hospital client required HIPAA compliance and security audit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>No formal policies or PHI-handling documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Cloud infrastructure lacked encryption and access controls</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Short timeline to pass audit and go live</span>
                </li>
              </ul>
              <p className="text-muted-foreground">
                Medix partnered with Complianta to implement HIPAA controls, harden their cloud, and prepare for a successful hospital audit.
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
                        <p className="text-muted-foreground">Healthcare SaaS</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Company Size</p>
                        <p className="text-muted-foreground">70 employees</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Project Timeline</p>
                        <p className="text-muted-foreground">12 weeks</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Compliance Achieved</p>
                        <p className="text-muted-foreground">HIPAA</p>
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
                title: "Cloud Security & PHI Gap Assessment",
                description:
                  "We performed a full assessment of Medix's cloud stack, identifying gaps in encryption, access controls, and PHI handling.",
              },
              {
                step: "2",
                title: "Policy & Control Implementation",
                description:
                  "We developed HIPAA-compliant policies, implemented encryption, and configured IAM and audit logging.",
              },
              {
                step: "3",
                title: "Incident Response & Training",
                description:
                  "We trained staff on breach response, incident triage, and PHI best practices.",
              },
              {
                step: "4",
                title: "Audit Prep & Evidence",
                description:
                  "We prepared Medix for the hospital audit, organized evidence, and supported Q&A with the client.",
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
                challenge: "No PHI Policies or Documentation",
                solution:
                  "We built all required HIPAA policies and PHI-handling documentation from scratch, tailored to Medix's workflows.",
              },
              {
                challenge: "Cloud Security Gaps",
                solution:
                  "We implemented encryption, IAM best practices, and audit logging to secure PHI in the cloud.",
              },
              {
                challenge: "Staff Training & Incident Response",
                solution:
                  "We trained staff on breach response, incident triage, and PHI best practices to ensure audit readiness.",
              },
              {
                challenge: "Tight Audit Timeline",
                solution:
                  "We ran a parallel track for policy implementation and audit evidence collection to meet the hospital's deadline.",
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
                Medix achieved HIPAA compliance and passed the hospital audit, enabling PHI-handling features to go live. Key outcomes included:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Passed Hospital Audit</h3>
                    <p className="text-sm text-muted-foreground">
                      Medix passed the hospital's security audit and was approved to handle PHI for a major client.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Reduced Risk Score by 42%</h3>
                    <p className="text-sm text-muted-foreground">
                      The compliance process identified and remediated vulnerabilities, reducing Medix's risk score by 42%.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Enabled PHI Features</h3>
                    <p className="text-sm text-muted-foreground">
                      PHI-handling features went live within one month of compliance, unlocking new revenue streams.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Built Scalable Compliance Foundation</h3>
                    <p className="text-sm text-muted-foreground">
                      The controls and documentation set the stage for future certifications and growth.
                    </p>
                  </div>
                </div>
              </div>
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
                Complianta's expertise made HIPAA compliance achievable and practical. We passed our hospital audit and launched new features faster than expected.
              </blockquote>
            </div>
            <div className="flex items-center justify-center mt-8">
              <Image src="/cto-portrait.png" alt="Jamie Patel" width={60} height={60} className="rounded-full mr-4" />
              <div>
                <p className="font-semibold">Jamie Patel</p>
                <p className="text-sm text-muted-foreground">CTO, Medix</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Ready to achieve HIPAA compliance and unlock new clients?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to discuss how we can help your organization secure PHI and pass your next audit.
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