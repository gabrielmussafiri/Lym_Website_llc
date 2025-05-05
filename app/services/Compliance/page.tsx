import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function ComplianceReadinessPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/compliance-readiness-hero.jpg"
            alt="Compliance Readiness"
            fill
            priority
            className="object-cover"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white animate-fade-in-up">
              Compliance Readiness Packages
            </h1>
            <p className="mt-4 text-white/90 md:text-xl animate-fade-in-up-delay-1">
              Comprehensive compliance solutions for SOC 2, ISO 27001, HIPAA, GDPR, and ISO/IEC 42001
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Compliance Readiness Packages
              </h2>
              <p className="text-muted-foreground mb-6">
                Our Compliance Readiness Packages help organizations prepare for and maintain compliance with major
                frameworks and standards. We understand that each organization has unique needs and regulatory requirements.
              </p>
              <p className="text-muted-foreground mb-6">
                Whether you're pursuing SOC 2, ISO 27001, HIPAA, GDPR, or the new ISO/IEC 42001 for AI Management Systems,
                our expert team provides tailored guidance and support throughout your compliance journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Gap Assessment</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive evaluation of your current controls against framework requirements
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Control Mapping</h3>
                    <p className="text-sm text-muted-foreground">
                      Detailed mapping of controls across multiple frameworks to optimize compliance efforts
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/images/compliance-frameworks.jpg"
                alt="Compliance Frameworks"
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Compliance Methodology</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              A structured approach to achieving and maintaining compliance across multiple frameworks
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Initial Assessment",
                description: "Comprehensive evaluation of your current security and compliance posture",
                icon: "/icons/initial-assessment.svg",
              },
              {
                step: "2",
                title: "Framework Mapping",
                description: "Strategic mapping of controls across your target compliance frameworks",
                icon: "/icons/framework-mapping.svg",
              },
              {
                step: "3",
                title: "Documentation & Controls",
                description: "Development and implementation of required policies and procedures",
                icon: "/icons/documentation-controls.svg",
              },
              {
                step: "4",
                title: "Audit Readiness",
                description: "Preparation and support for certification audits across frameworks",
                icon: "/icons/audit-readiness.svg",
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
                    <Image src={item.icon} alt={item.title} width={24} height={24} />
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
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Benefits of Our Compliance Packages</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Unified Compliance Approach",
                    description: "Streamline multiple compliance requirements into a single cohesive program",
                  },
                  {
                    title: "Cost Efficiency",
                    description: "Optimize resources by addressing overlapping requirements across frameworks",
                  },
                  {
                    title: "Expert Guidance",
                    description: "Access to specialists across SOC 2, ISO, HIPAA, GDPR, and AI compliance",
                  },
                  {
                    title: "Scalable Solutions",
                    description: "Flexible approaches that grow with your compliance needs",
                  },
                  {
                    title: "Continuous Support",
                    description: "Ongoing assistance for maintaining compliance and addressing changes",
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
                src="/images/compliance-benefits.jpg"
                alt="Compliance Benefits"
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
              <h3 className="text-xl font-bold mb-4">Healthcare SaaS Achieves Multiple Compliance Goals</h3>
              <p className="text-muted-foreground mb-6">
                Discover how we helped a healthcare technology company achieve HIPAA, SOC 2, and ISO 27001 compliance
                within 6 months, enabling them to expand into new markets and secure major contracts.
              </p>
              <Button asChild className="group">
                <Link href="/case-studies/healthcare-compliance">
                  Read the Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/images/healthcare-case-study.jpg"
                alt="Healthcare Case Study"
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
              Common questions about our compliance readiness packages
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                question: "Which compliance framework should we pursue first?",
                answer:
                  "We'll help assess your business needs, customer requirements, and market demands to determine the most strategic compliance roadmap for your organization.",
              },
              {
                question: "How do you handle multiple framework requirements?",
                answer:
                  "Our approach maps controls across frameworks to identify overlapping requirements, allowing for efficient implementation and maintenance of a unified compliance program.",
              },
              {
                question: "What's involved in ISO/IEC 42001 compliance for AI systems?",
                answer:
                  "ISO/IEC 42001 focuses on AI management systems, including risk management, transparency, and ethical considerations. We help implement appropriate controls and documentation.",
              },
              {
                question: "How long does it take to achieve multiple certifications?",
                answer:
                  "Timelines vary based on your starting point and target frameworks. Our streamlined approach typically enables organizations to achieve multiple certifications within 6-12 months.",
              },
              {
                question: "How do you support ongoing compliance maintenance?",
                answer:
                  "We provide continuous monitoring tools, periodic assessments, and updates to ensure your compliance program remains effective and current with framework changes.",
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
                Ready to streamline your compliance journey?
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Schedule a free consultation to discuss your compliance goals and requirements.
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
