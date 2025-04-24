import Link from "next/link"
import { TrendingUp, MessageSquare } from "lucide-react"

export default function TrendingTopics() {
  // Mock data for trending topics
  const trendingTopics = [
    { id: 1, name: "React Hooks", count: 42 },
    { id: 2, name: "TypeScript", count: 38 },
    { id: 3, name: "Data Structures", count: 27 },
    { id: 4, name: "Next.js", count: 24 },
    { id: 5, name: "Algorithms", count: 19 },
  ]

  return (
    <div className="space-y-4">
      {trendingTopics.map((topic) => (
        <Link
          key={topic.id}
          href={`/community?tag=${topic.name.toLowerCase().replace(/\s+/g, "-")}`}
          className="flex items-center justify-between py-2 hover:text-primary transition-colors"
        >
          <div className="flex items-center">
            <TrendingUp className="h-4 w-4 mr-2 text-primary" />
            <span>{topic.name}</span>
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <MessageSquare className="h-3 w-3 mr-1" />
            <span>{topic.count}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
