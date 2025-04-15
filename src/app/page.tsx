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
        <FadeInSection>
            <SkillsSection />
        </FadeInSection>
        <FadeInSection>
            <p className="text-xl mt-6 leading-relaxed">
                동찬아 훈련 잘 받고 혹시 불침번도 서니?? 진짜 극혐이다~
            </p>
        </FadeInSection>
        <FadeInSection>
            <p className="text-xl mt-6 leading-relaxed">
                동찬아 훈련 잘 받고 혹시 불침번도 서니?? 진짜 극혐이다~
            </p>
        </FadeInSection>
        <FadeInSection>
            <p className="text-xl mt-6 leading-relaxed">
                동찬아 훈련 잘 받고 혹시 불침번도 서니?? 진짜 극혐이다~
            </p>
        </FadeInSection>
        <FadeInSection>
            <p className="text-xl mt-6 leading-relaxed">
                동찬아 훈련 잘 받고 혹시 불침번도 서니?? 진짜 극혐이다~
            </p>
        </FadeInSection>
        <FadeInSection>
            <p className="text-xl mt-6 leading-relaxed">
                동찬아 훈련 잘 받고 혹시 불침번도 서니?? 진짜 극혐이다~
            </p>
        </FadeInSection>
        <FadeInSection>
            <p className="text-xl mt-6 leading-relaxed">
                동찬아 훈련 잘 받고 혹시 불침번도 서니?? 진짜 극혐이다~
            </p>
        </FadeInSection>
        <FadeInSection>
            <p className="text-xl mt-6 leading-relaxed">
                동찬아 훈련 잘 받고 혹시 불침번도 서니?? 진짜 극혐이다~
            </p>
        </FadeInSection>
        <FadeInSection>
            <img
                src="dongchan.png"
                alt="profile"
                className="rounded-xl shadow-lg w-full h-auto"
            />
        </FadeInSection>
        <FadeInSection>
            <p className="text-xl mt-6 leading-relaxed">
                동찬아 훈련 잘 받고 혹시 불침번도 서니?? 진짜 극혐이다~
            </p>
        </FadeInSection>

    </main>
  );
}
