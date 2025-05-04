import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
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
            Complianta is a boutique security and compliance consultancy helping startups achieve industry standards
            like SOC 2, ISO 27001, and HIPAA.
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
                  <Link href="/case-studies" className="text-sm text-muted-foreground hover:text-foreground">
                    Case Studies
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
                  <Link href="/services/soc2" className="text-sm text-muted-foreground hover:text-foreground">
                    SOC 2 Readiness
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
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Subscribe</h3>
              <p className="mt-4 text-sm text-muted-foreground">Get the latest compliance updates.</p>
              <form className="mt-4 sm:flex sm:max-w-md">
                <Input
                  type="email"
                  name="email"
                  id="email-footer"
                  autoComplete="email"
                  required
                  placeholder="Enter your email"
                  className="w-full min-w-0"
                />
                <div className="mt-3 sm:ml-3 sm:mt-0">
                  <Button type="submit">Subscribe</Button>
                </div>
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
          <Link href="/cookies" className="text-xs text-muted-foreground hover:text-foreground">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
