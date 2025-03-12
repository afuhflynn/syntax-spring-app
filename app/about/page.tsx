import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About | Syntax Spring",
  description:
    "Learn about Syntax Spring, our mission, and the team behind the platform.",
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter mb-6">
          About Syntax Spring
        </h1>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-muted-foreground mb-6">
            Syntax Spring is a modern coding challenge platform designed to help
            innovative minds improve their skills through interactive coding
            exercises.
          </p>

          <p>
            Our platform offers a wide range of challenges across multiple
            programming languages and difficulty levels. Whether you're a
            beginner looking to learn the basics or an experienced developer
            preparing for technical interviews, Syntax Spring has something for
            you.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>

          <p>
            We believe that the best way to learn programming is by doing. Our
            mission is to provide a comprehensive, interactive learning
            environment where learners can:
          </p>

          <ul>
            <li>Practice coding in a variety of languages</li>
            <li>Solve real-world problems and algorithmic challenges</li>
            <li>Receive immediate feedback on their solutions</li>
            <li>Learn from AI-powered assistance when they get stuck</li>
            <li>Build a portfolio of completed challenges</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Technology</h2>

          <p>
            Syntax Spring is built with modern web technologies to provide the
            best possible user experience:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="flex flex-col items-center justify-center p-6">
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="React.js Logo"
              width={60}
              height={60}
              className="mb-4"
            />
            <span className="font-medium">React.js v19</span>
          </Card>

          <Card className="flex flex-col items-center justify-center p-6">
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="Next.js Logo"
              width={60}
              height={60}
              className="mb-4"
            />
            <span className="font-medium">Next.js</span>
          </Card>

          <Card className="flex flex-col items-center justify-center p-6">
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="TypeScript Logo"
              width={60}
              height={60}
              className="mb-4"
            />
            <span className="font-medium">TypeScript</span>
          </Card>

          <Card className="flex flex-col items-center justify-center p-6">
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="Tailwind CSS Logo"
              width={60}
              height={60}
              className="mb-4"
            />
            <span className="font-medium">Tailwind CSS</span>
          </Card>

          <Card className="flex flex-col items-center justify-center p-6">
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="Framer Motion Logo"
              width={60}
              height={60}
              className="mb-4"
            />
            <span className="font-medium">Framer Motion</span>
          </Card>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-2">
                  In-Browser Code Editor
                </h3>
                <p className="text-muted-foreground">
                  Write and edit code directly in your browser with our
                  Monaco-powered editor, featuring syntax highlighting and
                  intelligent code completion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-2">
                  Multi-Language Support
                </h3>
                <p className="text-muted-foreground">
                  Practice in a wide range of programming languages, including
                  JavaScript, Python, Java, C++, and more.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-2">
                  Live Code Execution
                </h3>
                <p className="text-muted-foreground">
                  Run your code and see the results instantly, with support for
                  both native languages and web technologies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-2">AI Assistance</h3>
                <p className="text-muted-foreground">
                  Get help from our AI assistant when you're stuck on a
                  challenge, with hints and guidance tailored to your specific
                  problem.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Get Started</h2>

          <p>
            Ready to improve your coding skills? Head over to our challenges
            page and start coding!
          </p>
        </div>
      </div>
    </div>
  );
}
