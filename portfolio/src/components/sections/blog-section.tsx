import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { formatDate } from "@/lib/utils";

const POSTS = [
  {
    slug: "building-scalable-systems",
    title: "Building Scalable Systems with Next.js",
    description: "A comprehensive guide to architecting production-ready applications.",
    date: "2026-05-15",
    tags: ["Next.js", "Architecture"],
    readingTime: "8 min read",
  },
  {
    slug: "ai-powered-development",
    title: "AI-Powered Development in 2026",
    description: "How AI is transforming the way we build software.",
    date: "2026-04-20",
    tags: ["AI", "Future"],
    readingTime: "6 min read",
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for Large Codebases",
    description: "Patterns and practices for maintainable TypeScript projects.",
    date: "2026-03-10",
    tags: ["TypeScript", "Best Practices"],
    readingTime: "10 min read",
  },
];

export function BlogSection() {
  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Latest Writing</h2>
            <p className="text-gray-400 max-w-2xl">
              Thoughts on engineering, architecture, and technology.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            View All <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card variant="glass" className="p-6 h-full group hover:scale-[1.02] cursor-pointer">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={12} />{formatDate(post.date)}</span>
                  <span className="flex items-center gap-1"><Clock size={12} />{post.readingTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{post.description}</p>
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
    </AnimatedSection>
  );
}
