"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/animated-section";

export function Skills() {
  const categories = [...new Set(SKILLS.map((s) => s.category))];

  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                  <span className="text-sm font-medium text-white">{skill.name}</span>
                </div>
                <span className="text-xs text-gray-500">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  style={{ boxShadow: `0 0 12px ${skill.color}40` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
