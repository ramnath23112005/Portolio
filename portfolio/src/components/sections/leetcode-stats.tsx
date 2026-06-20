import { fetchLeetCodeStats } from "@/lib/leetcode";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Code2, Trophy, Target, Award } from "lucide-react";

export async function LeetCodeStats() {
  const stats = await fetchLeetCodeStats();

  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">LeetCode Progress</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Problem-solving track record and coding statistics.
          </p>
        </div>

        <Card variant="glass" className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <Code2 size={24} className="text-blue-400 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">{stats.totalSolved}</p>
              <p className="text-xs text-gray-500">Problems Solved</p>
            </div>
            <div className="text-center">
              <Target size={24} className="text-green-400 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">{stats.acceptanceRate}%</p>
              <p className="text-xs text-gray-500">Acceptance Rate</p>
            </div>
            <div className="text-center">
              <Trophy size={24} className="text-yellow-400 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">#{stats.ranking.toLocaleString()}</p>
              <p className="text-xs text-gray-500">Global Ranking</p>
            </div>
            <div className="text-center">
              <Award size={24} className="text-purple-400 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">{stats.contributionPoints}</p>
              <p className="text-xs text-gray-500">Contribution Points</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Easy", value: stats.easySolved, color: "bg-green-500", max: stats.easySolved + stats.mediumSolved + stats.hardSolved || 1 },
              { label: "Medium", value: stats.mediumSolved, color: "bg-yellow-500", max: stats.easySolved + stats.mediumSolved + stats.hardSolved || 1 },
              { label: "Hard", value: stats.hardSolved, color: "bg-red-500", max: stats.easySolved + stats.mediumSolved + stats.hardSolved || 1 },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="h-2 rounded-full bg-white/5 mb-2">
                  <div
                    className={`h-full rounded-full ${item.color} transition-all duration-1000`}
                    style={{ width: `${(item.value / item.max) * 100}%` }}
                  />
                </div>
                <p className="text-sm font-semibold text-white">{item.value}</p>
                <p className="text-xs text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AnimatedSection>
  );
}
