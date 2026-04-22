"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Settings, Activity, Disc, Thermometer, Droplet, Zap } from "lucide-react";
import { siteImages } from "@/lib/site-images";

const services = [
  {
    title: "Performance Upgrades",
    price: "From $500",
    icon: Zap,
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=600",
    desc: "Increase output and response through disciplined tuning, component optimization, and performance calibration.",
  },
  {
    title: "Computer Diagnostics",
    price: "From $100",
    icon: Activity,
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=600",
    desc: "Use multi-system diagnostics to isolate electrical, sensor, and drivability issues with minimal guesswork.",
  },
  {
    title: "Anti-Lock Brake Service",
    price: "From $150",
    icon: Disc,
    img: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=600",
    desc: "Inspect, service, and restore braking hardware and ABS-related systems for dependable stopping performance.",
  },
  {
    title: "AC Service & Repair",
    price: "From $120",
    icon: Thermometer,
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=600",
    desc: "Service cabin climate systems with evacuation, leak checks, recharge, and component-level repair.",
  },
  {
    title: "Lube, Oil & Filters",
    price: "From $60",
    icon: Droplet,
    img: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80&w=600",
    desc: "Perform oil and filter service intervals that support engine longevity and stable thermal performance.",
  },
  {
    title: "Engine Diagnostics",
    price: "From $150",
    icon: Settings,
    img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=600",
    desc: "Run compression, timing, and control-system checks to locate the root cause of engine faults.",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-[#080808] py-24 lg:py-32 w-full relative z-10 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ef4444]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
              <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">
                Service Architecture
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
              Structured Repair &<br />
              <span className="text-gradient-primary">Maintenance Programs</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:max-w-xs"
          >
            <p className="text-[15px] text-white/50 leading-relaxed mb-6">
              Every service tier is built around measurable diagnostics, clear
              authorization steps, and expert repair execution.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[14px] font-bold text-white hover:text-[#ef4444] transition-colors group"
            >
              View Full Service Catalog
              <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center group-hover:bg-[#ef4444]/10 transition-colors">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col group min-h-[380px]"
            >
              {/* Image Header */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={i === 0 ? siteImages.services.grid : service.img}
                  alt={service.title}
                  fill
                  className="object-cover object-center opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />

                {/* Icon Badge */}
                <div className="absolute bottom-0 left-6 w-12 h-12 rounded-xl bg-gradient-to-br from-[#ef4444] to-[#b91c1c] flex items-center justify-center shadow-lg border border-white/10 z-10 group-hover:-translate-y-4 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pt-10 flex flex-col flex-1 relative">
                {/* Decorative hover border */}
                <div className="absolute bottom-0 left-0 h-1 bg-[#ef4444] w-0 group-hover:w-full transition-all duration-500 ease-out" />

                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#ef4444] transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-[12px] font-bold text-[#ef4444] tracking-[0.1em] uppercase bg-[#ef4444]/10 px-3 py-1.5 rounded-full shrink-0">
                    {service.price}
                  </span>
                </div>

                <p className="text-[15px] text-white/50 leading-relaxed mb-8 flex-1">
                  {service.desc}
                </p>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-[13px] font-bold text-white/70 hover:text-white transition-colors w-fit group/link mt-auto"
                >
                  <span className="border-b border-white/20 group-hover/link:border-white pb-0.5 transition-colors">Service details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#ef4444] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
