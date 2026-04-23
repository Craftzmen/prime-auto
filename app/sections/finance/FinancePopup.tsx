"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, Zap, CreditCard, ChevronRight } from "lucide-react";
import { siteContent } from "@/lib/site-content";

export const FinancePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Show popup immediately
    setIsVisible(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: isMobile ? 0 : 50, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            width: isMinimized ? (isMobile ? 56 : 64) : (isMobile ? "calc(100vw - 32px)" : "500px"),
          }}
          exit={{ opacity: 0, y: 50, x: isMobile ? 0 : 50, scale: 0.9 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[90] border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.7)] ${isMinimized ? "p-0 rounded-full" : "rounded-[2rem] sm:rounded-[2.5rem] bg-[#080808]/95 backdrop-blur-3xl"
            } max-h-[calc(100vh-32px)] flex flex-col`}
        >
          {isMinimized ? (
            <motion.button
              layoutId="popup-container"
              onClick={() => setIsMinimized(false)}
              className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center bg-primary text-white shadow-lg transition-transform hover:scale-110 active:scale-95 rounded-full"
            >
              <Phone className="h-6 w-6 sm:h-7 sm:w-7" />
              <span className="absolute top-0 right-0 flex h-4 w-4 sm:h-5 sm:w-5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-green-500 border-2 border-[#080808]"></span>
              </span>
            </motion.button>
          ) : (
            <motion.div layoutId="popup-container" className="flex flex-col h-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
              {/* Header */}
              <div className="relative flex items-center gap-3 sm:gap-4 bg-gradient-to-br from-primary to-[#b91c1c] p-4 sm:p-6 text-white shrink-0">
                <div className="flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 shadow-inner">
                  <Phone className="h-5 w-5 sm:h-7 sm:w-7" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-wider leading-tight">Need Finance Assistance?</h3>
                  <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
                    <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                      <span className="absolute inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500"></span>
                    </span>
                    <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.15em] text-white/80">
                      Advisors Connected
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMinimized(true)}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-black/10 text-white/60 hover:bg-black/20 hover:text-white transition-all"
                >
                  <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 overflow-y-auto custom-scrollbar">
                <div className="grid gap-2 sm:gap-2.5">
                  <div className="flex items-center justify-between rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/5 p-2.5 sm:p-3.5 hover:bg-white/[0.07] transition-all group cursor-default">
                    <div className="flex items-center gap-2.5 sm:gap-3.5">
                      <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-primary/15 text-primary">
                        <Zap className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                      </div>
                      <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wide text-white/90">
                        Fast & Easy Application
                      </span>
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>

                  <div className="flex items-center justify-between rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/5 p-2.5 sm:p-3.5 hover:bg-white/[0.07] transition-all group cursor-default">
                    <div className="flex items-center gap-2.5 sm:gap-3.5">
                      <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-primary/15 text-primary">
                        <CreditCard className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                      </div>
                      <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wide text-white/90">
                        Instant Eligibility Check
                      </span>
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

                {/* Main Call Action */}
                <div className="relative group pt-0.5 sm:pt-1">
                  <div className="absolute -inset-1 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary to-[#b91c1c] opacity-20 blur-md group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <a
                    href={siteContent.contact.phoneHref}
                    className="relative flex flex-col items-center justify-center rounded-xl sm:rounded-2xl bg-primary py-3 sm:py-4 px-4 sm:px-6 transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-95 shadow-[0_10px_20px_rgba(239,68,68,0.3)]"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3.5">
                      <span className="text-xl sm:text-2xl font-black tracking-tighter text-white">{siteContent.contact.phoneDisplay}</span>
                      <Phone className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-white animate-pulse" />
                    </div>
                  </a>
                </div>

                <div className="text-center pt-0.5">
                  <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.4em] text-white/30">
                    Call Right Now
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
