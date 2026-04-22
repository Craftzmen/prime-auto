import { ServicesHeroSection } from "../sections/services/HeroSection";
import { ServicesGrid } from "../sections/services/ServicesGrid";
import { BookingSection } from "../sections/services/BookingSection";
import { DiagnosticWorkflowSection } from "../sections/services/DiagnosticWorkflowSection";
import { QualityAssuranceSection } from "../sections/services/QualityAssuranceSection";
import { ServiceGallerySection } from "../sections/services/ServiceGallerySection";
import { EmergencySection } from "../sections/services/EmergencySection";

export const metadata = {
  title: "Auto Repair and Maintenance Services in Brooklyn | Prime Auto Deals",
  description:
    "Prime Auto Deals delivers diagnostics, maintenance, and repair programs with documented estimates and a structured service workflow.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesGrid />
      <BookingSection />
      <DiagnosticWorkflowSection />
      <QualityAssuranceSection />
      <ServiceGallerySection />
      <EmergencySection />
    </>
  );
}
