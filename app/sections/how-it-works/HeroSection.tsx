"use client";

import { PageHero } from "../shared/PageHero";
import { siteImages } from "@/lib/site-images";

export function HowItWorksHeroSection() {
  return (
    <PageHero
      label="Workflow"
      title="A modern repair path,"
      titleAccent="from start to finish"
      description="Prime Auto Deals keeps the service journey legible: intake, inspection, estimate, authorization, repair, and post-service confirmation."
      breadcrumb="How It Works"
      imageSrc={siteImages.howItWorks.hero}
      imageAlt="Technician and vehicle repair workflow"
      imageCaption="Every stage is documented so customers know what happens next"
    />
  );
}
