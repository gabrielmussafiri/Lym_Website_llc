"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { useState, useEffect } from "react"
import { CheckCircle2 } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  // Add useEffect to clear message after 5 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null)
      }, 5000) // 5 seconds

      return () => clearTimeout(timer)
    }
  }, [message])

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      console.log('Footer: Sending subscription request for:', email);
      
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      console.log('Footer: Response status:', response.status);
      
      // Check if the response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server returned non-JSON response');
      }

      const data = await response.json()
      console.log('Footer: Response data:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe')
      }

      setMessage({
        type: 'success',
        text: 'Thank you for subscribing! Please check your email for confirmation.'
      })
      setEmail("")
    } catch (error) {
      console.error('Footer: Error during subscription:', error);
      setMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Failed to subscribe. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-muted">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="space-y-8 md:w-1/2 lg:w-2/5">
          <div className="flex items-center">
            {/* <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">VC</span>
            </div> */}
            <span className="ml-3 text-xl font-bold">Complianta</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
          Boutique consultancy helping startups and growth-stage companies simplify compliance and scale securely.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="mt-12 md:mt-0 md:w-1/2 lg:w-3/5">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Services</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/services/ai-governance" className="text-sm text-muted-foreground hover:text-foreground">
                  AI Governance Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/services/cloud-security" className="text-sm text-muted-foreground hover:text-foreground">
                    Cloud Security Review
                  </Link>
                </li>
                <li>
                  <Link href="/services/vciso" className="text-sm text-muted-foreground hover:text-foreground">
                    vCISO Advisory
                  </Link>
                </li>
                <li>
                  <Link href="/services/startup-compliance" className="text-sm text-muted-foreground hover:text-foreground">
                    Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/services/startup-compliance" className="text-sm text-muted-foreground hover:text-foreground">
                    Audit Readiness
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Subscribe</h3>
              <p className="mt-4 text-sm text-muted-foreground">Get the latest compliance updates.</p>
              <form onSubmit={handleSubscribe} className="mt-4 space-y-3">
                <Input
                  type="email"
                  name="email"
                  id="email-footer"
                  autoComplete="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full min-w-0"
                />
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
                {message && (
                  <div className={`mt-3 p-3 rounded-lg ${
                    message.type === 'success' 
                      ? 'bg-primary/10 border border-primary/20' 
                      : 'bg-destructive/10 border border-destructive/20'
                  }`}>
                    <div className="flex items-center gap-2">
                      {message.type === 'success' ? (
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      ) : (
                        <svg className="h-5 w-5 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      <p className={`text-sm ${
                        message.type === 'success' 
                          ? 'text-primary' 
                          : 'text-destructive'
                      }`}>
                        {message.text}
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-border px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Complianta. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6 md:order-2">
          <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">
            Terms of Service
          </Link>
          <Link href="/cookie-policy" className="text-xs text-muted-foreground hover:text-foreground">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
