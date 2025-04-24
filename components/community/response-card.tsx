"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ThumbsUp, CheckCircle, MessageSquare, Flag, Share } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import ReplyCard from "@/components/community/reply-card"
import ReplyForm from "@/components/community/reply-form"
import { useCommunity } from "@/components/community/community-context"

interface ResponseCardProps {
  response: {
    id: string
    body: string
    user: {
      id: string
      name: string
      avatar: string | null
      reputation: number
    }
    timestamp: string
    votes: number
    isAccepted: boolean
    replies: Array<{
      id: string
      body: string
      user: {
        id: string
        name: string
        avatar: string | null
        reputation: number
      }
      timestamp: string
      votes: number
    }>
  }
  onVote: (direction: number) => void
  onAccept: () => void
  onAddReply: (replyText: string) => void
  onVoteReply: (replyId: string, direction: number) => void
  isAuthor: boolean
}

export default function ResponseCard({
  response,
  onVote,
  onAccept,
  onAddReply,
  onVoteReply,
  isAuthor,
}: ResponseCardProps) {
  const { toast } = useToast()
  const { likedItems, toggleLike } = useCommunity()
  const [isReplying, setIsReplying] = useState(false)
  const [showAllReplies, setShowAllReplies] = useState(false)

  const isLiked = likedItems.has(`response-${response.id}`)

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href + `#response-${response.id}`)
    toast({
      title: "Link copied",
      description: "Response link copied to clipboard",
    })
  }

  const handleReport = () => {
    toast({
      title: "Report submitted",
      description: "Thank you for helping keep our community safe",
    })
  }

  const handleReplySubmit = (replyText: string) => {
    onAddReply(replyText)
    setIsReplying(false)
    setShowAllReplies(true)
  }

  const displayedReplies = showAllReplies ? response.replies : response.replies.slice(0, 2)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      id={`response-${response.id}`}
    >
      <Card className={response.isAccepted ? "border-green-500 dark:border-green-700" : ""}>
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  toggleLike(response.id, "response")
                  onVote(isLiked ? -1 : 1)
                }}
                className="h-10 w-10 rounded-full"
              >
                <ThumbsUp className={`h-5 w-5 ${isLiked ? "fill-primary text-primary" : ""}`} />
                <span className="sr-only">Upvote</span>
              </Button>
              <span className="font-medium">{response.votes}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  if (isLiked) {
                    toggleLike(response.id, "response")
                  }
                  onVote(-1)
                }}
                className="h-10 w-10 rounded-full"
              >
                <ThumbsUp className="h-5 w-5 rotate-180" />
                <span className="sr-only">Downvote</span>
              </Button>

              {isAuthor && !response.isAccepted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onAccept}
                  className="h-10 w-10 rounded-full text-muted-foreground hover:text-green-500 dark:hover:text-green-400"
                  title="Accept this answer"
                >
                  <CheckCircle className="h-5 w-5" />
                  <span className="sr-only">Accept answer</span>
                </Button>
              )}

              {response.isAccepted && (
                <div className="text-green-500 dark:text-green-400" title="Accepted answer">
                  <CheckCircle className="h-5 w-5 fill-current" />
                </div>
              )}
            </div>

            <div className="flex-1">
              <div
                className="prose dark:prose-invert max-w-none mb-4"
                dangerouslySetInnerHTML={{
                  __html: response.body.replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>"),
                }}
              />

              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={response.user.avatar || ""} alt={response.user.name} />
                    <AvatarFallback>{response.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{response.user.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {response.user.reputation} reputation • answered {response.timestamp}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" onClick={handleShare}>
                    <Share className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleReport}>
                    <Flag className="h-4 w-4 mr-2" />
                    Report
                  </Button>
                </div>
              </div>

              {response.replies.length > 0 && (
                <div className="mt-4 pl-4 border-l-2 border-muted space-y-4">
                  {displayedReplies.map((reply) => (
                    <ReplyCard key={reply.id} reply={reply} onVote={(direction) => onVoteReply(reply.id, direction)} />
                  ))}

                  {response.replies.length > 2 && !showAllReplies && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowAllReplies(true)}
                      className="text-muted-foreground"
                    >
                      Show {response.replies.length - 2} more replies
                    </Button>
                  )}
                </div>
              )}

              <div className="mt-4">
                {isReplying ? (
                  <ReplyForm onSubmit={handleReplySubmit} onCancel={() => setIsReplying(false)} />
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsReplying(true)}
                    className="text-muted-foreground"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Add a reply
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
