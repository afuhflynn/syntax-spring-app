import type { Metadata } from "next"
import { challenges } from "@/lib/challenges"
import ChallengesClient from "./challenges-client"

export const metadata: Metadata = {
  title: "Challenges",
  description: "Browse our collection of coding challenges across multiple languages and difficulty levels.",
}

export default function ChallengesPage() {
  return <ChallengesClient challenges={challenges} />
}

