import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function SOC2Page() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/soc2-hero-background.png" alt="SOC 2 Compliance" fill priority className="object-cover" />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white animate-fade-in-up">
              SOC 2 Readiness & Compliance
            </h1>
            <p className="mt-4 text-white/90 md:text-xl animate-fade-in-up-delay-1">
              Streamline your path to SOC 2 compliance with our expert guidance and proven methodology.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">What is SOC 2 Compliance?</h2>
              <p className="text-muted-foreground mb-6">
                SOC 2 (System and Organization Controls 2) is a framework developed by the American Institute of CPAs
                (AICPA) that defines criteria for managing customer data based on five "trust service principles":
                security, availability, processing integrity, confidentiality, and privacy.
              </p>
              <p className="text-muted-foreground mb-6">
                For startups and growing companies, achieving SOC 2 compliance demonstrates your commitment to security
                and can be a significant competitive advantage when selling to enterprise customers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">SOC 2 Type I</h3>
                    <p className="text-sm text-muted-foreground">
                      Evaluates the design of security controls at a specific point in time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">SOC 2 Type II</h3>
                    <p className="text-sm text-muted-foreground">
                      Evaluates the effectiveness of those controls over a period of time (typically 6-12 months).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/soc2-diagram.png"
                alt="SOC 2 Compliance Framework"
                width={600}
                height={400}
                className="object-cover rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our SOC 2 Readiness Approach</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              We've streamlined the path to SOC 2 compliance with a proven methodology that works for startups and
              growing companies.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Gap Assessment",
                description: "We evaluate your current security posture against SOC 2 requirements to identify gaps.",
                icon: "/gap-assessment-icon.svg",
              },
              {
                step: "2",
                title: "Remediation Planning",
                description:
                  "We develop a tailored roadmap to address identified gaps and implement necessary controls.",
                icon: "/remediation-icon.svg",
              },
              {
                step: "3",
                title: "Implementation Support",
                description:
                  "Our team guides you through implementing required policies, procedures, and technical controls.",
                icon: "/implementation-icon.svg",
              },
              {
                step: "4",
                title: "Audit Preparation",
                description:
                  "We prepare you for the audit process, including evidence collection and auditor interactions.",
                icon: "/audit-icon.svg",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="relative overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-0 left-0 bg-primary text-white w-10 h-10 flex items-center justify-center font-bold rounded-br-lg">
                  {item.step}
                </div>
                <CardContent className="pt-12 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto">
                    <Image src={item.icon || "/placeholder.svg"} alt={item.title} width={24} height={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
                  <p className="text-muted-foreground text-center">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Benefits of SOC 2 Compliance</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Win Enterprise Deals",
                    description: "SOC 2 compliance is often a requirement for selling to enterprise customers.",
                  },
                  {
                    title: "Build Customer Trust",
                    description: "Demonstrate your commitment to security and data protection.",
                  },
                  {
                    title: "Improve Security Posture",
                    description: "Strengthen your overall security program and reduce risk.",
                  },
                  {
                    title: "Competitive Advantage",
                    description: "Stand out from competitors who haven't achieved compliance.",
                  },
                  {
                    title: "Streamline Due Diligence",
                    description: "Simplify security questionnaires and vendor assessments.",
                  },
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start transform hover:translate-x-1 transition-transform duration-300"
                  >
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <Image
                src="/soc2-benefits.jpg"
                alt="SOC 2 Compliance Benefits"
                width={600}
                height={400}
                className="rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Success Story</h2>
              <h3 className="text-xl font-bold mb-4">FinTech Startup Achieves SOC 2 in 8 Weeks</h3>
              <p className="text-muted-foreground mb-6">
                Learn how we helped a growing fintech company achieve SOC 2 Type I compliance in just 8 weeks, enabling
                them to close a major enterprise deal worth $1.2M in annual recurring revenue.
              </p>
              <Button asChild className="group">
                <Link href="/case-studies/fintech-soc2">
                  Read the Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/fintech-case-study.jpg"
                alt="FinTech Case Study"
                width={600}
                height={400}
                className="object-cover rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Get answers to common questions about SOC 2 compliance.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                question: "How long does it typically take to achieve SOC 2 compliance?",
                answer:
                  "The timeline for SOC 2 compliance varies based on your organization's size and current security posture. With our streamlined approach, most startups can achieve SOC 2 Type I in 8-12 weeks and Type II in 6-9 months.",
              },
              {
                question: "What's the difference between SOC 2 Type I and Type II?",
                answer:
                  "SOC 2 Type I assesses whether your security controls are properly designed at a specific point in time. Type II evaluates the operational effectiveness of those controls over a period (typically 6-12 months).",
              },
              {
                question: "Do we need SOC 2 compliance for our startup?",
                answer:
                  "If you handle customer data, especially for enterprise clients, SOC 2 compliance is increasingly becoming a requirement. It demonstrates your commitment to security and can be a competitive advantage in sales conversations.",
              },
              {
                question: "How much does SOC 2 compliance cost?",
                answer:
                  "The cost of SOC 2 compliance includes both the audit fees and the internal resources required to implement controls. Our approach is designed to minimize both costs by providing efficient guidance and tools.",
              },
              {
                question: "Can we achieve SOC 2 compliance with a small team?",
                answer:
                  "Yes! Our approach is specifically designed for startups and small teams. We provide templates, tools, and guidance to make the process as efficient as possible.",
              },
            ].map((faq, i) => (
              <Card
                key={i}
                className="border border-border transform hover:scale-[1.01] transition-all duration-300 hover:shadow-md"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="rounded-lg bg-gradient-to-r from-primary/20 to-primary/5 p-8 md:p-10 lg:p-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to start your SOC 2 journey?
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Schedule a free consultation with our compliance experts to discuss your specific needs.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 animate-pulse-subtle">
                  <a
                    href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Vxu3mWG4YQPBDvvUz9CX7sNoH_BBnmcGmKPRSYAiQD9S_xtFPB8TmIU_J4LtUeU_aCTmUEgzh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule a Consultation
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="hover:bg-primary/10">
                  <Link href="/services">Explore Other Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
