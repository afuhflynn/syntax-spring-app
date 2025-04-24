import type React from "react"
import type { Metadata } from "next"
import { CommunityProvider } from "@/components/community/community-context"

export const metadata: Metadata = {
  title: "Community | Syntax Spring",
  description: "Connect with fellow developers, ask questions, share knowledge, and grow together.",
}

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CommunityProvider>
      <div className="min-h-screen">{children}</div>
    </CommunityProvider>
  )
}
