"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PageHero } from "../shared/PageHero";
import { siteImages } from "@/lib/site-images";

export function AboutHeroSection() {
  return (
    <>
      <PageHero
        label="Operational Overview"
        title="We run on"
        titleAccent="Technical Discipline"
        description="Prime Auto Deals applies methodical diagnostic procedures, repair documentation, and quality control checks so every service decision is traceable and every recommendation is defensible."
        breadcrumb="About Us"
        imageSrc={siteImages.about.hero}
        imageAlt="Prime Auto Deals workshop environment"
        imageCaption="Brooklyn-based service operations with diagnostic-first workflows"
      />

      {/* Hero image + founding story */}
      <section className="bg-[#040404] relative pb-20 lg:pb-28 overflow-hidden z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ef4444]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative h-[360px] lg:h-[500px] rounded-[2.5rem] overflow-hidden glass-card p-2">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                <Image src={siteImages.about.facility} alt="Prime Auto Deals workshop" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/20 to-transparent" />
              </div>
              <div className="absolute bottom-8 left-8 bg-[#080808]/90 backdrop-blur-xl border border-white/[0.1] rounded-[2rem] px-7 py-5 shadow-2xl">
                <p className="text-xl font-bold text-white tracking-tight">Service-led since 2009</p>
                <p className="text-[11px] font-bold text-[#ef4444] uppercase tracking-[0.2em] mt-1">Brooklyn, New York</p>
              </div>
            </motion.div>

            {/* Founding story */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }} className="flex flex-col gap-8">
              <div>
                <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
                  <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Our Origin</span>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">Founded with a <span className="text-gradient-primary">diagnostics-first</span> model</h2>
                <p className="text-lg text-white/50 leading-relaxed mb-6">
                  Prime Auto Deals started as a small Brooklyn operation and expanded by treating every vehicle as a technical system. We document symptoms, isolate root causes, and explain each service path before work begins.
                </p>
                <p className="text-lg text-white/50 leading-relaxed">
                  That operating philosophy now supports repair planning, maintenance scheduling, and financing coordination under one roof, so customers get a single accountable process instead of disconnected handoffs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
