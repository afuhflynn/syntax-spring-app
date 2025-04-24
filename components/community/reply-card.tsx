"use client"

import { useState } from "react"
import { ThumbsUp, Flag, Share } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"
import { useCommunity } from "@/components/community/community-context"

interface ReplyCardProps {
  reply: {
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
  }
  onVote: (direction: number) => void
}

export default function ReplyCard({ reply, onVote }: ReplyCardProps) {
  const { toast } = useToast()
  const { likedItems, toggleLike } = useCommunity()
  const [showActions, setShowActions] = useState(false)

  const isLiked = likedItems.has(`reply-${reply.id}`)

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href + `#reply-${reply.id}`)
    toast({
      title: "Link copied",
      description: "Reply link copied to clipboard",
    })
  }

  const handleReport = () => {
    toast({
      title: "Report submitted",
      description: "Thank you for helping keep our community safe",
    })
  }

  return (
    <div
      id={`reply-${reply.id}`}
      className="py-2"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="flex items-start gap-2">
        <Avatar className="h-6 w-6">
          <AvatarImage src={reply.user.avatar || ""} alt={reply.user.name} />
          <AvatarFallback>{reply.user.name.charAt(0)}</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{reply.user.name}</span>
            <span className="text-xs text-muted-foreground">{reply.timestamp}</span>
          </div>

          <div className="text-sm mt-1">{reply.body}</div>

          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  toggleLike(reply.id, "reply")
                  onVote(isLiked ? -1 : 1)
                }}
                className="h-6 w-6 rounded-full"
              >
                <ThumbsUp className={`h-3 w-3 ${isLiked ? "fill-primary text-primary" : ""}`} />
                <span className="sr-only">Upvote</span>
              </Button>
              <span className="text-xs font-medium">{reply.votes}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  if (isLiked) {
                    toggleLike(reply.id, "reply")
                  }
                  onVote(-1)
                }}
                className="h-6 w-6 rounded-full"
              >
                <ThumbsUp className="h-3 w-3 rotate-180" />
                <span className="sr-only">Downvote</span>
              </Button>
            </div>

            {showActions && (
              <>
                <Button variant="ghost" size="sm" onClick={handleShare} className="h-6 px-2 text-xs">
                  <Share className="h-3 w-3 mr-1" />
                  Share
                </Button>
                <Button variant="ghost" size="sm" onClick={handleReport} className="h-6 px-2 text-xs">
                  <Flag className="h-3 w-3 mr-1" />
                  Report
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
