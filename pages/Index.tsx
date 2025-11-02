import HeroSection from "@/components/HeroSection";
import InsightSpotlight from "@/components/InsightSpotlight";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import AIWorkflowShowcase from "@/components/AIWorkflowShowcase";
import ResultsSection from "@/components/ResultsSection";
import DashboardShowcase from "@/components/DashboardShowcase";
import OfferSection from "@/components/OfferSection";
import SecurityPrivacySection from "@/components/SecurityPrivacySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import StructuredData from "@/components/StructuredData";
import StickyCtaBar from "@/components/StickyCtaBar";
import useInteractiveCtaFeedback from "@/hooks/useInteractiveCtaFeedback";
import useFadeInSections from "@/hooks/useFadeInSections";
import SectionNavigationMap from "@/components/SectionNavigationMap";
import ComparisonSection from "@/components/ComparisonSection";
import PainChecklistSection from "@/components/PainChecklistSection";
import MidPageCtaSection from "@/components/MidPageCtaSection";
import BeforeAfterJourneySection from "@/components/BeforeAfterJourneySection";
import SegmentBenefitsSection from "@/components/SegmentBenefitsSection";

const Index = () => {
  useInteractiveCtaFeedback();
  useFadeInSections();

  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas text-foreground">
      <StructuredData />
      <StickyCtaBar />
      <HeroSection />
      <SectionNavigationMap />
      <PainChecklistSection />
      <InsightSpotlight />
      <ProblemSection />
      <BeforeAfterJourneySection />
      <SolutionSection />
      <SegmentBenefitsSection />
      <ComparisonSection />
      <AIWorkflowShowcase />
      <ResultsSection />
      <DashboardShowcase />
      <OfferSection />
      <MidPageCtaSection />
      <SecurityPrivacySection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingContactButton />
    </div>
  );
};

export default Index;
