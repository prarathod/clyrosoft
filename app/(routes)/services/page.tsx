import CTASection from "app/components/CTASection";
import ServiceFeatures from "app/components/Services/FeaturesSection";
import RecentWork from "app/components/Services/RecentWorks";
import TestimonialCarousel from "app/components/Services/Testimonial";

const page = () => {
  return (
    <>
      <ServiceFeatures />
      <TestimonialCarousel />
      <RecentWork />
      <CTASection />
    </>
  );
};

export default page;
