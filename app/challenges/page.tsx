import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Challenges | Syntax Spring",
  description: "Browse our collection of coding challenges across multiple languages and difficulty levels.",
}

interface Challenge {
  id: string
  title: string
  description: string
  difficulty: "Easy" | "Medium" | "Hard"
  languages: string[]
  slug: string
}

const challenges: Challenge[] = [
  {
    id: "1",
    title: "Two Sum",
    description:
      "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    difficulty: "Easy",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "two-sum",
  },
  {
    id: "2",
    title: "Responsive Landing Page",
    description: "Create a responsive landing page using HTML, CSS, and JavaScript that works on all device sizes.",
    difficulty: "Medium",
    languages: ["HTML", "CSS", "JavaScript"],
    slug: "responsive-landing-page",
  },
  {
    id: "3",
    title: "Binary Tree Traversal",
    description: "Implement pre-order, in-order, and post-order traversal algorithms for a binary tree.",
    difficulty: "Medium",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "binary-tree-traversal",
  },
  {
    id: "4",
    title: "React Todo App",
    description: "Build a todo application with React that allows adding, editing, and deleting tasks.",
    difficulty: "Medium",
    languages: ["React", "TypeScript"],
    slug: "react-todo-app",
  },
  {
    id: "5",
    title: "Merge Sort Implementation",
    description: "Implement the merge sort algorithm and analyze its time and space complexity.",
    difficulty: "Medium",
    languages: ["JavaScript", "Python", "Java", "C++", "Rust"],
    slug: "merge-sort",
  },
  {
    id: "6",
    title: "Dynamic Programming: Knapsack",
    description: "Solve the 0/1 knapsack problem using dynamic programming techniques.",
    difficulty: "Hard",
    languages: ["JavaScript", "Python", "Java", "C++"],
    slug: "knapsack",
  },
]

export default function ChallengesPage() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Hard":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">Coding Challenges</h1>
        <p className="text-muted-foreground max-w-[700px] mx-auto">
          Browse our collection of coding challenges across multiple languages and difficulty levels. Test your skills
          and improve your coding abilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <Card key={challenge.id} className="flex flex-col h-full">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{challenge.title}</CardTitle>
                <Badge className={getDifficultyColor(challenge.difficulty)}>{challenge.difficulty}</Badge>
              </div>
              <CardDescription>{challenge.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {challenge.languages.map((language) => (
                  <Badge key={language} variant="outline">
                    {language}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/challenges/${challenge.slug}`}>
                  Solve Challenge <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

