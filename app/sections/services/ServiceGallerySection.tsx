"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteImages } from "@/lib/site-images";

const gallery = [
  { src: siteImages.services.grid, alt: "Diagnostics bay", label: "Diagnostics" },
  { src: siteImages.services.booking, alt: "Service booking", label: "Booking" },
  { src: siteImages.services.diagnostics, alt: "Scan tool", label: "Scan Data" },
  { src: siteImages.services.assurance, alt: "Quality check", label: "Verification" },
  { src: siteImages.services.gallery, alt: "Workshop detail", label: "Workshop" },
  { src: siteImages.about.facility, alt: "Facility interior", label: "Facility" },
];

export function ServiceGallerySection() {
  return (
    <section className="bg-[#040404] relative py-20 lg:py-28 overflow-hidden z-10">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ef4444]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-12 lg:mb-14">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
            <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Service Gallery</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            A closer look at the environment <span className="text-gradient-primary">behind the work</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-base text-white/45 leading-relaxed mt-4 max-w-xl">
            The visuals here are less about decoration and more about showing the kinds of stations and checks the vehicle passes through.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gallery.map((item, index) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="relative h-[240px] rounded-[2rem] overflow-hidden border border-white/[0.08] glass-card p-2 group">
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                <Image src={item.src} alt={item.alt} fill className="object-cover object-center opacity-80 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/75 via-[#080808]/10 to-transparent" />
              </div>
              <div className="absolute bottom-5 left-5 rounded-3xl border border-white/[0.08] bg-[#080808]/80 backdrop-blur-md px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/90">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
