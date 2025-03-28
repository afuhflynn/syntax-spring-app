"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Code, Award, MessageSquare, GitBranch, Star } from "lucide-react"

// Mock data - replace with actual API calls
const activityData = [
  {
    id: 1,
    type: "challenge_completed",
    title: "Two Sum",
    description: "You solved the Two Sum challenge",
    date: "2023-12-22T14:30:00Z",
    difficulty: "Easy",
    points: 10,
  },
  {
    id: 2,
    type: "badge_earned",
    title: "Streak Master",
    description: "You earned the Streak Master badge",
    date: "2023-12-20T09:15:00Z",
    points: 50,
  },
  {
    id: 3,
    type: "challenge_attempted",
    title: "Valid Palindrome",
    description: "You attempted the Valid Palindrome challenge",
    date: "2023-12-19T16:45:00Z",
    difficulty: "Easy",
    points: 0,
  },
  {
    id: 4,
    type: "comment_posted",
    title: "Comment on Binary Search",
    description: "You posted a comment on the Binary Search challenge",
    date: "2023-12-18T11:20:00Z",
    points: 2,
  },
  {
    id: 5,
    type: "challenge_completed",
    title: "Merge Sort",
    description: "You solved the Merge Sort challenge",
    date: "2023-12-17T15:10:00Z",
    difficulty: "Medium",
    points: 20,
  },
  {
    id: 6,
    type: "learning_path_progress",
    title: "Algorithms Mastery",
    description: "You made progress in the Algorithms Mastery learning path",
    date: "2023-12-16T10:05:00Z",
    progress: 45,
    points: 5,
  },
  {
    id: 7,
    type: "challenge_completed",
    title: "Binary Search",
    description: "You solved the Binary Search challenge",
    date: "2023-12-15T13:40:00Z",
    difficulty: "Easy",
    points: 10,
  },
  {
    id: 8,
    type: "badge_earned",
    title: "First Blood",
    description: "You earned the First Blood badge",
    date: "2023-12-14T08:30:00Z",
    points: 10,
  },
]

export default function ActivityPage() {
  const [activeTab, setActiveTab] = useState("all")

  const challengeActivities = activityData.filter(
    (activity) => activity.type === "challenge_completed" || activity.type === "challenge_attempted",
  )

  const badgeActivities = activityData.filter((activity) => activity.type === "badge_earned")

  const otherActivities = activityData.filter(
    (activity) =>
      activity.type !== "challenge_completed" &&
      activity.type !== "challenge_attempted" &&
      activity.type !== "badge_earned",
  )

  const displayActivities =
    activeTab === "all"
      ? activityData
      : activeTab === "challenges"
        ? challengeActivities
        : activeTab === "badges"
          ? badgeActivities
          : otherActivities

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "challenge_completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "challenge_attempted":
        return <Code className="h-5 w-5 text-primary" />
      case "badge_earned":
        return <Award className="h-5 w-5 text-yellow-500" />
      case "comment_posted":
        return <MessageSquare className="h-5 w-5 text-blue-500" />
      case "learning_path_progress":
        return <GitBranch className="h-5 w-5 text-purple-500" />
      default:
        return <Star className="h-5 w-5 text-primary" />
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInMs = now.getTime() - date.getTime()
    const diffInSecs = Math.floor(diffInMs / 1000)
    const diffInMins = Math.floor(diffInSecs / 60)
    const diffInHours = Math.floor(diffInMins / 60)
    const diffInDays = Math.floor(diffInHours / 24)

    if (diffInSecs < 60) {
      return `${diffInSecs} seconds ago`
    } else if (diffInMins < 60) {
      return `${diffInMins} minutes ago`
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`
    } else {
      return date.toLocaleDateString()
    }
  }

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Activity Log</h1>
        <p className="text-muted-foreground">Track your recent actions and achievements on the platform.</p>
      </div>

      <Tabs defaultValue="all" className="w-[400px]" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All Activity</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
          <TabsTrigger value="other">Other</TabsTrigger>
        </TabsList>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest actions and achievements on the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {displayActivities.map((activity) => (
              <div key={activity.id} className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-muted bg-background">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="h-full w-px bg-border" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center">
                    <p className="font-medium">{activity.title}</p>
                    {activity.difficulty && (
                      <Badge
                        variant="outline"
                        className={`ml-2 ${
                          activity.difficulty === "Easy"
                            ? "text-difficulty-easy"
                            : activity.difficulty === "Medium"
                              ? "text-difficulty-medium"
                              : "text-difficulty-hard"
                        }`}
                      >
                        {activity.difficulty}
                      </Badge>
                    )}
                    {activity.points > 0 && <Badge className="ml-2 bg-primary">+{activity.points} points</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                  <div className="flex items-center pt-1 text-xs text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    <span>{formatDate(activity.date)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

