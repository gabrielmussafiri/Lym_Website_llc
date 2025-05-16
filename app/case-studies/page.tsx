import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-balance text-foreground mb-6">
              Case Studies
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground mb-8 max-w-2xl">
              Real results from companies like yours. See how we've helped organizations achieve their compliance goals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-16">
            {/* Case Study 1: AnthillAI */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Badge className="mb-2">AI / HR Tech</Badge>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">AnthillAI — Unlocking Enterprise Sales with SOC 2 & AI Governance</h2>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Company Size:</span>
                    <span>60+ employees</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Engagement:</span>
                    <span>SOC 2 Type I & II Readiness + AI Governance Advisory</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Timeline:</span>
                    <span>6 months</span>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">Challenge</h3>
                    <p className="text-foreground mb-4">
                      AnthillAI was in the late stages of a multi-year enterprise sales cycle but lacked the compliance posture to close. The buyer required SOC 2 Type II, HIPAA alignment, and demonstrable AI governance policies due to AnthillAI's use of GenAI in hiring workflows. At the time, the company had no prior certifications, documentation, or formal risk controls.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Solution</h3>
                    <p className="text-foreground mb-4">
                      Complianta executed a full audit readiness program, starting with a tailored SOC 2 roadmap and technical gap remediation across their AWS stack. We created their foundational security documentation, configured control ownership workflows, and established internal audit evidence processes. In parallel, we launched an AI governance layer aligned with ISO/IEC 42001 — including bias review procedures, ethical oversight policies, and explainability standards.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Results</h3>
                    <ul className="list-disc list-inside text-foreground space-y-1">
                      <li>Achieved SOC 2 Type II and HIPAA alignment in parallel</li>
                      <li>Passed investor security due diligence for $5M raise</li>
                      <li>Reduced vendor onboarding cycles by 40%</li>
                    </ul>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/case-studies/anthill-ai" className="group">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image src="/anthill-case-study.jpg" alt="AnthillAI Case Study" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Case Study 2: AI Startup */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2">
                <Badge className="mb-2">AI/NLP Platform</Badge>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">AI Startup Readies for ISO/IEC 42001</h2>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Company Size:</span>
                    <span>25 employees</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Engagement:</span>
                    <span>AI governance strategy and readiness</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Timeline:</span>
                    <span>8 weeks</span>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">Challenge</h3>
                    <p className="text-foreground mb-4">
                      A Series A startup embedding AI copilots into productivity tools needed a governance plan to satisfy customers, investors, and evolving regulatory expectations.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Solution</h3>
                    <p className="text-foreground mb-4">
                      Complianta delivered an AI risk framework aligned to ISO/IEC 42001, including use case mapping, model lifecycle policies, bias mitigation controls, and internal training for engineering leads. A governance charter and oversight board were established with clear documentation.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Results</h3>
                    <ul className="list-disc list-inside text-foreground space-y-1">
                      <li>Published a responsible AI governance page for external stakeholders</li>
                      <li>Used as a trust signal to secure 3 enterprise pilots</li>
                      <li>Enabled faster internal reviews of high-risk features</li>
                    </ul>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/case-studies/ai-startup" className="group">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="order-1">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image src="/ai-startup-case-study.jpg" alt="AI Startup Case Study" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Case Study 3: HealthTech */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Badge className="mb-2">Healthcare SaaS</Badge>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">HealthTech Startup Achieves HIPAA Compliance</h2>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Company Size:</span>
                    <span>70+ employees</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Engagement:</span>
                    <span>HIPAA compliance + cloud hardening</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Timeline:</span>
                    <span>12 weeks</span>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">Challenge</h3>
                    <p className="text-foreground mb-4">
                      The company needed to meet HIPAA requirements before onboarding a major hospital network — but lacked internal documentation, formal policies, and infrastructure safeguards.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Solution</h3>
                    <p className="text-foreground mb-4">
                      Complianta implemented encryption protocols, identity-based access controls, detailed audit logging, and a full suite of HIPAA-compliant policies. We also trained internal teams on breach response and incident triage.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Results</h3>
                    <ul className="list-disc list-inside text-foreground space-y-1">
                      <li>Achieved HIPAA compliance and passed hospital audit</li>
                      <li>Reduced risk score by 42%</li>
                      <li>Enabled PHI-handling features to go live in 1 month</li>
                    </ul>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/case-studies/healthtech" className="group">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image src="/healthtech-case-study.jpg" alt="HealthTech Case Study" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Case Study 4: B2B SaaS */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2">
                <Badge className="mb-2">SaaS / Workflow Automation</Badge>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">B2B SaaS Fast-Tracks SOC 2 Certification</h2>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Company Size:</span>
                    <span>40 employees</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Engagement:</span>
                    <span>SOC 2 Readiness Bootcamp</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Timeline:</span>
                    <span>10 weeks</span>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">Challenge</h3>
                    <p className="text-foreground mb-4">
                      Preparing for a major enterprise partnership, the client needed to pass SOC 2 Type I in less than 3 months.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Solution</h3>
                    <p className="text-foreground mb-4">
                      We performed a rapid controls gap assessment, implemented standardized security policies, configured monitoring and alerting across their cloud stack, and coached each internal control owner.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Results</h3>
                    <ul className="list-disc list-inside text-foreground space-y-1">
                      <li>SOC 2 Type I completed in under 10 weeks</li>
                      <li>Approved as a vendor by 2 Fortune 100 clients</li>
                      <li>Internal security confidence visibly improved</li>
                    </ul>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/case-studies/b2b-saas" className="group">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="order-1">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image src="/b2b-saas-case-study.jpg" alt="B2B SaaS Case Study" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Case Study 5: GovTech */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Badge className="mb-2">GovTech / Public Sector SaaS</Badge>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Cloud-Native GovTech Firm Builds Security Program</h2>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Company Size:</span>
                    <span>35 employees</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Engagement:</span>
                    <span>vCISO + program buildout</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Timeline:</span>
                    <span>Ongoing (Phase 1: 4 months)</span>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">Challenge</h3>
                    <p className="text-foreground mb-4">
                      The company was expanding into federal procurement channels and needed to establish a security program aligned with NIST 800-53 and FedRAMP expectations.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Solution</h3>
                    <p className="text-foreground mb-4">
                      Complianta delivered a full-stack security roadmap, implemented internal governance documentation, created control narratives mapped to NIST, and introduced incident response and vendor review workflows.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Results</h3>
                    <ul className="list-disc list-inside text-foreground space-y-1">
                      <li>Positioned for FedRAMP Tailored engagement</li>
                      <li>Passed preliminary security assessments with key agency partners</li>
                      <li>Reduced procurement friction by building institutional trust</li>
                    </ul>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/case-studies/govtech" className="group">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image src="/govtech-case-study.jpg" alt="GovTech Case Study" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Become the next success story.
            </h2>
            <p className="text-foreground">
              Whether you're scaling to Series B or seeking to unlock public sector contracts, we help you prove trust, protect growth, and lead with clarity.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg">Schedule Your Consultation</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>Schedule a Free Consultation</DialogTitle>
                  <div className="w-full" style={{ minHeight: 600 }}>
                    <iframe
                      src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Vxu3mWG4YQPBDvvUz9CX7sNoH_BBnmcGmKPRSYAiQD9S_xtFPB8TmIU_J4LtUeU_aCTmUEgzh"
                      width="100%"
                      height="600"
                      frameBorder="0"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Schedule a Free Consultation"
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
