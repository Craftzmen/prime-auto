import { HowItWorksHeroSection } from "../sections/how-it-works/HeroSection";
import { StepsSection } from "../sections/how-it-works/StepsSection";
import { FaqSection } from "../sections/how-it-works/FaqSection";
import { ToolingSection } from "../sections/how-it-works/ToolingSection";
import { QualityCheckpointsSection } from "../sections/how-it-works/QualityCheckpointsSection";
import { OutcomeStoriesSection } from "../sections/how-it-works/OutcomeStoriesSection";
import { HowItWorksCtaSection } from "../sections/how-it-works/CtaSection";

export const metadata = {
  title: "How Prime Auto Deals Works | Structured Diagnostics and Repair Workflow",
  description:
    "See how Prime Auto Deals guides customers through intake, diagnosis, repair authorization, and post-service follow-up.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksHeroSection />
      <StepsSection />
      <FaqSection />
      <ToolingSection />
      <QualityCheckpointsSection />
      <OutcomeStoriesSection />
      <HowItWorksCtaSection />
    </>
  );
}
