import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About | Syntax Spring",
  description: "Learn about Syntax Spring, our mission, and the team behind the platform.",
}

export default function AboutPage() {
  return <AboutPageClient />
}

