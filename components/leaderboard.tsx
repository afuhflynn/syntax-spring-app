"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star } from "lucide-react"

interface LeaderboardUser {
  name: string
  points: number
  rank: number
  badge: string
}

export function Leaderboard() {
  const [topUsers, setTopUsers] = useState<LeaderboardUser[]>([
    { name: "Alice", points: 1500, rank: 1, badge: "Gold" },
    { name: "Bob", points: 1350, rank: 2, badge: "Silver" },
    { name: "Charlie", points: 1200, rank: 3, badge: "Bronze" },
    { name: "David", points: 1100, rank: 4, badge: "Expert" },
    { name: "Eve", points: 1000, rank: 5, badge: "Pro" },
  ])

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case "Gold":
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case "Silver":
        return <Award className="h-5 w-5 text-gray-400" />
      case "Bronze":
        return <Award className="h-5 w-5 text-orange-600" />
      default:
        return <Star className="h-5 w-5 text-blue-500" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {topUsers.map((user, index) => (
            <li key={index} className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <span className="font-bold">{user.rank}</span>
                <span>{user.name}</span>
                <Badge variant="secondary" className="flex items-center space-x-1">
                  {getBadgeIcon(user.badge)}
                  <span>{user.badge}</span>
                </Badge>
              </div>
              <span className="font-bold">{user.points} pts</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

