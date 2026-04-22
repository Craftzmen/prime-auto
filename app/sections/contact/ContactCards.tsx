"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, PhoneCall, Mail } from "lucide-react";
import { siteContent } from "@/lib/site-content";
import { siteImages } from "@/lib/site-images";

const cards = [
  { icon: MapPin, title: "Facility Location", line1: siteContent.contact.addressLine1, line2: siteContent.contact.addressLine2 },
  { icon: PhoneCall, title: "Phone Support", line1: siteContent.contact.phoneDisplay, line2: "Direct line for scheduling and repairs", href: siteContent.contact.phoneHref },
  { icon: Mail, title: "Service Email", line1: siteContent.contact.email, line2: "Responses routed within one business day", href: siteContent.contact.emailHref },
];

export function ContactCards() {
  return (
    <section className="bg-[#040404] relative pb-12 lg:pb-16 overflow-hidden z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ef4444]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.08 }} className="glass-card rounded-2xl p-7 flex items-start gap-5 group relative overflow-hidden">
              <div className="absolute bottom-0 left-0 h-1 bg-[#ef4444] w-0 group-hover:w-full transition-all duration-500 ease-out" />
              <div className="w-12 h-12 bg-gradient-to-br from-[#ef4444] to-[#b91c1c] rounded-xl flex items-center justify-center shrink-0 shadow-lg border border-white/10 group-hover:-translate-y-1 transition-transform">
                <c.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-[11px] font-bold text-[#ef4444] uppercase tracking-[0.2em] mb-1">{c.title}</h3>
                {c.href ? (
                  <a href={c.href} className="text-base font-bold text-white hover:text-[#ef4444] transition-colors block leading-tight">{c.line1}</a>
                ) : (
                  <p className="text-base font-bold text-white leading-tight">{c.line1}</p>
                )}
                <p className="text-sm text-white/50 mt-1 leading-relaxed">{c.line2}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
