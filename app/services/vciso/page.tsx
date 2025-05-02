import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Users, Shield, FileText, AlertTriangle } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"

export default function VCISOPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/vciso-hero-background.png" alt="Virtual CISO Services" fill priority className="object-cover" />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white animate-fade-in-up">
              vCISO Advisory
            </h1>
            <p className="mt-4 text-white/90 md:text-xl animate-fade-in-up-delay-1">
              Gain strategic compliance and security leadership without the cost of a full-time executive. Flexible and scalable for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">What is a Virtual CISO?</h2>
              <p className="text-muted-foreground mb-6">
                A Virtual CISO (vCISO) provides expert security leadership and guidance without the cost of a full-time
                Chief Information Security Officer. Our vCISO service gives you access to experienced security
                professionals who can help develop and implement a comprehensive security strategy tailored to your
                business needs.
              </p>
              <p className="text-muted-foreground mb-6">
                For startups and growing companies, a vCISO offers the strategic security leadership needed to protect
                your business and meet compliance requirements, at a fraction of the cost of hiring a full-time
                executive.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Fractional Leadership</h3>
                    <p className="text-sm text-muted-foreground">
                      Get the expertise you need, when you need it, without the full-time salary.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Experienced Professionals</h3>
                    <p className="text-sm text-muted-foreground">
                      Work with security leaders who have experience across multiple industries and technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/vciso-overview.jpg"
                alt="Virtual CISO Overview"
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
              Comprehensive security leadership and guidance tailored to your business needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Security Strategy Development",
                description: "Creation of a comprehensive security roadmap aligned with your business objectives.",
                icon: <Shield className="h-10 w-10 text-primary" />,
              },
              {
                title: "Security Program Management",
                description: "Ongoing oversight and management of your security program and initiatives.",
                icon: <Users className="h-10 w-10 text-primary" />,
              },
              {
                title: "Policy Development",
                description: "Creation and maintenance of security policies, standards, and procedures.",
                icon: <FileText className="h-10 w-10 text-primary" />,
              },
              {
                title: "Risk Assessment & Management",
                description: "Identification, assessment, and mitigation of security risks to your business.",
                icon: <AlertTriangle className="h-10 w-10 text-primary" />,
              },
              {
                title: "Compliance Management",
                description: "Guidance on meeting security requirements for relevant compliance frameworks.",
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
              },
              {
                title: "Incident Response Planning",
                description: "Development and testing of incident response plans and procedures.",
                icon: <ArrowRight className="h-10 w-10 text-primary" />,
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

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Benefits of vCISO Services</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Cost-Effective Security Leadership",
                    description: "Get expert security guidance at a fraction of the cost of a full-time CISO.",
                  },
                  {
                    title: "Accelerated Security Maturity",
                    description: "Rapidly improve your security posture with experienced leadership.",
                  },
                  {
                    title: "Compliance Readiness",
                    description: "Prepare for and maintain compliance with relevant security frameworks.",
                  },
                  {
                    title: "Reduced Security Risk",
                    description: "Identify and address security vulnerabilities before they can be exploited.",
                  },
                  {
                    title: "Business Enablement",
                    description: "Align security initiatives with business objectives to enable growth.",
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
                src="/vciso-benefits.jpg"
                alt="vCISO Benefits"
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
              <h3 className="text-xl font-bold mb-4">SaaS Platform Strengthens Security Posture</h3>
              <p className="text-muted-foreground mb-6">
                Learn how our vCISO service helped a growing SaaS platform develop and implement a comprehensive
                security program, enabling them to meet enterprise security requirements and close major deals.
              </p>
              <Button asChild className="group">
                <Link href="/case-studies/saas-vciso">
                  Read the Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/saas-case-study.jpg"
                alt="SaaS Case Study"
                width={600}
                height={400}
                className="object-cover rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Engagement Models</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Flexible vCISO service options tailored to your specific needs and budget.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Project-Based",
                description: "Focused engagement to address specific security initiatives or challenges.",
                features: [
                  "Defined scope and deliverables",
                  "Fixed timeline and budget",
                  "Ideal for specific security projects",
                ],
              },
              {
                title: "Retainer-Based",
                description: "Ongoing security leadership and support with dedicated monthly hours.",
                features: [
                  "Regular security guidance",
                  "Flexible allocation of hours",
                  "Consistent security oversight",
                ],
                highlighted: true,
              },
              {
                title: "Full-Service",
                description: "Comprehensive security leadership and program management.",
                features: ["End-to-end security management", "Regular executive reporting", "Dedicated security team"],
              },
            ].map((model, i) => (
              <Card
                key={i}
                className={`border ${model.highlighted ? "border-primary" : "border-border"} shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden`}
              >
                {model.highlighted && (
                  <div className="bg-primary text-white text-center py-1 text-sm font-medium">Most Popular</div>
                )}
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-2">{model.title}</h3>
                  <p className="text-muted-foreground mb-6">{model.description}</p>
                  <div className="space-y-2 mb-6 flex-grow">
                    {model.features.map((feature, j) => (
                      <div key={j} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant={model.highlighted ? "default" : "outline"} 
                          className={`w-full ${model.highlighted ? "bg-primary text-white hover:bg-primary/90" : "hover:bg-primary/10"}`}
                        >
                          Schedule Free Call
                        </Button>
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
                    <Button 
                      variant="outline" 
                      className="w-full hover:bg-primary/10"
                      asChild
                    >
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
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
                Ready to strengthen your security leadership?
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Schedule a free consultation with our security experts to discuss your specific needs.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
                  <a
                    href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Vxu3mWG4YQPBDvvUz9CX7sNoH_BBnmcGmKPRSYAiQD9S_xtFPB8TmIU_J4LtUeU_aCTmUEgzh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule a Consultation
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="hover:bg-primary/10 w-full sm:w-auto">
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
