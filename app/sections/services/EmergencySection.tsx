"use client";

import { motion } from "framer-motion";
import { PhoneCall, AlertTriangle } from "lucide-react";
import { siteContent } from "@/lib/site-content";

export function EmergencySection() {
  return (
    <section className="bg-[#080808] relative py-16 lg:py-20 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card border-[#ef4444]/30 hover:border-[#ef4444]/50 rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#ef4444]/5 blur-[80px] pointer-events-none mix-blend-screen group-hover:bg-[#ef4444]/10 transition-colors duration-700" />
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-12 h-12 bg-[#ef4444]/10 rounded-xl flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6 text-[#ef4444]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Need an urgent diagnostic review?</h3>
              <p className="text-sm text-white/45">For breakdowns, warning lights, or safety concerns, call so we can prioritize the vehicle and recommend the next technical step immediately.</p>
            </div>
          </div>
          <a href={siteContent.contact.phoneHref} className="relative z-10 bg-[#ef4444] hover:bg-[#dc2626] text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all inline-flex items-center gap-3 shrink-0 shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:-translate-y-1">
            <PhoneCall className="w-5 h-5" />
            {siteContent.contact.phoneDisplay}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
