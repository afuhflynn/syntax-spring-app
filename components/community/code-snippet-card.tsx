"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, ThumbsUp, Copy, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useCommunity } from "@/components/community/community-context"

interface CodeSnippetCardProps {
  snippet: {
    id: number
    title: string
    code: string
    language: string
    likes: number
    comments: number
    user: {
      name: string
      avatar: string | null
      reputation: number
    }
    timestamp: string
  }
}

export default function CodeSnippetCard({ snippet }: CodeSnippetCardProps) {
  const { toast } = useToast()
  const { likedItems, bookmarkedItems, toggleLike, toggleBookmark } = useCommunity()

  const isLiked = likedItems.has(`snippet-${snippet.id}`)
  const isBookmarked = bookmarkedItems.has(`snippet-${snippet.id}`)

  const copyCode = () => {
    navigator.clipboard.writeText(snippet.code)
    toast({
      title: "Code copied",
      description: "The code snippet has been copied to your clipboard.",
    })
  }

  return (
    <Card>
      <CardContent className="p-6">
        <Link
          href={`/community/snippets/${snippet.id}`}
          className="text-lg font-medium hover:text-primary transition-colors"
        >
          {snippet.title}
        </Link>

        <div className="mt-4 relative">
          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
            <code>{snippet.code.length > 300 ? `${snippet.code.substring(0, 300)}...` : snippet.code}</code>
          </pre>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 h-8 w-8 bg-background/80 backdrop-blur-sm"
            onClick={copyCode}
          >
            <Copy className="h-4 w-4" />
            <span className="sr-only">Copy code</span>
          </Button>
        </div>

        <div className="flex items-center mt-4">
          <Badge variant="outline" className="mr-2">
            {snippet.language}
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="border-t px-6 py-4 flex justify-between">
        <div className="flex items-center text-sm">
          <Avatar className="h-6 w-6 mr-2">
            <AvatarImage src={snippet.user.avatar || ""} alt={snippet.user.name} />
            <AvatarFallback>{snippet.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-muted-foreground">
            {snippet.user.name} • {snippet.timestamp}
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center text-muted-foreground text-sm"
            onClick={() => toggleLike(snippet.id.toString(), "snippet")}
          >
            <ThumbsUp className={`h-4 w-4 mr-1 ${isLiked ? "fill-primary text-primary" : ""}`} />
            {snippet.likes}
          </Button>

          <div className="flex items-center text-muted-foreground text-sm">
            <MessageSquare className="h-4 w-4 mr-1" />
            {snippet.comments}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground"
            onClick={() => toggleBookmark(snippet.id.toString(), "snippet")}
          >
            <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-primary text-primary" : ""}`} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
