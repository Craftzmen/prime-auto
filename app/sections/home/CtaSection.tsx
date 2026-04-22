"use client";

import { siteImages } from "@/lib/site-images";
import { SharedCtaSection } from "../shared/CtaSection";

export function CtaSection() {
  return (
    <SharedCtaSection
      imageSrc={siteImages.home.cta}
      imageAlt="Technician and vehicle consultation"
      imageCaption="Booked appointments move through a controlled intake and estimate process"
    />
  );
}
