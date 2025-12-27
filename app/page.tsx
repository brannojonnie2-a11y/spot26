import type { Metadata } from "next"
import { CaptchaVerification } from "@/components/captcha-verification"
import { VisitorTracker } from "@/components/visitor-tracker"

export const metadata: Metadata = {
  title: "Spotify",
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4">
      <VisitorTracker />
      <CaptchaVerification />
    </div>
  )
}
