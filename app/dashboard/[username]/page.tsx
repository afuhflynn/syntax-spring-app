"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Leaderboard } from "@/components/leaderboard"

export default function DashboardPage() {
  const [user, setUser] = useState({
    name: "John Doe",
    completedChallenges: 15,
    streak: 7,
    points: 1250,
    badges: ["Python Master", "JavaScript Guru", "30-Day Streak"],
  })

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Welcome, {user.name}!</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Completed Challenges</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{user.completedChallenges}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Streak</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{user.streak} days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Points</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{user.points}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Your Badges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {user.badges.map((badge, index) => (
                <Badge key={index} variant="secondary">
                  {badge}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Progress to Next Level</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={75} className="w-full" />
            <p className="text-sm text-muted-foreground mt-2">750 points to next level</p>
          </CardContent>
        </Card>
      </div>

      <Leaderboard />
    </div>
  )
}

