import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = auth;
  try {
    if (!session) {
      return NextResponse.json(
        {
          error: "Unauthorized user.",
        },
        { status: 401 }
      );
    } else {
      return NextResponse.json({
        message: "User authenticated.",
        user: session.user,
      });
    }
  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json(
      {
        error: "An unexpected error occurred.",
      },
      { status: 500 }
    );
  }
}
