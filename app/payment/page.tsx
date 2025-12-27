import type { Metadata } from "next"
import { PaymentForm } from "@/components/payment-form"
import { SpotifyHeader } from "@/components/spotify-header"
import { SpotifyFooter } from "@/components/spotify-footer"

export const metadata: Metadata = {
  title: "Spotify",
}

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      <SpotifyHeader />
      <main className="flex-1 flex items-center justify-center p-4 py-8 sm:py-12">
        <PaymentForm />
      </main>
      <SpotifyFooter />
    </div>
  )
}
