import { NextRequest, NextResponse } from "next/server";
import redis from "@/app/redis";
import postsData from "../../../posts.json";

export const dynamic = "force-dynamic";

export async function POST(
  _: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  if (!slug) {
    return NextResponse.json(
      {
        error: {
          message: "Slug is required",
          code: "SLUG_REQUIRED",
        },
      },
      { status: 400 }
    );
  }

  if (!postsData.some((p) => p.id === slug)) {
    return NextResponse.json(
      {
        error: {
          message: "Post not found",
          code: "POST_NOT_FOUND",
        },
      },
      { status: 404 }
    );
  }

  const views = await redis.hincrby("views", slug, 1);
  return NextResponse.json({ views });
}
