"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { X } from "lucide-react"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("hyperliquid-cookie-consent")
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("hyperliquid-cookie-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("hyperliquid-cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto shadow-2xl border-2">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">We Value Your Privacy</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We use cookies to enhance your browsing experience, provide personalized content, and analyze our
                traffic. By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or
                learn more in our{" "}
                <Link href="/cookies" className="text-gray-900 underline hover:no-underline">
                  Cookie Policy
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-gray-900 underline hover:no-underline">
                  Privacy Policy
                </Link>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={acceptCookies} className="bg-gray-900 hover:bg-gray-800">
                  Accept All Cookies
                </Button>
                <Button onClick={declineCookies} variant="outline">
                  Decline Non-Essential
                </Button>
                <Button asChild variant="ghost" className="text-gray-600">
                  <Link href="/cookies">Manage Preferences</Link>
                </Button>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={declineCookies}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
