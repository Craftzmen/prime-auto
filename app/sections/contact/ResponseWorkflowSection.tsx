"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquareText, ClipboardList, Wrench, CheckCircle2 } from "lucide-react";
import { siteImages } from "@/lib/site-images";

const workflow = [
  { icon: MessageSquareText, title: "Initial contact", text: "Tell us what is happening, when it started, and whether the concern affects drivability." },
  { icon: ClipboardList, title: "Service triage", text: "We map the issue to the right diagnostic path so the estimate is grounded in evidence." },
  { icon: Wrench, title: "Repair scheduling", text: "Once approved, the vehicle is booked into the right service window and technician queue." },
  { icon: CheckCircle2, title: "Completion review", text: "We confirm the work, the next-step guidance, and any follow-up items before handoff." },
];

export function ResponseWorkflowSection() {
  return (
    <section className="bg-[#040404] relative py-20 lg:py-28 overflow-hidden z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ef4444]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
              <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Response Workflow</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Controlled <span className="text-gradient-primary">service triage</span> process
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-base text-white/45 leading-relaxed mt-4 max-w-xl">
              The goal is to reduce back-and-forth. We capture the issue once, review the technical symptoms, and route the vehicle to the right next step.
            </motion.p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {workflow.map((item, index) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 + index * 0.05 }} className="glass-card rounded-3xl p-6 group">
                  <div className="w-10 h-10 rounded-xl bg-[#ef4444]/10 flex items-center justify-center mb-4 group-hover:bg-[#ef4444]/20 transition-colors">
                    <item.icon className="w-5 h-5 text-[#ef4444]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative h-[320px] lg:h-[460px] rounded-[2rem] overflow-hidden border border-white/[0.08] glass-card p-2">
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              <Image src={siteImages.contact.workflow} alt="Contact workflow and service coordination" fill className="object-cover object-center opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/15 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
