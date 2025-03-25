import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

import prisma from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// This is a simplified version - in a real app, you'd use a secure code execution service
async function evaluateCode(code: string, testCases: any[]) {
  const results = [];
  let overallStatus = "ACCEPTED";

  for (const testCase of testCases) {
    try {
      // This is a very simplified and UNSAFE way to evaluate code
      // In production, you should use a sandboxed environment or a dedicated service
      const testFunction = new Function(`
        ${code}
        return isPalindrome(${testCase.input});
      `);

      const output = String(testFunction());
      const passed = output === testCase.expectedOutput;

      if (!passed) {
        overallStatus = "WRONG_ANSWER";
      }

      results.push({
        passed,
        output,
        error: null,
        runtime: 100, // Mock runtime
        memory: 5000, // Mock memory usage
        testCaseId: testCase.id,
      });
    } catch (error) {
      overallStatus = "RUNTIME_ERROR";
      results.push({
        passed: false,
        output: null,
        error: error instanceof Error ? error.message : String(error),
        runtime: null,
        memory: null,
        testCaseId: testCase.id,
      });
    }
  }

  return { results, status: overallStatus };
}

export async function POST(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { slug } = params;
    const { code, language } = await req.json();

    if (!code || !language) {
      return NextResponse.json(
        { error: "Code and language are required" },
        { status: 400 }
      );
    }

    // Find the challenge
    const challenge = await prisma.challenge.findUnique({
      where: { slug },
      include: {
        testCases: {
          orderBy: { order: "asc" },
        },
      },
    });

    if (!challenge) {
      return NextResponse.json(
        { error: "Challenge not found" },
        { status: 404 }
      );
    }

    // Evaluate the code against test cases
    const { results, status } = await evaluateCode(code, challenge.testCases);

    // Create submission record
    const submission = await prisma.submission.create({
      data: {
        code,
        language,
        status,
        userId: session.user.id,
        challengeId: challenge.id,
        testResults: {
          createMany: {
            data: results,
          },
        },
      },
      include: {
        testResults: true,
      },
    });

    // Update user progress
    const existingProgress = await prisma.progress.findUnique({
      where: {
        userId_challengeId: {
          userId: session.user.id,
          challengeId: challenge.id,
        },
      },
    });

    if (existingProgress) {
      await prisma.progress.update({
        where: {
          id: existingProgress.id,
        },
        data: {
          status: status === "ACCEPTED" ? "COMPLETED" : "IN_PROGRESS",
          lastAttemptAt: new Date(),
          completedAt:
            status === "ACCEPTED" ? new Date() : existingProgress.completedAt,
        },
      });
    } else {
      await prisma.progress.create({
        data: {
          userId: session.user.id,
          challengeId: challenge.id,
          status: status === "ACCEPTED" ? "COMPLETED" : "IN_PROGRESS",
          lastAttemptAt: new Date(),
          completedAt: status === "ACCEPTED" ? new Date() : null,
        },
      });
    }

    // Check for first solve achievement
    if (status === "ACCEPTED") {
      const firstBloodAchievement = await prisma.achievement.findFirst({
        where: { name: "First Blood" },
      });

      if (firstBloodAchievement) {
        const hasAchievement = await prisma.userAchievement.findFirst({
          where: {
            userId: session.user.id,
            achievementId: firstBloodAchievement.id,
          },
        });

        if (!hasAchievement) {
          await prisma.userAchievement.create({
            data: {
              userId: session.user.id,
              achievementId: firstBloodAchievement.id,
            },
          });
        }
      }
    }

    return NextResponse.json({
      submission,
      results: submission.testResults.filter((result) => {
        const testCase = challenge.testCases.find(
          (tc) => tc.id === result.testCaseId
        );
        return testCase && !testCase.isHidden;
      }),
    });
  } catch (error) {
    console.error("Error submitting solution:", error);
    return NextResponse.json(
      { error: "Failed to submit solution" },
      { status: 500 }
    );
  }
}
