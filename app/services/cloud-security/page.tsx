import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Shield, Cloud, Lock, Database, FileCheck, AlertCircle } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function CloudSecurityPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Cloud Security Review</h1>
            <p className="mt-4 text-muted-foreground dark:text-white md:text-xl">
              Your cloud is your perimeter. We assess your entire cloud footprint — from IAM to encryption — and align it with compliance frameworks and secure architecture principles.
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
                  "Infrastructure-as-Code and runtime configuration review",
                  "IAM role audit and access scoping validation",
                  "Encryption policy verification (at rest & in transit)",
                  "Logging, alerting, and retention posture assessment",
                  "SOC 2 / ISO 27001 / HIPAA control mapping",
                  "Executive summary and remediation roadmap with priority scoring",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                </div>
                ))}
              </div>
              <p className="text-muted-foreground italic">
                Designed for teams managing complex or fast-changing AWS, Azure, or GCP environments.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/cloud.jpg "
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
                title: "Infrastructure Review",
                description: "Assessment of IaC and runtime configurations to identify security misconfigurations.",
                icon: <Cloud className="h-10 w-10 text-primary" />,
              },
              {
                title: "Access Control Audit",
                description: "Comprehensive review of IAM roles, permissions, and access scoping.",
                icon: <Lock className="h-10 w-10 text-primary" />,
              },
              {
                title: "Encryption Assessment",
                description: "Verification of encryption policies for data at rest and in transit.",
                icon: <Database className="h-10 w-10 text-primary" />,
              },
              {
                title: "Monitoring & Logging",
                description: "Evaluation of logging, alerting, and retention policies.",
                icon: <AlertCircle className="h-10 w-10 text-primary" />,
              },
              {
                title: "Compliance Mapping",
                description: "Alignment with SOC 2, ISO 27001, and HIPAA security controls.",
                icon: <FileCheck className="h-10 w-10 text-primary" />,
              },
              {
                title: "Remediation Planning",
                description: "Prioritized roadmap for addressing identified security gaps.",
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
                  description: "We analyze your cloud environment, identify key systems, and define assessment scope.",
                  align: "right",
                },
                {
                  step: "2",
                  title: "Configuration Review",
                  description: "We examine IaC, runtime settings, and security configurations across your cloud footprint.",
                  align: "left",
                },
                {
                  step: "3",
                  title: "Access Control Audit",
                  description: "We evaluate IAM policies, roles, and permissions to identify excessive access.",
                  align: "right",
                },
                {
                  step: "4",
                  title: "Security Analysis",
                  description: "We assess encryption, logging, monitoring, and other security controls.",
                  align: "left",
                },
                {
                  step: "5",
                  title: "Remediation Planning",
                  description: "We provide a prioritized roadmap for addressing identified security gaps.",
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
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Benefits of Cloud Security Review</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Reduced Security Risk",
                    description: "Identify and address vulnerabilities before they can be exploited by attackers.",
                  },
                  {
                    title: "Compliance Readiness",
                    description: "Align your cloud security controls with SOC 2, ISO 27001, and HIPAA requirements.",
                  },
                  {
                    title: "Improved Visibility",
                    description: "Gain a comprehensive understanding of your cloud security posture.",
                  },
                  {
                    title: "Cost Optimization",
                    description: "Identify unused or over-provisioned resources that may be increasing costs.",
                  },
                  {
                    title: "Enhanced Monitoring",
                    description: "Implement effective logging and alerting for better security visibility.",
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
                    Schedule a consultation to discuss how we can help secure your cloud infrastructure.
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
