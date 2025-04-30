import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, ShieldCheck, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Full Background Image */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-background.png"
            alt="Security and compliance"
            fill
            priority
            className="object-cover"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-primary hover:bg-primary text-white">
                Security & Compliance
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 animate-fade-in-up-delay-1">
                Simplifying Compliance for Growing Startups
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up-delay-2">
                We help startups achieve SOC 2, ISO 27001, and HIPAA compliance
                without the complexity and overhead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white animate-pulse-subtle"
                >
                  <a
                    href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Vxu3mWG4YQPBDvvUz9CX7sNoH_BBnmcGmKPRSYAiQD9S_xtFPB8TmIU_J4LtUeU_aCTmUEgzh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule a Free Consultation
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="text-blue border-white hover:bg-white/20"
                >
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-1">
            <div className="w-1 h-3 bg-white rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <Card className="border-none shadow-none bg-transparent hover:bg-muted/50 transition-all duration-300 p-4 rounded-lg">
              <CardContent className="p-0 space-y-2">
                <div className="p-2 bg-primary/10 rounded-full w-fit">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Streamlined Compliance</h3>
                <p className="text-muted-foreground">
                  We simplify complex compliance requirements into manageable
                  steps tailored for startups.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-none bg-transparent hover:bg-muted/50 transition-all duration-300 p-4 rounded-lg">
              <CardContent className="p-0 space-y-2">
                <div className="p-2 bg-primary/10 rounded-full w-fit">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Expert Guidance</h3>
                <p className="text-muted-foreground">
                  Our team of certified security professionals brings
                  enterprise-level expertise to growing companies.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-none bg-transparent hover:bg-muted/50 transition-all duration-300 p-4 rounded-lg">
              <CardContent className="p-0 space-y-2">
                <div className="p-2 bg-primary/10 rounded-full w-fit">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Tailored Approach</h3>
                <p className="text-muted-foreground">
                  We adapt our methodology to your specific business needs, tech
                  stack, and growth stage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Stats */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trusted by Innovative Companies
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              We've helped companies across various industries achieve their
              compliance goals.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <span className="text-4xl font-bold text-primary counter-animate">
                100+
              </span>
              <span className="text-sm text-muted-foreground mt-1">
                Clients Served
              </span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <span className="text-4xl font-bold text-primary counter-animate">
                98%
              </span>
              <span className="text-sm text-muted-foreground mt-1">
                Success Rate
              </span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <span className="text-4xl font-bold text-primary counter-animate">
                3x
              </span>
              <span className="text-sm text-muted-foreground mt-1">
                Faster Compliance
              </span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <span className="text-4xl font-bold text-primary counter-animate">
                50%
              </span>
              <span className="text-sm text-muted-foreground mt-1">
                Cost Reduction
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold">Trusted by Industry Leaders</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 items-center justify-items-center opacity-70">
            {[
              { name: "Anthill", logo: "./anthil.png" },
              { name: "Anthill", logo: "./amazon.png" },
              { name: "Anthill", logo: "./anthil.png" },
              { name: "Anthill", logo: "./amazon.png" },
              { name: "Anthill", logo: "./anthil.png" },
              { name: "Anthill", logo: "./amazon.png" },
            ].map((company, i) => (
              <div
                key={i}
                className="h-12 w-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Comprehensive compliance and security solutions tailored to your
              business needs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 lg:gap-12">
            <Card className="flex flex-col h-full transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col flex-1 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">SOC 2 Readiness</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Prepare your organization for SOC 2 certification with our
                  comprehensive readiness assessment and implementation support.
                </p>
                <Link
                  href="/services/soc2"
                  className="group flex items-center text-primary font-medium"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col flex-1 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Cloud Security Review
                </h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Identify and remediate security vulnerabilities in your cloud
                  infrastructure with our comprehensive security assessment.
                </p>
                <Link
                  href="/services/cloud-security"
                  className="group flex items-center text-primary font-medium"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col flex-1 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">vCISO Advisory</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Get expert security leadership without the full-time executive
                  cost with our virtual CISO services.
                </p>
                <Link
                  href="/services/vciso"
                  className="group flex items-center text-primary font-medium"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {[
              {
                quote:
                  "Via Comply helped us achieve SOC 2 compliance in record time. Their expertise was invaluable to our team.",
                name: "Sarah Johnson",
                title: "CTO, FinTech Startup",
              },
              {
                quote:
                  "The team at Via Comply simplified the complex world of compliance for us. We couldn't have done it without them.",
                name: "Michael Chen",
                title: "CEO, Health Tech Company",
              },
              {
                quote:
                  "Their vCISO service provided us with enterprise-level security leadership at a fraction of the cost.",
                name: "Jessica Williams",
                title: "COO, SaaS Platform",
              },
            ].map((testimonial, i) => (
              <Card
                key={i}
                className="flex flex-col h-full transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="flex flex-col flex-1 p-6">
                  <div className="mb-4 text-4xl text-primary">"</div>
                  <p className="text-muted-foreground mb-6 flex-1">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <Image
                      src="/confident-professional.png"
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Featured Case Studies
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl max-w-2xl">
                See how we've helped companies like yours achieve their
                compliance goals.
              </p>
            </div>
            <Button
              variant="outline"
              asChild
              className="mt-4 md:mt-0 hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <Link href="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            {[
              {
                title: "FinTech Startup Achieves SOC 2 in 8 Weeks",
                description:
                  "How we helped a growing fintech company achieve SOC 2 compliance quickly to close enterprise deals.",
                link: "/case-studies/fintech-soc2",
              },
              {
                title: "Healthcare SaaS Platform Meets HIPAA Requirements",
                description:
                  "Our approach to helping a healthcare technology company implement HIPAA-compliant infrastructure.",
                link: "/case-studies/healthcare-hipaa",
              },
            ].map((study, i) => (
              <Card
                key={i}
                className="overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-video relative">
                  <Image
                    src="/compliance-blueprint.png"
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {study.description}
                  </p>
                  <Link
                    href={study.link}
                    className="group flex items-center text-primary font-medium"
                  >
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
          <div className="rounded-lg bg-primary-foreground p-8 md:p-10 lg:p-16 transform hover:scale-[1.01] transition-all duration-500">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to simplify your compliance journey?
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Schedule a free consultation with our compliance experts to
                discuss your specific needs.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary/90 animate-pulse-subtle"
                >
                  <a
                    href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Vxu3mWG4YQPBDvvUz9CX7sNoH_BBnmcGmKPRSYAiQD9S_xtFPB8TmIU_J4LtUeU_aCTmUEgzh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule a Consultation
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="hover:bg-primary/10"
                >
                  <Link href="/services">Learn More About Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Get answers to common questions about compliance and our services.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                question:
                  "How long does it typically take to achieve SOC 2 compliance?",
                answer:
                  "The timeline for SOC 2 compliance varies based on your organization's size and current security posture. With our streamlined approach, most startups can achieve SOC 2 Type I in 8-12 weeks and Type II in 6-9 months.",
              },
              {
                question:
                  "What's the difference between SOC 2 Type I and Type II?",
                answer:
                  "SOC 2 Type I assesses whether your security controls are properly designed at a specific point in time. Type II evaluates the operational effectiveness of those controls over a period (typically 6-12 months).",
              },
              {
                question: "Do we need SOC 2 compliance for our startup?",
                answer:
                  "If you handle customer data, especially for enterprise clients, SOC 2 compliance is increasingly becoming a requirement. It demonstrates your commitment to security and can be a competitive advantage in sales conversations.",
              },
            ].map((faq, i) => (
              <Card
                key={i}
                className="border border-border transform hover:scale-[1.02] transition-all duration-300 hover:shadow-md"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
            <div className="text-center mt-8">
              <Button
                variant="outline"
                asChild
                className="hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <Link href="/faq">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
