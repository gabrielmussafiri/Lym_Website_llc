import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CalendlyWidget } from "@/components/calendly-widget"

const articles = [
  {
    slug: "ai-startups-enterprise-trust",
    title: "How AI Startups Are Building Enterprise Trust with ISO/IEC 42001",
    excerpt: "In today's AI-driven economy, governance isn't a formality—it's a differentiator. Here's how a startup aligned with ISO/IEC 42001 and accelerated their path to enterprise adoption.",
    author: "Yannick Massivi",
    date: "January 2025",
    image: "/startups.jpg"
  },
  {
    slug: "hipaa-hospital-audit-healthtech",
    title: "What It Takes to Pass a Hospital Audit: HIPAA Compliance for Growing HealthTech Startups",
    excerpt: "A practical look at how one healthcare SaaS company secured protected health information, hardened its cloud, and passed a hospital audit — in just 12 weeks.",
    author: "Yannick Massivi",
    date: "June 2025",
    image: "/HealthTech.jpg"
  },
  {
    slug: "b2b-saas-soc2-enterprise-trust",
    title: "How B2B SaaS Startups Can Fast-Track SOC 2 and Win Enterprise Trust",
    excerpt: "A 10-week path to compliance, maturity, and customer confidence — without slowing down your roadmap.",
    author: "Yannick Massivi",
    date: "April 2025",
    image: "/b2bsaas.jpg"
  },
  {
    slug: "govtech-nist-fedramp",
    title: "How Cloud-Native GovTech Startups Can Align with NIST 800-53 and FedRAMP to Unlock Federal Markets",
    excerpt: "A strategic roadmap for early-stage SaaS teams looking to win government trust, pass agency reviews, and build a scalable security foundation.",
    author: "Yannick Massivi",
    date: "May 2025",
    image: "/cloud-native.png"
  }
]

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - consistent with other main pages */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Resources & Blogs</h1>
            <p className="mt-4 text-muted-foreground dark:text-white md:text-xl">
              Insights, stories, and practical guidance for compliance, security, and AI governance. See how organizations like yours achieve their goals—and learn from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Index Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="grid gap-10 md:grid-cols-2">
            {articles.map(article => (
              <div key={article.slug} className="border rounded-lg shadow-sm bg-background p-6 flex flex-col justify-between h-full">
                <div>
                  <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded mb-4" />
                  <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span>By {article.author}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                </div>
                <div className="mt-4">
                  <Link href={`/resources/${article.slug}`} className="inline-flex items-center text-primary font-medium hover:underline">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Become the next success story.
            </h2>
            <p className="text-foreground">
              Whether you're scaling to Series B or seeking to unlock public sector contracts, we help you prove trust, protect growth, and lead with clarity.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg">Schedule Your Consultation</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>Schedule a Free Consultation</DialogTitle>
                  <div className="w-full" style={{ minHeight: 600 }}>
                    <CalendlyWidget />
                  </div>
                </DialogContent>
              </Dialog>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
