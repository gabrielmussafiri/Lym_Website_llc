import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

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
              About Via Comply
            </h1>
            <p className="mt-4 text-white/90 md:text-xl animate-fade-in-up-delay-1">
              We're on a mission to simplify compliance for growing companies.
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
                Via Comply was founded in 2018 by a team of security and
                compliance experts who saw a gap in the market: growing
                companies needed to achieve compliance with industry standards
                like SOC 2 and ISO 27001, but traditional consulting approaches
                were too complex, time-consuming, and expensive.
              </p>
              <p className="text-muted-foreground dark:text-white mb-4">
                We set out to create a more efficient, practical approach to
                compliance—one that would help startups and growing companies
                achieve their compliance goals without unnecessary complexity or
                overhead.
              </p>
              <p className="text-muted-foreground dark:text-white">
                Today, we've helped over 100 companies across various industries
                achieve compliance with standards like SOC 2, ISO 27001, HIPAA,
                and more. Our team has grown, but our mission remains the same:
                to simplify compliance for growing companies.
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
                  To simplify compliance for growing companies, enabling them to
                  build trust with their customers and focus on their core
                  business.
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
                        "We make complex compliance requirements simple and manageable.",
                    },
                    {
                      title: "Practicality",
                      description:
                        "We focus on practical solutions that work in the real world.",
                    },
                    {
                      title: "Expertise",
                      description:
                        "We bring deep expertise and experience to every client engagement.",
                    },
                    {
                      title: "Partnership",
                      description:
                        "We work as partners with our clients, not just consultants.",
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
              Meet the experienced professionals who make up the Via Comply
              team.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Yannick Massivi",
                title: "Founder & CEO",
                bio: "Yannick is a Sr. Cloud Security Engineer with 9 years of experience securing enterprise cloud environments across AWS, Azure, and hybrid infrastructure. I specialize in strengthening cloud ecosystems through strategic security assessments, full-spectrum vulnerability management, and airtight incident response readiness",
                image: "/lym.jpeg",
              },
              {
                name: "Gabriel Godlive",
                title: "Software Engineer",
                bio: "Gabriel is a software engineer with a focus on building secure applications and systems. He has experience in both frontend and backend development, with a strong emphasis on security best practices and compliance.",
                image: "/gabriel.png",
              },
              {
                name: "Find Name",
                title: "Head of Compliance",
                bio: "Jessica is a certified compliance professional with expertise in SOC 2, ISO 27001, and HIPAA. She has helped dozens of companies achieve compliance.",
                image: "/team-jessica.jpg",
              },
              {
                name: "Find Name",
                title: "Senior Security Consultant",
                bio: "David specializes in cloud security architecture and has extensive experience securing AWS, Azure, and GCP environments for startups and enterprises.",
                image: "/team-david.jpg",
              },
              {
                name: "Find Name",
                title: "Compliance Consultant",
                bio: "Emily is an expert in SOC 2 compliance with a background in audit and assurance. She helps clients navigate the complexities of compliance requirements.",
                image: "/team-emily.jpg",
              },
              {
                name: "Find Name",
                title: "Security Engineer",
                bio: "James has a strong technical background in security engineering and helps clients implement secure infrastructure and technical controls.",
                image: "/team-james.jpg",
              },
            ].map((member, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white mb-4">
                    {member.title}
                  </p>
                  <p className="text-muted-foreground dark:text-white">{member.bio}</p>
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
              Why Choose Via Comply
            </h2>
            <p className="mt-4 text-muted-foreground dark:text-white md:text-xl max-w-3xl mx-auto">
              What sets us apart from other security and compliance
              consultancies.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Startup Focus",
                description:
                  "We specialize in working with startups and growing companies, with an approach designed for their unique needs and constraints.",
              },
              {
                title: "Practical Approach",
                description:
                  "We focus on practical, efficient solutions that work in the real world, not theoretical frameworks that create unnecessary overhead.",
              },
              {
                title: "Experienced Team",
                description:
                  "Our team brings deep expertise from both enterprise and startup environments, with certifications in relevant frameworks.",
              },
              {
                title: "End-to-End Support",
                description:
                  "We provide support throughout the entire compliance journey, from initial assessment to audit preparation and beyond.",
              },
              {
                title: "Technology-Enabled",
                description:
                  "We leverage technology to streamline the compliance process, making it more efficient and less resource-intensive.",
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
                Contact us today to discuss your security and compliance needs.
                Our team is ready to help.
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
  );
}
