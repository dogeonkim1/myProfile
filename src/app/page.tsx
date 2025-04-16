import FadeInSection from "@/components/FadeInSection";
import Hero from "@/components/Hero";
import SocialSidebar from "@/components/SocialSidebar";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="px-4 max-w-[1000px] mx-auto relative">
        <SocialSidebar />
        {/*</Hero>*/}
        <Hero/>
          {/*이 후 내용들 예:ImageSlideIn 컴포넌트들*/}
        <FadeInSection className="mt-24">
            <SkillsSection />
        </FadeInSection>
        <FadeInSection>
            <p className="text-xl mt-6 leading-relaxed ">
                Ca c'est test
            </p>
        </FadeInSection>
        <FadeInSection>
            <p className="text-xl mt-6 leading-relaxed">
                Ca c'est test
            </p>
        </FadeInSection>
        <FadeInSection>
            <p className="text-xl mt-6 leading-relaxed">
                Ca c'est test
            </p>
        </FadeInSection>
        <FadeInSection>
            <p className="text-xl mt-6 leading-relaxed">
                Ca c'est test
            </p>
        </FadeInSection>
        <FadeInSection>
            <p className="text-xl mt-6 leading-relaxed">
                Ca c'est test
            </p>
        </FadeInSection>
        <FadeInSection>
            <p className="text-xl mt-6 leading-relaxed">
                Ca c'est test~
            </p>
        </FadeInSection>
        <FadeInSection>
            <p className="text-xl mt-6 leading-relaxed">
                Ca c'est test
            </p>
        </FadeInSection>
        <FadeInSection>
            <p className="text-xl mt-6 leading-relaxed">
                Ca c'est test
            </p>
        </FadeInSection>

    </main>
  );
}
