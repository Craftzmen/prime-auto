"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { siteImages } from "@/lib/site-images";

const testimonials = [
  { text: "The file moved faster than expected and the payment structure was explained clearly before I signed.", name: "David K.", role: "New Car Buyer" },
  { text: "The documentation was easy to follow and the refinance review did not leave me guessing about fees.", name: "Lisa M.", role: "Refinance Client" },
];

export function FinanceTestimonialsSection() {
  return (
    <section className="bg-[#040404] relative py-20 lg:py-28 overflow-hidden z-10">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ef4444]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-14">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full justify-center">
            <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
            <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Reviews</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            What clients say after the <span className="text-gradient-primary">finance process is complete</span>
          </motion.h2>
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }} className="relative h-[200px] lg:h-[320px] rounded-[2rem] overflow-hidden border border-white/[0.08] glass-card p-2 mb-10 max-w-5xl mx-auto">
          <div className="relative w-full h-full rounded-3xl overflow-hidden">
            <Image src={siteImages.finance.testimonials} alt="Customer and financial consultation" fill className="object-cover object-center opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/20 to-transparent" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-8 flex flex-col group relative overflow-hidden">
              <div className="absolute bottom-0 left-0 h-1 bg-[#ef4444] w-0 group-hover:w-full transition-all duration-500 ease-out" />
              <Quote className="w-10 h-10 text-[#ef4444]/20 mb-6 group-hover:text-[#ef4444]/30 transition-colors" />
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} fill="currentColor" strokeWidth={0} className="w-4 h-4 text-[#ef4444]" />
                ))}
              </div>
              <p className="text-lg text-white/60 leading-relaxed mb-8 flex-1 italic">&quot;{t.text}&quot;</p>
              <div className="flex items-center gap-4 border-t border-white/[0.08] pt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ef4444] to-[#b91c1c] flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-base font-bold text-white tracking-tight">{t.name}</p>
                  <p className="text-xs font-bold text-[#ef4444] uppercase tracking-[0.1em]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
