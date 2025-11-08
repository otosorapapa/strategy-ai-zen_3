import HeroSection from "@/components/HeroSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import SegmentBenefitsSection from "@/components/SegmentBenefitsSection";
import ServiceFlowSection from "@/components/ServiceFlowSection";
import DashboardExampleSection from "@/components/DashboardExampleSection";
import MeritsSection from "@/components/MeritsSection";
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
import useInteractiveCtaFeedback from "@/hooks/useInteractiveCtaFeedback";
import useFadeInSections from "@/hooks/useFadeInSections";
import SectionNavigationMap from "@/components/SectionNavigationMap";
import ComparisonSection from "@/components/ComparisonSection";
import PainChecklistSection from "@/components/PainChecklistSection";
import MidPageCtaSection from "@/components/MidPageCtaSection";
import StorySeriesSection from "@/components/StorySeriesSection";
import PlansSection from "@/components/PlansSection";
import ConsultantProfileSection from "@/components/ConsultantProfileSection";
import PurposeSection from "@/components/PurposeSection";

const Index = () => {
  useInteractiveCtaFeedback();
  useFadeInSections();

  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas text-foreground">
      <StructuredData />
      <HeroSection />
      <PurposeSection />
      <SectionNavigationMap />
      <ValuePropositionSection />
      <SegmentBenefitsSection />
      <ServiceFlowSection />
      <DashboardExampleSection />
      <MeritsSection />
      <PainChecklistSection />
      <StorySeriesSection />
      <InsightSpotlight />
      <ProblemSection />
      <SolutionSection />
      <ComparisonSection />
      <AIWorkflowShowcase />
      <ResultsSection />
      <DashboardShowcase />
      <OfferSection />
      <MidPageCtaSection />
      <PlansSection />
      <ConsultantProfileSection />
      <SecurityPrivacySection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingContactButton />
    </div>
  );
};

export default Index;
