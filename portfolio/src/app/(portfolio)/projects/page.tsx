import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";

const PROJECTS = [
  {
    slug: "ai-interview-platform",
    title: "AI Interview Platform",
    description: "AI-powered interview preparation platform with real-time feedback and analytics. Features include mock interviews, resume analysis, and progress tracking.",
    tech: ["Next.js", "OpenAI", "PostgreSQL", "Stripe", "Clerk"],
    gradient: "from-blue-500 to-cyan-500",
    year: "2026",
  },
  {
    slug: "ecommerce-engine",
    title: "E-Commerce Engine",
    description: "High-performance e-commerce platform handling 10k+ concurrent users with real-time inventory management and analytics.",
    tech: ["React", "Node.js", "Redis", "AWS", "Docker"],
    gradient: "from-purple-500 to-pink-500",
    year: "2025",
  },
  {
    slug: "devops-dashboard",
    title: "DevOps Dashboard",
    description: "Real-time infrastructure monitoring and deployment automation platform with custom alerting and reporting.",
    tech: ["Go", "Docker", "Kubernetes", "Grafana", "Prometheus"],
    gradient: "from-green-500 to-emerald-500",
    year: "2025",
  },
  {
    slug: "real-time-collab",
    title: "Real-Time Collaboration Tool",
    description: "Document editing platform with real-time sync, version control, and team management features.",
    tech: ["Next.js", "WebSocket", "CRDT", "MongoDB"],
    gradient: "from-orange-500 to-red-500",
    year: "2024",
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Interactive dashboard for visualizing business metrics with customizable reports and real-time data streams.",
    tech: ["React", "D3.js", "Python", "FastAPI"],
    gradient: "from-teal-500 to-green-500",
    year: "2024",
  },
  {
    slug: "microservices-gateway",
    title: "Microservices Gateway",
    description: "API gateway and service mesh for microservices architecture with rate limiting, auth, and monitoring.",
    tech: ["Go", "gRPC", "Redis", "Docker"],
    gradient: "from-indigo-500 to-purple-500",
    year: "2024",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Projects</h1>
            <p className="text-gray-400 max-w-2xl">
              A collection of projects that showcase my expertise in building production-ready applications.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <Card variant="glass" className="group p-6 h-full hover:scale-[1.02] cursor-pointer transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} mb-4 flex items-center justify-center`}>
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-gray-500">{project.year}</span>
                  </div>
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
        </div>
      </section>
    </>
  );
}
