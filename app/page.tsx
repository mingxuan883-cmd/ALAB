import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProductCardsSection from "@/components/ProductCardsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import IngredientsGrid from "@/components/IngredientsGrid";
import Testimonials from "@/components/Testimonials";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "60px" }}>
        <HeroSection />
        <TrustBar />
        <ProductCardsSection />
        <HowItWorksSection />
        <FeaturesSection />
        <IngredientsGrid />
        <Testimonials />
        <CommunitySection />
        <Footer />
    </main>
    </>
  );
}