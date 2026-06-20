import Link from "next/link";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { formatDate } from "@/lib/utils";

const POSTS = [
  {
    slug: "building-scalable-systems",
    title: "Building Scalable Systems with Next.js",
    description: "A comprehensive guide to architecting production-ready applications with Next.js 15, covering server components, streaming, and caching strategies.",
    date: "2026-05-15",
    tags: ["Next.js", "Architecture", "Performance"],
    readingTime: "8 min read",
  },
  {
    slug: "ai-powered-development",
    title: "AI-Powered Development in 2026",
    description: "Exploring how AI is transforming software development, from code generation to automated testing and deployment.",
    date: "2026-04-20",
    tags: ["AI", "Future", "Tools"],
    readingTime: "6 min read",
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for Large Codebases",
    description: "Production-tested patterns and practices for maintaining clean, scalable TypeScript projects.",
    date: "2026-03-10",
    tags: ["TypeScript", "Best Practices", "Engineering"],
    readingTime: "10 min read",
  },
  {
    slug: "microservices-vs-monolith",
    title: "Microservices vs Monolith: Making the Right Choice",
    description: "An honest look at when to use microservices and when a monolith is the better choice.",
    date: "2026-02-05",
    tags: ["Architecture", "Backend"],
    readingTime: "7 min read",
  },
  {
    slug: "docker-production",
    title: "Docker in Production: Lessons Learned",
    description: "Real-world lessons from running Docker containers in production environments.",
    date: "2026-01-15",
    tags: ["Docker", "DevOps", "Production"],
    readingTime: "9 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Blog</h1>
            <p className="text-gray-400 max-w-2xl">
              Thoughts on engineering, architecture, and technology.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card variant="glass" className="p-6 h-full group hover:scale-[1.02] cursor-pointer transition-all duration-300">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} />{formatDate(post.date)}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{post.readingTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-3">{post.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
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
