import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-[350px] w-[80%] max-w-[1200px] bg-[#1e293b] text-white text-center p-10 rounded-lg mx-auto mt-[30px]">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <h1 className="text-4xl font-bold mb-4 z-10">
        Let&apos;s build your website today!
      </h1>
      <p className="text-lg mb-6 z-10">
        Contact us and we will get back within 24 hours. We mean it. You saw the
        testimonials, right?
      </p>
      <Button
        variant="default"
        className="border border-gray-300 bg-[#1e293b] text-white px-4 py-2 z-10 transition-colors duration-200 ease-in-out hover:bg-white hover:text-[#1e293b]"
      >
        Contact Us
      </Button>
    </section>
  );
};

export default HeroSection;
