import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Shield, Brain, Lock, Database, FileCheck, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AIGovernancePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">AI Governance (ISO/IEC 42001)</h1>
            <p className="mt-4 text-muted-foreground dark:text-white md:text-xl">
              Build a defensible AI governance program that scales with innovation. Our ISO/IEC 42001 advisory engagement aligns your models, processes, and internal accountability to the world's first AI-specific compliance standard.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Secure Your AI Systems</h2>
              <p className="text-muted-foreground mb-6">
                As organizations increasingly adopt AI technologies, establishing robust governance frameworks becomes critical. Our AI Governance program provides a comprehensive assessment of your AI systems, identifying risks and implementing controls aligned with ISO/IEC 42001.
              </p>
              <p className="text-muted-foreground mb-6">
                We help you build a defensible AI governance program that balances innovation with risk management, ensuring your AI systems are ethical, transparent, and compliant with emerging regulations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">ISO/IEC 42001</span>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">EU AI Act</span>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">AI Ethics</span>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Risk Management</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/secureai.webp"
                alt="AI Governance Overview"
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our AI Governance Services</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Comprehensive AI governance assessment and implementation services to ensure ethical and compliant AI systems.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI System Inventory",
                description: "Comprehensive assessment and classification of AI systems based on risk and impact.",
                icon: <Database className="h-10 w-10 text-primary" />,
              },
              {
                title: "Ethics & Bias Assessment",
                description: "Evaluation of AI systems for potential biases and ethical considerations.",
                icon: <Brain className="h-10 w-10 text-primary" />,
              },
              {
                title: "Policy Development",
                description: "Creation of comprehensive AI governance policies and procedures.",
                icon: <FileCheck className="h-10 w-10 text-primary" />,
              },
              {
                title: "Risk Management",
                description: "Implementation of controls and monitoring for AI-related risks.",
                icon: <Shield className="h-10 w-10 text-primary" />,
              },
              {
                title: "Compliance Mapping",
                description: "Alignment with ISO/IEC 42001 and other relevant AI regulations.",
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
              },
              {
                title: "Stakeholder Training",
                description: "Education and awareness programs for AI governance stakeholders.",
                icon: <Users className="h-10 w-10 text-primary" />,
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
              A structured approach to building a robust AI governance program.
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform -translate-x-1/2"></div>

            <div className="space-y-12 relative">
              {[
                {
                  step: "1",
                  title: "Assessment & Scoping",
                  description: "We evaluate your current AI systems, risks, and governance needs.",
                  align: "right",
                },
                {
                  step: "2",
                  title: "Gap Analysis",
                  description: "We identify gaps between current practices and ISO/IEC 42001 requirements.",
                  align: "left",
                },
                {
                  step: "3",
                  title: "Policy Development",
                  description: "We create comprehensive AI governance policies and procedures.",
                  align: "right",
                },
                {
                  step: "4",
                  title: "Implementation",
                  description: "We help you implement the necessary controls and processes.",
                  align: "left",
                },
                {
                  step: "5",
                  title: "Training & Support",
                  description: "We provide training and ongoing support for your AI governance program.",
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
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Benefits of AI Governance</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Regulatory Compliance",
                    description: "Align with ISO/IEC 42001 and prepare for emerging AI regulations.",
                  },
                  {
                    title: "Risk Reduction",
                    description: "Identify and mitigate AI-related risks before they impact your business.",
                  },
                  {
                    title: "Ethical AI",
                    description: "Ensure your AI systems are fair, transparent, and accountable.",
                  },
                  {
                    title: "Stakeholder Trust",
                    description: "Build confidence in your AI systems among customers and partners.",
                  },
                  {
                    title: "Competitive Advantage",
                    description: "Demonstrate leadership in responsible AI development and deployment.",
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
                    Schedule a consultation to discuss how we can help you build a robust AI governance program.
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
  );
} 