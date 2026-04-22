"use client";

import { motion } from "framer-motion";
import { Star, Quote, ChevronRight } from "lucide-react";
import Image from "next/image";
import { siteImages } from "@/lib/site-images";

const testimonials = [
  {
    text: "The diagnostics were incredibly thorough. They found the root cause of an issue three other shops missed. The repair was executed flawlessly.",
    name: "Michael R.",
    role: "BMW M4 Owner",
    initial: "M",
  },
  {
    text: "Transparent process and absolute precision. The technicians explained the telemetry data clearly. I couldn't ask for better service for my vehicle.",
    name: "Sarah T.",
    role: "Porsche 911 Owner",
    initial: "S",
  },
  {
    text: "Prime Auto Deals sets a new standard. Their facility is pristine, and their maintenance programs have kept my fleet running perfectly.",
    name: "David L.",
    role: "Fleet Manager",
    initial: "D",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[#040404] py-24 lg:py-32 w-full relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#ef4444]/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header & Image Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 items-center">
          <div className="lg:col-span-5 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
              <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Client Trust</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6"
            >
              Reputation built on
              <br />
              <span className="text-gradient-primary">precision.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/50 leading-relaxed font-light mb-8"
            >
              The strongest signal of quality is repeat work from clients who demand perfection and understand the engineering behind each repair.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-[#040404] bg-white/[0.05] backdrop-blur-md flex items-center justify-center text-xs font-bold text-white/50">
                      U{i + 1}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} fill="#ef4444" strokeWidth={0} className="w-4 h-4 text-[#ef4444]" />
                    ))}
                  </div>
                  <span className="text-[13px] font-bold text-white">4.9/5 from 500+ reviews</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-7 relative h-[300px] lg:h-[400px] rounded-[2rem] overflow-hidden glass-card ml-auto w-full lg:w-[90%]"
          >
            <Image
              src={siteImages.home.testimonials}
              alt="Premium auto facility"
              fill
              className="object-cover object-center opacity-60 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-[#040404]/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass px-6 py-4 rounded-2xl flex items-center justify-between border-white/[0.1]">
                <p className="text-sm font-medium text-white/80">Join our exclusive client list.</p>
                <ChevronRight className="w-5 h-5 text-[#ef4444]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="glass-card rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between group relative overflow-hidden min-h-[320px]"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ef4444]/0 to-[#ef4444]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <Quote className="w-10 h-10 text-[#ef4444]/20 mb-6 group-hover:text-[#ef4444]/40 transition-colors duration-500" />
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} fill="currentColor" strokeWidth={0} className="w-4 h-4 text-[#ef4444]" />
                  ))}
                </div>
                <p className="text-[16px] text-white/70 leading-relaxed font-light mb-8 italic">
                  &quot;{t.text}&quot;
                </p>
              </div>

              <div className="flex items-center gap-4 relative z-10 mt-auto pt-6 border-t border-white/[0.05]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ef4444] to-[#b91c1c] flex items-center justify-center text-white font-bold text-lg rounded-2xl shadow-lg">
                  {t.initial}
                </div>
                <div>
                  <span className="text-[15px] font-bold text-white block leading-tight mb-1">{t.name}</span>
                  <span className="text-[12px] text-[#ef4444] font-bold tracking-wider uppercase">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
