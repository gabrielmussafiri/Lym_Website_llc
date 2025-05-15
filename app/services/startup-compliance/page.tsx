import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Shield, Users, FileCheck, BarChart, MessageSquare, Settings } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function StartupCompliancePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/startup-compliance-hero.png" alt="Startup Compliance Foundations" fill priority className="object-cover" />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white animate-fade-in-up">
              Startup Compliance Foundations
            </h1>
            <p className="mt-4 text-white/90 md:text-xl animate-fade-in-up-delay-1">
              Perfect for teams getting ready for their first enterprise customer, funding round, or SOC 2 audit. We build your initial compliance stack without breaking your engineering cadence.
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
                  "Lightweight risk register and control framework",
                  "Policy library tailored for early-stage teams",
                  "Access controls and data protection baseline",
                  "Jira-based control ownership workflow setup",
                  "Security awareness and onboarding guidance",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground italic">
                Designed to help you show progress, not perfection — and get ahead of investor or customer scrutiny.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/startup-compliance-overview.jpg"
                alt="Startup Compliance Overview"
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Foundation Services</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Essential compliance and security services designed for early-stage teams.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Risk Management",
                description: "Lightweight risk register and control framework to track security posture.",
                icon: <BarChart className="h-10 w-10 text-primary" />,
              },
              {
                title: "Policy Development",
                description: "Tailored policy library designed for early-stage teams.",
                icon: <FileCheck className="h-10 w-10 text-primary" />,
              },
              {
                title: "Access Controls",
                description: "Implementation of baseline access controls and data protection measures.",
                icon: <Shield className="h-10 w-10 text-primary" />,
              },
              {
                title: "Workflow Setup",
                description: "Jira-based control ownership workflow implementation.",
                icon: <Settings className="h-10 w-10 text-primary" />,
              },
              {
                title: "Team Training",
                description: "Security awareness and onboarding guidance for your team.",
                icon: <Users className="h-10 w-10 text-primary" />,
              },
              {
                title: "Compliance Support",
                description: "Ongoing guidance and support for your compliance journey.",
                icon: <MessageSquare className="h-10 w-10 text-primary" />,
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Implementation Process</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              A streamlined approach to building your compliance foundation.
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
                  description: "We evaluate your current security posture and identify key areas for improvement.",
                  align: "right",
                },
                {
                  step: "2",
                  title: "Framework Setup",
                  description: "We establish your risk register and control framework.",
                  align: "left",
                },
                {
                  step: "3",
                  title: "Policy Implementation",
                  description: "We develop and implement tailored security policies.",
                  align: "right",
                },
                {
                  step: "4",
                  title: "Workflow Integration",
                  description: "We set up your Jira-based control ownership workflow.",
                  align: "left",
                },
                {
                  step: "5",
                  title: "Team Enablement",
                  description: "We provide security awareness training and ongoing support.",
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
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Benefits of Compliance Foundations</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Investor Ready",
                    description: "Build trust with investors through demonstrated security practices.",
                  },
                  {
                    title: "Customer Confidence",
                    description: "Meet enterprise customer security requirements with confidence.",
                  },
                  {
                    title: "Efficient Implementation",
                    description: "Minimal impact on engineering velocity and team productivity.",
                  },
                  {
                    title: "Scalable Foundation",
                    description: "Build a compliance program that grows with your business.",
                  },
                  {
                    title: "Team Alignment",
                    description: "Clear ownership and accountability for security controls.",
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
                  <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-muted-foreground mb-6">
                    Schedule a consultation to discuss how we can help build your compliance foundation.
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