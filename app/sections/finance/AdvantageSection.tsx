"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Clock, Eye, ShieldCheck } from "lucide-react";
import { siteImages } from "@/lib/site-images";

const advantages = [
  { icon: Zap, title: "Fast Approval", desc: "Push the file through a streamlined review path and reduce idle time before funding decisions land." },
  { icon: Eye, title: "Full Transparency", desc: "See what is being requested, what is approved, and what the next stage requires before committing." },
  { icon: Clock, title: "Flexible Terms", desc: "Choose repayment periods from 12 to 84 months so monthly obligations match the vehicle plan." },
  { icon: ShieldCheck, title: "Competitive Rates", desc: "Work with lender partnerships that keep the pricing review competitive and understandable." },
];

export function AdvantageSection() {
  return (
    <section className="bg-[#080808] relative py-20 lg:py-28 overflow-hidden z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ef4444]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-14">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full justify-center">
            <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
            <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Why Choose Us</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            The <span className="text-gradient-primary">Prime Advantage</span>
          </motion.h2>
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }} className="relative h-[200px] lg:h-[320px] rounded-[2rem] overflow-hidden border border-white/[0.08] glass-card p-2 mb-10 max-w-5xl mx-auto">
          <div className="relative w-full h-full rounded-3xl overflow-hidden">
            <Image src={siteImages.finance.advantage} alt="Hyundai Tucson representing versatile SUV financing" fill className="object-cover object-center opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/20 to-transparent" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {advantages.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card rounded-2xl p-7 text-center flex flex-col items-center group relative overflow-hidden">
              <div className="absolute bottom-0 left-0 h-1 bg-[#ef4444] w-0 group-hover:w-full transition-all duration-500 ease-out" />
              <div className="w-12 h-12 bg-gradient-to-br from-[#ef4444] to-[#b91c1c] rounded-xl flex items-center justify-center mb-5 shadow-lg border border-white/10 group-hover:-translate-y-1 transition-transform">
                <a.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-white mb-2.5 group-hover:text-[#ef4444] transition-colors">{a.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
