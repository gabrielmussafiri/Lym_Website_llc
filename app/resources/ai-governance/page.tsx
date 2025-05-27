import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, Calendar, Clock, Users, Building } from "lucide-react"

export default function AIGovernanceCaseStudyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary hover:bg-primary text-white">Case Study</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">AI Risk & Readiness</h1>
            <p className="text-xl text-muted-foreground dark:text-white mb-8">
              LLM-based product builds ISO/IEC 42001-aligned governance to satisfy top-tier investors
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
                SynthAI (name changed for confidentiality) is a fast-growing AI startup providing LLM-powered analytics for enterprise clients. As they prepared for a major funding round and enterprise pilots, investors and customers demanded proof of responsible AI governance and risk controls.
              </p>
              <p className="text-muted-foreground mb-6">
                SynthAI needed to align with the new ISO/IEC 42001 standard for AI governance to:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Demonstrate responsible AI practices to investors and enterprise buyers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Map and mitigate AI risks (bias, explainability, data stewardship)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Accelerate procurement and due diligence for enterprise pilots</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Build a scalable governance framework for future growth</span>
                </li>
              </ul>
              <p className="text-muted-foreground">
                SynthAI partnered with Compliantas to design and implement an ISO/IEC 42001-aligned AI governance program on a tight timeline.
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
                        <p className="text-muted-foreground">AI / SaaS</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Company Size</p>
                        <p className="text-muted-foreground">30 employees</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Project Timeline</p>
                        <p className="text-muted-foreground">6 weeks</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Governance Achieved</p>
                        <p className="text-muted-foreground">ISO/IEC 42001 Alignment</p>
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
                title: "AI Risk Mapping & Use Case Classification",
                description:
                  "We mapped all LLM use cases, identified risk categories, and prioritized controls for bias, explainability, and data stewardship.",
              },
              {
                step: "2",
                title: "Governance Charter & Oversight Board",
                description:
                  "We established an AI governance charter and set up an internal oversight board with clear roles and responsibilities.",
              },
              {
                step: "3",
                title: "Policy & Control Implementation",
                description:
                  "We developed and rolled out policies for responsible AI, model lifecycle management, and incident response.",
              },
              {
                step: "4",
                title: "Stakeholder Training & Trust Page",
                description:
                  "We trained engineering and product teams, and published a Responsible AI Trust page for external stakeholders.",
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
                challenge: "AI Bias & Explainability",
                solution:
                  "We implemented bias monitoring protocols and explainability controls for all production LLMs, with regular reviews by the oversight board.",
              },
              {
                challenge: "Stakeholder Trust & Transparency",
                solution:
                  "We published a Responsible AI Trust page and provided detailed documentation to investors and enterprise clients.",
              },
              {
                challenge: "Model Lifecycle Management",
                solution:
                  "We established policies for model versioning, audit trails, and incident response for AI-driven features.",
              },
              {
                challenge: "Rapid Timeline",
                solution:
                  "We delivered the full governance program in just 6 weeks, enabling SynthAI to meet investor and client deadlines.",
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
                SynthAI achieved ISO/IEC 42001 alignment in just 6 weeks, unlocking enterprise pilots and satisfying investor due diligence. Key outcomes included:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Secured 2 Enterprise Pilots</h3>
                    <p className="text-sm text-muted-foreground">
                      SynthAI was selected for two enterprise pilots after demonstrating responsible AI governance and risk controls.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Passed Investor Due Diligence</h3>
                    <p className="text-sm text-muted-foreground">
                      The governance program satisfied all investor requirements for responsible AI, enabling a successful funding round.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Published Responsible AI Trust Page</h3>
                    <p className="text-sm text-muted-foreground">
                      SynthAI's public trust page became a key differentiator in sales and partnership conversations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Built Scalable Governance Foundation</h3>
                    <p className="text-sm text-muted-foreground">
                      The ISO/IEC 42001-aligned framework set the stage for future compliance and responsible AI growth.
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
                Compliantas's expertise in AI governance was a game-changer. They helped us operationalize responsible AI in a way that made sense for our team and our clients. The process was fast, practical, and delivered real value.
              </blockquote>
            </div>
            <div className="flex items-center justify-center mt-8">
              <Image src="/cto-portrait.png" alt="Jordan Lee" width={60} height={60} className="rounded-full mr-4" />
              <div>
                <p className="font-semibold">Jordan Lee</p>
                <p className="text-sm text-muted-foreground">CTO, SynthAI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Ready to build trust with responsible AI?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to discuss how we can help your organization implement AI governance and unlock new opportunities.
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
              <Button variant="outline" asChild>
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