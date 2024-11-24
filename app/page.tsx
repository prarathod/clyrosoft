import CTASection from "./components/CTASection";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/PlatformFeatureSection";

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <FeatureSection />
        <CTASection />
      </div>
    </>
  );
}
