import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, MessageCircle, Code } from "lucide-react"
import CommunityNavigation from "@/components/community/community-navigation"

export default function CommunityHeader() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Syntax Spring Community</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Connect with fellow developers, ask questions, share knowledge, and grow together.
        </p>
      </div>

      <CommunityNavigation />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-lg">
              <HelpCircle className="h-5 w-5 mr-2 text-primary" />
              Ask Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Get help with coding challenges, debugging issues, or understanding concepts.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-lg">
              <MessageCircle className="h-5 w-5 mr-2 text-primary" />
              Join Discussions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Share your thoughts on programming topics and learn from diverse perspectives.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-lg">
              <Code className="h-5 w-5 mr-2 text-primary" />
              Share Code
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Post code snippets, get feedback, and discover elegant solutions to common problems.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
