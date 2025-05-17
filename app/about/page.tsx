import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - updated to match case studies style */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">About Complianta</h1>
            <p className="mt-4 text-muted-foreground dark:text-white md:text-xl">
              Security & Compliance for What's Next
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-foreground mb-8">
              Complianta is a boutique consultancy built to support the most ambitious companies of the AI era — helping cloud-native, fast-moving, and future-focused organizations meet security and compliance standards with precision and speed.
            </p>
            <p className="text-lg text-foreground mb-8">
              We partner with startups, scaling SaaS platforms, and government-focused tech firms to operationalize trust through frameworks like:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                "SOC 2 (Type I & II)",
                "ISO/IEC 27001",
                "HIPAA",
                "GDPR",
                "ISO/IEC 42001 (AI Governance)"
              ].map((framework, i) => (
                <div key={i} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span className="text-foreground">{framework}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-foreground">
              Our work spans cloud security architecture, audit readiness, risk management, and strategic vCISO leadership — all tailored to companies balancing growth with governance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">
                Our Story
              </h2>
              <p className="text-foreground mb-4">
                Founded by security engineer and compliance advisor Yannick Massivi, Complianta emerged from a clear gap in the industry: fast-growing companies were being held back by legacy compliance models that added friction instead of clarity.
              </p>
              <p className="text-foreground mb-4">
                After years leading audit readiness efforts for startups and enterprise environments alike, Yannick launched Complianta to bring elite, enterprise-tested methodology to leaner, faster-moving organizations.
              </p>
              <p className="text-foreground mb-6">
                Today, Complianta is designed from the ground up to serve modern companies with:
              </p>
              <div className="space-y-3">
                {[
                  "High-trust service delivery",
                  "Nimble execution",
                  "Deep framework expertise",
                  "Clarity at every stage of the compliance lifecycle"
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/our-story.png"
                alt="Our Story"
                width={600}
                height={400}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Mission & Values
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground dark:text-white">
                  To help visionary teams unlock growth, funding, and credibility — by turning security and compliance into a competitive edge.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Practicality",
                      description: "We bring frameworks into the real world. What we implement works under pressure.",
                    },
                    {
                      title: "Expertise",
                      description: "Certified professionals lead every engagement. We don't outsource your credibility.",
                    },
                    {
                      title: "Trust",
                      description: "We operate like an internal team. Our job is to make you look exceptional to investors, clients, and auditors.",
                    },
                    {
                      title: "Precision",
                      description: "Every control, every document, every recommendation serves a purpose. No fluff.",
                    },
                  ].map((value, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">{value.title}</h4>
                        <p className="text-sm text-muted-foreground dark:text-white">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-muted-foreground dark:text-white md:text-xl max-w-3xl mx-auto">
              We're a remote-first, deeply experienced group of compliance advisors, cloud architects, security engineers, and risk specialists — handpicked for technical depth and clarity of execution.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Yannick Massivi",
                title: "Founder & CEO",
                bio: "Certified Information Systems Security Professional (CISSP) with 9+ years of experience in enterprise security and compliance. Expert in cloud security architecture across AWS, Azure, and hybrid environments. Specializes in SOC 2, ISO 27001, and AI governance frameworks, delivering audit-ready compliance programs.",
              },
              {
                name: "Constanthino Mayele",
                title: "Team Lead",
                bio: "Master's candidate and accomplished team lead specializing in scaling automation solutions, endpoint management, and security. As a Zero Trust Advisor and Agile Practitioner, he brings a collaborative, lifelong learning mindset to every engagement, helping organizations implement modern security strategies and drive operational excellence.",
              },
              {
                name: "Joel Khang ",
                title: "Senior Full Stack Web Developer",
                bio: "Cloud developer specializing in Node.js and AWS, with a proven track record of building scalable, high-performance applications",
              },
              {
                name: "Yasmine McKenzie",
                title: "Compliance Program Manager",
                bio: "Certified compliance professional with extensive experience in documentation frameworks, policy development, and audit readiness. Leads evidence workflows and provides expert guidance for high-growth SaaS companies.",
              },
              {
                name: "Gabriel Godlive",
                title: "DevSecOps Engineer",
                bio: "Full-stack security engineer focused on compliance automation, Infrastructure as Code (IaC), and secure software deployment. Expert in integrating compliance tools like Drata, Vanta, and AWS-native security services.",
              },
              {
                name: "James Okoro",
                title: "Security Operations Specialist",
                bio: "Certified security operations professional specializing in vulnerability management, endpoint protection, and incident response. Develops and implements security playbooks aligned with evolving risk landscapes.",
              }
            ].map((member, i) => (
              <Card key={i} className="overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">{member.name}</h3>
                  <p className="text-sm font-medium text-primary mb-4 text-center">
                    {member.title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed text-center">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Why Companies Choose Complianta
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Designed for growth-stage speed",
                description: "Startup-friendly but audit-proven",
              },
              {
                title: "Built for AI & cloud-native companies",
                description: "Specialists in ISO 42001 and next-gen risks",
              },
              {
                title: "End-to-end readiness",
                description: "From gap to audit, with no guesswork",
              },
              {
                title: "White-glove service",
                description: "Personal, thoughtful, precise delivery",
              },
              {
                title: "Dual-sector alignment",
                description: "Serve both public sector and B2B SaaS clients",
              },
            ].map((reason, i) => (
              <Card
                key={i}
                className="border-none shadow-md hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground dark:text-white">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="rounded-lg bg-primary-foreground p-8 md:p-10 lg:p-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to simplify your compliance journey?
              </h2>
              <p className="mt-4 text-muted-foreground dark:text-white md:text-xl">
                Book a consultation today. We'll meet you where you are — and get you where you need to go.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg">Schedule Consultation</Button>
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
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
