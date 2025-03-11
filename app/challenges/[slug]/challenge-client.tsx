"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import ChallengeEditor from "@/components/challenge-editor";
import type { Challenge } from "@/lib/challenges";

export default function ChallengeClient({
  challenge,
}: {
  challenge: Challenge;
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
        router.push("/auth/login");
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
        return "bg-difficulty-easy/10 text-difficulty-easy";
      case "Medium":
        return "bg-difficulty-medium/10 text-difficulty-medium";
      case "Hard":
        return "bg-difficulty-hard/10 text-difficulty-hard";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tighter mb-2">
          {challenge.title}
        </h1>
        <div className="flex items-center gap-2 mb-4">
          <Badge className={getDifficultyColor(challenge.difficulty)}>
            {challenge.difficulty}
          </Badge>
          <Badge variant="outline">{challenge.category}</Badge>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <p className="whitespace-pre-line">{challenge.description}</p>

          {challenge.examples && challenge.examples.length > 0 && (
            <>
              <h2 className="text-xl font-semibold mt-6 mb-3">Examples</h2>
              {challenge.examples.map((example, index) => (
                <div key={index} className="mb-4 p-4 bg-muted rounded-md">
                  <p>
                    <strong>Input:</strong> {example.input}
                  </p>
                  <p>
                    <strong>Output:</strong> {example.output}
                  </p>
                  {example.explanation && (
                    <p>
                      <strong>Explanation:</strong> {example.explanation}
                    </p>
                  )}
                </div>
              ))}
            </>
          )}

          {challenge.constraints && challenge.constraints.length > 0 && (
            <>
              <h2 className="text-xl font-semibold mt-6 mb-3">Constraints</h2>
              <ul>
                {challenge.constraints.map((constraint, index) => (
                  <li key={index}>{constraint}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      <ChallengeEditor challenge={challenge} />
    </div>
  );
}
