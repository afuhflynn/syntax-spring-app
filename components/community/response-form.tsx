"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ResponseFormProps {
  onSubmit: (response: string) => void
}

export default function ResponseForm({ onSubmit }: ResponseFormProps) {
  const [response, setResponse] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!response.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      onSubmit(response)
      setResponse("")
      setIsSubmitting(false)
    }, 500)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardContent className="p-4">
          <Textarea
            placeholder="Write your answer here... You can use markdown for formatting."
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            className="min-h-[200px] resize-y"
            required
          />
        </CardContent>
        <CardFooter className="flex justify-end gap-2 border-t px-6 py-4">
          <Button type="submit" disabled={isSubmitting || !response.trim()}>
            {isSubmitting ? "Submitting..." : "Post Your Answer"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
