import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Challenge | Syntax Spring",
  description: "Solve coding challenges and improve your programming skills.",
}

export default function ChallengeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-background">{children}</div>
}

