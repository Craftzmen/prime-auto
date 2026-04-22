import { ContactHeroSection } from "../sections/contact/HeroSection";
import { ContactCards } from "../sections/contact/ContactCards";
import { FormSection } from "../sections/contact/FormSection";
import { ResponseWorkflowSection } from "../sections/contact/ResponseWorkflowSection";
import { ServiceAreasSection } from "../sections/contact/ServiceAreasSection";
import { SupportFaqSection } from "../sections/contact/SupportFaqSection";
import { MapSection } from "../sections/contact/MapSection";

export const metadata = {
  title: "Contact Prime Auto Deals | Brooklyn Diagnostics, Scheduling, and Service Support",
  description:
    "Reach Prime Auto Deals for diagnostics, appointment scheduling, repair coordination, and service questions from our Brooklyn team.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactCards />
      <FormSection />
      <ResponseWorkflowSection />
      <ServiceAreasSection />
      <SupportFaqSection />
      <MapSection />
    </>
  );
}
