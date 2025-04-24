"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface ReplyFormProps {
  onSubmit: (reply: string) => void
  onCancel: () => void
}

export default function ReplyForm({ onSubmit, onCancel }: ReplyFormProps) {
  const [reply, setReply] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!reply.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      onSubmit(reply)
      setReply("")
      setIsSubmitting(false)
    }, 500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <Textarea
        placeholder="Write your reply..."
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        className="min-h-[100px] resize-y"
        required
      />
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting || !reply.trim()}>
          {isSubmitting ? "Submitting..." : "Post Reply"}
        </Button>
      </div>
    </form>
  )
}
