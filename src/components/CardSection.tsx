"use client";

import {memo, useEffect, useState} from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const cardData = [
  {
    title: "In paris",
    bgColor: "bg-green-900",
    labelColor: "bg-green-400",
    text: "19.09.26 ~ 22.07.17",
    image: "/parismain.jpg",
    modalContent:(
        <>
          <h3 className="text-lg font-semibold mb-2">새로운 시작과 첫 도전</h3>
          <p>2019년 9월, 항공정비사의 꿈을 안고 프랑스로 유학을 떠났습니다.<br/> 아무것도 모른 채 그저
              막연한 꿈 하나만 가지고 시작한 유학생활이었고, 모든게 낯설었지만 그만큼 설렘도 컸습니다.
              운 좋게 좋은 사람들과 인연을 맺고, 다양한 문화와 환경을 경험하면서 앞으로 모든 일이 잘 풀릴 것
              같다는 기대감이 생겼습니다.</p>

          <p>하지만 11월, 파리의 대규모 교통 파업, 전 세계를 멈춰 세운 코로나 팬데믹은 수업을 중단시키고
              바깥 출입또한 자유롭게 하지 못하게 했습니다. 그저 가만히 시간을 흘려보낼 순 없어, 불어 공부를 하며
              그때 처음 코딩이라는 새로운 분야를 접하게 되었습니다.</p>

          <p>당시엔 부모님의 경제적 도움 없이 모든 생활과 학업을 혼자서 해결하고 있었습니다.
              누구에게도 기대지 않고, 온전히 내 힘으로 버텨낸 시간이었고 그것이 저에겐 큰 자부심이 되었습니다.
              혼자서 해외에서 살아가고 있다는 사실 하나만으로도 스스로를 인정하게되는 시간이었습니다.</p>

            <p>물론 항공정비사의 꿈은 내려놓게 되었습니다. 하지만 그 과정을 통해 '무엇을 할 수 있고, 어떤 걸 잘할 수 있을까?'
              라는 고민을 하게되었으며, 좌절이나 실패라고 생각하기보다는, 내 삶을 다시 설계할 수 있는 기회로 받아들여졌습니다.
              그렇게 코딩이라는 새로운 분야에 뛰어들게 되었습니다.
          </p>
        </>
    ),
  },
    {
        title: "My Certification",
        bgColor: "bg-sky-200",
        labelColor: "bg-sky-300",
        text: "20.12.20 ~ 21.04.30",
        image: "/certification1.png",
        modalContent:(
            <>
                <h3 className="text-lg font-semibold mb-2">처음 만난 코드, 반복으로 쌓아올린 성취</h3>
                <p>2020년 12월쯤, 반년 정도 한국에 머물렀습니다.
                    프랑스에서 처음 접한 코딩을 더 깊게 공부해보고 싶었고, 다시 프랑스로 돌아가기 위한 준비도 필요했습니다.
                    프랑스로 돌아가기 위한 돈을 모으기 위해 하루 10시간씩 아르바이트를 하면서도, 마음속엔 코딩 공부에 대한 갈증이 계속 남아있었습니다.
                    그러던 중 ‘웹디자인기능사’라는 자격증을 알게 되었습니다.</p>

                    <p>이 자격증이 내가 목표로 하는 분야와 관련되어 있었고, 나 자신에게 도전이 될 수 있을 거란 생각이 들었습니다.
                    그때부터 일하는 시간과 자는 시간을 제외한 모든 시간을 공부에 쏟아부었습니다.</p>

                        <p>필기시험은 무난히 통과했지만, 실기시험은 만만치 않았습니다.
                    직접 HTML과 CSS, Javascript를 이용해 홈페이지를 구현해야 했는데, 코딩 경험이 거의 없던 저에게는 꽤 높은 벽이었습니다.
                    실기 시험에 출제되는 총 16개의 예제가 있었는데, 고민 끝에 그걸 다 외워버리는 방식을 선택했습니다.</p>

                            <p>단순히 이해하고 넘어가는 게 아니라, 코드 한 줄 한 줄을 통으로 외웠고, 반복해서 손에 익히는 데 집중했습니다.
                    결국 첫 번째 시도에서 자격증을 취득할 수 있었습니다.
                    머리보단 끈기와 반복으로 버틴 결과였고, 그 경험은 이후 어떤 기술을 배울 때든 큰 자신감이 되었습니다.</p>
            </>
        ),
    },
  {
    title: "In Yonsei",
    bgColor: "bg-zinc-800",
    labelColor: "bg-yellow-400",
    text: "22.09.30 ~ 24.08.29",
    image: "/yonsei1.jpg",
    modalContent:(
        <>
          <h3 className="text-lg font-semibold mb-2">현장에서 배운 성장의 언어</h3>
          <p>연세대학교에서의 2년은 나에게 단순한 ‘근무 경험’ 그 이상이었습니다.
              웹디자인기능사 자격증을 취득한 후, 그 기반을 바탕으로 실무 경험을 쌓고 싶었습니다.
              그러던 중 운 좋게 연세대학교 정보전략팀에서 일할 수 있는 기회가 생겼고, 그곳에서 약 2년간 근무하게 되었습니다.</p>

          <p>처음에는 내가 가지고 있는 자격증과 그동안의 학습이 어느 정도 실무에 적용될 수 있을 거라 생각했지만,
              실제 업무는 생각보다 훨씬 더 복잡하고, 더 넓은 시야를 요구했습니다.
              단순히 코드를 짜는 것뿐만 아니라, 팀과의 커뮤니케이션, 기획 문서를 이해하는 능력, 사용자의 니즈를 분석하는 시선,
              유지보수에 대한 고려, 여러 기술 스택 간의 상호작용 등 내가 미처 생각지 못했던 요소들이 업무 전반에 걸쳐 있었습니다.</p>

          <p>그 과정에서 나의 부족함을 뼈저리게 느끼게 되었습니다.
              책이나 강의로 익힌 것만으로는 채워지지 않는 실무적 감각과 종합적인 사고가 필요하다는 걸 절실히 깨달았습니다.
              때로는 내가 틀린 방식으로 문제를 접근했다는 걸 뒤늦게 깨달은 적도 있었고, 실수도 적지 않았습니다.
              하지만 그럴 때마다 함께 일하던 상사와 선배들이 방향을 잡아주었고,
              단지 결과만을 바라보지 않고 내가 과정을 이해하며 성장할 수 있도록 기다려주었습니다.</p>

            <p>이 기간 동안의 가장 큰 수확은 단순한 기술 습득이 아니었습니다.
              나는 내가 얼마나 더 배워야 하는지, 어떤 방식으로 배워야 하는지를 체감했고, 단기적인 완성보다 장기적인
              성장에 집중하는 태도를 배우게 되었습니다. 또한 프로젝트가 진행되는 흐름을 이해하고,
              협업을 통해 어떤 식으로 결과물이 완성되는지를 실질적으로 경험했습니다.
              개발자로서의 초석을 다지는 데 있어 연세대학교에서의 경험은 무엇과도 바꿀 수 없는 중요한 시간이었습니다.</p>
        </>
    ),
  },
  {
    title: "In LGU+",
    bgColor: "bg-purple-800",
    labelColor: "bg-purple-400",
    text: "25.01.20 ~ 25.08.12",
    image: "/ureca.jpg",
    modalContent:(
        <>
          <h3 className="text-lg font-semibold mb-2">주도적인 개발자로 향하는 리빌딩의 시간</h3>
          <p>퇴사를 한 뒤, 실무에서 느꼈던 부족한 역량을 채우기 위해 진지하게 학습의 방향을 모색하였습니다.
              단순히 혼자 공부하는 데서 그치지 않고, 체계적인 커리큘럼과 실전 중심의 교육을 받을 수 있는
              환경이 필요하다고 판단하여 국비지원 교육기관을 찾아보게 되었습니다.</p>

              <p>그 과정에서 LG U+와 고용노동부가 협력하여 운영하는 ‘유레카 과정’이 눈에 들어왔습니다.
              이 과정은 단순히 교육만 제공하는 것이 아닌, 실제 기업에서 필요로 하는 실무 중심의 프로젝트 경험과
              협업 역량을 강화할 수 있는 점에서 큰 매력을 느꼈습니다.
              입과를 위해 서류 전형, 온라인 적성검사, 그리고 면접 과정을 순차적으로 통과하였고,
              최종적으로 수강생으로 선발되어 현재 교육을 받고 있습니다.</p>

                  <p>유레카 과정에서는 단순한 기술 습득을 넘어, 팀 프로젝트를 통해 새로운 사람들과의 협업 방식을 배우고 있습니다.
              각자 다른 배경과 경험을 가진 팀원들과 함께 기획, 개발, 피드백, 개선을 반복하는 과정을 통해
              실제 현업에서의 업무 흐름을 간접적으로 체험하고 있으며, 기술적인 측면에서도 프론트엔드와
              백엔드의 전반적인 흐름을 고르게 익히고 있습니다.</p>

                      <p>현재까지의 경험을 통해 단순한 기술자가 아닌 문제 해결형 개발자로 성장하는 데 필요한 기반을 다지고 있으며,
              실무에서 다시 뛰어들었을 때 보다 주도적이고 전략적인 자세로 프로젝트를 이끌 수 있는 자신감을 조금씩 쌓아가고 있습니다.</p>
        </>
    ),
  },
];


