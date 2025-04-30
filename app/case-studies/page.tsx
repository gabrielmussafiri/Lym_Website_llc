import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Success Stories</h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              See how we've helped companies like yours achieve their compliance and security goals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            {/* Case Study 1 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Badge className="mb-2">SOC 2 Compliance</Badge>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">FinTech Startup Achieves SOC 2 in 8 Weeks</h2>
                <p className="text-muted-foreground mb-6">
                  A rapidly growing fintech startup needed to achieve SOC 2 compliance quickly to close enterprise deals
                  worth over $1.2M in annual recurring revenue. With our streamlined approach, they achieved SOC 2 Type
                  I in just 8 weeks.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Industry:</span>
                    <span>Financial Technology</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Company Size:</span>
                    <span>50 employees</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Timeline:</span>
                    <span>8 weeks to SOC 2 Type I</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/case-studies/fintech-soc2" className="group">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image src="/fintech-case-study.jpg" alt="FinTech Case Study" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2">
                <Badge className="mb-2">HIPAA Compliance</Badge>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  Healthcare SaaS Platform Meets HIPAA Requirements
                </h2>
                <p className="text-muted-foreground mb-6">
                  A healthcare technology company needed to implement HIPAA-compliant infrastructure to support their
                  growing customer base of healthcare providers. We helped them design and implement a secure, compliant
                  architecture.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Industry:</span>
                    <span>Healthcare Technology</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Company Size:</span>
                    <span>75 employees</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Timeline:</span>
                    <span>12 weeks to HIPAA compliance</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/case-studies/healthcare-hipaa" className="group">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="order-1">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image src="/healthcare-case-study.jpg" alt="Healthcare Case Study" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Badge className="mb-2">vCISO Services</Badge>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">SaaS Platform Strengthens Security Posture</h2>
                <p className="text-muted-foreground mb-6">
                  A growing SaaS platform needed to strengthen their security posture to meet enterprise customer
                  requirements. Our vCISO service helped them develop and implement a comprehensive security program.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Industry:</span>
                    <span>Software as a Service</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Company Size:</span>
                    <span>100 employees</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Timeline:</span>
                    <span>Ongoing vCISO engagement</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/case-studies/saas-vciso" className="group">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image src="/saas-case-study.jpg" alt="SaaS Case Study" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Case Studies */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">More Success Stories</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "E-commerce Platform Secures Customer Data",
                description:
                  "How we helped an e-commerce platform implement robust security controls to protect customer payment information.",
                category: "Cloud Security",
                image: "/ecommerce-case-study.jpg",
                link: "/case-studies/ecommerce-security",
              },
              {
                title: "EdTech Startup Achieves SOC 2 and FERPA Compliance",
                description:
                  "Our approach to helping an education technology startup meet both SOC 2 and FERPA compliance requirements.",
                category: "SOC 2 & FERPA",
                image: "/edtech-case-study.jpg",
                link: "/case-studies/edtech-compliance",
              },
              {
                title: "B2B SaaS Implements Security Program from Scratch",
                description:
                  "How we helped a B2B SaaS company build a comprehensive security program to support their growth.",
                category: "Security Program",
                image: "/b2b-case-study.jpg",
                link: "/case-studies/b2b-security",
              },
            ].map((study, i) => (
              <Card
                key={i}
                className="overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-video relative">
                  <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge>{study.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  <Link href={study.link} className="group flex items-center text-primary font-medium">
                    Read case study
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="rounded-lg bg-primary-foreground p-8 md:p-10 lg:p-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to become our next success story?
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Contact us today to discuss how we can help you achieve your compliance and security goals.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
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
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
