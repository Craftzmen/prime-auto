"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { siteContent } from "@/lib/site-content";

const hours = [
  { day: "Monday", time: "8:00 AM – 6:00 PM" },
  { day: "Tuesday", time: "8:00 AM – 6:00 PM" },
  { day: "Wednesday", time: "8:00 AM – 6:00 PM" },
  { day: "Thursday", time: "8:00 AM – 6:00 PM" },
  { day: "Friday", time: "8:00 AM – 6:00 PM" },
  { day: "Saturday", time: "8:00 AM – 6:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export function FormSection() {
  return (
    <section className="bg-[#080808] relative py-20 lg:pb-28 overflow-hidden z-10">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ef4444]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:col-span-7">
            <form className="glass-card rounded-[2.5rem] p-8 md:p-10 flex flex-col gap-6 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#ef4444] opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />

              <div>
                <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-4 inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
                  <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Service Request</span>
                </motion.div>
                <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Open a <span className="text-gradient-primary">request</span></h2>
                <p className="text-[15px] text-white/50 leading-relaxed">Outline symptoms and repair history so our team can prepare with context.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-white/40 uppercase tracking-[0.15em] ml-1">Full Name</label>
                  <input type="text" placeholder="Alex Morgan" className="bg-white/[0.02] border border-white/[0.08] rounded-2xl px-5 py-4 text-[15px] text-white focus:outline-none focus:border-[#ef4444]/50 focus:ring-4 focus:ring-[#ef4444]/10 transition-all placeholder:text-white/20 hover:bg-white/[0.04]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-white/40 uppercase tracking-[0.15em] ml-1">Phone Number</label>
                  <input type="tel" placeholder="(555) 123-4567" className="bg-white/[0.02] border border-white/[0.08] rounded-2xl px-5 py-4 text-[15px] text-white focus:outline-none focus:border-[#ef4444]/50 focus:ring-4 focus:ring-[#ef4444]/10 transition-all placeholder:text-white/20 hover:bg-white/[0.04]" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-white/40 uppercase tracking-[0.15em] ml-1">Email Address</label>
                <input type="email" placeholder="alex@example.com" className="bg-white/[0.02] border border-white/[0.08] rounded-2xl px-5 py-4 text-[15px] text-white focus:outline-none focus:border-[#ef4444]/50 focus:ring-4 focus:ring-[#ef4444]/10 transition-all placeholder:text-white/20 hover:bg-white/[0.04]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-white/40 uppercase tracking-[0.15em] ml-1">Service Details</label>
                <textarea rows={4} placeholder="Describe the symptoms, warning lights, or service request..." className="bg-white/[0.02] border border-white/[0.08] rounded-[2rem] px-5 py-4 text-[15px] text-white focus:outline-none focus:border-[#ef4444]/50 focus:ring-4 focus:ring-[#ef4444]/10 transition-all resize-none placeholder:text-white/20 hover:bg-white/[0.04]" />
              </div>
              <button type="submit" className="mt-4 bg-[#ef4444] hover:bg-[#dc2626] text-white px-8 py-4.5 rounded-full font-bold text-base transition-all shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:-translate-y-1 active:scale-[0.98] w-full">
                {siteContent.cta.schedule}
              </button>
            </form>
          </motion.div>

          {/* Sidebar — hours */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="lg:col-span-5 flex flex-col gap-8">
            <div className="glass-card rounded-[2.5rem] p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ef4444]/5 blur-[40px] pointer-events-none" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ef4444] to-[#b91c1c] flex items-center justify-center text-white shadow-lg border border-white/10">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight leading-none">Working Hours</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {hours.map((h, i) => (
                  <li key={i} className="flex items-center justify-between text-[15px] border-b border-white/[0.06] pb-3 last:border-0 last:pb-0">
                    <span className="text-white/40 font-medium">{h.day}</span>
                    <span className={h.time === "Closed" ? "text-[#ef4444] font-bold" : "text-white/70 font-bold"}>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency */}
            <div className="relative rounded-[2.5rem] p-8 text-center glass-card border-[#ef4444]/20 overflow-hidden group">
              <div className="absolute inset-0 bg-[#ef4444]/5 group-hover:bg-[#ef4444]/10 transition-colors" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">Emergency?</h3>
                <p className="text-[15px] text-white/50 mb-6">Call us for immediate assistance</p>
                <a href={siteContent.contact.phoneHref} className="w-full bg-[#ef4444] hover:bg-[#dc2626] text-white px-8 py-4 rounded-full font-bold text-base transition-all inline-block shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:-translate-y-1 active:scale-[0.98]">
                  {siteContent.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
