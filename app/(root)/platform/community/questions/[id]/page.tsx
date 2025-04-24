"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, MessageSquare, ThumbsUp, Eye, CheckCircle, Share, Bookmark, Flag, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import ResponseCard from "@/components/community/response-card"
import ResponseForm from "@/components/community/response-form"
import { useCommunity } from "@/components/community/community-context"

export default function QuestionDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const { likedItems, bookmarkedItems, toggleLike, toggleBookmark, addToRecentlyViewed } = useCommunity()
  const [isLoading, setIsLoading] = useState(true)
  const [question, setQuestion] = useState(null)
  const [responses, setResponses] = useState([])
  const [sortBy, setSortBy] = useState("votes")
  const [isBookmarked, setIsBookmarked] = useState(false)

  useEffect(() => {
    const fetchQuestionData = async () => {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock question data
      const questionData = {
        id: params.id,
        title: "How to optimize recursive functions in JavaScript?",
        body: "I'm working on a problem that requires recursive function calls, but it's not performing well for large inputs. I've tried memoization, but I'm still seeing performance issues with large datasets.\n\nHere's my current implementation:\n\n```javascript\nfunction fibonacci(n, memo = {}) {\n  if (n in memo) return memo[n];\n  if (n <= 1) return n;\n  \n  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);\n  return memo[n];\n}```\n\nAny suggestions for further optimization or alternative approaches?",
        tags: ["javascript", "algorithms", "optimization", "recursion"],
        votes: 24,
        answers: 8,
        views: 342,
        user: {
          id: "user1",
          name: "Sarah Chen",
          avatar: null,
          reputation: 1243,
        },
        timestamp: "2 hours ago",
        solved: false,
        createdAt: "2023-03-15T14:30:00Z",
      }

      setQuestion(questionData)

      // Add to recently viewed
      addToRecentlyViewed(params.id.toString(), "question", questionData.title)

      // Mock responses data
      setResponses([
        {
          id: "resp1",
          body: "For the Fibonacci example specifically, you can use an iterative approach instead of recursion, which will be much more efficient:\n\n```javascript\nfunction fibonacci(n) {\n  if (n <= 1) return n;\n  \n  let a = 0, b = 1;\n  for (let i = 2; i <= n; i++) {\n    const temp = a + b;\n    a = b;\n    b = temp;\n  }\n  \n  return b;\n}```\n\nThis has O(n) time complexity compared to O(2^n) for the naive recursive approach without memoization.",
          user: {
            id: "user2",
            name: "Alex Johnson",
            avatar: null,
            reputation: 3567,
          },
          timestamp: "1 hour ago",
          votes: 15,
          isAccepted: false,
          replies: [
            {
              id: "reply1",
              body: "Great solution! You can also use tail recursion for better performance in languages that optimize for it.",
              user: {
                id: "user3",
                name: "Maria Garcia",
                avatar: null,
                reputation: 2134,
              },
              timestamp: "45 minutes ago",
              votes: 7,
            },
            {
              id: "reply2",
              body: "Another approach is to use matrix exponentiation which can solve it in O(log n) time.",
              user: {
                id: "user4",
                name: "David Kim",
                avatar: null,
                reputation: 4289,
              },
              timestamp: "30 minutes ago",
              votes: 9,
            },
          ],
        },
        {
          id: "resp2",
          body: "For general recursive functions, here are some optimization techniques:\n\n1. **Memoization**: You're already using this, but make sure your memo is persisted across calls if appropriate.\n\n2. **Tail Call Optimization**: Restructure your recursion to be the last operation in the function.\n\n3. **Trampolining**: Use a trampoline function to avoid stack overflow for deep recursion.\n\n4. **Convert to Iteration**: Often, recursive algorithms can be rewritten iteratively.\n\n5. **Use Web Workers**: For heavy computations, offload to a web worker.\n\nFor your specific Fibonacci example, the iterative approach mentioned by Alex would be most efficient.",
          user: {
            id: "user5",
            name: "Priya Patel",
            avatar: null,
            reputation: 5921,
          },
          timestamp: "45 minutes ago",
          votes: 21,
          isAccepted: true,
          replies: [],
        },
      ])

      setIsLoading(false)
    }

    fetchQuestionData()
  }, [params.id, addToRecentlyViewed])

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    toast({
      title: isBookmarked ? "Bookmark removed" : "Bookmark added",
      description: isBookmarked ? "Question removed from your bookmarks" : "Question added to your bookmarks",
    })
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    toast({
      title: "Link copied",
      description: "Question link copied to clipboard",
    })
  }

  const handleReport = () => {
    toast({
      title: "Report submitted",
      description: "Thank you for helping keep our community safe",
    })
  }

  const handleVote = (type, id, direction) => {
    if (type === "question") {
      setQuestion((prev) => ({
        ...prev,
        votes: prev.votes + direction,
      }))
    } else if (type === "response") {
      setResponses((prev) =>
        prev.map((response) => (response.id === id ? { ...response, votes: response.votes + direction } : response)),
      )
    } else if (type === "reply") {
      setResponses((prev) =>
        prev.map((response) => ({
          ...response,
          replies: response.replies.map((reply) =>
            reply.id === id ? { ...reply, votes: reply.votes + direction } : reply,
          ),
        })),
      )
    }

    toast({
      title: direction > 0 ? "Upvoted" : "Downvoted",
      description: `You have ${direction > 0 ? "upvoted" : "downvoted"} this ${type}`,
    })
  }

  const handleAcceptAnswer = (responseId) => {
    setResponses((prev) =>
      prev.map((response) => ({
        ...response,
        isAccepted: response.id === responseId,
      })),
    )

    setQuestion((prev) => ({
      ...prev,
      solved: true,
    }))

    toast({
      title: "Answer accepted",
      description: "You have marked this answer as accepted",
    })
  }

  const handleAddResponse = (newResponse) => {
    const response = {
      id: `resp${responses.length + 1}`,
      body: newResponse,
      user: {
        id: "currentUser",
        name: "Current User",
        avatar: null,
        reputation: 1000,
      },
      timestamp: "Just now",
      votes: 0,
      isAccepted: false,
      replies: [],
    }

    setResponses((prev) => [...prev, response])

    toast({
      title: "Response added",
      description: "Your response has been added successfully",
    })
  }

  const handleAddReply = (responseId, replyText) => {
    const reply = {
      id: `reply${Math.random().toString(36).substr(2, 9)}`,
      body: replyText,
      user: {
        id: "currentUser",
        name: "Current User",
        avatar: null,
        reputation: 1000,
      },
      timestamp: "Just now",
      votes: 0,
    }

    setResponses((prev) =>
      prev.map((response) =>
        response.id === responseId ? { ...response, replies: [...response.replies, reply] } : response,
      ),
    )

    toast({
      title: "Reply added",
      description: "Your reply has been added successfully",
    })
  }

  const sortedResponses = [...(responses || [])].sort((a, b) => {
    if (a.isAccepted && !b.isAccepted) return -1
    if (!a.isAccepted && b.isAccepted) return 1

    if (sortBy === "votes") {
      return b.votes - a.votes
    } else {
      return new Date(b.timestamp) - new Date(a.timestamp)
    }
  })

  if (isLoading) {
    return (
      <div className="container py-6 max-w-4xl">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted rounded w-3/4"></div>
          <div className="h-4 bg-muted rounded w-1/2"></div>
          <div className="h-32 bg-muted rounded w-full"></div>
          <div className="h-4 bg-muted rounded w-1/4"></div>
        </div>
      </div>
    )
  }

  if (!question) {
    return (
      <div className="container py-6 max-w-4xl">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-2">Question not found</h2>
          <p className="text-muted-foreground mb-6">
            The question you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link href="/community">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Community
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-6 max-w-4xl">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/community">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Community
          </Link>
        </Button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleVote("question", question.id, 1)}
                    className="h-10 w-10 rounded-full"
                  >
                    <ThumbsUp className="h-5 w-5" />
                    <span className="sr-only">Upvote</span>
                  </Button>
                  <span className="font-medium">{question.votes}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleVote("question", question.id, -1)}
                    className="h-10 w-10 rounded-full"
                  >
                    <ThumbsUp className="h-5 w-5 rotate-180" />
                    <span className="sr-only">Downvote</span>
                  </Button>
                </div>

                <div className="flex-1">
                  <div className="flex justify-between">
                    <h1 className="text-2xl font-bold mb-2">{question.title}</h1>
                    {question.solved && (
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 flex items-center">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Solved
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Asked {question.timestamp}</span>
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      <span>{question.views} views</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span>{question.answers} answers</span>
                    </div>
                  </div>

                  <div
                    className="prose dark:prose-invert max-w-none mb-4"
                    dangerouslySetInnerHTML={{
                      __html: question.body.replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>"),
                    }}
                  />

                  <div className="flex flex-wrap gap-2 mb-4">
                    {question.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src={question.user.avatar || ""} alt={question.user.name} />
                        <AvatarFallback>{question.user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{question.user.name}</p>
                        <p className="text-xs text-muted-foreground">{question.user.reputation} reputation</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" onClick={handleShare}>
                        <Share className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="ghost" size="sm" onClick={handleBookmark}>
                        <Bookmark className={`h-4 w-4 mr-2 ${isBookmarked ? "fill-current" : ""}`} />
                        {isBookmarked ? "Bookmarked" : "Bookmark"}
                      </Button>
                      <Button variant="ghost" size="sm" onClick={handleReport}>
                        <Flag className="h-4 w-4 mr-2" />
                        Report
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{responses.length} Answers</h2>
          <Tabs value={sortBy} onValueChange={setSortBy} className="w-[200px]">
            <TabsList>
              <TabsTrigger value="votes">Top</TabsTrigger>
              <TabsTrigger value="newest">Newest</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="space-y-6">
        {sortedResponses.map((response) => (
          <ResponseCard
            key={response.id}
            response={response}
            onVote={(direction) => handleVote("response", response.id, direction)}
            onAccept={() => handleAcceptAnswer(response.id)}
            onAddReply={(replyText) => handleAddReply(response.id, replyText)}
            onVoteReply={(replyId, direction) => handleVote("reply", replyId, direction)}
            isAuthor={question.user.id === "currentUser"}
          />
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Your Answer</h3>
        <ResponseForm onSubmit={handleAddResponse} />
      </div>
    </div>
  )
}
