"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Heart, Award, Users } from "lucide-react";
import { siteImages } from "@/lib/site-images";

const values = [
  { icon: Shield, title: "Trust & Integrity", desc: "We operate with full transparency. Every diagnosis, every quote, every repair — done with honesty." },
  { icon: Heart, title: "Customer First", desc: "Your satisfaction drives us. We listen, we understand, and we deliver solutions tailored to your needs." },
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards. Quality workmanship is not optional — it's our promise." },
  { icon: Users, title: "Community", desc: "We're proud to serve Brooklyn and beyond. Supporting our community is part of who we are." },
];

export function ValuesSection() {
  return (
    <section className="bg-[#080808] relative py-20 lg:py-28 overflow-hidden z-10">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ef4444]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
              <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Our Values</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              What drives every inspection, estimate, and <span className="text-gradient-primary">repair plan</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-base text-white/45 leading-relaxed mt-4 max-w-xl">
              Our value system is operational, not decorative. We optimize for repeatable quality, clear decision-making, and disciplined follow-through on every vehicle we touch.
            </motion.p>
          </div>

          <div className="relative h-[280px] lg:h-[360px] rounded-[2rem] overflow-hidden border border-white/[0.06] bg-[#111]">
            <Image src={siteImages.about.values} alt="Technician and vehicle service environment" fill className="object-cover object-center opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/65 via-[#080808]/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-3xl border border-white/[0.08] bg-[#080808]/75 backdrop-blur-md p-3">
                <p className="text-xl font-bold text-white">10+</p>
                <p className="text-[11px] text-white/45 uppercase tracking-[0.12em] mt-1">Years</p>
              </div>
              <div className="rounded-3xl border border-white/[0.08] bg-[#080808]/75 backdrop-blur-md p-3">
                <p className="text-xl font-bold text-white">15+</p>
                <p className="text-[11px] text-white/45 uppercase tracking-[0.12em] mt-1">Technicians</p>
              </div>
              <div className="rounded-3xl border border-white/[0.08] bg-[#080808]/75 backdrop-blur-md p-3">
                <p className="text-xl font-bold text-white">2.5K+</p>
                <p className="text-[11px] text-white/45 uppercase tracking-[0.12em] mt-1">Vehicles</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card rounded-2xl p-7 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ef4444] to-[#b91c1c] flex items-center justify-center mb-5 shadow-lg border border-white/10 group-hover:-translate-y-1 transition-transform">
                <v.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-[#ef4444] transition-colors">{v.title}</h3>
              <p className="text-[15px] text-white/50 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
