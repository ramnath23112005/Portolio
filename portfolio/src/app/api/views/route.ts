import { NextResponse } from "next/server";

// In-memory view counter (replace with Redis/DB in production)
const views = new Map<string, number>();

export async function POST(request: Request) {
  try {
    const { slug } = await request.json();
    const current = views.get(slug) || 0;
    views.set(slug, current + 1);
    return NextResponse.json({ views: current + 1 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }
  return NextResponse.json({ views: views.get(slug) || 0 });
}
