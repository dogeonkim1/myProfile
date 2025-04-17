'use client'

import FadeInSection from "@/components/FadeInSection";
import Hero from "@/components/Hero";
import SocialSidebar from "@/components/SocialSidebar";
import SkillsSection from "@/components/SkillsSection";
import CardSection from "@/components/CardSection";
// import useSectionScroll from "@/components/useSectionScroll";
import ShowCode from "@/components/ShowCode";

export default function Home() {
    // useSectionScroll(1000);

    return (
        <main className="overflow-y-auto font-sans">
            <section className="min-h-screen px-4 max-w-[1000px] mx-auto relative">
                <SocialSidebar />
                <Hero />
            </section>

            <section className="min-h-screen px-4 max-w-[1000px] mx-auto relative">
                <FadeInSection>
                    <div className="mb-0">
                        <SkillsSection />
                    </div>
                </FadeInSection>
            </section>

            <section className="min-h-screen px-4 max-w-[1000px] mx-auto relative">
                <FadeInSection>
                    <div className="mb-8">
                        <CardSection />
                    </div>
                </FadeInSection>
            </section>

            <section className="min-h-screen px-4 max-w-[1000px] mx-auto relative">
                <FadeInSection>
                    <div className="mb-8">
                        <ShowCode />
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="mb-8">
                        <strong>여기 아래는 푸터가 들어갈 예정</strong>
                    </div>
                </FadeInSection>
            </section>
        </main>
    );
}
