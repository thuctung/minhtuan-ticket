"use client";

import { Banner } from "./components/banner";
import { ExperiencesSection } from "./components/ExperiencesSection";
import AffiliateIntro from "./components/CollaboratorSection";
import Faq from "./components/FaqSection";

export default function HomePage() {
  return (
    <div className="bg-white text-neutral-900 antialiased font-sans selection:bg-blue-500 selection:text-white">
      <Banner />
      <ExperiencesSection />
      <AffiliateIntro />
      <Faq />
    </div>
  );
}
