import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { siteConfig, SKILLS } from "@/lib/constants";

export default function AboutPage() {
  const categories = [...new Set(SKILLS.map((s) => s.category))];
  return (
    <>
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">About Me</h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.1}>
                <Card variant="glass" className="p-8">
                  <h2 className="text-xl font-semibold text-white mb-4">Hi, I&apos;m {siteConfig.name}</h2>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      I&apos;m a full-stack engineer with 5+ years of experience building production applications.
                      I specialize in React, Node.js, and cloud infrastructure, with a passion for creating
                      scalable, performant systems that deliver exceptional user experiences.
                    </p>
                    <p>
                      Currently, I focus on architecting and building high-performance web applications
                      using modern technologies. I believe in writing clean, maintainable code and
                      following best practices in software engineering.
                    </p>
                    <p>
                      When I&apos;m not coding, you&apos;ll find me contributing to open-source projects,
                      writing technical blog posts, or exploring new technologies.
                    </p>
                  </div>
                </Card>
              </AnimatedSection>
            </div>

            <div className="space-y-6">
              <AnimatedSection delay={0.2}>
                <Card variant="glass" className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-white">JD</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{siteConfig.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">Full-Stack Engineer</p>
                  <div className="flex justify-center gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm"
                    >
                      <Mail size={14} /> Contact
                    </Link>
                    <a
                      href="/resume/resume.pdf"
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition-colors"
                    >
                      <Download size={14} /> Resume
                    </a>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>

          <AnimatedSection delay={0.3}>
            <h2 className="text-2xl font-bold text-white mb-6">Skills & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: skill.color }} />
                  <span className="text-sm text-white flex-1">{skill.name}</span>
                  <span className="text-xs text-gray-500">{skill.level}%</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <Card variant="glass" className="p-8">
              <h2 className="text-xl font-semibold text-white mb-6">Experience</h2>
              <div className="space-y-8">
                {[
                  { role: "Senior Full-Stack Engineer", company: "TechCorp", period: "2024 - Present", description: "Leading architecture and development of core platform features." },
                  { role: "Full-Stack Engineer", company: "StartupXYZ", period: "2022 - 2024", description: "Built and scaled the main product from 0 to 50k users." },
                  { role: "Frontend Engineer", company: "WebAgency", period: "2020 - 2022", description: "Developed responsive web applications for diverse clients." },
                ].map((exp) => (
                  <div key={exp.role} className="relative pl-6 border-l border-white/10">
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-blue-400 -translate-x-1/2" />
                    <h3 className="text-base font-semibold text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span>{exp.company}</span>
                      <span>·</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-sm text-gray-400">{exp.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
