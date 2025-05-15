import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Shield, Users, FileCheck, BarChart, MessageSquare, Settings } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function VCISOPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/vciso-hero.png" alt="vCISO Advisory" fill priority className="object-cover" />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white animate-fade-in-up">
              vCISO Advisory
            </h1>
            <p className="mt-4 text-white/90 md:text-xl animate-fade-in-up-delay-1">
              Security is now a strategic role. Our virtual CISO program embeds executive-level security leadership into your business — without the cost of full-time headcount.
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
                  "Quarterly risk reviews and governance reports",
                  "Policy suite authorship and stakeholder enablement",
                  "Vendor due diligence, DPIA reviews, and procurement support",
                  "Audit-facing control narrative drafting and gap planning",
                  "Executive coaching for investor, board, or enterprise diligence sessions",
                  "1:1 guidance through compliance tool integrations (e.g., Vanta, Drata)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground italic">
                Best for post-seed to post-Series C companies managing customer trust, investor confidence, and internal control maturity.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/vciso-overview.jpg"
                alt="vCISO Overview"
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our vCISO Services</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Comprehensive security leadership and advisory services to help you build and maintain a robust security program.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Risk Management",
                description: "Quarterly risk assessments and governance reporting to track security posture.",
                icon: <BarChart className="h-10 w-10 text-primary" />,
              },
              {
                title: "Policy Development",
                description: "Creation and maintenance of security policies and procedures.",
                icon: <FileCheck className="h-10 w-10 text-primary" />,
              },
              {
                title: "Vendor Management",
                description: "Due diligence reviews and procurement support for third-party vendors.",
                icon: <Users className="h-10 w-10 text-primary" />,
              },
              {
                title: "Audit Support",
                description: "Control narrative development and gap analysis for compliance audits.",
                icon: <Shield className="h-10 w-10 text-primary" />,
              },
              {
                title: "Executive Coaching",
                description: "Guidance for investor, board, and enterprise diligence sessions.",
                icon: <MessageSquare className="h-10 w-10 text-primary" />,
              },
              {
                title: "Tool Integration",
                description: "Implementation support for compliance and security tools.",
                icon: <Settings className="h-10 w-10 text-primary" />,
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Engagement Process</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              A structured approach to implementing and maintaining your security program.
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
                  title: "Program Development",
                  description: "We create a tailored security program aligned with your business objectives.",
                  align: "left",
                },
                {
                  step: "3",
                  title: "Policy Implementation",
                  description: "We develop and implement security policies and procedures.",
                  align: "right",
                },
                {
                  step: "4",
                  title: "Ongoing Support",
                  description: "We provide continuous guidance and support for your security program.",
                  align: "left",
                },
                {
                  step: "5",
                  title: "Regular Reviews",
                  description: "We conduct quarterly reviews to ensure program effectiveness.",
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
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Benefits of vCISO Advisory</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Strategic Leadership",
                    description: "Access to executive-level security expertise without full-time costs.",
                  },
                  {
                    title: "Risk Management",
                    description: "Proactive identification and mitigation of security risks.",
                  },
                  {
                    title: "Compliance Readiness",
                    description: "Preparation for audits and compliance requirements.",
                  },
                  {
                    title: "Investor Confidence",
                    description: "Enhanced security posture for investor and board presentations.",
                  },
                  {
                    title: "Cost Efficiency",
                    description: "Fractional security leadership at a fraction of the cost.",
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
                    Schedule a consultation to discuss how we can help strengthen your security program.
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
