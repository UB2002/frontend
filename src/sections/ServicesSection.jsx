import React from "react";
import FeatureCard from "../components/FeatureCard.jsx";

export default function ServicesSection() {
  return (
    <div className="max-w-6xl mx-auto w-full">
      <div className="py-24">
        <h2 className="text-3xl font-bold mb-4">Services</h2>
        <p className="text-gray-600 max-w-2xl mb-8">
          A short overview of services we offer. Replace these cards with real content.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Product Design" desc="User research, interaction design & visual systems." />
          <FeatureCard title="Web Development" desc="Fast, accessible and resilient web apps." />
          <FeatureCard title="Branding" desc="Positioning, identity and visual language." />
        </div>
      </div>
    </div>
  );
}


