"use client";

import { PageHero } from "../shared/PageHero";
import { siteImages } from "@/lib/site-images";

export function ServicesHeroSection() {
  return (
    <PageHero
      label="Service Menu"
      title="Diagnostics, maintenance, and"
      titleAccent="repair execution"
      description="Prime Auto Deals structures vehicle service around measurable diagnostics, transparent approvals, and repair delivery that protects uptime and reliability."
      breadcrumb="Services"
      imageSrc={siteImages.services.hero}
      imageAlt="Automotive service bay"
      imageCaption="Clear service paths for diagnostics, repair, and maintenance"
    />
  );
}
