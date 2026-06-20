"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { TESTIMONIALS } from "@/lib/constants";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What People Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feedback from people I have worked with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card variant="glass" className="p-6 h-full">
                <Quote size={24} className="text-blue-400/40 mb-4" />
                <p className="text-sm text-gray-300 mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
