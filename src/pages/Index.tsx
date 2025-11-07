import HeroSection from "@/components/HeroSection";
import InsightSpotlight from "@/components/InsightSpotlight";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import AIWorkflowShowcase from "@/components/AIWorkflowShowcase";
import ResultsSection from "@/components/ResultsSection";
import OfferSection from "@/components/OfferSection";
import ComparisonSection from "@/components/ComparisonSection";
import SecurityPrivacySection from "@/components/SecurityPrivacySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import StructuredData from "@/components/StructuredData";
import useInteractiveCtaFeedback from "@/hooks/useInteractiveCtaFeedback";
import useFadeInSections from "@/hooks/useFadeInSections";

const Index = () => {
  useInteractiveCtaFeedback();
  useFadeInSections();

  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas text-foreground">
      <StructuredData />
      <HeroSection />
      <InsightSpotlight />
      <ProblemSection />
      <SolutionSection />
      <AIWorkflowShowcase />
      <ResultsSection />
      <OfferSection />
      <ComparisonSection />
      <SecurityPrivacySection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingContactButton />
    </div>
  );
};

export default Index;
