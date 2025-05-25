"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Mail, Phone, MapPin, Calendar } from "lucide-react"
import type React from "react"
import { CalendlyWidget } from "@/components/calendly-widget"

const SERVICE_OPTIONS = [
  { value: "soc2", label: "SOC 2 Readiness" },
  { value: "iso27001", label: "ISO 27001 Implementation" },
  { value: "hipaa", label: "HIPAA/GDPR Compliance" },
  { value: "ai42001", label: "ISO/IEC 42001 AI Governance" },
  { value: "cloud", label: "Cloud Security Review" },
  { value: "vciso", label: "vCISO Advisory" },
]

type FormState = {
  name: string
  email: string
  company: string
  service: string
  message: string
}

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", company: "", service: "", message: "" })
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero/Intro Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Let's Build a Trust-Ready Program</h1>
          <p className="text-lg text-foreground mb-2">Have a framework in mind? A security gap to address? Need to get audit-ready fast?</p>
          <p className="text-lg text-foreground mb-6">Whether you're preparing for your first enterprise deal or expanding into AI-regulated markets, we're here to help.</p>
        </div>
      </section>

      {/* Main Content: Form, Direct Contact, FAQ Preview */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-start">
          {/* Contact Form Card */}
          <Card className="w-full bg-card border border-border">
            <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                      <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" value={formState.name} onChange={handleChange} required className="bg-background border border-border" />
                    </div>
                <div className="space-y-1">
                      <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} required className="bg-background border border-border" />
                    </div>
                <div className="space-y-1">
                      <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" value={formState.company} onChange={handleChange} required className="bg-background border border-border" />
                    </div>
                <div className="space-y-1">
                      <Label htmlFor="service">Service of Interest</Label>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="" disabled>Select a service</option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                    </div>
                <div className="space-y-1">
                      <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" value={formState.message} onChange={handleChange} rows={5} required className="bg-background border border-border" />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                {isSubmitted && (
                  <div className="text-green-600 text-center pt-2">Thank you! We'll be in touch within 24 hours.</div>
                )}
              </form>
              </CardContent>
            </Card>

          {/* Contact Info & FAQ */}
          <div className="flex flex-col gap-8">
            <div className="bg-card rounded-lg shadow-sm border border-border p-8">
              <h2 className="text-xl font-bold mb-2">Contact Information</h2>
              <p className="mb-4 text-muted-foreground">Reach out to us directly or schedule a consultation using the form.</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                    <span className="font-medium">Email</span><br />
                    <a href="mailto:info@complianta.com" className="text-muted-foreground hover:text-primary">info@complianta.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                    <span className="font-medium">Phone</span><br />
                    <a href="tel:+19723999143" className="text-muted-foreground hover:text-primary">+1 (972) 399-9143</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                    <span className="font-medium">Office</span><br />
                    Complianta LLC<br />
                    12436 FM 1960 Rd W<br />
                    Unit #1621<br />
                    Houston, TX 77065
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                    <span className="font-medium">Schedule a Call</span><br />
                    <span className="text-muted-foreground">Book a 30-minute consultation with our team.</span><br />
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="mt-2">Schedule Now</Button>
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
              </div>
            <div className="bg-card rounded-lg shadow-sm border border-border p-8">
              <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">How quickly can you help us achieve compliance?</h3>
                  <p className="text-muted-foreground">Timelines vary based on your current security posture and specific requirements. Most clients achieve SOC 2 Type I in 8-12 weeks.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Do you work with startups?</h3>
                  <p className="text-muted-foreground">Yes! We specialize in helping startups and growing companies achieve compliance efficiently.</p>
                </div>
                <Link href="/faq" className="text-primary hover:underline inline-block mt-2">View all FAQs</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Clarity starts with a conversation.</h2>
          <p className="text-lg text-foreground mb-8">Let's explore what you need, what's possible, and how fast we can help you get there.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg">Schedule Consultation</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Schedule a Free Consultation</DialogTitle>
                <div className="w-full" style={{ minHeight: 600 }}>
                  <CalendlyWidget />
                </div>
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
