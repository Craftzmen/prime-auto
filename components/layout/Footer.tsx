import Link from "next/link";
import Image from "next/image";
import { PhoneCall, Clock, ArrowRight } from "lucide-react";
import { siteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const quickLinks = siteContent.nav;
const serviceLinks = siteContent.services;
const legalLinks = siteContent.legal;

export function Footer() {
  return (
    <footer className="relative bg-[#040404] text-white/60 border-t border-white/[0.04] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#ef4444]/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ef4444]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl relative z-10 mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12">
          {/* Brand & Intro */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 w-fit group">
              <Image
                src="/logo.png"
                alt={siteContent.brand.fullName}
                width={220}
                height={148}
                className="w-70"
              />
            </Link>
            <p className="text-[15px] leading-relaxed text-white/50 max-w-sm">
              {siteContent.brand.fullName} provides structured diagnostics,
              maintenance planning, and repair execution designed to reduce
              downtime and protect long-term vehicle reliability.
            </p>
            <a
              href={siteContent.contact.phoneHref}
              title={`Call ${siteContent.contact.phoneDisplay}`}
              className="mt-2 inline-flex min-h-11 items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 hover:border-[#ef4444] hover:bg-[#ef4444]/10 transition-all active:opacity-90 w-fit"
            >
              <PhoneCall className="w-4 h-4 text-[#ef4444]" />
              <span className="text-sm font-semibold text-white/80">{siteContent.contact.phoneDisplay}</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="text-[13px] font-bold text-white uppercase tracking-[0.15em]">
              Company
            </h3>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-white/50 hover:text-white hover:pl-1 transition-all flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#ef4444]" />
                    {link.name}
                  </Link>
                </li>
              ))}
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-white/50 hover:text-white hover:pl-1 transition-all flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#ef4444]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-[13px] font-bold text-white uppercase tracking-[0.15em]">
              Our Services
            </h3>
            <ul className="flex flex-col gap-4">
              {serviceLinks.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    className="group flex flex-col gap-1 text-white/50 hover:text-white transition-colors"
                  >
                    <span className="text-[15px]">{s.name}</span>
                    <span className="text-[12px] text-[#ef4444] font-medium tracking-wide">
                      {s.price}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-[13px] font-bold text-white uppercase tracking-[0.15em]">
              Contact
            </h3>
            <ul className="flex flex-col gap-6">
              <li>
                <a
                  href={siteContent.contact.phoneHref}
                  title={`Call ${siteContent.contact.phoneDisplay}`}
                  className="flex min-h-11 items-start gap-4 rounded-lg py-2 active:opacity-90"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0">
                    <PhoneCall className="w-4 h-4 text-[#ef4444]" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-white/40 text-[12px] font-bold uppercase tracking-wider mb-0.5">Call Us</span>
                    <span className="text-[15px] font-medium text-white/60 hover:text-white transition-colors">
                      {siteContent.contact.phoneDisplay}
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#ef4444]" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-white/40 text-[12px] font-bold uppercase tracking-wider mb-0.5">Business Hours</span>
                  <div className="text-[15px] text-white/60 leading-relaxed">
                    <span className="text-white/80 font-medium">{siteContent.hours.weekdayLabel}</span>
                    <br />
                    <span>{siteContent.hours.weekdayHours}</span>
                    <div className="mt-2">
                      <span className="text-white/80 font-medium">{siteContent.hours.sundayLabel}</span>
                      <br />
                      <span>{siteContent.hours.sundayHours}</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[13px] text-white/40">
            &copy; {new Date().getFullYear()} {siteContent.brand.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-[13px] text-white/40">
            <Link href="/policies/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/policies/refund-policy" className="hover:text-white transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
