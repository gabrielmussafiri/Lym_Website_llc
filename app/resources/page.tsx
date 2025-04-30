import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, FileText, Download } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resources</h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Guides, articles, and tools to help you navigate the world of security and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-10">Featured Resources</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            {[
              {
                title: "The Ultimate Guide to SOC 2 Compliance",
                description:
                  "Everything you need to know about SOC 2 compliance, from understanding the framework to achieving certification.",
                image: "/soc2-guide-cover.png",
                category: "Guide",
                link: "/resources/soc2-guide",
              },
              {
                title: "Cloud Security Best Practices for Startups",
                description:
                  "Learn how to secure your cloud infrastructure with practical, actionable best practices tailored for startups.",
                image: "/cloud-security-guide.jpg",
                category: "Guide",
                link: "/resources/cloud-security-best-practices",
              },
            ].map((resource, i) => (
              <Card
                key={i}
                className="overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-video relative">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge>{resource.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <Link href={resource.link} className="group flex items-center text-primary font-medium">
                    Read guide
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">Latest Articles</h2>
              <p className="mt-2 text-muted-foreground">
                Insights and advice from our security and compliance experts.
              </p>
            </div>
            <Button variant="outline" asChild className="mt-4 md:mt-0">
              <Link href="/resources/articles">View All Articles</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "5 Common SOC 2 Compliance Pitfalls and How to Avoid Them",
                description:
                  "Learn about the most common mistakes organizations make when pursuing SOC 2 compliance and how to avoid them.",
                date: "May 15, 2023",
                author: "Sarah Johnson",
                category: "Compliance",
                link: "/resources/articles/soc2-pitfalls",
              },
              {
                title: "Securing Your AWS Environment: A Practical Guide",
                description:
                  "A step-by-step guide to securing your AWS environment, from IAM best practices to network security.",
                date: "April 22, 2023",
                author: "Michael Chen",
                category: "Cloud Security",
                link: "/resources/articles/aws-security",
              },
              {
                title: "Building a Security-First Culture in Your Startup",
                description:
                  "How to foster a security-first culture in your organization, from leadership buy-in to employee training.",
                date: "March 10, 2023",
                author: "Jessica Williams",
                category: "Security Culture",
                link: "/resources/articles/security-culture",
              },
              {
                title: "HIPAA Compliance for SaaS Companies: What You Need to Know",
                description:
                  "A comprehensive overview of HIPAA compliance requirements for SaaS companies handling protected health information.",
                date: "February 28, 2023",
                author: "Emily Patel",
                category: "Compliance",
                link: "/resources/articles/hipaa-saas",
              },
              {
                title: "The Role of a CISO in Modern Startups",
                description:
                  "Exploring the evolving role of the Chief Information Security Officer in today's startup ecosystem.",
                date: "January 15, 2023",
                author: "David Rodriguez",
                category: "Leadership",
                link: "/resources/articles/ciso-role",
              },
              {
                title: "Preparing for Your First SOC 2 Audit: A Timeline and Checklist",
                description:
                  "A practical timeline and checklist to help you prepare for your first SOC 2 audit with confidence.",
                date: "December 5, 2022",
                author: "Sarah Johnson",
                category: "Compliance",
                link: "/resources/articles/soc2-audit-prep",
              },
            ].map((article, i) => (
              <Card key={i} className="flex flex-col h-full hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-center mb-4">
                    <Badge variant="outline" className="mr-2">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{article.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t">
                    <span className="text-sm">By {article.author}</span>
                    <Link href={article.link} className="group flex items-center text-primary text-sm font-medium">
                      Read more
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Templates & Tools */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-10">Templates & Tools</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "SOC 2 Policy Templates Bundle",
                description:
                  "A comprehensive set of policy templates to help you establish the documentation required for SOC 2 compliance.",
                icon: <FileText className="h-8 w-8 text-primary" />,
                link: "/resources/templates/soc2-policies",
              },
              {
                title: "Cloud Security Assessment Tool",
                description:
                  "A self-assessment tool to evaluate the security of your cloud infrastructure against best practices.",
                icon: <BookOpen className="h-8 w-8 text-primary" />,
                link: "/resources/tools/cloud-assessment",
              },
              {
                title: "Vendor Security Questionnaire Template",
                description:
                  "A customizable template for assessing the security posture of your vendors and third-party providers.",
                icon: <FileText className="h-8 w-8 text-primary" />,
                link: "/resources/templates/vendor-questionnaire",
              },
              {
                title: "Security Incident Response Plan Template",
                description:
                  "A template to help you develop a comprehensive plan for responding to security incidents.",
                icon: <FileText className="h-8 w-8 text-primary" />,
                link: "/resources/templates/incident-response",
              },
              {
                title: "Compliance Roadmap Generator",
                description:
                  "An interactive tool to generate a customized compliance roadmap based on your specific needs.",
                icon: <BookOpen className="h-8 w-8 text-primary" />,
                link: "/resources/tools/compliance-roadmap",
              },
              {
                title: "Security Awareness Training Materials",
                description: "Ready-to-use training materials to help educate your team on security best practices.",
                icon: <Download className="h-8 w-8 text-primary" />,
                link: "/resources/templates/security-training",
              },
            ].map((resource, i) => (
              <Card key={i} className="hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <Link href={resource.link} className="group flex items-center text-primary font-medium">
                    Access resource
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter to receive the latest security and compliance insights, tips, and resources.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="rounded-lg bg-primary-foreground p-8 md:p-10 lg:p-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Need personalized guidance?
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Contact our team for expert advice tailored to your specific security and compliance needs.
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
  )
}
