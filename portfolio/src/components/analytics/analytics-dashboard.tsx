"use client";

import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Activity, Users, Eye, TrendingUp } from "lucide-react";

const metrics = [
  { label: "Page Views", value: "12,345", change: "+12%", icon: Eye, color: "text-blue-400" },
  { label: "Unique Visitors", value: "8,901", change: "+8%", icon: Users, color: "text-green-400" },
  { label: "Avg. Session", value: "4m 32s", change: "+5%", icon: Activity, color: "text-purple-400" },
  { label: "Bounce Rate", value: "32%", change: "-3%", icon: TrendingUp, color: "text-yellow-400" },
];

export function AnalyticsDashboard() {
  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Analytics</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-time website performance metrics and visitor insights.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <Card key={metric.label} variant="glass" className="p-6">
              <metric.icon size={20} className={`${metric.color} mb-3`} />
              <p className="text-2xl font-bold text-white mb-1">{metric.value}</p>
              <p className="text-xs text-gray-500">{metric.label}</p>
              <span className={`text-xs ${metric.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                {metric.change}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
