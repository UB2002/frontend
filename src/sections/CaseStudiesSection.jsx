import React from "react";
import StudyCard from "../components/StudyCard.jsx";

export default function CaseStudiesSection() {
  return (
    <div className="max-w-6xl mx-auto w-full">
      <div className="py-24">
        <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
        <p className="text-gray-600 max-w-2xl mb-8">
          Preview a few projects — click through to full case studies (replace with real links).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StudyCard title="Brand redesign" tag="UI/UX" />
          <StudyCard title="Marketplace app" tag="Product" />
        </div>
      </div>
    </div>
  );
}


