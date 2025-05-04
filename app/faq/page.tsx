import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h1>
            <p className="mt-4 text-muted-foreground dark:text-white md:text-xl">
              Get answers to common questions about compliance, security, and our services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="general" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="soc2">SOC 2</TabsTrigger>
                <TabsTrigger value="cloud">Cloud Security</TabsTrigger>
                <TabsTrigger value="vciso">vCISO Services</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="general" className="space-y-6">
              <h2 className="text-2xl font-bold text-center mb-8">General Questions</h2>
              <div className="mx-auto max-w-3xl space-y-4">
                {[
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
                      "Engagement timelines vary based on the service and your organization's needs. SOC 2 readiness typically takes 8-12 weeks, cloud security reviews 2-4 weeks, and vCISO services are ongoing. We'll provide a detailed timeline during our initial consultation.",
                  },
                  {
                    question: "Do you work with startups?",
                    answer:
                      "Yes! We specialize in working with startups and growing companies. Our approach is designed to be efficient and cost-effective, helping startups achieve compliance without unnecessary overhead.",
                  },
                ].map((faq, i) => (
                  <Card key={i} className="border border-border">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground dark:text-white">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="soc2" className="space-y-6">
              <h2 className="text-2xl font-bold text-center mb-8">SOC 2 Questions</h2>
              <div className="mx-auto max-w-3xl space-y-4">
                {[
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
                  {
                    question: "How much does SOC 2 compliance cost?",
                    answer:
                      "The cost of SOC 2 compliance includes both the audit fees and the internal resources required to implement controls. Our approach is designed to minimize both costs by providing efficient guidance and tools.",
                  },
                ].map((faq, i) => (
                  <Card key={i} className="border border-border">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground dark:text-white">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cloud" className="space-y-6">
              <h2 className="text-2xl font-bold text-center mb-8">Cloud Security Questions</h2>
              <div className="mx-auto max-w-3xl space-y-4">
                {[
                  {
                    question: "What does a cloud security review include?",
                    answer:
                      "Our cloud security review includes an assessment of your cloud infrastructure configuration, access controls, data protection mechanisms, network security, and compliance with relevant frameworks. We identify vulnerabilities and provide recommendations for remediation.",
                  },
                  {
                    question: "Which cloud platforms do you support?",
                    answer:
                      "We support all major cloud platforms, including AWS, Microsoft Azure, Google Cloud Platform, and multi-cloud environments. Our team has expertise across these platforms and can help secure your specific cloud infrastructure.",
                  },
                  {
                    question: "How often should we conduct cloud security reviews?",
                    answer:
                      "We recommend conducting cloud security reviews at least annually, as well as after significant changes to your cloud infrastructure. Regular reviews help ensure your cloud environment remains secure as it evolves.",
                  },
                  {
                    question: "Can you help implement the recommended security enhancements?",
                    answer:
                      "Yes, we offer implementation support for the security enhancements we recommend. Our team can work with your technical staff to implement changes or provide guidance for your team to implement them.",
                  },
                  {
                    question: "How does cloud security relate to compliance frameworks like SOC 2?",
                    answer:
                      "Cloud security is a critical component of compliance frameworks like SOC 2. Many compliance requirements relate directly to how you secure your cloud infrastructure, and our cloud security reviews are designed to align with these requirements.",
                  },
                ].map((faq, i) => (
                  <Card key={i} className="border border-border">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground dark:text-white">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="vciso" className="space-y-6">
              <h2 className="text-2xl font-bold text-center mb-8">vCISO Services Questions</h2>
              <div className="mx-auto max-w-3xl space-y-4">
                {[
                  {
                    question: "What is a vCISO?",
                    answer:
                      "A vCISO (Virtual Chief Information Security Officer) provides expert security leadership and guidance without the cost of a full-time executive. Our vCISO service gives you access to experienced security professionals who can help develop and implement a comprehensive security strategy.",
                  },
                  {
                    question: "How does a vCISO engagement work?",
                    answer:
                      "Our vCISO engagements typically involve regular meetings with your team, development of security strategies and roadmaps, oversight of security initiatives, and guidance on security decisions. We offer flexible engagement models, including project-based and retainer options.",
                  },
                  {
                    question: "What are the benefits of a vCISO compared to hiring a full-time CISO?",
                    answer:
                      "A vCISO provides expert security leadership at a fraction of the cost of a full-time CISO. You get access to experienced professionals without the overhead of a full-time executive salary and benefits. It's an ideal solution for startups and growing companies that need security leadership but aren't ready for a full-time CISO.",
                  },
                  {
                    question: "Can a vCISO help with compliance initiatives?",
                    answer:
                      "Yes, our vCISO service includes guidance on compliance initiatives like SOC 2, ISO 27001, and HIPAA. We help align your security program with relevant compliance frameworks and prepare for audits.",
                  },
                  {
                    question: "How long is a typical vCISO engagement?",
                    answer:
                      "vCISO engagements vary based on your needs. Some clients engage our services for specific projects (e.g., preparing for SOC 2), while others maintain an ongoing relationship for continuous security guidance. We offer flexible options to meet your specific needs.",
                  },
                ].map((faq, i) => (
                  <Card key={i} className="border border-border">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground dark:text-white">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Still Have Questions?</h2>
            <p className="mt-4 text-muted-foreground dark:text-white md:text-xl">
              Contact us today to discuss your specific questions and needs. Our team is ready to help.
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
      </section>
    </div>
  )
}
