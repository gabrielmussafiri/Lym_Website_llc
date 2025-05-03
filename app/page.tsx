import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, ShieldCheck, Users } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

function ContactForm() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, service: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", company: "", service: "", message: "" });
  };

  return (
    <div>
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center text-center py-10">
          <div className="rounded-full bg-primary/10 p-3 mb-4">
            <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-6">Your message has been received. We'll get back to you within 1-2 business days.</p>
          <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" value={formState.name} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" value={formState.company} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service">Service of Interest</Label>
            <Select value={formState.service} onValueChange={handleSelectChange}>
              <SelectTrigger id="service">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="soc2">SOC 2 Readiness</SelectItem>
                <SelectItem value="cloud-security">Cloud Security Review</SelectItem>
                <SelectItem value="vciso">vCISO Advisory</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" value={formState.message} onChange={handleChange} rows={5} required />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Two Columns */}
      <section className="relative py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
            {/* <Badge className="mb-4 bg-primary/90 text-white text-base px-4 py-1 rounded-full font-semibold shadow-md">
              Security & Compliance for Growing Companies
            </Badge> */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-balance text-sidebar-primary mb-6 text-left ">
              <span className="block">Security & Compliance</span>
               Built for  <span className="text-primary">Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 self-start">
              Helping startups and fast-growing tech companies achieve SOC 2, ISO 27001, HIPAA, GDPR, and ISO/IEC 42001 compliance without the complexity or enterprise bloat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white animate-pulse-subtle"
                  >
                    Schedule a Free Consultation
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
                size="lg"
                asChild
                className="text-blue border-primary hover:bg-primary/10"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
          {/* Right: Hero Image Placeholder */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            {/* Replace the src below with your uploaded transparent image */}
            <Image
              src="/homeok.png"
              alt="Compliance dashboard illustration"
              width={990}
              height={980}
              className="w-full max-w-lg h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
             Why Choose Us?
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <Card className="border-none shadow-none bg-transparent hover:bg-muted/50 transition-all duration-300 p-4 rounded-lg">
              <CardContent className="p-0 space-y-2">
                <div className="p-2 bg-primary/10 rounded-full w-fit">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Streamlined Compliance</h3>
                <p className="text-muted-foreground">
                We simplify complex compliance requirements into actionable steps tailored to your stage and structure.
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
                Our certified security professionals bring enterprise-grade insight to growing businesses and resource-limited
                teams.
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
                Whether you-re seed-stage or scaling to Series C, our methodology flexes to your stack, size, and growth
                trajectory.
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
            Impact at a Glance
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              We've helped companies across various industries achieve their
              compliance goals.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <span className="text-4xl font-bold text-sidebar-primary counter-animate">
                100+
              </span>
              <span className="text-sm text-muted-foreground mt-1">
              Clients Served
              </span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <span className="text-4xl font-bold text-sidebar-primary counter-animate">
                98%
              </span>
              <span className="text-sm text-muted-foreground mt-1">
              Success Rate
              </span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <span className="text-4xl font-bold text-sidebar-primary counter-animate">
                3x
              </span>
              <span className="text-sm text-muted-foreground mt-1">
              Faster Compliance
              </span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <span className="text-4xl font-bold text-sidebar-primary counter-animate">
                50%
              </span>
              <span className="text-sm text-muted-foreground mt-1">
              Average Cost Reduction
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-16 md:py-24">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">Trusted by innovators in fintech, healthtech, SaaS, and beyond.</h2>
        </div>
        <div className="relative overflow-hidden w-full">
          <div className="marquee flex items-center gap-12 w-max" style={{ animation: 'marquee 30s linear infinite' }}>
            {[
              { name: "Anthill", logo: "./anthil.png" },
              { name: "Amazon", logo: "./amazon.png" },
              { name: "Anthill", logo: "./anthil.png" },
              { name: "Amazon", logo: "./amazon.png" },
              { name: "Anthill", logo: "./anthil.png" },
              { name: "Amazon", logo: "./amazon.png" },
            ].map((company, i) => (
              <div
                key={i}
                className="h-12 flex items-center justify-center"
                style={{ minWidth: 120 }}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
            {/* Duplicate for seamless looping */}
            {[
              { name: "Anthill", logo: "./anthil.png" },
              { name: "Amazon", logo: "./amazon.png" },
              { name: "Anthill", logo: "./anthil.png" },
              { name: "Amazon", logo: "./amazon.png" },
              { name: "Anthill", logo: "./anthil.png" },
              { name: "Amazon", logo: "./amazon.png" },
            ].map((company, i) => (
              <div
                key={`dup-${i}`}
                className="h-12 flex items-center justify-center"
                style={{ minWidth: 120 }}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
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
                <h3 className="text-xl font-bold mb-2">Compliance Readiness Packages</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Prepare your organization for certifications across SOC 2, ISO 27001, HIPAA, GDPR, and ISO/IEC 42001. We deliver gap assessments, control mapping, documentation, and audit coaching tailored to your compliance framework.
                </p>
                <Link
                  href="/services/Compliance"
                  className="group flex items-center text-primary font-medium"
                >
                  Learn about our compliance packages
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
                  Cloud Security Posture Review
                </h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Identify and remediate cloud security risks in AWS, Azure, or GCP. We analyze access controls, logging, encryption, and system architecture.
                </p>
                <Link
                  href="/services/cloud-security"
                  className="group flex items-center text-primary font-medium"
                >
                  Explore our cloud security services
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
                  Gain strategic compliance and security leadership without the cost of a full-time executive. Flexible and scalable for your needs.
                </p>
                <Link
                  href="/services/vciso"
                  className="group flex items-center text-primary font-medium"
                >
                  Discover our vCISO services
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Frameworks We Support</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">SOC 2 (Type I & II)</Badge>
              <Badge variant="secondary" className="text-sm">ISO/IEC 27001</Badge>
              <Badge variant="secondary" className="text-sm">HIPAA</Badge>
              <Badge variant="secondary" className="text-sm">GDPR</Badge>
              <Badge variant="secondary" className="text-sm">ISO/IEC 42001</Badge>
              <Badge variant="secondary" className="text-sm">NIST 800-53</Badge>
              <Badge variant="secondary" className="text-sm">PCI DSS (on request)</Badge>
            </div>
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
                  "Complianta helped us achieve SOC 2 compliance in record time. Their expertise was invaluable",
                name: "Sarah Johnson",
                title: "CTO, FinTech Startup",
                image: "/testimonial-1.png"
              },
              {
                quote:
                  "The team at Via Comply simplified the complex world of compliance for us. We couldn't have done it without them.",
                name: "Michael Chen",
                title: "CEO, Health Tech Company",
                image: "/testimonial-2.png"
              },
              {
                quote:
                  "Their vCISO service provided us with enterprise-level security leadership at a fraction of the cost.",
                name: "Jessica Williams",
                title: "COO, SaaS Platform",
                image: "/testimonial-3.png"
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
                      src={testimonial.image}
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
