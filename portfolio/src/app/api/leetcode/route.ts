import { NextResponse } from "next/server";
import { fetchLeetCodeStats } from "@/lib/leetcode";

export async function GET() {
  try {
    const stats = await fetchLeetCodeStats();
    return NextResponse.json(stats);
  } catch {
    return NextResponse.json({ error: "Failed to fetch LeetCode stats" }, { status: 500 });
  }
}
