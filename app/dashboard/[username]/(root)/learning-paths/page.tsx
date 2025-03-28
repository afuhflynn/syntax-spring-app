"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

// Mock data - replace with actual API calls
const learningPaths = [
  {
    id: 1,
    title: "Algorithms Mastery",
    description: "Master fundamental algorithms and problem-solving techniques",
    totalChallenges: 20,
    completedChallenges: 9,
    estimatedHours: 25,
    level: "Intermediate",
    category: "Algorithms",
    enrolled: true,
    challenges: [
      { id: 101, title: "Two Sum", completed: true, difficulty: "Easy" },
      { id: 102, title: "Valid Palindrome", completed: true, difficulty: "Easy" },
      { id: 103, title: "Binary Search", completed: true, difficulty: "Easy" },
      { id: 104, title: "Merge Sort", completed: true, difficulty: "Medium" },
      { id: 105, title: "Quick Sort", completed: true, difficulty: "Medium" },
      { id: 106, title: "Depth-First Search", completed: true, difficulty: "Medium" },
      { id: 107, title: "Breadth-First Search", completed: true, difficulty: "Medium" },
      { id: 108, title: "Dijkstra's Algorithm", completed: true, difficulty: "Hard" },
      { id: 109, title: "Dynamic Programming Basics", completed: true, difficulty: "Medium" },
      { id: 110, title: "Knapsack Problem", completed: false, difficulty: "Hard" },
      { id: 111, title: "Longest Common Subsequence", completed: false, difficulty: "Medium" },
    ],
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Learn modern frontend development with React and Next.js",
    totalChallenges: 15,
    completedChallenges: 4,
    estimatedHours: 20,
    level: "Beginner",
    category: "Web Development",
    enrolled: true,
    challenges: [
      { id: 201, title: "HTML Basics", completed: true, difficulty: "Easy" },
      { id: 202, title: "CSS Fundamentals", completed: true, difficulty: "Easy" },
      { id: 203, title: "JavaScript Essentials", completed: true, difficulty: "Easy" },
      { id: 204, title: "DOM Manipulation", completed: true, difficulty: "Easy" },
      { id: 205, title: "React Components", completed: false, difficulty: "Medium" },
      { id: 206, title: "React Hooks", completed: false, difficulty: "Medium" },
    ],
  },
  {
    id: 3,
    title: "Data Structures Deep Dive",
    description: "Comprehensive guide to essential data structures",
    totalChallenges: 18,
    completedChallenges: 0,
    estimatedHours: 30,
    level: "Advanced",
    category: "Data Structures",
    enrolled: false,
    challenges: [
      { id: 301, title: "Arrays and Strings", completed: false, difficulty: "Easy" },
      { id: 302, title: "Linked Lists", completed: false, difficulty: "Medium" },
      { id: 303, title: "Stacks and Queues", completed: false, difficulty: "Medium" },
    ],
  },
  {
    id: 4,
    title: "Python for Data Science",
    description: "Learn Python programming for data analysis and visualization",
    totalChallenges: 12,
    completedChallenges: 0,
    estimatedHours: 15,
    level: "Beginner",
    category: "Data Science",
    enrolled: false,
    challenges: [
      { id: 401, title: "Python Basics", completed: false, difficulty: "Easy" },
      { id: 402, title: "NumPy Fundamentals", completed: false, difficulty: "Easy" },
      { id: 403, title: "Pandas for Data Analysis", completed: false, difficulty: "Medium" },
    ],
  },
]

export default function LearningPathsPage() {
  const [activeTab, setActiveTab] = useState("enrolled")

  const enrolledPaths = learningPaths.filter((path) => path.enrolled)
  const availablePaths = learningPaths.filter((path) => !path.enrolled)

  const displayPaths = activeTab === "all" ? learningPaths : activeTab === "enrolled" ? enrolledPaths : availablePaths

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Learning Paths</h1>
        <p className="text-muted-foreground">
          Structured learning paths to help you master different programming
          domains.
        </p>
      </div>

      <Tabs
        defaultValue="enrolled"
        className="w-[400px]"
        onValueChange={setActiveTab}
      >
        <TabsList>
          <TabsTrigger value="enrolled">
            Enrolled ({enrolledPaths.length})
          </TabsTrigger>
          <TabsTrigger value="available">
            Available ({availablePaths.length})
          </TabsTrigger>
          <TabsTrigger value="all">All ({learningPaths.length})</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2">
        {displayPaths.map((path) => (
          <Card
            key={path.id}
            className={path.enrolled ? "border-primary/50" : ""}
          >
            <CardHeader>
              <div className="flex justify-between">
                <Badge variant="outline" className="mb-2">
                  {path.category}
                </Badge>
                <Badge
                  variant={
                    path.level === "Beginner"
                      ? "outline"
                      : path.level === "Intermediate"
                      ? "secondary"
                      : "default"
                  }
                >
                  {path.level}
                </Badge>
              </div>
              <CardTitle>{path.title}</CardTitle>
              <CardDescription>{path.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <CheckCircle className="mr-1 h-4 w-4 text-primary" />
                  <span>
                    {path.completedChallenges}/{path.totalChallenges} challenges
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {path.estimatedHours} hours
                  </span>
                </div>
              </div>

              {path.enrolled && (
                <>
                  <Progress
                    value={
                      (path.completedChallenges / path.totalChallenges) * 100
                    }
                    className="h-2"
                  />
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Recent Challenges:</p>
                    <ul className="space-y-1">
                      {path.challenges.slice(0, 3).map((challenge) => (
                        <li
                          key={challenge.id}
                          className="flex items-center text-sm"
                        >
                          {challenge.completed ? (
                            <CheckCircle className="mr-2 h-3 w-3 text-green-500" />
                          ) : (
                            <div className="mr-2 h-3 w-3 rounded-full border border-muted-foreground" />
                          )}
                          <span
                            className={
                              challenge.completed
                                ? "line-through text-muted-foreground"
                                : ""
                            }
                          >
                            {challenge.title}
                          </span>
                          <Badge variant="outline" className="ml-auto text-xs">
                            {challenge.difficulty}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </CardContent>
            <CardFooter>
              {path.enrolled ? (
                <Button className="w-full">
                  <Link
                    href={`/dashboard/learning-paths/${path.id}`}
                    className="flex items-center w-full justify-center"
                  >
                    Continue Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <Button variant="outline" className="w-full">
                  Enroll Now
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

