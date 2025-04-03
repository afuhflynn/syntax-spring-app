import { ArrowRight, BookOpen, Code, Users } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <section className="py-20 bg-background w-full">
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
              Browse our collection of challenges across different languages and
              difficulty levels
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
              Use our in-browser editor to write and test your solution in your
              preferred language
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">3. Learn and Improve</h3>
            <p className="text-muted-foreground">
              Get feedback, compare with other solutions, and improve your
              coding skills
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-12 w-full">
          <Button size="lg" asChild className="w-full md:w-auto">
            <Link
              href="/platform/challenges"
              className="flex flex-row items-center justify-center"
            >
              Start Your First Challenge <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
