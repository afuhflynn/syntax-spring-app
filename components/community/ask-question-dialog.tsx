"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

interface AskQuestionDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function AskQuestionDialog({ open, onOpenChange }: AskQuestionDialogProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [postType, setPostType] = useState("question")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim() || !content.trim()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: `${postType === "question" ? "Question" : postType === "discussion" ? "Discussion" : "Code snippet"} posted`,
      description: "Your post has been published successfully",
    })

    setIsSubmitting(false)
    onOpenChange(false)

    // Reset form
    setTitle("")
    setContent("")
    setTags("")

    // Redirect to the new question page (in a real app, this would use the actual ID)
    if (postType === "question") {
      router.push(`/community/questions/1`)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Create a new post</DialogTitle>
          <DialogDescription>
            Share your question, start a discussion, or post a code snippet to get help from the community.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="question" value={postType} onValueChange={setPostType} className="mt-4">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="question">Question</TabsTrigger>
            <TabsTrigger value="discussion">Discussion</TabsTrigger>
            <TabsTrigger value="snippet">Code Snippet</TabsTrigger>
          </TabsList>

          <form onSubmit={handleSubmit}>
            <TabsContent value="question" className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="question-title">Title</Label>
                <Input
                  id="question-title"
                  placeholder="e.g., How do I implement a binary search tree in JavaScript?"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="question-content">Details</Label>
                <Textarea
                  id="question-content"
                  placeholder="Describe your problem in detail. Include code examples if relevant."
                  className="min-h-[200px]"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="question-tags">Tags</Label>
                <Input
                  id="question-tags"
                  placeholder="e.g., javascript, algorithms, data-structures (comma separated)"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>
            </TabsContent>

            <TabsContent value="discussion" className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="discussion-title">Title</Label>
                <Input
                  id="discussion-title"
                  placeholder="e.g., What's your approach to learning new programming languages?"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="discussion-content">Content</Label>
                <Textarea
                  id="discussion-content"
                  placeholder="Share your thoughts or start a discussion topic."
                  className="min-h-[200px]"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="discussion-tags">Tags</Label>
                <Input
                  id="discussion-tags"
                  placeholder="e.g., learning, career, best-practices (comma separated)"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>
            </TabsContent>

            <TabsContent value="snippet" className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="snippet-title">Title</Label>
                <Input
                  id="snippet-title"
                  placeholder="e.g., Efficient way to reverse a linked list in JavaScript"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="snippet-content">Code</Label>
                <Textarea
                  id="snippet-content"
                  placeholder="Paste your code snippet here. Add comments to explain what it does."
                  className="min-h-[200px] font-mono"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="snippet-language">Language</Label>
                <Input
                  id="snippet-language"
                  placeholder="e.g., javascript, python, java"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>
            </TabsContent>

            <DialogFooter className="mt-6">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isSubmitting}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting || !title.trim() || !content.trim()}>
                {isSubmitting ? "Posting..." : "Post"}
              </Button>
            </DialogFooter>
          </form>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
