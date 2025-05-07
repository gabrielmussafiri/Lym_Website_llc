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
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero.png"
            alt="About Us"
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
              About Complianta
            </h1>
            <p className="mt-4 text-white/90 md:text-xl animate-fade-in-up-delay-1">
            We’re on a mission to simplify compliance for growing companies — and for any organization building secure, scalable, and AI-ready systems. Whether you’re early-stage or expanding into new markets, we help you earn trust through strong security and streamlined certification across leading frameworks
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground dark:text-white mb-4">
              Complianta was founded in 2018 by a team of security and compliance professionals who saw a problem: fast-growing companies were being held back by outdated, complex, and overpriced compliance models.
              </p>
              <p className="text-muted-foreground dark:text-white mb-4">
              Startups and scaling tech companies needed SOC 2, ISO 27001, HIPAA, and other frameworks to win enterprise deals — but they didn't need red tape. We built Complianta to change that.
              </p>
              <p className="text-muted-foreground dark:text-white">
              Today, we've helped 100+ companies across industries streamline their path to compliance with practical, modern solutions. Our team has grown, but our mission remains the same: to make compliance an enabler, not a blocker.
              </p>
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
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Mission & Values
            </h2>
            <p className="mt-4 text-muted-foreground dark:text-white md:text-xl max-w-3xl mx-auto">
              We're guided by a clear mission and strong values that shape
              everything we do.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground dark:text-white">
                To simplify compliance for growing companies, enabling them to build trust with customers and scale with confidence
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Simplicity",
                      description:
                        "We break down complex requirements into clear, actionable steps",
                    },
                    {
                      title: "Practicality",
                      description:
                        "Our solutions work in real-world environments — not just theory",
                    },
                    {
                      title: "Expertise",
                      description:
                        " Each engagement is led by certified professionals with startup and enterprise experience",
                    },
                    {
                      title: "Partnership",
                      description:
                        "We work alongside your team as an embedded resource, not just an outside vendor.",
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
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-muted-foreground dark:text-white md:text-xl max-w-3xl mx-auto">
            Meet the leadership and advisory team driving Complianta's success
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Yannick Massivi",
                title: "Founder & CEO",
                bio: "CISSP-certified cloud security expert with 9+ years in enterprise and startup environments. Leads engagements focused on SOC 2, ISO 27001, and cloud security strategy across AWS and Azure.",
              },
              {
                name: "Jessica Tran",
                title: "Director of Compliance & Risk",
                bio: "Former Big 4 auditor with 10+ years in GRC consulting. Specializes in SOC 2, HIPAA, ISO, and GDPR readiness for high-growth SaaS companies. Trusted advisor to control owners and executive stakeholders.",
              },
              {
                name: "David Kim",
                title: "Principal Cloud Security Architect", 
                bio: "AWS and Azure certified architect with deep expertise in IAM, network segmentation, secure CI/CD, and zero trust architecture. Leads all technical security reviews and remediation plans.",
              },
              {
                name: "Emily Rivera",
                title: "Compliance Program Manager",
                bio: "Expert in policy development, evidence collection, and audit readiness. Helps clients operationalize compliance requirements with clarity and efficiency.",
              },
              {
                name: "Gabriel Godlive",
                title: "DevSecOps Engineer",
                bio: "Full-stack engineer focused on secure software development, infrastructure as code, and compliance automation. Supports integrations with Drata, Vanta, and cloud-native tooling.",
              },
              {
                name: "James Okoro",
                title: "Security Operations Specialist",
                bio: "Leads vulnerability management, incident response playbooks, and endpoint security assessments. Works closely with client engineering teams to improve detection and response capabilities.",
              }
            ].map((member, i) => (
              <Card key={i} className="overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.charAt(0)}
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
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Why Companies Choose Complianta
            </h2>
            <p className="mt-4 text-muted-foreground dark:text-white md:text-xl max-w-3xl mx-auto">
              What sets us apart from other security and compliance
              consultancies.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Startup-Savvy",
                description:
                  "We know the unique pressures of early-stage teams and design engagements to match",
              },
              {
                title: "End-to-End Delivery",
                description:
                  "From gap assessments to auditor handoff, we stay with you through the entire compliance lifecycle",
              },
              {
                title: "Technology-Enabled",
                description:
                  "We use automation, integrations, and cloud tooling to reduce manual effort and costs.",
              },
              {
                title: "Flexible & Scalable",
                description:
                  "We serve clients from pre-seed to post-Series C, adapting as your business grows.",
              },
              {
                title: "Proven Results",
                description:
                  "98% success rate across SOC 2, ISO, HIPAA, and GDPR audits",
              },
              {
                title: "Proven Track Record",
                description:
                  "We've helped over 100 companies achieve compliance with various frameworks, with a 98% success rate.",
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
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="rounded-lg bg-primary-foreground p-8 md:p-10 lg:p-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to work with us?
              </h2>
              <p className="mt-4 text-muted-foreground dark:text-white md:text-xl">
              Let's simplify your security and compliance program. Book a free consultation to map your next steps.
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
