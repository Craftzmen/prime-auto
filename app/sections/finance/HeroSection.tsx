"use client";

import { PageHero } from "../shared/PageHero";
import { siteImages } from "@/lib/site-images";

export function FinanceHeroSection() {
  return (
    <PageHero
      label="Finance Support"
      title="Structured lending for"
      titleAccent="Kia & Hyundai vehicles"
      description="Whether you are purchasing a new car, buying used, or refinancing an existing loan, we help organize the paperwork, expectations, and approval path."
      breadcrumb="Finance"
      imageSrc={siteImages.finance.hero}
      imageAlt="Premium vehicle financing for Kia and Hyundai models"
      imageCaption="Tailored lending solutions for modern Kia and Hyundai vehicles"
    />
  );
}
