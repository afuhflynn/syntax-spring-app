import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

import prisma from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const difficulty = searchParams.get("difficulty");
    const tag = searchParams.get("tag");
    const search = searchParams.get("search");
    const page = Number.parseInt(searchParams.get("page") || "1");
    const limit = Number.parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    // Build the where clause based on filters
    const where: any = {
      isPublished: true,
    };

    if (difficulty) {
      where.difficulty = difficulty;
    }

    if (tag) {
      where.tags = {
        some: {
          tag: {
            name: tag,
          },
        },
      };
    }

    if (search) {
      where.OR = [
        {
          title: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: search,
            mode: "insensitive",
          },
        },
      ];
    }

    // Get challenges with pagination
    const challenges = await prisma.challenge.findMany({
      where,
      select: {
        id: true,
        title: true,
        slug: true,
        difficulty: true,
        publishedAt: true,
        _count: {
          select: {
            submissions: true,
            likes: true,
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
      },
      orderBy: {
        publishedAt: "desc",
      },
      skip,
      take: limit,
    });

    // Get total count for pagination
    const total = await prisma.challenge.count({ where });

    return NextResponse.json({
      challenges: challenges.map((challenge) => ({
        ...challenge,
        tags: challenge.tags.map((t) => t.tag),
      })),
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching challenges:", error);
    return NextResponse.json(
      { error: "Failed to fetch challenges" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { title, description, difficulty, starterCode, solutionCode, tags } =
      await req.json();

    // Create a slug from the title
    const slug = title
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-");

    // Check if slug already exists
    const existingChallenge = await prisma.challenge.findUnique({
      where: { slug },
    });

    if (existingChallenge) {
      return NextResponse.json(
        { error: "A challenge with this title already exists" },
        { status: 400 }
      );
    }

    // Create the challenge
    const challenge = await prisma.challenge.create({
      data: {
        title,
        slug,
        description,
        difficulty,
        starterCode,
        solutionCode,
        authorId: session.user.id,
      },
    });

    // Add tags if provided
    if (tags && tags.length > 0) {
      await prisma.challengeTag.createMany({
        data: tags.map((tagId: string) => ({
          challengeId: challenge.id,
          tagId,
        })),
      });
    }

    return NextResponse.json(challenge);
  } catch (error) {
    console.error("Error creating challenge:", error);
    return NextResponse.json(
      { error: "Failed to create challenge" },
      { status: 500 }
    );
  }
}
