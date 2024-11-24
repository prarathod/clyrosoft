import CTASection from "../components/CTASection";
import ServiceFeatures from "../components/Services/FeaturesSection";
import RecentWork from "../components/Services/RecentWorks";
import Testimonial from "../components/Services/Testimonial";

const page = () => {
  return (
    <>
      <ServiceFeatures />
      <Testimonial />
      <RecentWork/>
      <CTASection/>
    </>
  );
};

export default page;
