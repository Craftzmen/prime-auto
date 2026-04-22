"use client";

import { motion } from "framer-motion";
import { siteImages } from "@/lib/site-images";
import Image from "next/image";

const milestones = [
  { year: "2009", title: "Brooklyn launch", text: "Started with a focus on transparent vehicle assessment and practical repairs." },
  { year: "2014", title: "Diagnostic expansion", text: "Added stronger scan-tool capabilities and more structured repair documentation." },
  { year: "2019", title: "Service workflow upgrade", text: "Introduced clearer intake, estimate, and follow-up checkpoints for each job." },
  { year: "2026", title: "Current operating model", text: "Unified service, finance, and customer communication under one technical workflow." },
];

export function MilestonesSection() {
  return (
    <section className="bg-[#040404] relative py-20 lg:py-28 overflow-hidden z-10">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ef4444]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
              <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Milestones</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              The operating history behind the <span className="text-gradient-primary">current process</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-base text-white/45 leading-relaxed mt-4 max-w-xl">
              Each phase of growth added structure rather than noise. The result is a service model that is still fast, but much easier to explain and trust.
            </motion.p>
          </div>

          <div className="space-y-4">
            {milestones.map((item, index) => (
              <motion.div key={item.year} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 + index * 0.05 }} className="grid grid-cols-[80px_1fr] gap-4 rounded-3xl glass-card p-5 group">
                <div className="rounded-2xl bg-gradient-to-br from-[#ef4444] to-[#b91c1c] px-4 py-4 text-center shadow-lg border border-white/10 group-hover:scale-105 transition-transform flex items-center justify-center">
                  <p className="text-lg font-bold text-white">{item.year}</p>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#ef4444] transition-colors">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative h-[220px] lg:h-[300px] rounded-[2rem] overflow-hidden border border-white/[0.08] glass-card p-2 mt-10">
          <div className="relative w-full h-full rounded-3xl overflow-hidden">
            <Image src={siteImages.about.milestones} alt="Workshop timeline and vehicle records" fill className="object-cover object-center opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/75 via-[#080808]/15 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
