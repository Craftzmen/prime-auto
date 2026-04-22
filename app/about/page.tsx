import { AboutHeroSection } from "../sections/about/HeroSection";
import { ValuesSection } from "../sections/about/ValuesSection";
import { TeamCredentialsSection } from "../sections/about/TeamCredentialsSection";
import { FacilityStandardsSection } from "../sections/about/FacilityStandardsSection";
import { MilestonesSection } from "../sections/about/MilestonesSection";
import { AboutCtaSection } from "../sections/about/CtaSection";

export const metadata = {
  title: "About Prime Auto Deals | Technical Standards, Facility Discipline, and Service Values",
  description:
    "Learn how Prime Auto Deals combines structured diagnostics, disciplined repair workflows, and customer-first service delivery for Brooklyn drivers.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <ValuesSection />
      <TeamCredentialsSection />
      <FacilityStandardsSection />
      <MilestonesSection />
      <AboutCtaSection />
    </>
  );
}
