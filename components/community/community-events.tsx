import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function CommunityEvents() {
  // Mock data for community events
  const communityEvents = [
    {
      id: 1,
      title: "Algorithms Workshop",
      date: "2023-04-15",
      time: "10:00 AM - 12:00 PM",
      location: "Online",
      url: "/community/events/algorithms-workshop",
    },
    {
      id: 2,
      title: "React Hooks Deep Dive",
      date: "2023-04-22",
      time: "2:00 PM - 4:00 PM",
      location: "Online",
      url: "/community/events/react-hooks-deep-dive",
    },
    {
      id: 3,
      title: "Code Review Session",
      date: "2023-04-29",
      time: "11:00 AM - 1:00 PM",
      location: "Online",
      url: "/community/events/code-review-session",
    },
  ]

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <div className="space-y-4">
      {communityEvents.map((event, index) => (
        <div key={event.id}>
          <div className="space-y-2">
            <Link href={event.url} className="font-medium hover:text-primary transition-colors">
              {event.title}
            </Link>
            <div className="flex flex-col space-y-1 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-2" />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-3 w-3 mr-2" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>

          {index < communityEvents.length - 1 && <Separator className="my-3" />}
        </div>
      ))}

      <Button variant="outline" size="sm" className="w-full mt-2" asChild>
        <Link href="/community/events">View All Events</Link>
      </Button>
    </div>
  )
}
