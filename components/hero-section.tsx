import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeIn, staggerContainer } from "@/constants/constants";

export default function Hero() {
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
            Master Coding With{" "}
            <span className="text-primary">Interactive Challenges</span>
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
              <Link href="/platform/challenges">
                Start Coding <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/platform/about">Learn More</Link>
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
              <Badge variant="outline" className={cn("px-3 py-1", lang.color)}>
                {lang.name}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
