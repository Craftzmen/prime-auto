"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { siteImages } from "@/lib/site-images";

const benefits = [
  "Initial inspection is documented before any work begins",
  "Cost estimates are explained before authorization",
  "Technicians review systems with platform-specific experience",
  "Repair completion is confirmed before delivery",
];

export function BookingSection() {
  return (
    <section className="bg-[#080808] relative py-20 lg:py-28 overflow-hidden z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ef4444]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full justify-center">
            <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
            <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Booking</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Schedule work with a <span className="text-gradient-primary">clear approval path</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-base text-white/45 max-w-lg mx-auto leading-relaxed mb-10">
            Share the vehicle concern, the preferred time window, and any prior work so the estimate and repair plan can be prepared efficiently.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }} className="relative h-[220px] lg:h-[340px] rounded-[2rem] overflow-hidden border border-white/[0.08] glass-card p-2 mb-10">
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              <Image src={siteImages.services.booking} alt="Service booking and vehicle inspection" fill className="object-cover object-center opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/20 to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 max-w-md rounded-3xl border border-white/[0.08] bg-[#080808]/80 backdrop-blur-md px-5 py-4 text-sm text-white/80 text-left">
              Appointment requests move from intake to inspection with a documented service record attached to each vehicle.
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-white/60 text-left">
                <CheckCircle2 className="w-4 h-4 text-[#ef4444] shrink-0" />
                <span>{b}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
