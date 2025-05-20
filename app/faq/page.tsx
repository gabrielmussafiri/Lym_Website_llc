"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const FAQ_CATEGORIES = [
  {
    key: "general",
    label: "General",
    title: "General Questions",
    faqs: [
                  {
                    question: "What services does Via Comply offer?",
                    answer:
                      "Via Comply offers a range of security and compliance services, including SOC 2 readiness, cloud security reviews, and virtual CISO (vCISO) advisory services. Our goal is to help startups and growing companies achieve and maintain compliance with industry standards while strengthening their overall security posture.",
                  },
                  {
                    question: "How do I know which compliance framework is right for my business?",
                    answer:
                      "The right compliance framework depends on your industry, customer requirements, and business goals. SOC 2 is often required for SaaS companies, HIPAA for healthcare, and ISO 27001 for international businesses. We offer free consultations to help determine which frameworks are most relevant for your specific situation.",
                  },
                  {
                    question: "How much do your services cost?",
                    answer:
                      "Our service costs vary based on the scope of work, your organization's size, and current security maturity. We offer flexible pricing models, including project-based and retainer options. Contact us for a customized quote based on your specific needs.",
                  },
                  {
                    question: "How long does it take to work with Via Comply?",
                    answer:
          "Engagement timelines vary based on the service and your organization's needs. SOC 2 readiness typically takes 8-12 weeks for Type I and 6-9 months for Type II. Other services and vCISO programs are scoped according to your requirements.",
      },
    ],
  },
  {
    key: "soc2",
    label: "SOC 2",
    title: "SOC 2 Questions",
    faqs: [
                  {
                    question: "What is SOC 2 compliance?",
                    answer:
                      "SOC 2 (System and Organization Controls 2) is a framework developed by the American Institute of CPAs (AICPA) that defines criteria for managing customer data based on five 'trust service principles': security, availability, processing integrity, confidentiality, and privacy.",
                  },
                  {
                    question: "What's the difference between SOC 2 Type I and Type II?",
                    answer:
                      "SOC 2 Type I assesses whether your security controls are properly designed at a specific point in time. Type II evaluates the operational effectiveness of those controls over a period (typically 6-12 months).",
                  },
                  {
                    question: "How long does it typically take to achieve SOC 2 compliance?",
                    answer:
                      "The timeline for SOC 2 compliance varies based on your organization's size and current security posture. With our streamlined approach, most startups can achieve SOC 2 Type I in 8-12 weeks and Type II in 6-9 months.",
                  },
                  {
                    question: "Do we need SOC 2 compliance for our startup?",
                    answer:
                      "If you handle customer data, especially for enterprise clients, SOC 2 compliance is increasingly becoming a requirement. It demonstrates your commitment to security and can be a competitive advantage in sales conversations.",
                  },
    ],
  },
  {
    key: "cloud",
    label: "Cloud Security",
    title: "Cloud Security Questions",
    faqs: [
                  {
        question: "What is a Cloud Security Review?",
                    answer:
          "A Cloud Security Review is a comprehensive assessment of your cloud infrastructure (AWS, Azure, GCP) to identify misconfigurations, security gaps, and compliance risks. We provide actionable recommendations to strengthen your cloud environment and align with frameworks like SOC 2 and ISO 27001.",
                  },
                  {
                    question: "Which cloud platforms do you support?",
                    answer:
          "We support AWS, Microsoft Azure, and Google Cloud Platform (GCP). Our team has deep expertise in multi-cloud and hybrid environments.",
                  },
                  {
        question: "How often should we review our cloud security?",
                    answer:
          "We recommend conducting a cloud security review at least annually, or after significant changes to your infrastructure. Regular reviews help ensure ongoing compliance and reduce the risk of breaches.",
                  },
    ],
  },
  {
    key: "vciso",
    label: "vCISO Services",
    title: "vCISO Services Questions",
    faqs: [
                  {
                    question: "What is a vCISO?",
                    answer:
          "A virtual Chief Information Security Officer (vCISO) is an outsourced security executive who provides strategic leadership, risk management, and compliance oversight without the cost of a full-time hire.",
                  },
                  {
        question: "What does your vCISO service include?",
                    answer:
          "Our vCISO service includes security program development, policy creation, risk assessments, audit preparation, board reporting, and ongoing advisory support tailored to your business needs.",
                  },
                  {
        question: "Can your vCISO work with our clients or auditors?",
                    answer:
          "Yes, our vCISO can represent your organization in client meetings, vendor reviews, and audit engagements to ensure you present a strong security posture.",
      },
    ],
  },
]

export default function FAQPage() {
  const [selectedTab, setSelectedTab] = useState("general")
  const currentCategory = FAQ_CATEGORIES.find((cat) => cat.key === selectedTab)

  return (
    <div className="flex flex-col min-h-screen bg-[#f7fafd]">
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#1a2a3a]">Complianta</h1>
          <div className="flex justify-center mb-8">
            <div className="flex gap-2 bg-[#e3eaf3] rounded-lg p-1">
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat.key}
                  className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${selectedTab === cat.key ? "bg-[#7ea6e0] text-white" : "text-[#1a2a3a] hover:bg-[#d0d8e6]"}`}
                  onClick={() => setSelectedTab(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-8 text-[#1a2a3a]">{currentCategory?.title}</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {currentCategory?.faqs.map((faq, i) => (
              <Card key={i} className="bg-white border border-[#e3eaf3] shadow-sm">
                    <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-[#1a2a3a]">{faq.question}</h3>
                  <p className="text-[#3a4a5a]">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Still have questions?
            </h2>
            <p className="mt-4 text-muted-foreground dark:text-white md:text-xl">
              Let's talk. We'll guide your next steps with clarity.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg">Schedule a Consultation</Button>
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
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
