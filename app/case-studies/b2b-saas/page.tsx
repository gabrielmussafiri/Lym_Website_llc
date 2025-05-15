import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, Calendar, Clock, Users, Building } from "lucide-react"

export default function B2BSaaSCaseStudyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/b2b-saas-case-study.jpg" alt="B2B SaaS Case Study" fill priority className="object-cover" />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary hover:bg-primary text-white">Case Study</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
              B2B SaaS Fast-Tracks SOC 2 Certification
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Workflow automation platform secures enterprise deals with SOC 2 Type I in under 10 weeks
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
                FlowTech (name changed for confidentiality) is a B2B workflow automation platform preparing for a major enterprise partnership. They needed to pass SOC 2 Type I in less than 3 months to meet their client's security requirements, but lacked formal controls and documentation.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Enterprise client required SOC 2 Type I certification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>No formal security controls or documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Limited internal security expertise</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Aggressive timeline for certification</span>
                </li>
              </ul>
              <p className="text-muted-foreground">
                FlowTech partnered with Complianta to implement SOC 2 controls, establish security practices, and achieve certification within their tight timeline.
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
                        <p className="text-muted-foreground">B2B SaaS / Workflow Automation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Company Size</p>
                        <p className="text-muted-foreground">40 employees</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Project Timeline</p>
                        <p className="text-muted-foreground">10 weeks</p>
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
                title: "Rapid Gap Assessment",
                description:
                  "We performed a comprehensive assessment of FlowTech's security posture, identifying gaps in controls and documentation.",
              },
              {
                step: "2",
                title: "Control Implementation",
                description:
                  "We implemented standardized security policies, configured monitoring tools, and established control ownership.",
              },
              {
                step: "3",
                title: "Team Training & Documentation",
                description:
                  "We trained control owners, created evidence workflows, and developed comprehensive documentation.",
              },
              {
                step: "4",
                title: "Audit Readiness & Support",
                description:
                  "We prepared FlowTech for the audit, coordinated with the auditor, and supported throughout the process.",
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
                challenge: "Limited Security Documentation",
                solution:
                  "We developed a complete set of SOC 2 policies and procedures, tailored to FlowTech's operations and technology stack.",
              },
              {
                challenge: "Control Implementation",
                solution:
                  "We implemented automated monitoring, access controls, and security tools aligned with SOC 2 requirements.",
              },
              {
                challenge: "Team Readiness",
                solution:
                  "We trained control owners and established clear ownership and evidence collection processes.",
              },
              {
                challenge: "Timeline Pressure",
                solution:
                  "We ran parallel tracks for implementation and documentation, with weekly progress reviews and adjustments.",
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
                FlowTech achieved SOC 2 Type I certification in under 10 weeks, enabling them to secure enterprise partnerships. Key outcomes included:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">SOC 2 Type I Certification</h3>
                    <p className="text-sm text-muted-foreground">
                      Achieved certification in under 10 weeks, meeting the enterprise client's requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Enterprise Client Approval</h3>
                    <p className="text-sm text-muted-foreground">
                      Successfully onboarded two Fortune 100 clients following certification.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Improved Security Posture</h3>
                    <p className="text-sm text-muted-foreground">
                      Established robust security controls and monitoring capabilities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Foundation for Growth</h3>
                    <p className="text-sm text-muted-foreground">
                      Built a scalable compliance program ready for Type II and future certifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/b2b-saas-case-study.jpg"
                alt="B2B SaaS Results"
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
                Complianta delivered SOC 2 Type I in record time. Their structured approach and expertise made the process smooth and efficient.
              </blockquote>
            </div>
            <div className="flex items-center justify-center mt-8">
              <Image src="/cto-portrait.png" alt="Alex Chen" width={60} height={60} className="rounded-full mr-4" />
              <div>
                <p className="font-semibold">Alex Chen</p>
                <p className="text-sm text-muted-foreground">CTO, FlowTech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Ready to accelerate your SOC 2 journey?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to discuss how we can help you achieve SOC 2 certification and unlock enterprise opportunities.
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