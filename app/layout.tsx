import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import CrispChat from "@/components/crisp-chat"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Compliantas | Security & Compliance Consultancy",
  description: "Helping startups achieve industry standards like SOC 2, ISO 27001, and HIPAA compliance.",
    generator: 'lygmgroup.co.za'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <ScrollToTop />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CrispChat />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
