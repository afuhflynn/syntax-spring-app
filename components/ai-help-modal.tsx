"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Loader2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface AIHelpModalProps {
  isOpen: boolean
  onClose: () => void
  challenge: any
  code: string
  language: string
}

export default function AIHelpModal({ isOpen, onClose, challenge, code, language }: AIHelpModalProps) {
  const [question, setQuestion] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [conversation, setConversation] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    {
      role: "assistant",
      content: `Hi there! I'm your AI coding assistant. I can help you with the "${challenge.title}" challenge. What specific help do you need?`,
    },
  ])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!question.trim() || isLoading) return

    // Add user message to conversation
    setConversation([...conversation, { role: "user", content: question }])

    // Clear input
    setQuestion("")

    // Set loading state
    setIsLoading(true)

    try {
      // Simulate AI response
      await new Promise((resolve) => setTimeout(resolve, 1500))

      let aiResponse = ""

      // Generate different responses based on the challenge and language
      if (challenge.slug === "two-sum") {
        if (language === "javascript") {
          aiResponse =
            "For the Two Sum problem in JavaScript, consider using a hash map (object) to store numbers you've seen and their indices. As you iterate through the array, for each number, check if the target minus the current number exists in your hash map. If it does, you've found your pair!"
        } else if (language === "python") {
          aiResponse =
            "In Python, you can solve the Two Sum problem efficiently using a dictionary. As you iterate through the list, check if the complement (target - current number) is already in your dictionary. If it is, return the indices. If not, add the current number and its index to the dictionary."
        } else {
          aiResponse =
            "The key to solving the Two Sum problem efficiently is using a hash table (map/dictionary) to store numbers you've seen so far. This gives you O(1) lookup time to check if the complement (target - current number) exists."
        }
      } else {
        aiResponse =
          "I can help you with this challenge! Let's break it down step by step. What specific part are you struggling with?"
      }

      // Add AI response to conversation
      setConversation([
        ...conversation,
        { role: "user", content: question },
        { role: "assistant", content: aiResponse },
      ])
    } catch (error) {
      console.error("Error getting AI response:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl max-h-[80vh] rounded-lg border bg-card shadow-lg"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b p-4">
              <h2 className="text-lg font-semibold">AI Coding Assistant</h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            {/* Conversation */}
            <div className="p-4 h-[400px] overflow-y-auto">
              {conversation.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex gap-3 mb-4",
                    message.role === "assistant" ? "items-start" : "items-start flex-row-reverse",
                  )}
                >
                  {message.role === "assistant" && (
                    <Avatar className="h-8 w-8 bg-primary">
                      <span className="text-xs font-medium text-primary-foreground">AI</span>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "rounded-lg p-3 max-w-[80%]",
                      message.role === "assistant" ? "bg-muted" : "bg-primary text-primary-foreground ml-auto",
                    )}
                  >
                    <p className="whitespace-pre-wrap text-sm">{message.content}</p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 mb-4 items-start">
                  <Avatar className="h-8 w-8 bg-primary">
                    <span className="text-xs font-medium text-primary-foreground">AI</span>
                  </Avatar>
                  <div className="rounded-lg p-3 bg-muted">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="border-t p-4">
              <div className="flex gap-2">
                <Textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask for help with your code..."
                  className="flex-1 min-h-[80px] resize-none"
                />
                <Button type="submit" size="icon" disabled={!question.trim() || isLoading}>
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

