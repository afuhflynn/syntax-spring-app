"use client"

import Link from "next/link"
import { Clock } from "lucide-react"
import { useCommunity } from "@/components/community/community-context"

export default function RecentlyViewed() {
  const { recentlyViewed } = useCommunity()

  if (recentlyViewed.length === 0) {
    return null
  }

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium flex items-center">
        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
        Recently Viewed
      </h3>
      <ul className="space-y-1">
        {recentlyViewed.map((item) => {
          const [key, title] = item.split("|")
          const [type, id] = key.split("-")

          let href = "/community"
          if (type === "question") href = `/community/questions/${id}`
          if (type === "discussion") href = `/community/discussions/${id}`
          if (type === "snippet") href = `/community/snippets/${id}`

          return (
            <li key={key} className="text-sm">
              <Link href={href} className="text-muted-foreground hover:text-primary transition-colors line-clamp-1">
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
