import Link from "next/link";
import { Linkedin, Twitter, Facebook } from "lucide-react";

const shareUrl = "https://yourdomain.com/resources/ai-startups-enterprise-trust";
const shareText = encodeURIComponent("How AI Startups Are Building Enterprise Trust with ISO/IEC 42001");

export default function ArticleAIStartupsEnterpriseTrust() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">How AI Startups Are Building Enterprise Trust with ISO/IEC 42001</h1>
            <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground mb-4">
              <span>By Yannick Massivi</span>
              <span>•</span>
              <span>June 2024</span>
            </div>
            <p className="mt-4 text-muted-foreground dark:text-white md:text-xl">
              In today's AI-driven economy, governance isn't a formality—it's a differentiator. Here's how a startup aligned with ISO/IEC 42001 and accelerated their path to enterprise adoption.
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
          <h3 className="text-xl font-semibold mb-4">The Stakes Have Changed</h3>
          <p className="mb-6">
            For startups deploying AI—whether through copilots, recommendation engines, or generative models—the bar has been raised.
          </p>
          <p className="mb-6">
            Enterprise buyers no longer just ask what your product does. They want to know how it behaves, why it makes decisions, and what safeguards are in place.
          </p>
          <p className="mb-6">
            Investors, too, are scrutinizing governance. Responsible AI practices are now part of due diligence. And with global regulations like the EU AI Act on the horizon, the message is clear: <br />
            <span className="font-semibold">Move fast, but build trust.</span>
          </p>
          <div className="my-8 border-t border-border" />
          <h3 className="text-xl font-semibold mb-4">The Standard Leading the Way: ISO/IEC 42001</h3>
          <p className="mb-6">
            Launched as the first certifiable standard for AI management systems, ISO/IEC 42001 provides a structured approach to governing AI systems—covering everything from risk identification and role accountability to model lifecycle controls and continuous oversight.
          </p>
          <p className="mb-6">
            For early-stage companies, alignment with ISO/IEC 42001 is not just about compliance.<br />
            It's a strategic move—showing maturity, foresight, and readiness for the demands of enterprise-scale deployment.
          </p>
          <div className="my-8 border-t border-border" />
          <h3 className="text-xl font-semibold mb-4">One Startup's Journey: Governance in 8 Weeks</h3>
          <p className="mb-6">
            Faced with investor reviews and upcoming enterprise pilots, a lean AI/NLP startup turned to Compliantas for support. They had 25 employees, ambitious growth plans, and a tight timeline. What they needed was a governance foundation strong enough to unlock new partnerships—without slowing momentum.
          </p>
          <p className="mb-6">Over eight weeks, here's what we helped them put in place:</p>
          <ol className="list-decimal list-inside space-y-4 mb-8">
            <li>
              <span className="font-semibold">Risk Mapping That Matters</span><br />
              We started by mapping all active and planned AI use cases—identifying where bias, explainability, or data exposure could create risk. This enabled the team to prioritize controls with real impact.
            </li>
            <li>
              <span className="font-semibold">Establishing Internal Governance</span><br />
              We worked with leadership to define clear roles and responsibilities. An internal AI oversight board was created, with a formal governance charter to back it.
            </li>
            <li>
              <span className="font-semibold">Policy-Driven Control Implementation</span><br />
              Policies weren't just drafted—they were adopted. From model versioning and incident response to bias monitoring and audit trails, the startup implemented the essentials with focus and speed.
            </li>
            <li>
              <span className="font-semibold">Training, Transparency, and Trust</span><br />
              Engineers and product leads were trained on their responsibilities. A public-facing Responsible AI Trust Page was launched—giving investors and clients immediate visibility into the startup's principles and practices.
            </li>
          </ol>
          <div className="my-8 border-t border-border" />
          <h3 className="text-xl font-semibold mb-4">What They Gained</h3>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Enterprise pilots were approved. Buyers responded positively to the transparency and structure.</li>
            <li>Investor due diligence was satisfied. The startup's governance program demonstrated operational maturity.</li>
            <li>A trust narrative emerged. The public trust page served as a differentiator in both sales and partnerships.</li>
            <li>Future readiness was locked in. ISO/IEC 42001 alignment gave the startup a head start on upcoming regulatory trends.</li>
          </ul>
          <div className="my-8 border-t border-border" />
          <h3 className="text-xl font-semibold mb-4">What This Means for You</h3>
          <p className="mb-6">
            AI governance isn't just for large enterprises. For startups, it's a strategic asset—one that can accelerate partnerships, reduce risk, and build lasting credibility.
          </p>
          <p className="mb-6">
            Whether you're preparing for pilots, navigating procurement, or answering investor questions, aligning with ISO/IEC 42001 sends a clear message:<br />
            <span className="font-semibold">We take trust seriously.</span>
          </p>
          <div className="my-8 border-t border-border" />
          <h3 className="text-xl font-semibold mb-4">Ready to Take the Next Step?</h3>
          <p className="mb-6">
            If your team is building with AI and wondering what responsible governance could look like in practice, we'd be happy to walk you through it.
          </p>
          <p className="mb-6">
            Let's explore how Compliantas can help you turn responsible AI into a growth advantage.
          </p>
          <div className="mt-12">
            <Link href="/resources" className="text-primary hover:underline">← Back to Resources & Blogs</Link>
          </div>
        </div>
      </section>
    </div>
  );
} 