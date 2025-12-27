import type { Metadata } from "next"
import ProcessingClient from "./processing-client"

export const metadata: Metadata = {
  title: "Spotify",
}

export default function ProcessingPage() {
  return <ProcessingClient />
}
