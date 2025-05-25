import Link from "next/link";
import { Linkedin, Twitter, Facebook } from "lucide-react";

const shareUrl = "https://yourdomain.com/resources/govtech-nist-fedramp";
const shareText = encodeURIComponent("How Cloud-Native GovTech Startups Can Align with NIST 800-53 and FedRAMP to Unlock Federal Markets");

export default function ArticleGovTechNISTFedRAMP() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">How Cloud-Native GovTech Startups Can Align with NIST 800-53 and FedRAMP to Unlock Federal Markets</h1>
            <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground mb-4">
              <span>By Yannick Massivi</span>
              <span>•</span>
              <span>June 2024</span>
            </div>
            <p className="mt-4 text-muted-foreground dark:text-white md:text-xl">
              A strategic roadmap for early-stage SaaS teams looking to win government trust, pass agency reviews, and build a scalable security foundation.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${shareText}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
                <Linkedin className="h-5 w-5 text-primary hover:text-blue-700" />
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
                <Twitter className="h-5 w-5 text-primary hover:text-blue-400" />
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
                <Facebook className="h-5 w-5 text-primary hover:text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-16">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <div className="my-8 border-t border-border" />
          <h3 className="text-xl font-semibold mb-4">Why Federal Alignment Matters</h3>
          <p className="mb-6">
            Winning public sector contracts is a growth milestone for many SaaS companies — but it comes with one of the most demanding regulatory entry points: alignment with NIST 800-53 and FedRAMP.
          </p>
          <p className="mb-6">
            These frameworks are more than checklists. They're comprehensive blueprints for secure cloud operations — and non-negotiable in the eyes of federal agency buyers. For startups without a formal security program, the learning curve can be steep. But with the right strategy, execution, and guidance, it's a solvable problem.
          </p>
          <div className="my-8 border-t border-border" />
          <h3 className="text-xl font-semibold mb-4">Understanding the Landscape</h3>
          <p className="mb-6">
            NIST 800-53 provides the control catalog that underpins FedRAMP, FISMA, and many agency-specific frameworks. It includes over 300 controls across domains like access control, incident response, system integrity, and continuous monitoring.
          </p>
          <p className="mb-6">
            FedRAMP builds on this by standardizing how cloud service providers are assessed and authorized. For SaaS teams selling to the government, aligning with these standards isn't optional — it's the minimum bar for trust, procurement approval, and long-term contract viability.
          </p>
          <div className="my-8 border-t border-border" />
          <h3 className="text-xl font-semibold mb-4">What Early-Stage GovTech Teams Need to Do</h3>
          <p className="mb-6">To prepare for government buyers and pass initial security assessments, founders and security leads should:</p>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold">✅ Establish a security program</span><br />
              Build policies, assign roles, and structure documentation around how your systems are protected and monitored.
            </li>
            <li>
              <span className="font-semibold">✅ Map to NIST 800-53</span><br />
              Identify which controls apply, determine your current state, and create a gap remediation plan tied to evidence collection.
            </li>
            <li>
              <span className="font-semibold">✅ Plan for FedRAMP Tailored</span><br />
              If you're targeting low-impact SaaS authorizations, FedRAMP Tailored can offer a streamlined entry point.
            </li>
            <li>
              <span className="font-semibold">✅ Engage procurement early</span><br />
              Work proactively with agencies, provide clear narratives, and make it easy for reviewers to say "yes."
            </li>
          </ul>
          <div className="mt-12">
            <Link href="/resources" className="text-primary hover:underline">← Back to Resources & Blogs</Link>
          </div>
        </div>
      </section>
    </div>
  );
} 