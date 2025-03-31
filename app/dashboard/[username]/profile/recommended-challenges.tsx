import Link from "next/link";
import { ArrowRight, Code, Star, Clock } from "lucide-react";
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

export function RecommendedChallenges() {
  // Mock data for recommended challenges
  const recommendedChallenges = [
    {
      id: 1,
      title: "Build a React Hook Form",
      description:
        "Create a custom React hook for form validation and submission",
      difficulty: "Intermediate",
      tags: ["React", "Hooks", "Forms"],
      estimatedTime: "45 min",
      points: 150,
    },
    {
      id: 2,
      title: "TypeScript Generics Challenge",
      description: "Master TypeScript generics by implementing utility types",
      difficulty: "Advanced",
      tags: ["TypeScript", "Generics"],
      estimatedTime: "60 min",
      points: 200,
    },
    {
      id: 3,
      title: "CSS Grid Layout Puzzle",
      description: "Solve a complex layout challenge using CSS Grid",
      difficulty: "Intermediate",
      tags: ["CSS", "Layout", "Grid"],
      estimatedTime: "30 min",
      points: 100,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Recommended Challenges</h3>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/challenges">
            View all
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {recommendedChallenges.map((challenge) => (
          <Card key={challenge.id} className="flex flex-col">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-base">{challenge.title}</CardTitle>
                <Badge variant="outline">{challenge.difficulty}</Badge>
              </div>
              <CardDescription className="line-clamp-2">
                {challenge.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2 pt-0">
              <div className="flex flex-wrap gap-2">
                {challenge.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between mt-auto pt-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-3 w-3" />
                {challenge.estimatedTime}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Star className="mr-1 h-3 w-3" />
                {challenge.points} pts
              </div>
            </CardFooter>
            <CardFooter className="pt-0">
              <Button size="sm" className="w-full" asChild>
                <Link href={`/challenges/${challenge.id}`}>
                  <Code className="mr-2 h-4 w-4" />
                  Start Challenge
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
