import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";

const FEATURED = [
  {
    title: "AI Interview Platform",
    description: "AI-powered interview preparation platform with real-time feedback and analytics.",
    tech: ["Next.js", "OpenAI", "PostgreSQL", "Stripe"],
    href: "/projects/ai-interview-platform",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "E-Commerce Engine",
    description: "High-performance e-commerce platform with real-time inventory and analytics dashboard.",
    tech: ["React", "Node.js", "Redis", "AWS"],
    href: "/projects/ecommerce-engine",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "DevOps Dashboard",
    description: "Real-time infrastructure monitoring and deployment automation platform.",
    tech: ["Go", "Docker", "Kubernetes", "Grafana"],
    href: "/projects/devops-dashboard",
    gradient: "from-green-500 to-emerald-500",
  },
];

export function FeaturedProjects() {
  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl">
              A selection of projects that showcase my expertise in building scalable, production-ready applications.
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            View All <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED.map((project, i) => (
            <Link key={project.title} href={project.href}>
              <Card variant="glass" className="group p-6 h-full hover:scale-[1.02] cursor-pointer">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} mb-4 flex items-center justify-center`}>
                  <ArrowUpRight size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            View All Projects <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
