import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Shield, Users, FileCheck, BarChart, MessageSquare, Settings, ClipboardCheck } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function AuditReadinessPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/audit-readiness-hero.png" alt="Audit Readiness Accelerator" fill priority className="object-cover" />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white animate-fade-in-up">
              Audit Readiness Accelerator
            </h1>
            <p className="mt-4 text-white/90 md:text-xl animate-fade-in-up-delay-1">
              Whether you're facing your first SOC 2 Type I or preparing to certify for ISO 27001, our 8–12 week accelerator delivers structure, accountability, and documentation to make audit a milestone — not a stress test.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">What's Included</h2>
              <div className="space-y-4 mb-6">
                {[
                  "Comprehensive gap analysis with control-level recommendations",
                  "Audit tracker with assigned evidence collection workflow",
                  "Hands-on support for control owners and stakeholders",
                  "Policy review, remediation guidance, and auditor liaison",
                  "Final QA walkthrough and pre-audit hardening",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground italic">
                Built for companies under pressure to prove trust fast — with no room for delays or surprises.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/audit-readiness-overview.jpg"
                alt="Audit Readiness Overview"
                width={600}
                height={400}
                className="object-cover rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Accelerator Services</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Comprehensive audit preparation services designed for speed and success.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Gap Analysis",
                description: "Comprehensive assessment with detailed control-level recommendations.",
                icon: <BarChart className="h-10 w-10 text-primary" />,
              },
              {
                title: "Evidence Collection",
                description: "Structured audit tracker with assigned evidence collection workflow.",
                icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
              },
              {
                title: "Control Support",
                description: "Hands-on guidance for control owners and key stakeholders.",
                icon: <Users className="h-10 w-10 text-primary" />,
              },
              {
                title: "Policy Review",
                description: "Comprehensive policy review and remediation guidance.",
                icon: <FileCheck className="h-10 w-10 text-primary" />,
              },
              {
                title: "Auditor Liaison",
                description: "Direct support and coordination with your audit firm.",
                icon: <MessageSquare className="h-10 w-10 text-primary" />,
              },
              {
                title: "Final QA",
                description: "Pre-audit hardening and quality assurance walkthrough.",
                icon: <Shield className="h-10 w-10 text-primary" />,
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="border-none shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-primary/10 rounded-full">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Accelerator Process</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              A structured 8-12 week approach to audit readiness.
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform -translate-x-1/2"></div>

            <div className="space-y-12 relative">
              {[
                {
                  step: "1",
                  title: "Initial Assessment",
                  description: "Comprehensive gap analysis and control-level recommendations.",
                  align: "right",
                },
                {
                  step: "2",
                  title: "Workflow Setup",
                  description: "Implementation of audit tracker and evidence collection system.",
                  align: "left",
                },
                {
                  step: "3",
                  title: "Control Implementation",
                  description: "Hands-on support for control owners and stakeholders.",
                  align: "right",
                },
                {
                  step: "4",
                  title: "Documentation Review",
                  description: "Policy review and remediation guidance.",
                  align: "left",
                },
                {
                  step: "5",
                  title: "Final Preparation",
                  description: "QA walkthrough and pre-audit hardening.",
                  align: "right",
                },
              ].map((process, i) => (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row items-center ${process.align === "left" ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="md:w-1/2 p-6">
                    <div className={`text-center md:text-${process.align === "left" ? "left" : "right"}`}>
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold mb-4">
                        {process.step}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                      <p className="text-muted-foreground">{process.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 relative z-10">
                    <div className="w-5 h-5 rounded-full bg-primary"></div>
                  </div>
                  <div className="md:w-1/2 p-6"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Benefits of the Accelerator</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Structured Timeline",
                    description: "Clear 8-12 week roadmap to audit readiness.",
                  },
                  {
                    title: "Expert Guidance",
                    description: "Hands-on support from experienced compliance professionals.",
                  },
                  {
                    title: "Risk Mitigation",
                    description: "Proactive identification and resolution of potential issues.",
                  },
                  {
                    title: "Team Alignment",
                    description: "Clear roles and responsibilities for all stakeholders.",
                  },
                  {
                    title: "Audit Confidence",
                    description: "Comprehensive preparation for a successful audit outcome.",
                  },
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start transform hover:translate-x-1 transition-transform duration-300"
                  >
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Ready to Accelerate Your Audit?</h3>
                  <p className="text-muted-foreground mb-6">
                    Schedule a consultation to discuss your audit readiness needs.
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">Schedule Consultation</Button>
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 