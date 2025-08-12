import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
// Added cookie banner import
import { CookieBanner } from "@/components/cookie-banner"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Hyperliquid Car Wash - Premium Automotive Care",
  description: "Experience the ultimate in automotive care with Hyperliquid's premium car wash and detailing services.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="font-sans">
        {children}
        {/* Added cookie banner component */}
        <CookieBanner />
      </body>
    </html>
  )
}
