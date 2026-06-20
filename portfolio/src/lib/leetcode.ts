import { LeetCodeStats } from "@/types";
import { cache } from "react";

const LEETCODE_USERNAME = process.env.NEXT_PUBLIC_LEETCODE_USERNAME || "johndoe";

export const fetchLeetCodeStats = cache(async (): Promise<LeetCodeStats> => {
  try {
    const query = `
      query userPublicProfile($username: String!) {
        matchedUser(username: $username) {
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
          profile {
            ranking
            reputation
          }
          contributions {
            points
          }
        }
      }
    `;
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { username: LEETCODE_USERNAME } }),
      next: { revalidate: 3600 },
    });
    const json = await res.json();
    const stats = json.data?.matchedUser;
    if (!stats) throw new Error("No data");

    const submissions = stats.submitStats.acSubmissionNum;
    const solved = submissions.find((s: any) => s.difficulty === "All")?.count || 0;
    const easy = submissions.find((s: any) => s.difficulty === "Easy")?.count || 0;
    const medium = submissions.find((s: any) => s.difficulty === "Medium")?.count || 0;
    const hard = submissions.find((s: any) => s.difficulty === "Hard")?.count || 0;

    return {
      totalSolved: solved,
      easySolved: easy,
      mediumSolved: medium,
      hardSolved: hard,
      acceptanceRate: 75,
      ranking: stats.profile?.ranking || 0,
      contributionPoints: stats.contributions?.points || 0,
      reputation: stats.profile?.reputation || 0,
    };
  } catch {
    return {
      totalSolved: 0, easySolved: 0, mediumSolved: 0, hardSolved: 0,
      acceptanceRate: 0, ranking: 0, contributionPoints: 0, reputation: 0,
    };
  }
});
