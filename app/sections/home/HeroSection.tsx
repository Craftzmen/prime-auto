"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Clock, Phone, CalendarCheck } from "lucide-react";
import { siteContent } from "@/lib/site-content";
import { siteImages } from "@/lib/site-images";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-[#040404] overflow-hidden pt-20">
      {/* Background image & gradient overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={siteImages.home.hero}
          alt="Prime Auto Deals premium facility"
          fill
          className="object-cover object-center opacity-40 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040404] via-[#040404]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-transparent to-transparent" />
      </div>

      {/* Subtle red glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#ef4444]/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl relative z-10 mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left content */}
          <div className="lg:col-span-7 max-w-2xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8 inline-flex items-center gap-3 glass px-4 py-2 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse" />
              <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">
                {siteContent.brand.tagline}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              Premium care for
              <br />
              <span className="text-gradient-primary">elite vehicles.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg text-white/60 leading-relaxed mb-10 max-w-lg font-light"
            >
              We map symptoms, isolate faults, and coordinate repairs with
              documented estimates, clear timelines, and a service process that
              keeps the vehicle and the owner aligned.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-[#ef4444] hover:bg-[#dc2626] text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] hover:-translate-y-1"
              >
                {siteContent.cta.schedule}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto glass hover:bg-white/[0.08] text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all flex items-center justify-center border border-white/[0.1]"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* Right — Floating Action Card */}
          <div className="lg:col-span-5 lg:pl-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="glass-card rounded-3xl p-8 relative overflow-hidden group"
            >
              {/* Card internal glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ef4444]/10 blur-[80px] rounded-full group-hover:bg-[#ef4444]/20 transition-all duration-700 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ef4444] to-[#b91c1c] flex items-center justify-center mb-6 shadow-lg">
                  <CalendarCheck className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Fast-Track Service</h3>
                <p className="text-[15px] text-white/50 leading-relaxed mb-8">
                  Need immediate assistance? Call our priority line for expedited diagnostics and repair scheduling.
                </p>

                <div className="flex flex-col gap-4">
                  <a
                    href={siteContent.contact.phoneHref}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#ef4444]/50 hover:bg-white/[0.05] transition-all group/btn"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center group-hover/btn:bg-[#ef4444] transition-colors">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Priority Line</span>
                        <span className="text-lg font-bold text-white">{siteContent.contact.phoneDisplay}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/30 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/[0.05] bg-[#040404]/50 backdrop-blur-md hidden md:block z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between text-[13px] text-white/50 font-medium">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2"><Award className="w-4 h-4 text-[#ef4444]" /> 10+ Years Experience</span>
            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-[#ef4444]" /> Certified Mechanics</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#ef4444]" /> Fast Turnaround</span>
          </div>
          <p>Trusted by 2,500+ clients</p>
        </div>
      </div>
    </section>
  );
}
