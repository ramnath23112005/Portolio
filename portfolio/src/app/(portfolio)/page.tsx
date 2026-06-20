import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Skills } from "@/components/sections/skills";
import { Testimonials } from "@/components/sections/testimonials";
import { GitHubStats } from "@/components/sections/github-stats";
import { LeetCodeStats } from "@/components/sections/leetcode-stats";
import { BlogSection } from "@/components/sections/blog-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <GitHubStats />
      <LeetCodeStats />
      <Testimonials />
      <BlogSection />
      <ContactSection />
    </>
  );
}
