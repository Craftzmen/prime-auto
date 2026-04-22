"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Search, Wrench, CheckCircle } from "lucide-react";
import Image from "next/image";
import { siteImages } from "@/lib/site-images";

const steps = [
  {
    step: "01",
    title: "Request a Quote",
    desc: "Give us a call or fill out our form. We'll discuss your needs and set up a priority appointment.",
    icon: PhoneCall,
  },
  {
    step: "02",
    title: "System Diagnostics",
    desc: "We perform a thorough multi-point inspection to isolate issues and provide a fully transparent estimate.",
    icon: Search,
  },
  {
    step: "03",
    title: "Precision Repair",
    desc: "Certified technicians execute the repair with exact tolerances. You receive updates at every major milestone.",
    icon: Wrench,
  },
  {
    step: "04",
    title: "Quality Assurance",
    desc: "The vehicle undergoes rigorous testing and a final detailing before being returned to your exact standards.",
    icon: CheckCircle,
  },
];

export function ProcessSection() {
  return (
    <section className="bg-[#080808] py-24 lg:py-32 w-full relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
            <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Service Flow</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6"
          >
            How the repair workflow
            <br />
            <span className="text-gradient-primary">stays controlled.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[17px] text-white/50 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Every stage is documented so customers know what was checked, what was approved, and exactly what the next operational step will be.
          </motion.p>
        </div>

        {/* Timeline Area */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-1/2" />
          <div className="absolute left-8 md:left-1/2 top-[10%] bottom-[10%] w-px bg-gradient-to-b from-[#ef4444]/0 via-[#ef4444]/50 to-[#ef4444]/0 md:-translate-x-1/2 shadow-[0_0_15px_rgba(239,68,68,0.5)]" />

          <div className="space-y-16 lg:space-y-24 relative z-10">
            {steps.map((s, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                    <span className="text-[120px] font-bold text-white/[0.03] leading-none absolute -z-10 -mt-10 select-none">
                      {s.step}
                    </span>
                    <span className="text-[#ef4444] font-bold tracking-[0.2em] uppercase text-[11px] mb-3 block">Step {s.step}</span>
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{s.title}</h3>
                    <p className="text-lg text-white/50 leading-relaxed font-light">{s.desc}</p>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-2xl glass flex items-center justify-center border-white/20 shadow-[0_0_20px_rgba(239,68,68,0.15)] overflow-hidden group">
                    <div className="absolute inset-0 bg-[#ef4444]/10 group-hover:bg-[#ef4444]/20 transition-colors" />
                    <s.icon className="w-6 h-6 text-[#ef4444] relative z-10" />
                  </div>

                  {/* Image/Visual Placeholder */}
                  <div className={`hidden md:block w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                    <div className="relative h-48 w-full rounded-3xl overflow-hidden glass-card">
                      <Image
                        src={siteImages.home.process}
                        alt={s.title}
                        fill
                        className="object-cover object-center opacity-30 mix-blend-luminosity hover:mix-blend-normal hover:opacity-50 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 lg:mt-32 flex justify-center"
        >
          <Link
            href="/how-it-works"
            className="glass hover:bg-white/[0.08] text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all inline-flex items-center gap-3 border border-white/[0.1]"
          >
            View Full Methodology <ArrowRight className="w-5 h-5 text-[#ef4444]" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
