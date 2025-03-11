"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Terminal,
  Zap,
  CheckCircle,
  Users,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Leaderboard } from "@/components/leaderboard";

export default function Home() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Sample languages
  const languages = [
    {
      name: "JavaScript",
      color:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    },
    {
      name: "Python",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    },
    {
      name: "Java",
      color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    },
    {
      name: "C++",
      color:
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    },
    {
      name: "HTML/CSS",
      color:
        "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    },
    {
      name: "React",
      color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background -z-10" />
        <div className="container relative z-10">
          <motion.div
            className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Badge className="px-4 py-1.5 text-sm font-medium mb-2">
              Welcome to Syntax Spring
            </Badge>
            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-tighter"
              variants={fadeIn}
            >
              Master Coding Challenges{" "}
              <span className="text-primary">Interactively</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl"
              variants={fadeIn}
            >
              Improve your programming skills with our interactive coding
              platform. Write, test, and execute code directly in your browser
              across multiple languages.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-4"
              variants={fadeIn}
            >
              <Button size="lg" asChild>
                <Link href="/challenges">
                  Start Coding <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Language badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mt-12"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.1,
                      duration: 0.5,
                    },
                  },
                }}
              >
                <Badge
                  variant="outline"
                  className={cn("px-3 py-1", lang.color)}
                >
                  {lang.name}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">
                  Features
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                  Everything You Need to Excel
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our platform provides all the tools you need to master coding
                  challenges and improve your skills
                </p>
              </div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div variants={fadeIn}>
                  <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-colors">
                    <CardHeader>
                      <Code className="h-10 w-10 text-primary mb-2" />
                      <CardTitle>In-Browser Editor</CardTitle>
                      <CardDescription>
                        Write and test code directly in your browser with our
                        Monaco-powered editor
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>Support for multiple languages</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>Syntax highlighting and auto-completion</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>Customizable editor settings</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" asChild className="w-full">
                        <Link href="/challenges">
                          Try it out <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-colors">
                    <CardHeader>
                      <Terminal className="h-10 w-10 text-primary mb-2" />
                      <CardTitle>Live Execution</CardTitle>
                      <CardDescription>
                        Execute your code and see results instantly with our
                        integrated runtime
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>
                            Powered by the Piston API for secure execution
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>Real-time output and error handling</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>Live preview for web languages</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" asChild className="w-full">
                        <Link href="/challenges">
                          See it in action{" "}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-colors">
                    <CardHeader>
                      <Zap className="h-10 w-10 text-primary mb-2" />
                      <CardTitle>AI Assistance</CardTitle>
                      <CardDescription>
                        Get help from our AI assistant when you're stuck on a
                        challenge
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>Contextual hints and guidance</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>Code explanations and best practices</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>Personalized learning experience</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" asChild className="w-full">
                        <Link href="/challenges">
                          Get help <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
            <div>
              <Leaderboard />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Simple Process, Powerful Results
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform makes it easy to practice coding and improve your
              skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                1. Choose a Challenge
              </h3>
              <p className="text-muted-foreground">
                Browse our collection of challenges across different languages
                and difficulty levels
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                2. Write Your Solution
              </h3>
              <p className="text-muted-foreground">
                Use our in-browser editor to write and test your solution in
                your preferred language
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                3. Learn and Improve
              </h3>
              <p className="text-muted-foreground">
                Get feedback, compare with other solutions, and improve your
                coding skills
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button size="lg" asChild>
              <Link href="/challenges">
                Start Your First Challenge{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
              Ready to Level Up Your Coding Skills?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Join thousands of developers who are improving their skills with
              Syntax Spring. Start coding today and see the difference.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/challenges">
                Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
