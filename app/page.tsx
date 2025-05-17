import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, ShieldCheck, Users, Target } from "lucide-react";
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
            {/* Top Tagline */}
            <div className="mb-4">
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary/80 bg-primary/10 rounded px-3 py-1">
                Trusted by scaling startups & fast-moving enterprises
              </span>
            </div>
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-balance text-foreground mb-6 text-left">
              Compliance & AI Governance for the Modern Enterprise
            </h1>
            {/* Subheading / Supporting Text */}
            <p className="text-lg sm:text-xl md:text-2xl text-foreground mb-8 max-w-2xl">
              We help innovative companies build trust and scale securely by aligning with frameworks like SOC 2, ISO/IEC 27001, HIPAA, GDPR, and ISO/IEC 42001.<br />
              Our programs deliver audit-ready precision, security-first implementation, and enterprise-grade velocity.
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
                <Link href="/services">Browse Our Services</Link>
              </Button>
            </div>
            {/* Trust Indicators Row */}
            <div className="mt-8 w-full">
              <div className="flex flex-wrap gap-4 items-center text-muted-foreground text-sm font-medium">
                <span>Trusted by early-stage startups, AI innovators, and fast-growing teams.</span>
                {/* Optionally, add logos here if available */}
              </div>
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
              Why Leading Teams Choose Complianta
            </h2>
            <p className="text-foreground">
              Precision Meets Speed
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4 lg:gap-12">
            <Card className="border-none shadow-none bg-transparent hover:bg-muted/50 transition-all duration-300 p-4 rounded-lg">
              <CardContent className="p-0 space-y-2">
                <div className="p-2 bg-primary/10 rounded-full w-fit">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Precision Meets Speed</h3>
                <p className="text-foreground">
                  We compress compliance timelines without cutting corners — delivering clarity, control, and credibility in record time.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-none bg-transparent hover:bg-muted/50 transition-all duration-300 p-4 rounded-lg">
              <CardContent className="p-0 space-y-2">
                <div className="p-2 bg-primary/10 rounded-full w-fit">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Built for Scaled Tech & Public Sector</h3>
                <p className="text-foreground">
                  Whether you're SaaS, AI-native, or government-facing, our methodology adapts to your team, tools, and trajectory.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-none bg-transparent hover:bg-muted/50 transition-all duration-300 p-4 rounded-lg">
              <CardContent className="p-0 space-y-2">
                <div className="p-2 bg-primary/10 rounded-full w-fit">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Framework-Driven, Founder-Focused</h3>
                <p className="text-foreground">
                  Led by certified experts who've guided 100+ audit cycles across regulated industries. Our engagements run lean — but never light.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-none bg-transparent hover:bg-muted/50 transition-all duration-300 p-4 rounded-lg">
              <CardContent className="p-0 space-y-2">
                <div className="p-2 bg-primary/10 rounded-full w-fit">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Security-Driven Outcomes</h3>
                <p className="text-foreground">
                  Get certified, reduce risk, and close enterprise deals with confidence.
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
            <p className="mt-4 text-foreground md:text-xl">
              We've helped companies across various industries achieve their compliance goals.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <span className="text-4xl font-bold text-sidebar-primary dark:text-blue-400 counter-animate">
                100+
              </span>
              <span className="text-sm text-foreground mt-1">
                Clients Served
              </span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <span className="text-4xl font-bold text-sidebar-primary dark:text-blue-400 counter-animate">
                98%
              </span>
              <span className="text-sm text-foreground mt-1">
                Success Rate
              </span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <span className="text-4xl font-bold text-sidebar-primary dark:text-blue-400 counter-animate">
                3x
              </span>
              <span className="text-sm text-foreground mt-1">
                Faster Compliance
              </span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <span className="text-4xl font-bold text-sidebar-primary dark:text-blue-400 counter-animate">
                50%
              </span>
              <span className="text-sm text-foreground mt-1">
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
              Our Advisory Programs
            </h2>
            <p className="mt-4 text-foreground dark:text-white md:text-xl max-w-3xl mx-auto">
              Comprehensive compliance and security solutions tailored to your business needs
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <Card className="flex flex-col h-full transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col flex-1 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Governance (ISO/IEC 42001)</h3>
                <p className="text-foreground dark:text-white mb-4 flex-1">
                  The first boutique compliance program purpose-built for AI companies. Translate ethics into systems, risk into policy, and transparency into trust.
                </p>
                <Link
                  href="/services/ai-governance"
                  className="group flex items-center text-primary font-medium"
                >
                  Explore
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col flex-1 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cloud Security Review</h3>
                <p className="text-foreground dark:text-white mb-4 flex-1">
                  End-to-end assessment across AWS, Azure, or GCP aligned to SOC 2, ISO 27001, and HIPAA security domains. Configured for scale and speed.
                </p>
                <Link
                  href="/services/cloud-security"
                  className="group flex items-center text-primary font-medium"
                >
                  Learn More
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
                <p className="text-foreground dark:text-white mb-4 flex-1">
                  Fractional security leadership to help you manage audits, mature risk posture, and brief executives with confidence.
                </p>
                <Link
                  href="/services/vciso"
                  className="group flex items-center text-primary font-medium"
                >
                  View Program
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col flex-1 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Audit Readiness Accelerator</h3>
                <p className="text-foreground dark:text-white mb-4 flex-1">
                  8–12 week bootcamps to bring your org from ad hoc to audit-aligned. Includes gap analysis, evidence planning, and team coaching.
                </p>
                <Link
                  href="/services/audit-readiness"
                  className="group flex items-center text-primary font-medium"
                >
                  See What's Included
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col flex-1 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Startup Compliance Foundations</h3>
                <p className="text-foreground dark:text-white mb-4 flex-1">
                  A structured track to design controls, operationalize policies, and map risk in pre-audit environments.
                </p>
                <Link
                  href="/services/startup-compliance"
                  className="group flex items-center text-primary font-medium"
                >
                  Jumpstart Compliance
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Frameworks We Operationalize</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">SOC 2 (Type I & II)</Badge>
              <Badge variant="secondary" className="text-sm">ISO/IEC 27001</Badge>
              <Badge variant="secondary" className="text-sm">HIPAA / GDPR</Badge>
              <Badge variant="secondary" className="text-sm">ISO/IEC 42001 (AI Governance)</Badge>
              <Badge variant="secondary" className="text-sm">NIST 800-53</Badge>
              <Badge variant="secondary" className="text-sm">PCI DSS (by request)</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Trusted by High-Trust Companies
            </h2>
            <p className="mt-4 text-foreground dark:text-white md:text-xl max-w-3xl mx-auto">
              We support high-velocity teams across:
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Fintech / Healthtech",
                description: "Helping financial and healthcare innovators build trust through robust security and compliance.",
                icon: <Shield className="h-10 w-10 text-primary" />,
              },
              {
                title: "AI/ML Startups",
                description: "Supporting AI companies in implementing governance and security best practices.",
                icon: <Target className="h-10 w-10 text-primary" />,
              },
              {
                title: "GovTech & Public Sector Vendors",
                description: "Enabling public sector technology providers to meet strict compliance requirements.",
                icon: <Users className="h-10 w-10 text-primary" />,
              },
            ].map((industry, i) => (
              <Card
                key={i}
                className="border-none shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-primary/10 rounded-full">{industry.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                  <p className="text-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proof in Execution */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Proof in Execution
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                quote: "Complianta delivered clarity in a space where others brought red tape. Our SOC 2 Type I was done faster than we thought possible.",
                author: "CTO, Fintech Scale-Up"
              },
              {
                quote: "They made ISO 27001 feel achievable for a startup. Practical. Clean. Audit-approved.",
                author: "Head of Engineering, SaaS Platform"
              },
              {
                quote: "From zero policy to AI governance board in six weeks — they led every conversation with depth and integrity.",
                author: "COO, AI Analytics Firm"
              }
            ].map((testimonial, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="text-4xl text-primary mb-4">"</div>
                <blockquote className="text-lg font-medium mb-4">
                  {testimonial.quote}
                </blockquote>
                <p className="font-medium text-foreground opacity-80">
                  — {testimonial.author}
                </p>
              </div>
            ))}
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
                  "Complianta helped us achieve SOC 2 compliance in record time. Their expertise was invaluable.",
                name: "Sarah Johnson",
                title: "CTO, FinTech Startup",
               
              },
              {
                quote:
                  "hey simplified the complex world of compliance for us. We couldn't have done it without them.",
                name: "Michael Chen",
                title: "CEO, Health Tech Company",
                
              },
              {
                quote:
                  "Their vCISO service gave us enterprise-grade strategy at a startup-friendly cost.",
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
                  <p className="text-foreground dark:text-white mb-6 flex-1">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                   
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="font-medium text-foreground opacity-80">
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Case Studies
              </h2>
              <p className="mt-4 text-foreground dark:text-white md:text-xl max-w-2xl">
                Real results from companies like yours
              </p>
            </div>
            <Button
              variant="outline"
              asChild
              className="mt-4 md:mt-0 hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <Link href="/case-studies" className="group">
                View Case Studies
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3 lg:gap-12">
            {[
              {
                title: "$1.2M Pipeline Unlocked",
                description: "Fintech platform closes enterprise deals post-SOC 2",
                category: "SOC 2",
                image: "/case1.png",
                link: "/case-studies/fintech-soc2"
              },
              {
                title: "HIPAA Infrastructure Hardening",
                description: "Healthtech startup secures sensitive PHI with compliant architecture",
                category: "HIPAA",
                image: "/Hippa2.png",
                link: "/case-studies/healthcare-hipaa"
              },
              {
                title: "AI Risk & Readiness",
                description: "LLM-based product builds ISO/IEC 42001-aligned governance to satisfy top-tier investors",
                category: "AI Governance",
                image: "/ai-case-study.jpg",
                link: "/case-studies/ai-governance"
              }
            ].map((study, i) => (
              <Card
                key={i}
                className="overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-video relative">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{study.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-foreground dark:text-white mb-4">
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
                This is compliance as a growth enabler — not a checkbox.
              </h2>
              <p className="mt-4 text-foreground dark:text-white md:text-xl">
                Partner with Complianta to accelerate trust, reduce risk, and scale securely.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 animate-pulse-subtle"
                    >
                      Schedule a Consultation
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
                  className="hover:bg-primary/10"
                >
                  <Link href="/services">Explore Our Services</Link>
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
            <p className="mt-4 text-foreground dark:text-white md:text-xl max-w-2xl mx-auto">
              Get answers to common questions about compliance and our services.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                question:
                  "How long does compliance take?",
                answer:
                  "Type I: 8–12 weeks. Type II: 6–9 months. Varies by framework and readiness",
              },
              {
                question:
                  "What's the difference between Type I and II?",
                answer:
                  "Type I is a snapshot in time; Type II proves operational maturity over months",
              },
              {
                question: "Do I need SOC 2 or ISO as a startup or tech company?",
                answer:
                  "If you store customer data or want to close larger deals, yes. It's a trust signal.",
              },
            ].map((faq, i) => (
              <Card
                key={i}
                className="border border-border transform hover:scale-[1.02] transition-all duration-300 hover:shadow-md"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-foreground dark:text-white">{faq.answer}</p>
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
