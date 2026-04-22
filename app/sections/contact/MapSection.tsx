"use client";

import { motion } from "framer-motion";

export function MapSection() {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden border border-white/[0.06] h-[320px] lg:h-[400px] relative">
          <div className="absolute top-5 left-5 z-10 max-w-md rounded-3xl border border-white/[0.08] bg-[#080808]/80 backdrop-blur-md px-4 py-3 text-sm text-white/80">
            Visit the Brooklyn facility for in-person diagnostics, service reviews, and scheduled repairs.
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.2!2d-73.92!3d40.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1916+E+51st+St+2FL%2C+Brooklyn%2C+NY+11234!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Prime Auto Deals Location"
          />
        </motion.div>
      </div>
    </section>
  );
}
