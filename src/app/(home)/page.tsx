// import Navbar from "./Navbar";
"use client";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function HomeApp() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-100">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
