"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Monitor, Disc3, Wind, Droplets, Settings, ArrowRight } from "lucide-react";

const services = [
  { icon: Zap, title: "Performance Upgrades", price: "$500+", desc: "Increase output through tuning, airflow optimization, and supporting component changes selected for the platform in front of us." },
  { icon: Monitor, title: "Computer Diagnostics", price: "$100+", desc: "Use scan data, live readings, and fault-code interpretation to isolate electronic or drivability problems with less guesswork." },
  { icon: Disc3, title: "Anti-Lock Brake Service", price: "$150+", desc: "Review braking hardware, hydraulic behavior, and ABS logic so stopping performance remains stable under load and in traffic." },
  { icon: Wind, title: "Air Conditioning Evac & Recharge", price: "$120+", desc: "Restore cabin climate systems with evacuation, leak testing, refrigerant recharge, and component-level repair where needed." },
  { icon: Droplets, title: "Lube, Oil & Filters", price: "$60+", desc: "Carry out maintenance intervals that protect oil pressure, reduce contamination, and support engine longevity." },
  { icon: Settings, title: "Engine Diagnostics", price: "$150+", desc: "Run compression, timing, and control-system checks to identify the root cause before parts are replaced." },
];

export function ServicesGrid() {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="glass-card rounded-2xl p-8 flex flex-col group relative overflow-hidden">
              <div className="absolute bottom-0 left-0 h-1 bg-[#ef4444] w-0 group-hover:w-full transition-all duration-500 ease-out" />
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ef4444] to-[#b91c1c] rounded-xl flex items-center justify-center shadow-lg border border-white/10 group-hover:-translate-y-1 transition-transform">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-[12px] font-bold text-[#ef4444] tracking-[0.1em] uppercase bg-[#ef4444]/10 px-3 py-1.5 rounded-full shrink-0">{s.price}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#ef4444] transition-colors">{s.title}</h3>
              <p className="text-[15px] text-white/50 leading-relaxed mb-8 flex-1">{s.desc}</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[13px] font-bold text-white/70 hover:text-white transition-colors w-fit group/link mt-auto">
                <span className="border-b border-white/20 group-hover/link:border-white pb-0.5 transition-colors">Schedule this service</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#ef4444] group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
