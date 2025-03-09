"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code, Terminal, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center text-center space-y-4"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.h1 className="text-4xl md:text-6xl font-bold tracking-tighter" variants={fadeIn}>
              Syntax <span className="text-primary">Spring</span>
            </motion.h1>
            <motion.p className="max-w-[700px] text-muted-foreground md:text-xl" variants={fadeIn}>
              Master coding challenges in multiple languages with our interactive platform. Code directly in your
              browser and see results in real-time.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 mt-8" variants={fadeIn}>
              <Button asChild size="lg">
                <Link href="/challenges">
                  Start Coding <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Key Features</h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              Everything you need to master coding challenges and improve your skills
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeIn}>
              <Card className="h-full">
                <CardHeader>
                  <Code className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>In-Browser Editor</CardTitle>
                  <CardDescription>
                    Write and test code directly in your browser with our Monaco-powered editor
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Support for multiple languages including JavaScript, Python, C++, and more
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" asChild>
                    <Link href="/challenges">
                      Try it out <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full">
                <CardHeader>
                  <Terminal className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Live Execution</CardTitle>
                  <CardDescription>
                    Execute your code and see results instantly with our integrated runtime
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Powered by the Piston API for secure and fast code execution</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" asChild>
                    <Link href="/challenges">
                      See it in action <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full">
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>AI Assistance</CardTitle>
                  <CardDescription>Get help from our AI assistant when you're stuck on a challenge</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Receive hints, explanations, and guidance without revealing the full solution
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" asChild>
                    <Link href="/challenges">
                      Get help <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

