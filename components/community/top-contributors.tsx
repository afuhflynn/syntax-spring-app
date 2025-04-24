import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function TopContributors() {
  // Mock data for top contributors
  const topContributors = [
    { id: 1, name: "Alex Johnson", username: "alexj", avatar: null, reputation: 3567, badge: "Gold" },
    { id: 2, name: "Priya Patel", username: "priyap", avatar: null, reputation: 2921, badge: "Silver" },
    { id: 3, name: "David Kim", username: "davidk", avatar: null, reputation: 2456, badge: "Silver" },
    { id: 4, name: "Maria Garcia", username: "mariag", avatar: null, reputation: 2134, badge: "Bronze" },
    { id: 5, name: "James Wilson", username: "jamesw", avatar: null, reputation: 1876, badge: "Bronze" },
  ]

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Gold":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Silver":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
      case "Bronze":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="space-y-4">
      {topContributors.map((contributor) => (
        <Link
          key={contributor.id}
          href={`/community/users/${contributor.username}`}
          className="flex items-center justify-between py-2 hover:text-primary transition-colors"
        >
          <div className="flex items-center">
            <Avatar className="h-6 w-6 mr-2">
              <AvatarImage src={contributor.avatar || ""} alt={contributor.name} />
              <AvatarFallback>{contributor.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{contributor.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{contributor.reputation}</span>
            <Badge variant="outline" className={getBadgeColor(contributor.badge)}>
              {contributor.badge}
            </Badge>
          </div>
        </Link>
      ))}
    </div>
  )
}
