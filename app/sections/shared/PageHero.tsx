"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  label: string;
  title: string;
  titleAccent?: string;
  description: string;
  breadcrumb: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
}

export function PageHero({
  label,
  title,
  titleAccent,
  description,
  breadcrumb,
  imageSrc,
  imageAlt,
  imageCaption,
}: PageHeroProps) {
  return (
    <section className="bg-[#040404] relative w-full pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden z-10">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ef4444]/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10",
          imageSrc ? "lg:grid-cols-[1.1fr_0.9fr] items-end" : "grid-cols-1"
        )}
      >
        <div>
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1.5 text-[13px] text-white/30 mb-8"
          >
            <Link href="/" className="hover:text-white/60 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/60">{breadcrumb}</span>
          </motion.div>

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mb-6 inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
            <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">
              {label}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] max-w-3xl mb-6"
          >
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="text-gradient-primary">{titleAccent}</span>
              </>
            )}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-base md:text-lg text-white/50 max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        {imageSrc && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[340px] rounded-[2rem] overflow-hidden border border-white/[0.08] bg-[#111]">
              <Image
                src={imageSrc}
                alt={imageAlt ?? title}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 via-[#080808]/10 to-transparent" />
            </div>
            {imageCaption && (
              <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/[0.08] bg-[#080808]/80 backdrop-blur-md px-4 py-3 text-sm text-white/80">
                {imageCaption}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
