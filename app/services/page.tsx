import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services-hero.png"
            alt="Services"
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
            Comprehensive Security & Compliance Services
            </h1>
            <p className="mt-4 text-white/90 md:text-xl animate-fade-in-up-delay-1">
            Tailored solutions to help your organization meet industry standards, protect sensitive data, and accelerate growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            {/* SOC 2 Readiness */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                Compliance Readiness Packages
                </h2>
                <p className="text-muted-foreground dark:text-white mb-6">
                Prepare your organization for certifications across multiple frameworks, including SOC 2, ISO 27001, HIPAA, and GDPR. We lead the full lifecycle from assessment to auditor handoff.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    "Comprehensive gap analysis for applicable frameworks",
                    "Customized remediation roadmap and control mapping",
                    "Policy and documentation developmen",
                    "Security awareness and control ownership coaching",
                    "Evidence preparation and audit support",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button asChild>
                  <Link href="/services/Compliance">
                  Learn More About Compliance Readiness Packages
                  </Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/soc2-overview.png"
                    alt="SOC 2 Readiness"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Cloud Security Review */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                Cloud Security Posture Review

                </h2>
                <p className="text-muted-foreground dark:text-white mb-6">
                We assess your cloud infrastructure for risk across AWS, Azure, or GCP and deliver actionable guidance for remediation.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    "End-to-end infrastructure security assessment",
                    "IAM, access control, and privilege audit",
                    "Logging, encryption, and data protection review",,
                    "Secure configuration and best practices audit",
                    "Detailed recommendations with implementation support",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button asChild>
                  <Link href="/services/cloud-security">
                  Learn More About Cloud Security Review
                  </Link>
                </Button>
              </div>
              <div className="order-1">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/cloudsecurity.png"
                    alt="Cloud Security Review"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* vCISO Advisory */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                vCISO Advisory Services

                </h2>
                <p className="text-muted-foreground dark:text-white mb-6">
                Get strategic security leadership without the full-time executive overhead. Our fractional CISO program scales with your business.

                </p>
                <div className="space-y-3 mb-6">
                  {[
                    "Executive-level security strategy and governance",
                    "Risk management and third-party risk oversight",
                    "Compliance leadership and board-level reporting",
                    "Security policy lifecycle management",
                    "Incident response strategy and simulation",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button asChild>
                  <Link href="/services/vciso">
                  Learn More About vCISO Services
                  </Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/vciso.png"
                    alt="vCISO Advisory"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Ready to Get Started?
            </h2>
            <p className="mt-4 text-muted-foreground dark:text-white md:text-xl">
            Contact us today to discuss your security and compliance goals. Our team of experts is ready to help.
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
                <Link href="/case-studies">View Our Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
