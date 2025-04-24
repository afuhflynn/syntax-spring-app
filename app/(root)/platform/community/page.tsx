"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, TrendingUp, Award, Code, HelpCircle, MessageCircle, Plus, Sparkles, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import CommunityHeader from "@/components/community/community-header"
import QuestionCard from "@/components/community/question-card"
import DiscussionCard from "@/components/community/discussion-card"
import TrendingTopics from "@/components/community/trending-topics"
import TopContributors from "@/components/community/top-contributors"
import CommunityEvents from "@/components/community/community-events"
import CodeSnippetCard from "@/components/community/code-snippet-card"
import AskQuestionDialog from "@/components/community/ask-question-dialog"
import RecentlyViewed from "@/components/community/recently-viewed"
import { useCommunity } from "@/components/community/community-context"

export default function CommunityPage() {
  const [isAskQuestionOpen, setIsAskQuestionOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("questions")
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const { sortBy, setSortBy } = useCommunity()

  // Mock data - would be fetched from API in a real app
  const [questions, setQuestions] = useState([])
  const [discussions, setDiscussions] = useState([])
  const [snippets, setSnippets] = useState([])

  useEffect(() => {
    // Simulate API fetch
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setQuestions([
        {
          id: 1,
          title: "How to optimize recursive functions in JavaScript?",
          body: "I'm working on a problem that requires recursive function calls, but it's not performing well for large inputs. Any tips on optimizing recursive functions in JavaScript?",
          tags: ["javascript", "algorithms", "optimization", "recursion"],
          votes: 24,
          answers: 8,
          views: 342,
          user: {
            name: "Sarah Chen",
            avatar: null,
            reputation: 1243,
          },
          timestamp: "2 hours ago",
          solved: true,
        },
        {
          id: 2,
          title: "Understanding async/await with Promise.all",
          body: "I'm trying to understand how to properly use async/await with Promise.all for parallel execution. Can someone explain with examples?",
          tags: ["javascript", "async", "promises"],
          votes: 18,
          answers: 5,
          views: 215,
          user: {
            name: "Michael Johnson",
            avatar: null,
            reputation: 876,
          },
          timestamp: "5 hours ago",
          solved: false,
        },
        {
          id: 3,
          title: "Best approach for implementing a binary search tree in Python",
          body: "I need to implement a binary search tree in Python for a project. What's the most efficient approach?",
          tags: ["python", "data-structures", "binary-tree", "algorithms"],
          votes: 32,
          answers: 12,
          views: 489,
          user: {
            name: "Alex Rodriguez",
            avatar: null,
            reputation: 2156,
          },
          timestamp: "1 day ago",
          solved: true,
        },
        {
          id: 4,
          title: "How to handle state management in large React applications?",
          body: "I'm working on a large React application and struggling with state management. Should I use Redux, Context API, or something else?",
          tags: ["react", "javascript", "state-management", "redux"],
          votes: 41,
          answers: 15,
          views: 678,
          user: {
            name: "Emily Parker",
            avatar: null,
            reputation: 3421,
          },
          timestamp: "2 days ago",
          solved: false,
        },
      ])

      setDiscussions([
        {
          id: 1,
          title: "The future of TypeScript in 2025",
          body: "Let's discuss where TypeScript is headed in the next few years and what features we're most excited about.",
          tags: ["typescript", "javascript", "web-development"],
          likes: 47,
          comments: 23,
          user: {
            name: "David Kim",
            avatar: null,
            reputation: 4532,
          },
          timestamp: "3 hours ago",
          hot: true,
        },
        {
          id: 2,
          title: "Comparing different approaches to learning algorithms",
          body: "What's your preferred approach to learning algorithms? Books, courses, practice problems, or something else?",
          tags: ["learning", "algorithms", "education"],
          likes: 32,
          comments: 41,
          user: {
            name: "Priya Sharma",
            avatar: null,
            reputation: 2187,
          },
          timestamp: "1 day ago",
          hot: false,
        },
      ])

      setSnippets([
        {
          id: 1,
          title: "Efficient way to reverse a linked list in JavaScript",
          code: `function reverseLinkedList(head) {
 let prev = null;
 let current = head;
 let next = null;
 
 while (current !== null) {
   next = current.next;
   current.next = prev;
   prev = current;
   current = next;
 }
 
 return prev;
}`,
          language: "javascript",
          likes: 56,
          comments: 12,
          user: {
            name: "Jason Lee",
            avatar: null,
            reputation: 3245,
          },
          timestamp: "4 hours ago",
        },
        {
          id: 2,
          title: "Python decorator for timing function execution",
          code: `import time
from functools import wraps

def timing_decorator(func):
   @wraps(func)
   def wrapper(*args, **kwargs):
       start_time = time.time()
       result = func(*args, **kwargs)
       end_time = time.time()
       print(f"{func.__name__} took {end_time - start_time:.4f} seconds to execute")
       return result
   return wrapper

@timing_decorator
def example_function(n):
   # Some time-consuming operation
   return sum(i**2 for i in range(n))

# Usage
result = example_function(1000000)`,
          language: "python",
          likes: 78,
          comments: 15,
          user: {
            name: "Sophia Martinez",
            avatar: null,
            reputation: 5678,
          },
          timestamp: "1 day ago",
        },
      ])

      setIsLoading(false)
    }

    fetchData()
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <div className="container py-6 max-w-7xl">
      <CommunityHeader />

      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        {/* Main content */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="relative w-full md:w-auto flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search the community..."
                className="pl-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="unanswered">Unanswered</SelectItem>
                  <SelectItem value="solved">Solved</SelectItem>
                </SelectContent>
              </Select>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button onClick={() => setIsAskQuestionOpen(true)} className="whitespace-nowrap">
                      <Plus className="h-4 w-4 mr-2" />
                      Ask Question
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Share your question with the community</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <Tabs defaultValue="questions" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="questions" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                <span className="hidden sm:inline">Questions</span>
                <Badge variant="secondary" className="ml-1">
                  {questions.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="discussions" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span className="hidden sm:inline">Discussions</span>
                <Badge variant="secondary" className="ml-1">
                  {discussions.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="snippets" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span className="hidden sm:inline">Code Snippets</span>
                <Badge variant="secondary" className="ml-1">
                  {snippets.length}
                </Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="questions" className="space-y-6 mt-0">
              {isLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="animate-pulse">
                      <CardHeader>
                        <div className="h-6 bg-muted rounded w-3/4"></div>
                        <div className="h-4 bg-muted rounded w-1/2 mt-2"></div>
                      </CardHeader>
                      <CardContent>
                        <div className="h-4 bg-muted rounded w-full mb-2"></div>
                        <div className="h-4 bg-muted rounded w-full mb-2"></div>
                        <div className="h-4 bg-muted rounded w-2/3"></div>
                      </CardContent>
                      <CardFooter>
                        <div className="h-4 bg-muted rounded w-1/4"></div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                  className="space-y-4"
                >
                  {questions.map((question) => (
                    <motion.div key={question.id} variants={fadeIn}>
                      <QuestionCard question={question} />
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {!isLoading && questions.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No questions found</h3>
                  <p className="text-muted-foreground mb-4">Be the first to ask a question!</p>
                  <Button onClick={() => setIsAskQuestionOpen(true)}>Ask a Question</Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="discussions" className="space-y-6 mt-0">
              {isLoading ? (
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <Card key={i} className="animate-pulse">
                      <CardHeader>
                        <div className="h-6 bg-muted rounded w-3/4"></div>
                        <div className="h-4 bg-muted rounded w-1/2 mt-2"></div>
                      </CardHeader>
                      <CardContent>
                        <div className="h-4 bg-muted rounded w-full mb-2"></div>
                        <div className="h-4 bg-muted rounded w-full mb-2"></div>
                        <div className="h-4 bg-muted rounded w-2/3"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                  className="space-y-4"
                >
                  {discussions.map((discussion) => (
                    <motion.div key={discussion.id} variants={fadeIn}>
                      <DiscussionCard discussion={discussion} />
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {!isLoading && discussions.length === 0 && (
                <div className="text-center py-12">
                  <MessageCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No discussions yet</h3>
                  <p className="text-muted-foreground mb-4">Start a new discussion to get the conversation going!</p>
                  <Button onClick={() => setIsAskQuestionOpen(true)}>Start Discussion</Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="snippets" className="space-y-6 mt-0">
              {isLoading ? (
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <Card key={i} className="animate-pulse">
                      <CardHeader>
                        <div className="h-6 bg-muted rounded w-3/4"></div>
                        <div className="h-4 bg-muted rounded w-1/2 mt-2"></div>
                      </CardHeader>
                      <CardContent>
                        <div className="h-32 bg-muted rounded w-full"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                  className="space-y-4"
                >
                  {snippets.map((snippet) => (
                    <motion.div key={snippet.id} variants={fadeIn}>
                      <CodeSnippetCard snippet={snippet} />
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {!isLoading && snippets.length === 0 && (
                <div className="text-center py-12">
                  <Code className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No code snippets yet</h3>
                  <p className="text-muted-foreground mb-4">Share your code with the community!</p>
                  <Button onClick={() => setIsAskQuestionOpen(true)}>Share Code Snippet</Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                Trending Topics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TrendingTopics />
            </CardContent>
          </Card>

          {/* Add the Recently Viewed component */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                Recently Viewed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RecentlyViewed />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Award className="h-5 w-5 mr-2 text-primary" />
                Top Contributors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TopContributors />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-primary" />
                Community Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CommunityEvents />
            </CardContent>
          </Card>
        </div>
      </div>

      <AskQuestionDialog open={isAskQuestionOpen} onOpenChange={setIsAskQuestionOpen} />
    </div>
  )
}
