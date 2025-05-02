import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Shield, Cloud, Lock, Database } from "lucide-react"

export default function CloudSecurityPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/cloud-security-hero.png" alt="Cloud Security" fill priority className="object-cover" />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white animate-fade-in-up">
              Cloud Security Posture Review
            </h1>
            <p className="mt-4 text-white/90 md:text-xl animate-fade-in-up-delay-1">
              Identify and remediate cloud security risks in AWS, Azure, or GCP. We analyze access controls, logging, encryption, and system architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Secure Your Cloud Infrastructure</h2>
              <p className="text-muted-foreground mb-6">
                As organizations increasingly rely on cloud services, securing these environments becomes critical. Our
                Cloud Security Posture Review provides a comprehensive assessment of your cloud infrastructure, identifying
                vulnerabilities and recommending security enhancements.
              </p>
              <p className="text-muted-foreground mb-6">
                We evaluate your cloud environment against industry best practices and compliance requirements, helping
                you protect your data and systems from emerging threats.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">AWS</span>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Azure</span>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Google Cloud</span>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Multi-cloud</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/cloud-security-overview.jpg"
                alt="Cloud Security Overview"
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Cloud Security Services</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Comprehensive cloud security assessment and remediation services to protect your data and systems.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Configuration Review",
                description:
                  "Assessment of cloud service configurations to identify security misconfigurations and vulnerabilities.",
                icon: <Cloud className="h-10 w-10 text-primary" />,
              },
              {
                title: "Access Control Assessment",
                description:
                  "Review of identity and access management practices to ensure proper permissions and authentication.",
                icon: <Lock className="h-10 w-10 text-primary" />,
              },
              {
                title: "Data Protection Evaluation",
                description:
                  "Analysis of data encryption, backup, and recovery mechanisms to protect sensitive information.",
                icon: <Database className="h-10 w-10 text-primary" />,
              },
              {
                title: "Network Security Analysis",
                description:
                  "Examination of network configurations, firewalls, and security groups to prevent unauthorized access.",
                icon: <Shield className="h-10 w-10 text-primary" />,
              },
              {
                title: "Compliance Mapping",
                description:
                  "Mapping of cloud security controls to relevant compliance frameworks (SOC 2, HIPAA, etc.).",
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
              },
              {
                title: "Remediation Support",
                description: "Guidance and assistance in implementing recommended security enhancements and fixes.",
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

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Assessment Process</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              A structured approach to identifying and addressing cloud security vulnerabilities.
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform -translate-x-1/2"></div>

            <div className="space-y-12 relative">
              {[
                {
                  step: "1",
                  title: "Discovery & Scoping",
                  description:
                    "We work with you to understand your cloud environment, business requirements, and security objectives.",
                  align: "right",
                },
                {
                  step: "2",
                  title: "Technical Assessment",
                  description:
                    "Our security experts conduct a thorough review of your cloud infrastructure, configurations, and security controls.",
                  align: "left",
                },
                {
                  step: "3",
                  title: "Vulnerability Analysis",
                  description:
                    "We identify security vulnerabilities, misconfigurations, and compliance gaps in your cloud environment.",
                  align: "right",
                },
                {
                  step: "4",
                  title: "Remediation Planning",
                  description:
                    "We develop a prioritized remediation plan with specific recommendations to address identified issues.",
                  align: "left",
                },
                {
                  step: "5",
                  title: "Implementation Support",
                  description:
                    "Our team provides guidance and assistance in implementing the recommended security enhancements.",
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
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Benefits of Cloud Security Posture Review</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Reduced Security Risk",
                    description: "Identify and address vulnerabilities before they can be exploited by attackers.",
                  },
                  {
                    title: "Compliance Readiness",
                    description: "Align your cloud security controls with relevant compliance frameworks.",
                  },
                  {
                    title: "Cost Optimization",
                    description: "Identify unused or over-provisioned resources that may be increasing costs.",
                  },
                  {
                    title: "Enhanced Visibility",
                    description: "Gain a comprehensive understanding of your cloud security posture.",
                  },
                  {
                    title: "Improved Incident Response",
                    description: "Develop better detection and response capabilities for security incidents.",
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
                src="/cloud-security-benefits.jpg"
                alt="Cloud Security Benefits"
                width={600}
                height={400}
                className="rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="rounded-lg bg-gradient-to-r from-primary/20 to-primary/5 p-8 md:p-10 lg:p-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to secure your cloud environment?
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Schedule a free consultation with our cloud security experts to discuss your specific needs.
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