function InfoCards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        // 모달이 열려 있을 때 body 스크롤 방지
        if (openIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // 컴포넌트 언마운트 시 복구
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openIndex]);


    return (
    <section className="mt-35 px-4">
      {/*section title*/}
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-gray-800"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
          “도전에서 성장으로, 주도적인 개발자로 리빌딩한 여정”
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10 px-4">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className={`relative aspect-square rounded-3xl p-4 flex flex-col justify-between shadow-md text-white ${card.bgColor}`}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              className={`absolute -top-6 left-6 px-4 py-1 rounded-full text-black font-semibold ${card.labelColor}`}
            >
              {card.title}
            </div>
            <div className="flex-grow flex items-center justify-center py-6">
              <Image
                src={card.image}
                alt={card.title}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

            <div className="text-sm leading-relaxed mt-4">{card.text}</div>

            <button
              onClick={() => setOpenIndex(index)}
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center absolute -bottom-5 right-4"
            >
              <FaArrowRight />
            </button>
          </motion.div>
        ))}

        {/*Modal*/}
        <AnimatePresence>
          {openIndex !== null && (
            <motion.div
              key={openIndex}
              className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenIndex(null)}
            >
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg w-[90%] max-w-xl text-black relative overflow-y-auto max-h-[80vh]"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-black"
                  onClick={() => setOpenIndex(null)}
                >
                  닫기
                </button>
                <h2 className="text-xl font-bold mb-4">{cardData[openIndex].title}</h2>
                <div>{cardData[openIndex].modalContent}</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
export default memo(InfoCards);
