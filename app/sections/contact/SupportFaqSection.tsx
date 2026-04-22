"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How fast will I hear back?", a: "Most requests are reviewed during business hours, and service questions are routed to the relevant technician or advisor." },
  { q: "Should I include symptoms in the message?", a: "Yes. The more accurately you describe the symptoms, the faster the team can identify the right diagnostic path." },
  { q: "Can I request a same-day review?", a: "If the schedule allows and the concern is urgent, we can move the vehicle into a quicker diagnostic window." },
  { q: "Do you support follow-up questions after service?", a: "Yes. We can review completed work, explain findings, and discuss any next-step maintenance items." },
];

export function SupportFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-[#080808] relative py-20 lg:py-28 overflow-hidden z-10">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ef4444]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-14">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full justify-center">
            <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
            <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Support FAQ</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Answers for <span className="text-gradient-primary">contact and scheduling</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="glass-card rounded-3xl overflow-hidden relative group">
              <div className={`absolute bottom-0 left-0 h-1 bg-[#ef4444] transition-all duration-500 ease-out ${openIdx === i ? "w-full" : "w-0 group-hover:w-1/4"}`} />
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left relative z-10">
                <span className={`text-base font-bold transition-colors duration-300 ${openIdx === i ? "text-[#ef4444]" : "text-white"}`}>{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIdx === i ? "bg-[#ef4444] text-white rotate-180" : "bg-white/5 text-white/40"}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              {openIdx === i && (
                <div className="px-6 pb-6 -mt-1 relative z-10 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-[15px] text-white/50 leading-relaxed border-t border-white/[0.08] pt-4">{faq.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
