"use client";

import { PageHero } from "../shared/PageHero";
import { siteImages } from "@/lib/site-images";

export function ContactHeroSection() {
  return (
    <PageHero
      label="Service Coordination"
      title="Talk to a team"
      titleAccent="that answers directly"
      description="Whether you need an estimate, a diagnostic review, or a time-sensitive repair update, our Brooklyn team keeps communication specific and actionable."
      breadcrumb="Contact"
      imageSrc={siteImages.contact.hero}
      imageAlt="Prime Auto Deals contact and service discussion"
      imageCaption="Call, email, or visit for direct scheduling and repair coordination"
    />
  );
}
