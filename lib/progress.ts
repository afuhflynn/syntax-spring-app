"use client"

import { useState, useEffect } from "react"

export function useProgress() {
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("completedChallenges")
    if (stored) {
      setCompletedChallenges(JSON.parse(stored))
    }
  }, [])

  const markAsCompleted = (challengeId: string) => {
    const updated = [...completedChallenges, challengeId]
    setCompletedChallenges(updated)
    localStorage.setItem("completedChallenges", JSON.stringify(updated))
  }

  return { completedChallenges, markAsCompleted }
}

