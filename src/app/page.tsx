"use client";

import FadeInSection from "@/components/common/FadeInSection";
import Hero from "@/components/Hero";
import SocialSidebar from "@/components/SocialSidebar";
import SkillsSection from "@/components/SkillsSection";
import CardSection from "@/components/CardSection";
import { memo } from "react";
// import useSectionScroll from "@/components/useSectionScroll";
import ShowCode from "@/components/ShowCode";

function Home() {
  // useSectionScroll(1000);

  return (
    <main className="overflow-y-auto font-sans">
      <section className="min-h-screen px-4 max-w-[1000px] mx-auto relative mb-6">
        <SocialSidebar />
        <Hero />
      </section>

      <section className="min-h-screen px-4 max-w-[1000px] mx-auto relative mb-4">
        <FadeInSection>
          <div className="mb-0">
            <SkillsSection />
          </div>
        </FadeInSection>
      </section>

      <section className="px-4 max-w-[1000px] mx-auto relative mb-4">
        <FadeInSection>
          <div className="mb-4">
            <CardSection />
          </div>
        </FadeInSection>
      </section>

      <section className="px-4 max-w-[1000px] mx-auto relative mb-4 -mt-2">
        <FadeInSection>
          <div className="mb-4">
            <ShowCode />
          </div>
        </FadeInSection>
      </section>
    </main>
  );
}
export default memo(Home);
