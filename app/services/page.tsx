import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CalendlyWidget } from "@/components/calendly-widget";

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - updated to match case studies style */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Compliance & Security Programs Engineered for Growth</h1>
            <p className="mt-4 text-muted-foreground dark:text-white md:text-xl">
              We deliver structured, audit-aligned programs that balance speed, scalability, and assurance — designed for high-velocity teams navigating security, compliance, and AI governance.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-16">
            {/* AI Governance Compliance */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  AI Governance Compliance (ISO/IEC 42001)
                </h2>
                <p className="text-muted-foreground dark:text-white mb-6">
                  Prepare your organization to lead responsibly with AI. We align your models, controls, and internal accountability with ISO/IEC 42001 — the emerging global standard for AI risk management.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    "Governance policy development and stakeholder training",
                    "Risk mapping and AI use case classification",
                    "Technical alignment (bias, explainability, data stewardship)",
                    "Documentation and audit preparation support"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button asChild>
                  <Link href="/services/ai-governance" className="group">
                    Explore AI Governance
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/aigouv.jpg"
                    alt="AI Governance"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Cloud Security Posture Review */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                Cloud Security Posture Review
                </h2>
                <p className="text-muted-foreground dark:text-white mb-6">
                  Security misconfigurations are the #1 cause of cloud breaches. We assess your AWS, Azure, or GCP environment through the lens of compliance frameworks and secure-by-design principles.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    "Full-stack infrastructure review (IAM, encryption, logging, network)",
                    "SOC 2 / ISO 27001 / HIPAA alignment across controls",
                    "Threat surface mapping and actionable hardening guidance",
                    "Follow-up workshop and remediation strategy"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button asChild>
                  <Link href="/services/cloud-security" className="group">
                    Start Your Review
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="order-1">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/cloud.jpg"
                    alt="Cloud Security"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* vCISO Advisory Program */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  vCISO Advisory Program
                </h2>
                <p className="text-muted-foreground dark:text-white mb-6">
                  Security isn't a checkbox — it's a leadership function. Our fractional CISO offering provides board-level clarity, client-facing confidence, and internal structure without the full-time executive overhead.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    "Security strategy and governance roadmap",
                    "Risk program development and board reporting",
                    "Third-party risk management and vendor review",
                    "Audit, customer diligence, and investor Q&A support"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button asChild>
                  <Link href="/services/vciso" className="group">
                    Discover Our vCISO Program
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/vciso.jpg"
                    alt="vCISO Advisory"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Compliance Jumpstart for Startups */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  Compliance Jumpstart for Startups
                </h2>
                <p className="text-muted-foreground dark:text-white mb-6">
                  Designed for founder-led, lean teams. We deliver policy templates, operational controls, and roadmap planning for your first audit or enterprise deal.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    "Lightweight control framework mapped to SOC 2 & ISO 27001",
                    "Security policy drafting and evidence toolkit setup",
                    "Data access, role design, and ownership training",
                    "Ready-to-customize artifacts for fast traction"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button asChild>
                  <Link href="/services/startup-compliance" className="group">
                    Launch Your Program
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="order-1">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/compliance.jpg"
                    alt="Startup Compliance"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Audit Readiness Accelerator */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  Audit Readiness Accelerator (8–12 Weeks)
                </h2>
                <p className="text-muted-foreground dark:text-white mb-6">
                  Fast-track your path to certification. Whether it's SOC 2 Type I or ISO 27001, we build and coach you through a closed-loop audit readiness cycle with nothing left behind.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    "End-to-end gap assessment and roadmap",
                    "Control remediation guidance and tool integration",
                    "Auditor coordination, evidence walkthroughs, and prep sessions",
                    "Full documentation suite and pre-audit QA"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button asChild>
                  <Link href="/services/audit-readiness" className="group">
                    See What's Included
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/audit.webp"
                    alt="Audit Readiness"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Need a tailored program or dual-framework rollout?
            </h2>
            <p className="mt-4 text-muted-foreground dark:text-white md:text-xl">
              We support organizations managing parallel frameworks, evolving AI risk postures, or public-sector readiness. Book a strategy call to scope your needs.
            </p>
            <div className="mt-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg">Schedule a Consultation</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>Schedule a Free Consultation</DialogTitle>
                  <div className="w-full" style={{ minHeight: 600 }}>
                    <CalendlyWidget />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
