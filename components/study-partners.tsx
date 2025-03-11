"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface Partner {
  id: string
  name: string
  skills: string[]
  availability: string
}

export function StudyPartners() {
  const [partners, setPartners] = useState<Partner[]>([
    { id: "1", name: "Alice", skills: ["JavaScript", "React"], availability: "Evenings" },
    { id: "2", name: "Bob", skills: ["Python", "Django"], availability: "Weekends" },
    { id: "3", name: "Charlie", skills: ["Java", "Spring"], availability: "Mornings" },
  ])

  const connectWithPartner = (partnerId: string) => {
    // Implement connection logic here
    console.log(`Connecting with partner ${partnerId}`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Find Study Partners</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {partners.map((partner) => (
            <li key={partner.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarFallback>{partner.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{partner.name}</p>
                  <p className="text-sm text-muted-foreground">{partner.skills.join(", ")}</p>
                  <p className="text-sm text-muted-foreground">Available: {partner.availability}</p>
                </div>
              </div>
              <Button onClick={() => connectWithPartner(partner.id)}>Connect</Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

