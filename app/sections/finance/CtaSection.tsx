"use client";

import { siteImages } from "@/lib/site-images";
import { SharedCtaSection } from "../shared/CtaSection";

export function FinanceCtaSection() {
  return (
    <SharedCtaSection
      heading="Start Your Finance Journey"
      description="Apply today and experience a smooth, transparent, and hassle-free car financing journey."
      imageSrc={siteImages.finance.timeline}
      imageAlt="Finance application review"
      imageCaption="Every approval path is mapped to documentation and repayment planning"
    />
  );
}
