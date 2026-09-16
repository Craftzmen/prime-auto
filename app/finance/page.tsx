import type { Metadata } from "next";
import { CallNowBar } from "@/components/layout/CallNowBar";
import { siteContent } from "@/lib/site-content";
import { FinanceHeroSection } from "../sections/finance/HeroSection";
import { PackagesSection } from "../sections/finance/PackagesSection";
import { AdvantageSection } from "../sections/finance/AdvantageSection";
import { FinanceTestimonialsSection } from "../sections/finance/TestimonialsSection";
import { EligibilitySection } from "../sections/finance/EligibilitySection";
import { ApprovalTimelineSection } from "../sections/finance/ApprovalTimelineSection";
import { FinanceFaqSection } from "../sections/finance/FinanceFaqSection";
import { FinanceCtaSection } from "../sections/finance/CtaSection";
import { FinancePopup } from "../sections/finance/FinancePopup";

export const metadata: Metadata = {
  title: "Car Finance and Loan Support in Brooklyn",
  description: `${siteContent.brand.fullName} offers structured financing support for Kia and Hyundai vehicles, including new purchases, used models, and refinancing requests.`,
  alternates: { canonical: "/finance" },
};

export default function FinancePage() {
  return (
    <div className="pb-28">
      <FinanceHeroSection />
      <PackagesSection />
      <AdvantageSection />
      <FinanceTestimonialsSection />
      <EligibilitySection />
      <ApprovalTimelineSection />
      <FinanceFaqSection />
      <FinanceCtaSection />
      <FinancePopup />
      <CallNowBar />
    </div>
  );
}
