"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Video, Camera, Stethoscope, Wrench, DollarSign, HeartHandshake } from "lucide-react";
import { siteImages } from "@/lib/site-images";

const steps = [
  { icon: Video, num: "01", title: "Book an Intake Call", desc: "Choose a time slot so the service team can capture the concern, the vehicle details, and the urgency level before inspection." },
  { icon: Camera, num: "02", title: "Review the Vehicle Live", desc: "Use a camera-guided walkaround to show the symptoms, warnings, and any visible damage from multiple angles." },
  { icon: Stethoscope, num: "03", title: "Confirm the Root Cause", desc: "The mechanic explains the likely fault, the supporting evidence, and the repair options in plain but precise language." },
  {
    icon: Wrench, num: "04", title: "Service Options",
    desc: "Choose the repair path that matches the diagnosis, the schedule, and the amount of hands-on work required.",
    subItems: ["Self-Fix Guidance — for minor issues with a clear owner-side remedy", "On-Site Mechanic Visit — when the issue needs roadside or driveway support", "Workshop Appointment — for major repairs and deeper teardown work"],
  },
  { icon: DollarSign, num: "05", title: "Transparent Cost Estimates", desc: "Before any work begins, you receive a complete breakdown of parts, labor, and expected timing." },
  { icon: HeartHandshake, num: "06", title: "Post-Service Follow-Up", desc: "After completion, the team checks whether the vehicle is performing as expected and whether anything needs adjustment." },
];

export function StepsSection() {
  return (
    <section className="bg-[#040404] relative pb-20 lg:pb-28 overflow-hidden z-10">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ef4444]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
            <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Our Process</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            A structured path from <span className="text-gradient-primary">intake to follow-up</span>
          </motion.h2>
        </div>

        <div className=" mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-[#ef4444]/50 via-white/[0.08] to-[#ef4444]/50 hidden md:block" />

            <div className="flex flex-col gap-8">
              {steps.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex gap-6 relative">
                  {/* Step number circle */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[#ef4444] to-[#b91c1c] rounded-2xl flex items-center justify-center shrink-0 relative z-10 shadow-lg border border-white/10 group">
                    <s.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  {/* Content */}
                  <div className="glass-card rounded-[2rem] p-8 flex-1 group relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 h-1 bg-[#ef4444] w-0 group-hover:w-full transition-all duration-500 ease-out" />
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[11px] font-bold text-[#ef4444] uppercase tracking-[0.2em]">Step {s.num}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#ef4444] transition-colors">{s.title}</h3>
                    <p className="text-[15px] text-white/50 leading-relaxed">{s.desc}</p>
                    {s.subItems && (
                      <ul className="mt-6 flex flex-col gap-3 border-t border-white/[0.08] pt-6">
                        {s.subItems.map((item, j) => (
                          <li key={j} className="text-sm text-white/60 flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
