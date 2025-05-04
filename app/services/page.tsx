import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

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
              Tailored solutions to help your organization meet industry
              standards and protect sensitive data.
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
                  SOC 2 Readiness
                </h2>
                <p className="text-muted-foreground dark:text-white mb-6">
                  Our SOC 2 Readiness service helps organizations prepare for
                  and achieve SOC 2 compliance efficiently. We guide you through
                  the entire process, from gap assessment to remediation and
                  audit preparation.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    "Comprehensive gap assessment against SOC 2 criteria",
                    "Customized remediation plan tailored to your organization",
                    "Policy and procedure development",
                    "Implementation guidance and support",
                    "Audit preparation and readiness verification",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button asChild>
                  <Link href="/services/soc2">
                    Learn More About SOC 2 Readiness
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
                  Cloud Security Review
                </h2>
                <p className="text-muted-foreground dark:text-white mb-6">
                  Our Cloud Security Review service provides a comprehensive
                  assessment of your cloud infrastructure, identifying
                  vulnerabilities and recommending security enhancements to
                  protect your data and systems.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    "Thorough assessment of cloud infrastructure security",
                    "Identification of configuration vulnerabilities",
                    "Access control and identity management review",
                    "Data protection and encryption assessment",
                    "Detailed remediation recommendations",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button asChild>
                  <Link href="/services/cloud-security">
                    Learn More About Cloud Security
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
                  vCISO Advisory
                </h2>
                <p className="text-muted-foreground dark:text-white mb-6">
                  Our Virtual CISO (vCISO) service provides expert security
                  leadership without the cost of a full-time executive. Get
                  strategic guidance, program development, and ongoing support
                  from experienced security professionals.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    "Strategic security program development",
                    "Security roadmap creation and implementation",
                    "Risk assessment and management",
                    "Security policy development and governance",
                    "Incident response planning and management",
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
              Contact us today to discuss your security and compliance needs.
              Our team of experts is ready to help.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
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
