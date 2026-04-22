import type { Metadata } from "next";
import { HeroSection } from "./sections/home/HeroSection";
import { ServicesSection } from "./sections/home/ServicesSection";
import { AboutSection } from "./sections/home/AboutSection";
import { ProcessSection } from "./sections/home/ProcessSection";
import { TestimonialsSection } from "./sections/home/TestimonialsSection";
import { CtaSection } from "./sections/home/CtaSection";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: siteContent.seo.defaultTitle,
  description: siteContent.seo.defaultDescription,
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
