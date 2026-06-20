import { fetchGitHubStats } from "@/lib/github";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Star, GitFork, GitPullRequest, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export async function GitHubStats() {
  const stats = await fetchGitHubStats();

  const items = [
    { label: "Repositories", value: stats.totalRepos, icon: GithubIcon, color: "text-gray-400" },
    { label: "Stars", value: stats.totalStars, icon: Star, color: "text-yellow-400" },
    { label: "Forks", value: stats.totalForks, icon: GitFork, color: "text-blue-400" },
    { label: "Pull Requests", value: stats.totalPRs, icon: GitPullRequest, color: "text-green-400" },
  ];

  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">GitHub Statistics</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My open-source activity and contributions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {items.map((item) => (
            <Card key={item.label} variant="glass" className="p-6 text-center">
              <item.icon size={24} className={`${item.color} mx-auto mb-3`} />
              <p className="text-2xl sm:text-3xl font-bold text-white mb-1">{item.value}</p>
              <p className="text-xs text-gray-500">{item.label}</p>
            </Card>
          ))}
        </div>

        <Card variant="glass" className="p-6">
          <h3 className="text-sm font-semibold text-white mb-4">Top Languages</h3>
          <div className="flex flex-wrap gap-3">
            {stats.topLanguages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                <span className="text-sm text-gray-300">{lang.name}</span>
                <span className="text-xs text-gray-500">{lang.percentage}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AnimatedSection>
  );
}
