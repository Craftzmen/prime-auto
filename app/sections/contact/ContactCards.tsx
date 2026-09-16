"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { siteContent } from "@/lib/site-content";

export function ContactCards() {
  return (
    <section className="bg-[#040404] relative pb-12 lg:pb-16 overflow-hidden z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ef4444]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-md">
          <motion.a
            href={siteContent.contact.phoneHref}
            title={`Call ${siteContent.contact.phoneDisplay}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-7 flex min-h-[160px] items-start gap-5 group relative overflow-hidden active:opacity-90"
          >
            <div className="absolute bottom-0 left-0 h-1 bg-[#ef4444] w-0 group-hover:w-full transition-all duration-500 ease-out" />
            <div className="w-12 h-12 bg-gradient-to-br from-[#ef4444] to-[#b91c1c] rounded-xl flex items-center justify-center shrink-0 shadow-lg border border-white/10 group-hover:-translate-y-1 transition-transform">
              <PhoneCall className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-[11px] font-bold text-[#ef4444] uppercase tracking-[0.2em] mb-1">Phone Support</h3>
              <p className="text-base font-bold text-white leading-tight">{siteContent.contact.phoneDisplay}</p>
              <p className="text-sm text-white/50 mt-1 leading-relaxed">Direct line for scheduling and repairs — tap to call</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
