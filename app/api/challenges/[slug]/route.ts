import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

import prisma from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

    const challenge = await prisma.challenge.findUnique({
      where: { slug },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            username: true,
            image: true,
          },
        },
        tags: {
          select: {
            tag: {
              select: {
                id: true,
                name: true,
                color: true,
              },
            },
          },
        },
        testCases: {
          where: { isHidden: false },
          orderBy: { order: "asc" },
        },
        _count: {
          select: {
            submissions: true,
            likes: true,
          },
        },
      },
    });

    if (!challenge) {
      return NextResponse.json(
        { error: "Challenge not found" },
        { status: 404 }
      );
    }

    // Check if user has liked or bookmarked this challenge
    const session = await getServerSession(authOptions);
    let userProgress = null;
    let hasLiked = false;
    let hasBookmarked = false;

    if (session) {
      const userId = session.user.id;

      // Get user progress
      userProgress = await prisma.progress.findUnique({
        where: {
          userId_challengeId: {
            userId,
            challengeId: challenge.id,
          },
        },
      });

      // Check if user has liked the challenge
      const like = await prisma.challengeLike.findUnique({
        where: {
          userId_challengeId: {
            userId,
            challengeId: challenge.id,
          },
        },
      });
      hasLiked = !!like;

      // Check if user has bookmarked the challenge
      const bookmark = await prisma.challengeBookmark.findUnique({
        where: {
          userId_challengeId: {
            userId,
            challengeId: challenge.id,
          },
        },
      });
      hasBookmarked = !!bookmark;
    }

    return NextResponse.json({
      ...challenge,
      tags: challenge.tags.map((t) => t.tag),
      userProgress,
      hasLiked,
      hasBookmarked,
    });
  } catch (error) {
    console.error("Error fetching challenge:", error);
    return NextResponse.json(
      { error: "Failed to fetch challenge" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { slug } = params;
    const {
      title,
      description,
      difficulty,
      starterCode,
      solutionCode,
      tags,
      isPublished,
    } = await req.json();

    // Find the challenge
    const challenge = await prisma.challenge.findUnique({
      where: { slug },
      include: { author: true },
    });

    if (!challenge) {
      return NextResponse.json(
        { error: "Challenge not found" },
        { status: 404 }
      );
    }

    // Check if user is the author or an admin
    if (
      challenge.authorId !== session.user.id &&
      session.user.role !== "ADMIN"
    ) {
      return NextResponse.json(
        { error: "You don't have permission to update this challenge" },
        { status: 403 }
      );
    }

    // Generate a new slug if title changed
    let newSlug = slug;
    if (title && title !== challenge.title) {
      newSlug = title
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, "-");

      // Check if new slug already exists (except for this challenge)
      const existingChallenge = await prisma.challenge.findFirst({
        where: {
          slug: newSlug,
          id: { not: challenge.id },
        },
      });

      if (existingChallenge) {
        return NextResponse.json(
          { error: "A challenge with this title already exists" },
          { status: 400 }
        );
      }
    }

    // Update the challenge
    const updatedChallenge = await prisma.challenge.update({
      where: { id: challenge.id },
      data: {
        title: title || challenge.title,
        slug: newSlug,
        description: description || challenge.description,
        difficulty: difficulty || challenge.difficulty,
        starterCode: starterCode || challenge.starterCode,
        solutionCode: solutionCode || challenge.solutionCode,
        isPublished:
          isPublished !== undefined ? isPublished : challenge.isPublished,
        publishedAt:
          isPublished && !challenge.isPublished
            ? new Date()
            : challenge.publishedAt,
      },
    });

    // Update tags if provided
    if (tags && tags.length > 0) {
      // Remove existing tags
      await prisma.challengeTag.deleteMany({
        where: { challengeId: challenge.id },
      });

      // Add new tags
      await prisma.challengeTag.createMany({
        data: tags.map((tagId: string) => ({
          challengeId: challenge.id,
          tagId,
        })),
      });
    }

    return NextResponse.json(updatedChallenge);
  } catch (error) {
    console.error("Error updating challenge:", error);
    return NextResponse.json(
      { error: "Failed to update challenge" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { slug } = params;

    // Find the challenge
    const challenge = await prisma.challenge.findUnique({
      where: { slug },
    });

    if (!challenge) {
      return NextResponse.json(
        { error: "Challenge not found" },
        { status: 404 }
      );
    }

    // Check if user is the author or an admin
    if (
      challenge.authorId !== session.user.id &&
      session.user.role !== "ADMIN"
    ) {
      return NextResponse.json(
        { error: "You don't have permission to delete this challenge" },
        { status: 403 }
      );
    }

    // Delete the challenge (cascade will handle related records)
    await prisma.challenge.delete({
      where: { id: challenge.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting challenge:", error);
    return NextResponse.json(
      { error: "Failed to delete challenge" },
      { status: 500 }
    );
  }
}
