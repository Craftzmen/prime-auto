"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Car, RefreshCcw, CreditCard } from "lucide-react";
import { siteImages } from "@/lib/site-images";

const packages = [
  {
    icon: Car,
    title: "New Car Finance",
    desc: "Structure a new-vehicle purchase (including Kia and Hyundai models) around clear monthly obligations and lender requirements.",
    features: ["Low down payment options", "Flexible tenure (12–84 months)", "Quick loan approvals", "Transparent documentation"],
  },
  {
    icon: CreditCard,
    title: "Used Car Finance",
    desc: "Finance pre-owned purchases with eligibility paths that are easier to review and document.",
    features: ["Financing for dealer & individual sellers", "Flexible EMI plans", "Fast documentation process", "Competitive interest rates"],
  },
  {
    icon: RefreshCcw,
    title: "Car Loan Refinancing",
    desc: "Refinance an existing loan to reduce monthly exposure or reshape the payment schedule.",
    features: ["Reduce EMI burden", "Lower interest rate", "Improve cash flow", "Adjust loan tenure"],
  },
];

export function PackagesSection() {
  return (
    <section className="bg-[#040404] relative pb-20 lg:pb-28 overflow-hidden z-10">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#ef4444]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-12 lg:mb-14">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
            <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Packages</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Tailored finance packages with <span className="text-gradient-primary">traceable requirements</span>
          </motion.h2>
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }} className="relative h-[220px] lg:h-[340px] rounded-[2rem] overflow-hidden border border-white/[0.08] glass-card p-2 mb-10">
          <div className="relative w-full h-full rounded-3xl overflow-hidden">
            <Image src={siteImages.finance.packages} alt="Hyundai Sonata showcasing premium sedan finance options" fill className="object-cover object-center opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/20 to-transparent" />
          </div>
          <div className="absolute bottom-6 left-6 max-w-md rounded-3xl border border-white/[0.08] bg-[#080808]/80 backdrop-blur-md px-5 py-4 text-sm text-white/80">
            Each package maps to a different ownership scenario, so the approval path and monthly plan stay easy to review.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {packages.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card rounded-3xl p-8 flex flex-col group relative overflow-hidden">
              <div className="absolute bottom-0 left-0 h-1 bg-[#ef4444] w-0 group-hover:w-full transition-all duration-500 ease-out" />
              <div className="w-14 h-14 bg-gradient-to-br from-[#ef4444] to-[#b91c1c] rounded-2xl flex items-center justify-center mb-6 shadow-lg border border-white/10 group-hover:-translate-y-1 transition-transform">
                <p.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#ef4444] transition-colors">{p.title}</h3>
              <p className="text-[15px] text-white/50 leading-relaxed mb-6">{p.desc}</p>
              <ul className="flex flex-col gap-3 mt-auto">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-[#ef4444] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
