"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Wrench, FileText, ShieldCheck } from "lucide-react";
import { siteImages } from "@/lib/site-images";

const credentials = [
  { icon: BadgeCheck, title: "Certified diagnosis habits", text: "Technicians work from repeatable inspection routines instead of guesswork." },
  { icon: Wrench, title: "Repair planning discipline", text: "Work orders are scoped before parts are ordered or labor is scheduled." },
  { icon: FileText, title: "Service documentation", text: "Every recommendation is recorded so customers can review the logic later." },
  { icon: ShieldCheck, title: "Quality review", text: "Each completed job passes a final verification step before handoff." },
];

export function TeamCredentialsSection() {
  return (
    <section className="bg-[#040404] relative py-20 lg:py-28 overflow-hidden z-10">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#ef4444]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
              <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Team Credentials</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Practical experience, inspection discipline, and <span className="text-gradient-primary">accountable service</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-base text-white/45 leading-relaxed mt-4 max-w-xl">
              Prime Auto Deals relies on technicians who know how to document symptoms, verify findings, and communicate the repair path in terms the customer can audit.
            </motion.p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((item, index) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 + index * 0.05 }} className="glass-card rounded-3xl p-6 group">
                  <div className="w-10 h-10 rounded-xl bg-[#ef4444]/10 flex items-center justify-center mb-4 group-hover:bg-[#ef4444]/20 transition-colors">
                    <item.icon className="w-5 h-5 text-[#ef4444]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative h-[320px] lg:h-[420px] rounded-[2rem] overflow-hidden border border-white/[0.06] bg-[#111]">
            <Image src={siteImages.about.team} alt="Prime Auto Deals technical team" fill className="object-cover object-center opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 via-[#080808]/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/[0.08] bg-[#080808]/80 backdrop-blur-md px-4 py-3 text-sm text-white/80">
              The team follows a write-first workflow, so the customer sees the logic behind the estimate before repairs begin.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
