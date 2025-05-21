"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, Calendar, Clock, Users, Building } from "lucide-react"

export default function AnthillAICaseStudyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary hover:bg-primary text-white">Case Study</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">AnthillAI — Unlocking Enterprise Sales with SOC 2 & AI Governance</h1>
            <p className="text-xl text-muted-foreground dark:text-white mb-8">
              AI/HR Tech platform closes deals with SOC 2, HIPAA, and AI governance
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
                AnthillAI (name changed for confidentiality) is an AI-driven HR tech company embedding GenAI into hiring workflows. As they entered late-stage enterprise sales cycles, buyers required SOC 2 Type II, HIPAA alignment, and demonstrable AI governance policies. AnthillAI had no prior certifications, documentation, or formal risk controls.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Enterprise buyers required SOC 2, HIPAA, and AI governance for contract approval</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>No prior compliance certifications or formal documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Complex AWS infrastructure and GenAI risk factors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Short timeline to close deals and satisfy investor diligence</span>
                </li>
              </ul>
              <p className="text-muted-foreground">
                AnthillAI partnered with Complianta to build a compliance and AI governance program from the ground up, fast.
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
                        <p className="text-muted-foreground">AI / HR Tech</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Company Size</p>
                        <p className="text-muted-foreground">60 employees</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Project Timeline</p>
                        <p className="text-muted-foreground">6 months</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Compliance Achieved</p>
                        <p className="text-muted-foreground">SOC 2 Type II, HIPAA, AI Governance</p>
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
                title: "SOC 2 & HIPAA Gap Assessment",
                description:
                  "We performed a full gap analysis of AnthillAI's AWS stack and internal controls, mapping requirements for SOC 2, HIPAA, and AI governance.",
              },
              {
                step: "2",
                title: "Remediation & Documentation",
                description:
                  "We created foundational security documentation, configured control ownership workflows, and established audit evidence processes.",
              },
              {
                step: "3",
                title: "AI Governance Layer",
                description:
                  "We launched an AI governance program aligned with ISO/IEC 42001, including bias review, ethical oversight, and explainability standards.",
              },
              {
                step: "4",
                title: "Audit & Buyer Readiness",
                description:
                  "We coached AnthillAI through audit prep, evidence walkthroughs, and enterprise buyer security reviews.",
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
                challenge: "No Prior Certifications",
                solution:
                  "We built all required policies, controls, and documentation from scratch, tailored to AnthillAI's business and technology.",
              },
              {
                challenge: "GenAI Risk & Buyer Demands",
                solution:
                  "We implemented AI governance controls, bias monitoring, and transparency protocols to satisfy enterprise buyers and regulators.",
              },
              {
                challenge: "AWS Security Complexity",
                solution:
                  "We remediated cloud misconfigurations, implemented IAM best practices, and automated evidence collection.",
              },
              {
                challenge: "Tight Sales Timeline",
                solution:
                  "We ran a parallel track for audit readiness and buyer security reviews, ensuring no deal momentum was lost.",
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
                AnthillAI achieved SOC 2 Type II, HIPAA alignment, and ISO/IEC 42001 AI governance, unlocking enterprise deals and passing investor due diligence. Key outcomes included:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Closed Enterprise Deals</h3>
                    <p className="text-sm text-muted-foreground">
                      AnthillAI closed multiple enterprise deals after demonstrating compliance and AI governance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Passed Investor Due Diligence</h3>
                    <p className="text-sm text-muted-foreground">
                      The program satisfied all investor requirements for security, privacy, and responsible AI.
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
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Enabled Responsible AI Practices</h3>
                    <p className="text-sm text-muted-foreground">
                      AnthillAI became a reference customer for responsible AI, helping win new business.
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
                Complianta's team delivered clarity and speed. We went from zero policy to enterprise-ready in record time, and their AI governance expertise was a true differentiator.
              </blockquote>
            </div>
            <div className="flex items-center justify-center mt-8">
              <Image src="/cto-portrait.png" alt="Taylor Smith" width={60} height={60} className="rounded-full mr-4" />
              <div>
                <p className="font-semibold">Taylor Smith</p>
                <p className="text-sm text-muted-foreground">CTO, AnthillAI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Ready to unlock enterprise sales with compliance?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to discuss how we can help your organization achieve compliance and win more deals.
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