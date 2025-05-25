import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, Calendar, Clock, Users, Building } from "lucide-react"

function GovTechCaseStudyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary hover:bg-primary text-white">Case Study</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Cloud-Native GovTech Firm Builds Security Program</h1>
            <p className="text-xl text-muted-foreground dark:text-white mb-8">
              Public sector SaaS aligns with NIST 800-53 and FedRAMP to unlock federal contracts
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
                CivicCloud (name changed for confidentiality) is a cloud-native GovTech SaaS expanding into federal procurement. To win agency contracts, they needed to align with NIST 800-53 and FedRAMP requirements, but had no formal security program or documentation in place.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Federal clients required NIST 800-53 and FedRAMP alignment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>No formal security program or documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Needed to build trust with agency partners</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Short timeline to pass preliminary security assessments</span>
                </li>
              </ul>
              <p className="text-muted-foreground">
                CivicCloud partnered with Complianta to build a security program, map controls to NIST, and prepare for agency reviews and FedRAMP engagement.
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
                        <p className="text-muted-foreground">GovTech / Public Sector SaaS</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Company Size</p>
                        <p className="text-muted-foreground">35 employees</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Project Timeline</p>
                        <p className="text-muted-foreground">Phase 1: 4 months</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Compliance Focus</p>
                        <p className="text-muted-foreground">NIST 800-53, FedRAMP readiness</p>
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
                title: "Security Roadmap & Gap Assessment",
                description:
                  "We developed a full-stack security roadmap and performed a gap assessment against NIST 800-53 and FedRAMP controls.",
              },
              {
                step: "2",
                title: "Documentation & Control Narratives",
                description:
                  "We created internal governance documentation and mapped control narratives to NIST requirements.",
              },
              {
                step: "3",
                title: "Incident Response & Vendor Review",
                description:
                  "We introduced incident response plans and vendor risk review workflows tailored for public sector expectations.",
              },
              {
                step: "4",
                title: "Agency Assessment Support",
                description:
                  "We prepared CivicCloud for agency security reviews and supported Q&A with procurement teams.",
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
                challenge: "No Security Program or Documentation",
                solution:
                  "We built a security program from the ground up, including all required policies and procedures for NIST and FedRAMP.",
              },
              {
                challenge: "NIST 800-53 Control Mapping",
                solution:
                  "We mapped CivicCloud's technical and operational controls to NIST requirements, filling gaps and documenting evidence.",
              },
              {
                challenge: "Incident Response & Vendor Risk",
                solution:
                  "We implemented incident response plans and vendor review processes to meet agency expectations.",
              },
              {
                challenge: "Procurement Friction & Trust",
                solution:
                  "We supported agency assessments and built institutional trust, reducing procurement cycle times.",
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
          <div className="grid gap-12 lg:grid-cols-2 items-center justify-items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6 text-center">Results</h2>
              <p className="text-muted-foreground mb-6 text-center">
                CivicCloud positioned itself for FedRAMP Tailored engagement, passed preliminary agency security assessments, and reduced procurement friction. Key outcomes included:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">FedRAMP Tailored Readiness</h3>
                    <p className="text-sm text-muted-foreground">
                      Positioned for FedRAMP Tailored engagement and future certifications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Passed Agency Assessments</h3>
                    <p className="text-sm text-muted-foreground">
                      Successfully passed preliminary security reviews with key federal agency partners.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Reduced Procurement Friction</h3>
                    <p className="text-sm text-muted-foreground">
                      Built institutional trust and shortened procurement cycles for new contracts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Scalable Security Foundation</h3>
                    <p className="text-sm text-muted-foreground">
                      Established a scalable security and compliance foundation for future growth.
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
                Complianta helped us build a security program that met agency expectations and accelerated our federal sales cycle.
              </blockquote>
            </div>
            <div className="flex items-center justify-center mt-8">
              <Image src="/cto-portrait.png" alt="Morgan Lee" width={60} height={60} className="rounded-full mr-4" />
              <div>
                <p className="font-semibold">Morgan Lee</p>
                <p className="text-sm text-muted-foreground">CTO, CivicCloud</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Ready to unlock public sector growth?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to discuss how we can help your organization build a security program for federal contracts and compliance.
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
                <Link href="/resources">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Resources & Blogs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GovTechCaseStudyPage 