import FadeInSection from "@/components/FadeInSection";
import Hero from "@/components/Hero";
import SocialSidebar from "@/components/SocialSidebar";
import SkillsSection from "@/components/SkillsSection";
import CardSection from "@/components/CardSection";

export default function Home() {
  return (
    <main className="px-4 max-w-[1000px] mx-auto relative">
        <SocialSidebar />
        <Hero/>
          {/*이 후 내용들 예:ImageSlideIn 컴포넌트들*/}
        <FadeInSection>
            <div className="mb-0">
                <SkillsSection />
            </div>
        </FadeInSection>
        <FadeInSection>
            <CardSection />
        </FadeInSection>

    </main>
  );
}
