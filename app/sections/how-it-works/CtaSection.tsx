"use client";

import { siteImages } from "@/lib/site-images";
import { SharedCtaSection } from "../shared/CtaSection";

export function HowItWorksCtaSection() {
  return (
    <SharedCtaSection
      heading="Ready to Get Started?"
      description="Book your online consultation today and experience the easiest way to get your car serviced."
      imageSrc={siteImages.howItWorks.outcomes}
      imageAlt="Repair outcome and vehicle handoff"
      imageCaption="The final handoff includes the documented work summary and next-step guidance"
    />
  );
}
