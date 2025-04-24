"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { HelpCircle, MessageCircle, Code, Users, TrendingUp, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function CommunityNavigation() {
  const pathname = usePathname()

  const navItems = [
    { name: "Overview", path: "/community", icon: Users },
    { name: "Questions", path: "/community/questions", icon: HelpCircle },
    { name: "Discussions", path: "/community/discussions", icon: MessageCircle },
    { name: "Code Snippets", path: "/community/snippets", icon: Code },
    { name: "Trending", path: "/community/trending", icon: TrendingUp },
    { name: "Events", path: "/community/events", icon: Calendar },
  ]

  return (
    <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-hide">
      <div className="flex space-x-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = item.path === "/community" ? pathname === "/community" : pathname.startsWith(item.path)

          return (
            <Button
              key={item.path}
              variant={isActive ? "default" : "outline"}
              size="sm"
              className={cn(
                "flex items-center",
                isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground",
              )}
              asChild
            >
              <Link href={item.path}>
                <Icon className="h-4 w-4 mr-2" />
                {item.name}
              </Link>
            </Button>
          )
        })}
      </div>
    </div>
  )
}
