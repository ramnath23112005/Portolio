import { GitHubStats } from "@/types";

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "johndoe";

export async function fetchGitHubStats(): Promise<GitHubStats> {
  try {
    const headers: HeadersInit = {};
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, { headers, next: { revalidate: 3600 } }),
    ]);

    const user = await userRes.json();
    const repos = await reposRes.json();

    const totalStars = repos.reduce((acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0);
    const totalForks = repos.reduce((acc: number, repo: any) => acc + (repo.forks_count || 0), 0);

    const langMap = new Map<string, number>();
    const langColors: Record<string, string> = {
      TypeScript: "#3178C6", JavaScript: "#F7DF1E", Python: "#3776AB",
      Go: "#00ADD8", Rust: "#000000", "C++": "#00599C",
    };

    for (const repo of repos) {
      if (repo.language) {
        langMap.set(repo.language, (langMap.get(repo.language) || 0) + 1);
      }
    }

    const totalLang = Array.from(langMap.values()).reduce((a, b) => a + b, 0);
    const topLanguages = Array.from(langMap.entries())
      .sort(([, a], [, b]) => b - a)
      .slice(0, 6)
      .map(([name, count]) => ({
        name,
        percentage: Math.round((count / totalLang) * 100),
        color: langColors[name] || "#6B7280",
      }));

    return {
      totalRepos: user.public_repos,
      totalStars,
      totalForks,
      totalCommits: 0,
      totalPRs: 0,
      totalIssues: 0,
      topLanguages,
      contributions: [],
    };
  } catch {
    return {
      totalRepos: 0, totalStars: 0, totalForks: 0, totalCommits: 0,
      totalPRs: 0, totalIssues: 0, topLanguages: [], contributions: [],
    };
  }
}

export async function fetchContributions(): Promise<{ date: string; count: number }[]> {
  try {
    const headers: HeadersInit = {};
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    const query = `
      query {
        user(login: "${GITHUB_USERNAME}") {
          contributionsCollection(from: "${new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString()}"){
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 },
    });
    const json = await res.json();
    const weeks = json.data?.user?.contributionsCollection?.contributionCalendar?.weeks || [];
    return weeks.flatMap((w: any) =>
      w.contributionDays.map((d: any) => ({ date: d.date, count: d.contributionCount }))
    );
  } catch {
    return [];
  }
}
