import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Syntax Spring",
  description: "Read our latest articles about coding, programming languages, and software development.",
}

const blogPosts = [
  {
    id: 1,
    title: "Mastering Two-Pointer Techniques in Coding Interviews",
    excerpt:
      "Learn how to effectively use the two-pointer technique to solve array and string problems in coding interviews.",
    date: "2025-03-01",
    author: "Jane Smith",
    category: "Algorithms",
    slug: "mastering-two-pointer-techniques",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Understanding React Server Components",
    excerpt:
      "Dive deep into React Server Components and learn how they can improve your application's performance and user experience.",
    date: "2025-02-15",
    author: "John Doe",
    category: "React",
    slug: "understanding-react-server-components",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "The Power of Dynamic Programming",
    excerpt: "Explore dynamic programming concepts and learn how to apply them to solve complex algorithmic problems.",
    date: "2025-02-01",
    author: "Alex Johnson",
    category: "Algorithms",
    slug: "power-of-dynamic-programming",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "Getting Started with TypeScript in 2025",
    excerpt:
      "A comprehensive guide to getting started with TypeScript in 2025, covering all the latest features and best practices.",
    date: "2025-01-20",
    author: "Sarah Williams",
    category: "TypeScript",
    slug: "getting-started-with-typescript-2025",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "Optimizing Your Next.js Application",
    excerpt:
      "Learn advanced techniques to optimize your Next.js application for better performance and user experience.",
    date: "2025-01-10",
    author: "Michael Brown",
    category: "Next.js",
    slug: "optimizing-nextjs-application",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    title: "Introduction to System Design Interviews",
    excerpt:
      "A beginner's guide to system design interviews, covering key concepts and approaches to tackle complex design problems.",
    date: "2025-01-05",
    author: "David Lee",
    category: "System Design",
    slug: "introduction-system-design-interviews",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function BlogPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">Blog</h1>
        <p className="text-muted-foreground max-w-[700px] mx-auto">
          Read our latest articles about coding, programming languages, and software development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col h-full overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{post.category}</Badge>
                <div className="flex items-center text-xs text-muted-foreground">
                  <CalendarDays className="h-3 w-3 mr-1" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </div>
              <CardTitle className="text-xl">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription>{post.excerpt}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto pt-4">
              <div className="text-sm">By {post.author}</div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

