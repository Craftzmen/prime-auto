"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock3, FileCheck2, BadgeDollarSign, Handshake } from "lucide-react";
import { siteImages } from "@/lib/site-images";

const steps = [
  { icon: FileCheck2, title: "Submit details", text: "The application starts with the minimum information needed to review the request." },
  { icon: Clock3, title: "Initial review", text: "The file is checked against lender criteria and the chosen vehicle path." },
  { icon: BadgeDollarSign, title: "Decision and terms", text: "If approved, the rate, term, and payment structure are presented in a readable format." },
  { icon: Handshake, title: "Delivery or refinance", text: "The finance path ends with a vehicle handoff or a completed refinance agreement." },
];

export function ApprovalTimelineSection() {
  return (
    <section className="bg-[#040404] relative py-20 lg:py-28 overflow-hidden z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ef4444]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative h-[300px] lg:h-[460px] rounded-[2rem] overflow-hidden border border-white/[0.08] order-2 lg:order-1 glass-card p-2">
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              <Image src={siteImages.finance.timeline} alt="Premium Kia model highlighting efficient finance approval" fill className="object-cover object-center opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/15 to-transparent" />
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
              <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Approval Timeline</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              A predictable approval sequence keeps the <span className="text-gradient-primary">finance path readable</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-base text-white/45 leading-relaxed mt-4 max-w-xl">
              We use a straightforward sequence so customers know when they are waiting, when they are approved, and when the deal is ready to close.
            </motion.p>

            <div className="mt-8 space-y-4">
              {steps.map((item, index) => (
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
        </div>
      </div>
    </section>
  );
}
