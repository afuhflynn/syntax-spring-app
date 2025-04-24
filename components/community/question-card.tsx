"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, ThumbsUp, Eye, CheckCircle, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCommunity } from "@/components/community/community-context"

interface QuestionCardProps {
  question: {
    id: number
    title: string
    body: string
    tags: string[]
    votes: number
    answers: number
    views: number
    user: {
      name: string
      avatar: string | null
      reputation: number
    }
    timestamp: string
    solved: boolean
  }
}

export default function QuestionCard({ question }: QuestionCardProps) {
  const { likedItems, bookmarkedItems, toggleLike, toggleBookmark } = useCommunity()

  const isLiked = likedItems.has(`question-${question.id}`)
  const isBookmarked = bookmarkedItems.has(`question-${question.id}`)

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between">
          <Link
            href={`/community/questions/${question.id}`}
            className="text-lg font-medium hover:text-primary transition-colors"
          >
            {question.title}
          </Link>
          {question.solved && (
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 flex items-center">
              <CheckCircle className="h-3 w-3 mr-1" />
              Solved
            </Badge>
          )}
        </div>

        <p className="text-muted-foreground mt-2 line-clamp-2">{question.body}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {question.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="border-t px-6 py-4 flex justify-between">
        <div className="flex items-center text-sm">
          <Avatar className="h-6 w-6 mr-2">
            <AvatarImage src={question.user.avatar || ""} alt={question.user.name} />
            <AvatarFallback>{question.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-muted-foreground">
            {question.user.name} • {question.timestamp}
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center text-muted-foreground text-sm"
            onClick={() => toggleLike(question.id.toString(), "question")}
          >
            <ThumbsUp className={`h-4 w-4 mr-1 ${isLiked ? "fill-primary text-primary" : ""}`} />
            {question.votes}
          </Button>

          <div className="flex items-center text-muted-foreground text-sm">
            <MessageSquare className="h-4 w-4 mr-1" />
            {question.answers}
          </div>

          <div className="flex items-center text-muted-foreground text-sm">
            <Eye className="h-4 w-4 mr-1" />
            {question.views}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground"
            onClick={() => toggleBookmark(question.id.toString(), "question")}
          >
            <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-primary text-primary" : ""}`} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
