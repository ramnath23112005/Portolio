import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PROJECTS_MAP: Record<string, any> = {
  "ai-interview-platform": {
    title: "AI Interview Platform",
    description: "AI-powered interview preparation platform with real-time feedback and analytics.",
    tech: ["Next.js", "OpenAI", "PostgreSQL", "Stripe", "Clerk"],
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-blue-500 to-cyan-500",
    details: "Built with Next.js 15 and TypeScript, this platform leverages OpenAI's GPT-4 for intelligent interview questions and feedback. PostgreSQL handles complex data relationships, while Stripe manages subscriptions. Clerk provides seamless authentication. The platform features real-time speech analysis, video recording, and ATS scoring for comprehensive interview preparation.",
    features: [
      "AI-powered interview question generation",
      "Real-time speech and sentiment analysis",
      "Video recording and playback",
      "ATS resume scoring and feedback",
      "Progress tracking and analytics",
      "Subscription-based monetization",
    ],
  },
  "ecommerce-engine": {
    title: "E-Commerce Engine",
    description: "High-performance e-commerce platform with real-time inventory.",
    tech: ["React", "Node.js", "Redis", "AWS", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-purple-500 to-pink-500",
    details: "A scalable e-commerce solution built for high traffic. Implements real-time inventory updates using Redis pub/sub, with auto-scaling on AWS ECS. Features include a custom CMS, analytics dashboard, and multi-tenant architecture.",
    features: [
      "Real-time inventory management",
      "Multi-tenant architecture",
      "Custom headless CMS",
      "Analytics dashboard",
      "Auto-scaling infrastructure",
      "PCI-compliant payments",
    ],
  },
  "devops-dashboard": {
    title: "DevOps Dashboard",
    description: "Infrastructure monitoring and deployment automation.",
    tech: ["Go", "Docker", "Kubernetes", "Grafana", "Prometheus"],
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-green-500 to-emerald-500",
    details: "A comprehensive DevOps monitoring solution. Built with Go for high-performance metric collection, Kubernetes for orchestration, and Grafana for visualization. Features custom alerting rules and automated deployment pipelines.",
    features: [
      "Real-time infrastructure monitoring",
      "Custom alerting and notifications",
      "Automated deployment pipelines",
      "Cost tracking and optimization",
      "Multi-cloud support",
      "Incident management",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(PROJECTS_MAP).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS_MAP[slug];
  if (!project) return <div>Not found</div>;

  return (
    <section className="pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Back to Projects
        </Link>

        <Card variant="glass" className="p-8 md:p-12">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} mb-6 flex items-center justify-center`}>
            <ExternalLink size={24} className="text-white" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-gray-400 mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t: string) => (
              <Badge key={t} variant="primary">{t}</Badge>
            ))}
          </div>

          <div className="flex gap-4 mb-10">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition-colors"
            >
              <GithubIcon size={16} /> Source Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm hover:opacity-90 transition-all"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">{project.details}</p>

            <h2 className="text-xl font-semibold text-white mb-4">Key Features</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((f: string) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </section>
  );
}
