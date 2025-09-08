import React from "react";
import HeaderSticky from "./HeaderSticky.jsx";
import Hero from "./Hero.jsx";
import ServicesSection from "../sections/ServicesSection.jsx";
import CaseStudiesSection from "../sections/CaseStudiesSection.jsx";

export default function PageWithScrollSections() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
      <HeaderSticky />
      <main className="flex-1 overflow-y-auto snap-y snap-mandatory h-screen">
        <section id="hero" className="snap-start py-10 flex items-center">
          <Hero />
        </section>

        <section id="services" className="snap-start py-12 flex items-center justify-center px-6">
          <ServicesSection />
        </section>

        <section id="case-studies" className="snap-start py-12 flex items-center justify-center px-6">
          <CaseStudiesSection />
        </section>
      </main>
    </div>
  );
}


