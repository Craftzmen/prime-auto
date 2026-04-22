"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteImages } from "@/lib/site-images";
import { siteContent } from "@/lib/site-content";

export function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      ref={ref}
      className="bg-[#040404] py-24 lg:py-32 w-full relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Image & Stats */}
          <div className="relative h-[500px] lg:h-[650px] w-full rounded-3xl overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#ef4444]/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

            {/* Main Image with Parallax */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/[0.08]">
              <motion.div
                className="w-full h-[120%] absolute -top-[10%]"
                style={{ y }}
              >
                <Image
                  src={siteImages.home.about}
                  alt="Mechanics working on a vehicle rebuild"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-transparent to-transparent opacity-80" />
              </motion.div>
            </div>

            {/* Overlapping Glass Stat Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-8 left-8 right-8 md:right-auto md:w-80 glass-card p-6 rounded-2xl border border-white/[0.1] shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ef4444] to-[#b91c1c] flex items-center justify-center shadow-lg shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#ef4444] uppercase tracking-wider">Certified</p>
                  <p className="text-white font-bold text-lg leading-tight">Master Technicians</p>
                </div>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                All repairs are executed under strict quality-control checkpoints to ensure lasting reliability.
              </p>
            </motion.div>
          </div>

          {/* Right: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
              <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">
                Operational Excellence
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            >
              Engineered for
              <br />
              <span className="text-gradient-primary">traceable quality.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/50 leading-relaxed mb-10 font-light"
            >
              {siteContent.brand.fullName} treats each vehicle as a complex system with specific inputs,
              tolerances, and failure points. This analytical mindset keeps our
              work repeatable, our estimates precise, and the end result undeniably superior.
            </motion.p>

            {/* Dynamic Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12"
            >
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-bold text-white">10<span className="text-[#ef4444]">+</span></span>
                <span className="text-[13px] text-white/40 font-bold uppercase tracking-wider">Years Active</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-bold text-white">15<span className="text-[#ef4444]">+</span></span>
                <span className="text-[13px] text-white/40 font-bold uppercase tracking-wider">Expert Leads</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-bold text-white">2.5<span className="text-[#ef4444]">k</span></span>
                <span className="text-[13px] text-white/40 font-bold uppercase tracking-wider">Cars Serviced</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/about"
                className="bg-[#ef4444] hover:bg-[#dc2626] text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all inline-flex items-center gap-3 shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:-translate-y-1"
              >
                Explore Our Process
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
