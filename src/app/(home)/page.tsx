"use client";
import HeroSection from "../../components/home/HeroSection";

import Navbar from "../../components/common/navbar/Navbar";
import Footer from "@/components/common/footer/Footer";

export default function HomeApp() {
  return (
    <main className="flex-grow bg-gray-100">
      <HeroSection />
    </main>
  );
}
