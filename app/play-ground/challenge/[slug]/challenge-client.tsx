"use client";

// import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import ChallengeEditor from "@/components/challenge-editor";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle, Settings, SliceIcon, Text } from "lucide-react";
import { Challenge } from "@/TYPES";
import { useState } from "react";
import { Tooltip } from "@mui/material";
import { ThemeToggle } from "@/components/theme-toggle";

export default function ChallengeClient({
  challenge,
}: {
  challenge: Challenge;
}) {
  const router = useRouter();
  const [isEditor, setIsEditor] = useState(true);
  const [isDetails, setIsDetails] = useState(true);

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
    <div className="container pb-6 relative">
      <header className="flex flex-row items-center justify-between sticky top-0 right-0 left-0 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-[65px]pt-1">
        <Logo />
        {/* Code Editor controls */}
        <div className="flex flex-row items-center justify-between py-2 gap-2">
          <Tooltip title={"Return to challenges"} arrow placement="top">
            <Button
              className="flex flex-row items-center gap-2 py-1"
              onClick={() => router.back()}
              variant="outline"
            >
              <ArrowLeftCircle />
            </Button>
          </Tooltip>
          <Tooltip title={"Settings"} arrow placement="bottom">
            <Button
              className="flex flex-row items-center gap-2 py-1"
              variant="outline"
              size="sm"
            >
              <Settings />
            </Button>
          </Tooltip>
          <ThemeToggle />
          <Tooltip
            title={
              isDetails ? "Hide challenge details." : "Show challenge details."
            }
            arrow
            placement="bottom"
          >
            <Button
              className="flex flex-row items-center gap-2 py-1 ml-2"
              onClick={() => setIsDetails((prev) => !prev)}
              variant="outline"
              size="sm"
            >
              {isDetails ? <SliceIcon /> : <Text />}
            </Button>
          </Tooltip>
        </div>
      </header>
      {/* Challenge details */}
      {isDetails && (
        <div>
          <h1 className="text-3xl font-bold tracking-tighter mb-4 mt-3">
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
      )}

      <ChallengeEditor challenge={challenge} />
    </div>
  );
}
