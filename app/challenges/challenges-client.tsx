"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Challenge } from "@/lib/challenges";

export default function ChallengesClient({
  challenges,
}: {
  challenges: Challenge[];
}) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      // Replace this with your actual authentication check
      const auth = localStorage.getItem("isAuthenticated") === "true";
      setIsAuthenticated(auth);
      setIsLoading(false);
      if (!auth) {
        router.push("/auth/log-in");
      }
    };
    checkAuth();
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>; // Or a more sophisticated loading component
  }

  if (!isAuthenticated) {
    return null;
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-difficulty-easy/10 text-difficulty-easy border-difficulty-easy/20";
      case "Medium":
        return "bg-difficulty-medium/10 text-difficulty-medium border-difficulty-medium/20";
      case "Hard":
        return "bg-difficulty-hard/10 text-difficulty-hard border-difficulty-hard/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const handleRouting = (slug: string) => {
    router.push(`/play-ground/challenge/${slug}`);
  };

  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">
          Coding Challenges
        </h1>
        <p className="text-muted-foreground max-w-[700px] mx-auto">
          Browse our collection of coding challenges across multiple languages
          and difficulty levels. Test your skills and improve your coding
          abilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <Card
            key={challenge.id}
            onClick={() => handleRouting(challenge.slug)}
            className="flex flex-col h-full hover:shadow-md transition-shadow cursor-pointer"
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{challenge.title}</CardTitle>
                <Badge
                  className={cn(
                    "border",
                    getDifficultyColor(challenge.difficulty)
                  )}
                >
                  {challenge.difficulty}
                </Badge>
              </div>
              <CardDescription>
                {challenge.description.substring(0, 100)}...
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {challenge.languages.map((language) => (
                  <Badge key={language} variant="outline">
                    {language}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                onClick={() => handleRouting(challenge.slug)}
              >
                Solve Challenge <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
