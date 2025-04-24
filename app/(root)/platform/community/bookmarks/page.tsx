"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Bookmark } from "lucide-react"
import { useCommunity } from "@/components/community/community-context"
import CommunityHeader from "@/components/community/community-header"
import QuestionCard from "@/components/community/question-card"
import DiscussionCard from "@/components/community/discussion-card"
import CodeSnippetCard from "@/components/community/code-snippet-card"

// Mock data - would be fetched from API in a real app
const mockQuestions = [
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
]

const mockDiscussions = [
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
]

const mockSnippets = [
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
]

export default function BookmarksPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const { bookmarkedItems } = useCommunity()

  // Filter mock data based on bookmarks
  const bookmarkedQuestions = mockQuestions.filter((q) => bookmarkedItems.has(`question-${q.id}`))

  const bookmarkedDiscussions = mockDiscussions.filter((d) => bookmarkedItems.has(`discussion-${d.id}`))

  const bookmarkedSnippets = mockSnippets.filter((s) => bookmarkedItems.has(`snippet-${s.id}`))

  // Filter by search query
  const filteredQuestions = bookmarkedQuestions.filter(
    (q) =>
      q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.body.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const filteredDiscussions = bookmarkedDiscussions.filter(
    (d) =>
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.body.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const filteredSnippets = bookmarkedSnippets.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.language.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const totalBookmarks = bookmarkedQuestions.length + bookmarkedDiscussions.length + bookmarkedSnippets.length

  return (
    <div className="container py-6 max-w-7xl">
      <CommunityHeader />

      <div className="mt-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold tracking-tight flex items-center">
            <Bookmark className="h-6 w-6 mr-2" />
            Your Bookmarks
            <span className="ml-2 text-sm font-normal text-muted-foreground">({totalBookmarks} items)</span>
          </h2>

          <div className="relative w-full md:w-auto flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search your bookmarks..."
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">
              All ({filteredQuestions.length + filteredDiscussions.length + filteredSnippets.length})
            </TabsTrigger>
            <TabsTrigger value="questions">Questions ({filteredQuestions.length})</TabsTrigger>
            <TabsTrigger value="discussions">Discussions ({filteredDiscussions.length})</TabsTrigger>
            <TabsTrigger value="snippets">Code Snippets ({filteredSnippets.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6 mt-0">
            {filteredQuestions.length === 0 && filteredDiscussions.length === 0 && filteredSnippets.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Bookmark className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No bookmarks found</h3>
                  <p className="text-muted-foreground text-center max-w-md">
                    {searchQuery
                      ? "No bookmarks match your search query. Try a different search term."
                      : "You haven't bookmarked any content yet. Browse the community and bookmark items you want to save for later."}
                  </p>
                </CardContent>
              </Card>
            ) : (
              <>
                {filteredQuestions.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Questions</h3>
                    {filteredQuestions.map((question) => (
                      <QuestionCard key={question.id} question={question} />
                    ))}
                  </div>
                )}

                {filteredDiscussions.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Discussions</h3>
                    {filteredDiscussions.map((discussion) => (
                      <DiscussionCard key={discussion.id} discussion={discussion} />
                    ))}
                  </div>
                )}

                {filteredSnippets.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Code Snippets</h3>
                    {filteredSnippets.map((snippet) => (
                      <CodeSnippetCard key={snippet.id} snippet={snippet} />
                    ))}
                  </div>
                )}
              </>
            )}
          </TabsContent>

          <TabsContent value="questions" className="space-y-6 mt-0">
            {filteredQuestions.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Bookmark className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No bookmarked questions</h3>
                  <p className="text-muted-foreground text-center max-w-md">
                    {searchQuery
                      ? "No bookmarked questions match your search query."
                      : "You haven't bookmarked any questions yet."}
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredQuestions.map((question) => (
                  <QuestionCard key={question.id} question={question} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="discussions" className="space-y-6 mt-0">
            {filteredDiscussions.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Bookmark className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No bookmarked discussions</h3>
                  <p className="text-muted-foreground text-center max-w-md">
                    {searchQuery
                      ? "No bookmarked discussions match your search query."
                      : "You haven't bookmarked any discussions yet."}
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredDiscussions.map((discussion) => (
                  <DiscussionCard key={discussion.id} discussion={discussion} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="snippets" className="space-y-6 mt-0">
            {filteredSnippets.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Bookmark className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No bookmarked code snippets</h3>
                  <p className="text-muted-foreground text-center max-w-md">
                    {searchQuery
                      ? "No bookmarked code snippets match your search query."
                      : "You haven't bookmarked any code snippets yet."}
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredSnippets.map((snippet) => (
                  <CodeSnippetCard key={snippet.id} snippet={snippet} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
