"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircleMore, Rocket, FlagTriangleRight } from "lucide-react";
import { siteImages } from "@/lib/site-images";

const stories = [
  { icon: MessageCircleMore, title: "Clearer expectations", text: "Customers know what will happen next, which lowers the friction around repair approval." },
  { icon: Rocket, title: "Faster decisions", text: "Structured intake shortens the time between initial contact and an actionable plan." },
  { icon: FlagTriangleRight, title: "Better outcomes", text: "Documented work and final checks make the result easier to trust and maintain." },
];

export function OutcomeStoriesSection() {
  return (
    <section className="bg-[#040404] relative py-20 lg:py-28 overflow-hidden z-10">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ef4444]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
              <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Outcome Stories</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Clearer outcomes, <span className="text-gradient-primary">not just faster tickets</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-base text-white/45 leading-relaxed mt-4 max-w-xl">
              The real success metric is whether the customer understands the repair path and is confident in the vehicle when it leaves the bay.
            </motion.p>

            <div className="mt-8 space-y-4">
              {stories.map((item, index) => (
                <motion.div key={item.title} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 + index * 0.05 }} className="glass-card rounded-3xl p-6 flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ef4444] to-[#b91c1c] flex items-center justify-center shrink-0 shadow-lg border border-white/10 group-hover:-translate-y-1 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#ef4444] transition-colors">{item.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative h-[320px] lg:h-[460px] rounded-[2rem] overflow-hidden border border-white/[0.08] glass-card p-2">
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              <Image src={siteImages.about.values} alt="Automotive service outcome and delivery" fill className="object-cover object-center opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/15 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
