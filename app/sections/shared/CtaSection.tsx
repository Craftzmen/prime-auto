"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCall, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteContent } from "@/lib/site-content";

interface SharedCtaSectionProps {
  heading?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
}

export function SharedCtaSection({
  heading = "Demand the Best for Your Vehicle.",
  description = `Schedule your appointment today and experience the ${siteContent.brand.fullName} standard of service.`,
  imageSrc,
  imageAlt,
  imageCaption,
}: SharedCtaSectionProps) {
  const hasImage = Boolean(imageSrc);

  return (
    <section className="bg-[#040404] relative py-20 lg:py-28 overflow-hidden z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ef4444]/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "relative rounded-[2.5rem] overflow-hidden glass-card border-[#ef4444]/30 hover:border-[#ef4444]/50 transition-all duration-700 p-8 md:p-12 lg:p-16 group",
            hasImage ? "lg:grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:items-center" : "text-center"
          )}
        >
          {/* Animated red glow inside card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#ef4444]/5 blur-[80px] pointer-events-none mix-blend-screen group-hover:bg-[#ef4444]/10 transition-colors duration-700" />

          <div className={cn("relative z-10 flex flex-col", !hasImage && "items-center max-w-2xl mx-auto")}>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
              <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Ready to start?</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              {heading.includes("Best") ? (
                <>Demand the <span className="text-gradient-primary">Best for Your Vehicle.</span></>
              ) : (
                <span className="text-gradient-primary">{heading}</span>
              )}
            </h2>

            <p className="text-lg md:text-xl text-white/50 leading-relaxed mb-10 max-w-xl">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-[#ef4444] hover:bg-[#dc2626] text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all inline-flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:-translate-y-1 active:scale-[0.98]"
              >
                {siteContent.cta.secondary}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={siteContent.contact.phoneHref}
                className="w-full sm:w-auto border border-white/10 glass hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all inline-flex items-center justify-center gap-2.5 hover:-translate-y-1"
              >
                <PhoneCall className="w-4 h-4 text-[#ef4444]" />
                {siteContent.contact.phoneDisplay}
              </a>
            </div>
          </div>

          {hasImage && imageSrc && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="relative hidden lg:block z-10"
            >
              <div className="relative h-[400px] rounded-[2rem] overflow-hidden border border-white/[0.08] glass-card p-2">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={imageAlt ?? heading}
                    fill
                    className="object-cover object-center opacity-80 group-hover:scale-110 transition-transform duration-[2s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/10 to-transparent" />
                </div>
                {imageCaption && (
                  <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/[0.08] bg-[#080808]/80 backdrop-blur-md px-5 py-4 text-sm text-white/90">
                    {imageCaption}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
