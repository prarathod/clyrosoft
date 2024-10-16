"use client";
import HeroSection from "../../components/home/HeroSection";
import Footer from "./Footer";
import Navbar from "../../components/common/navbar/Navbar";

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
