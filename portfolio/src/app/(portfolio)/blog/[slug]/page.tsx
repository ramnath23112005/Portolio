import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

const POSTS_MAP: Record<string, any> = {
  "building-scalable-systems": {
    title: "Building Scalable Systems with Next.js",
    date: "2026-05-15",
    tags: ["Next.js", "Architecture", "Performance"],
    readingTime: "8 min read",
    content: `
      Next.js 15 introduces powerful new patterns for building scalable applications. In this post, we'll explore server components, streaming, and caching strategies that can help your application handle millions of users.

      ## Server Components

      Server Components allow you to render components on the server, reducing the JavaScript bundle size sent to the client. This is particularly useful for data-heavy pages.

      ## Streaming

      With streaming, you can progressively render and send chunks of UI to the client. This improves perceived performance and time-to-first-byte.

      ## Caching Strategies

      Effective caching is crucial for scalability. Next.js 15 provides multiple caching layers: full route cache, data cache, and client-side cache.
    `,
  },
  "ai-powered-development": {
    title: "AI-Powered Development in 2026",
    date: "2026-04-20",
    tags: ["AI", "Future", "Tools"],
    readingTime: "6 min read",
    content: `
      Artificial intelligence is fundamentally changing how we build software. From AI-powered code generation to automated testing and deployment, developers now have powerful tools at their disposal.

      ## Code Generation

      AI assistants can now generate entire functions and components from natural language descriptions, dramatically speeding up development.

      ## Automated Testing

      AI can generate test cases, identify edge cases, and even fix failing tests automatically.

      ## Deployment

      AI-powered deployment systems can predict failures, optimize resource allocation, and automatically roll back problematic releases.
    `,
  },
  "typescript-best-practices": {
    title: "TypeScript Best Practices for Large Codebases",
    date: "2026-03-10",
    tags: ["TypeScript", "Best Practices", "Engineering"],
    readingTime: "10 min read",
    content: `
      Maintaining a large TypeScript codebase requires discipline and consistent patterns. Here are the practices that have served me well.

      ## Strict Mode

      Always enable strict mode in your tsconfig.json. It catches more errors at compile time and makes your code more predictable.

      ## Consistent Naming

      Use consistent naming conventions across your codebase. This makes code searchable and reduces cognitive load.

      ## Type Inference

      Let TypeScript infer types where possible. Explicit typing is important at module boundaries, but internal implementation details can often be inferred.
    `,
  },
};

export function generateStaticParams() {
  return Object.keys(POSTS_MAP).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS_MAP[slug];
  if (!post) return <div>Not found</div>;

  return (
    <section className="pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Back to Blog
        </Link>

        <Card variant="glass" className="p-8 md:p-12">
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
            <span className="flex items-center gap-1"><Calendar size={12} />{formatDate(post.date)}</span>
            <span className="flex items-center gap-1"><Clock size={12} />{post.readingTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{post.title}</h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag: string) => (
              <Badge key={tag} variant="primary">{tag}</Badge>
            ))}
          </div>

          <article className="prose prose-invert max-w-none prose-headings:text-white prose-headings:font-semibold prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-white prose-code:text-blue-400 prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10">
            {post.content.split('\n').map((line: string, i: number) => {
              if (line.startsWith('## ')) return <h2 key={i} className="text-xl font-semibold text-white mt-8 mb-4">{line.slice(3)}</h2>;
              if (line.startsWith('- ')) return <li key={i} className="text-gray-300 ml-4">{line.slice(2)}</li>;
              if (line.trim() === '') return <br key={i} />;
              return <p key={i} className="text-gray-300 mb-4 leading-relaxed">{line}</p>;
            })}
          </article>
        </Card>
      </div>
    </section>
  );
}
