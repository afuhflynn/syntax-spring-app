"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, ThumbsUp, Flame, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCommunity } from "@/components/community/community-context"

interface DiscussionCardProps {
  discussion: {
    id: number
    title: string
    body: string
    tags: string[]
    likes: number
    comments: number
    user: {
      name: string
      avatar: string | null
      reputation: number
    }
    timestamp: string
    hot: boolean
  }
}

export default function DiscussionCard({ discussion }: DiscussionCardProps) {
  const { likedItems, bookmarkedItems, toggleLike, toggleBookmark } = useCommunity()

  const isLiked = likedItems.has(`discussion-${discussion.id}`)
  const isBookmarked = bookmarkedItems.has(`discussion-${discussion.id}`)

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between">
          <Link
            href={`/community/discussions/${discussion.id}`}
            className="text-lg font-medium hover:text-primary transition-colors"
          >
            {discussion.title}
          </Link>
          {discussion.hot && (
            <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 flex items-center">
              <Flame className="h-3 w-3 mr-1" />
              Hot
            </Badge>
          )}
        </div>

        <p className="text-muted-foreground mt-2 line-clamp-2">{discussion.body}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {discussion.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="border-t px-6 py-4 flex justify-between">
        <div className="flex items-center text-sm">
          <Avatar className="h-6 w-6 mr-2">
            <AvatarImage src={discussion.user.avatar || ""} alt={discussion.user.name} />
            <AvatarFallback>{discussion.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-muted-foreground">
            {discussion.user.name} • {discussion.timestamp}
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center text-muted-foreground text-sm"
            onClick={() => toggleLike(discussion.id.toString(), "discussion")}
          >
            <ThumbsUp className={`h-4 w-4 mr-1 ${isLiked ? "fill-primary text-primary" : ""}`} />
            {discussion.likes}
          </Button>

          <div className="flex items-center text-muted-foreground text-sm">
            <MessageSquare className="h-4 w-4 mr-1" />
            {discussion.comments}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground"
            onClick={() => toggleBookmark(discussion.id.toString(), "discussion")}
          >
            <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-primary text-primary" : ""}`} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
