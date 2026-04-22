"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { PhoneCall, Menu, X, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteContent } from "@/lib/site-content";

const NavLinks = siteContent.nav;

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#ef4444] text-white py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-center sm:justify-between items-center text-[12px] font-semibold tracking-wide">
          <div className="flex items-center gap-6">
            <a href={siteContent.contact.phoneHref} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{siteContent.contact.phoneDisplay}</span>
            </a>
            <a href={siteContent.contact.emailHref} className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-3.5 h-3.5" />
              <span>{siteContent.contact.email}</span>
            </a>
          </div>
          <div className="hidden sm:block opacity-90">
            Premium Auto Deals & Services
          </div>
        </div>
      </div>

      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-300 w-full flex justify-center",
          scrolled ? "top-[32px] pt-2 px-4 sm:px-6" : "top-[32px] pt-4 px-4 sm:px-6 lg:px-8"
        )}
      >
        <div
          className={cn(
            "w-full max-w-7xl mx-auto flex items-center justify-between rounded-full transition-all duration-300",
            scrolled
              ? "glass px-4 lg:px-6 h-14 lg:h-16 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-white/[0.08]"
              : "bg-transparent h-16 lg:h-[4.5rem] px-2"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center active:scale-[0.97] transition-transform shrink-0"
          >
            <Image
              src="/logo.png"
              alt={siteContent.brand.fullName}
              width={220}
              height={148}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.02] p-1 rounded-full border border-white/[0.04]">
            {NavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-300 relative overflow-hidden group",
                    isActive
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <div className="absolute inset-0 bg-white/[0.08] rounded-full" />
                  )}
                  <div className="absolute inset-0 bg-white/[0.04] opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                </Link>
              );
            })}
          </nav>

          {/* Right side — phone + email + CTA */}
          <div className="flex items-center gap-3 lg:gap-5 shrink-0">
            <div className="hidden lg:flex items-center gap-4 mr-2">
              <a
                href={siteContent.contact.phoneHref}
                className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-[#ef4444] group-hover:border-[#ef4444] transition-all">
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>
                <span className="hidden xl:inline font-medium text-[14px]">
                  {siteContent.contact.phoneDisplay}
                </span>
              </a>
              <a
                href={siteContent.contact.emailHref}
                className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-[#ef4444] group-hover:border-[#ef4444] transition-all">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="hidden xl:inline font-medium text-[14px]">
                  {siteContent.contact.email}
                </span>
              </a>
            </div>

            {/* Mobile/Tablet Phone Icon (visible on smaller screens) */}
            <a
              href={siteContent.contact.phoneHref}
              className="lg:hidden flex items-center gap-2.5 text-white/70 hover:text-white transition-colors text-sm group"
            >
              <div className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-[#ef4444] group-hover:border-[#ef4444] transition-all">
                <PhoneCall className="w-4 h-4" />
              </div>
              <span className="hidden xs:inline font-medium text-[14px]">
                {siteContent.contact.phoneDisplay}
              </span>
            </a>

            <Link
              href="/contact"
              className="hidden sm:inline-flex bg-[#ef4444] hover:bg-[#dc2626] text-white px-6 py-2.5 rounded-full font-semibold text-[14px] transition-all shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:-translate-y-0.5 active:scale-[0.98]"
            >
              {siteContent.cta.primary}
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.1] transition-colors text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu - Right Side Drawer */}
      <div 
        className={cn(
          "fixed inset-0 z-[100] lg:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        
        {/* Drawer */}
        <div 
          className={cn(
            "absolute top-0 right-0 bottom-0 w-[300px] bg-[#080808] border-l border-white/[0.08] shadow-2xl transition-transform duration-300 ease-out flex flex-col",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="p-6 flex items-center justify-between border-b border-white/[0.08]">
            <Image
              src="/logo.png"
              alt={siteContent.brand.fullName}
              width={220}
              height={148}
              className="h-8 w-auto rounded-lg bg-white/95 px-1.5 py-1 object-contain"
            />
            <button 
              onClick={() => setMobileOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.05] text-white/70 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="flex flex-col gap-1">
              {NavLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "px-5 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-200 flex items-center justify-between group",
                      isActive
                        ? "bg-[#ef4444]/10 text-[#ef4444]"
                        : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                    )}
                  >
                    {link.name}
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" />}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="p-6 border-t border-white/[0.08] bg-white/[0.02] flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <a
                href={siteContent.contact.phoneHref}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-white/[0.05] flex items-center justify-center">
                  <PhoneCall className="w-4 h-4 text-[#ef4444]" />
                </div>
                <span className="font-medium text-[15px]">{siteContent.contact.phoneDisplay}</span>
              </a>
              <a
                href={siteContent.contact.emailHref}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-white/[0.05] flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#ef4444]" />
                </div>
                <span className="font-medium text-[15px] truncate">{siteContent.contact.email}</span>
              </a>
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-[#ef4444] text-white py-3.5 rounded-xl font-bold text-center shadow-[0_10px_20px_rgba(239,68,68,0.2)] hover:bg-[#dc2626] transition-colors"
            >
              {siteContent.cta.primary}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
