import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, CheckCircle, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function CloudSecurityGuidePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cloud-security-guide-hero.png"
            alt="Cloud Security Best Practices"
            fill
            priority
            className="object-cover"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary hover:bg-primary text-white">Practical Guide</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
              Cloud Security Best Practices for Startups
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Learn how to secure your cloud infrastructure with practical, actionable best practices tailored for
              startups.
            </p>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
              <Download className="mr-2 h-4 w-4" />
              Download PDF Version
            </Button>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Introduction</h2>
              <p className="text-muted-foreground mb-6">
                Cloud computing has revolutionized how startups build and scale their products, offering unprecedented
                flexibility, scalability, and cost-efficiency. However, this shift to the cloud also introduces new
                security challenges that startups must address to protect their data and systems.
              </p>
              <p className="text-muted-foreground mb-6">
                This guide provides practical, actionable cloud security best practices specifically tailored for
                startups and growing companies. Whether you're using AWS, Azure, Google Cloud, or a multi-cloud
                environment, these recommendations will help you establish a strong security foundation without
                overwhelming your team or budget.
              </p>
              <p className="text-muted-foreground mb-6">
                We've focused on high-impact, low-effort security measures that provide the greatest security benefit
                with minimal resources. By implementing these best practices, you can significantly reduce your risk of
                security incidents while building customer trust and meeting compliance requirements.
              </p>
              <div className="my-10 p-6 bg-muted rounded-lg">
                <h3 className="text-xl font-bold mb-4">In this guide, you'll learn:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Essential cloud security concepts and terminology</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Identity and access management best practices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Data protection strategies for the cloud</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Network security configuration recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Monitoring and incident response approaches</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Compliance considerations for common frameworks</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    <a href="#cloud-security-fundamentals" className="block text-primary hover:underline">
                      1. Cloud Security Fundamentals
                    </a>
                    <a href="#identity-access-management" className="block text-primary hover:underline">
                      2. Identity & Access Management
                    </a>
                    <a href="#data-protection" className="block text-primary hover:underline">
                      3. Data Protection
                    </a>
                    <a href="#network-security" className="block text-primary hover:underline">
                      4. Network Security
                    </a>
                    <a href="#monitoring-logging" className="block text-primary hover:underline">
                      5. Monitoring & Logging
                    </a>
                    <a href="#incident-response" className="block text-primary hover:underline">
                      6. Incident Response
                    </a>
                    <a href="#compliance" className="block text-primary hover:underline">
                      7. Compliance Considerations
                    </a>
                    <a href="#resources" className="block text-primary hover:underline">
                      8. Additional Resources
                    </a>
                  </nav>
                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-semibold mb-2">Download Resources</h4>
                    <div className="space-y-3">
                      <a href="#" className="flex items-center text-sm text-primary hover:underline">
                        <FileText className="h-4 w-4 mr-2" />
                        Cloud Security Checklist
                      </a>
                      <a href="#" className="flex items-center text-sm text-primary hover:underline">
                        <FileText className="h-4 w-4 mr-2" />
                        IAM Policy Templates
                      </a>
                      <a href="#" className="flex items-center text-sm text-primary hover:underline">
                        <FileText className="h-4 w-4 mr-2" />
                        Security Monitoring Guide
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Security Fundamentals */}
      <section id="cloud-security-fundamentals" className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">1. Cloud Security Fundamentals</h2>
            <div className="prose max-w-none">
              <p>
                Before diving into specific best practices, it's important to understand some fundamental concepts that
                underpin cloud security. These concepts will help you make informed decisions about your cloud security
                strategy.
              </p>
              <h3>Shared Responsibility Model</h3>
              <p>
                The shared responsibility model defines the security responsibilities of the cloud provider versus the
                customer. While the specific division varies by provider and service type (IaaS, PaaS, SaaS), the
                general principle is:
              </p>
              <ul>
                <li>
                  <strong>Cloud Provider:</strong> Responsible for security "of" the cloud (infrastructure, physical
                  security, host operating system, etc.)
                </li>
                <li>
                  <strong>Customer:</strong> Responsible for security "in" the cloud (data, applications, identity
                  management, network controls, etc.)
                </li>
              </ul>
              <p>
                Understanding this model is crucial because it clarifies what security measures you need to implement
                versus what your cloud provider handles.
              </p>
              <h3>Defense in Depth</h3>
              <p>
                Defense in depth is a security strategy that employs multiple layers of controls to protect your systems
                and data. In the cloud, this means implementing security at various levels:
              </p>
              <ul>
                <li>Identity and access management</li>
                <li>Network security</li>
                <li>Application security</li>
                <li>Data protection</li>
                <li>Monitoring and detection</li>
              </ul>
              <p>
                By implementing controls at each layer, you create a more resilient security posture that doesn't rely
                on a single point of defense.
              </p>
              <h3>Principle of Least Privilege</h3>
              <p>
                The principle of least privilege states that users, systems, and applications should have only the
                minimum permissions necessary to perform their functions. This limits the potential damage from
                compromised accounts or systems.
              </p>
              <p>
                In the cloud, this principle applies to both human users and service accounts, and it's a cornerstone of
                effective access management.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg my-6">
                <h4 className="font-bold">Key Takeaway</h4>
                <p className="mb-0">
                  Cloud security requires a different mindset than traditional on-premises security. Understanding the
                  shared responsibility model, implementing defense in depth, and following the principle of least
                  privilege are foundational concepts that should guide your cloud security strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/resources">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Resources
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
