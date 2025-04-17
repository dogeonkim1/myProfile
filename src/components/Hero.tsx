"use client";

import { motion } from "framer-motion";
import { memo, MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";

type ImageItem = {
  src: string;
  title: string;
  paragraphs: string[];
};

const images: ImageItem[] = [
  {
    src: "/turtle.jpg",
    title: "🌱생명에 대한 애정으로 시작된 배움",
    paragraphs: [
      "어린 시절부터 수중 생물, 특히 거북이를 돌보는 것이 나의 오랜 취미였습니다.",
      "단순히 키우는 것을 넘어서, 이 작은 생명들이 어떻게 하면 건강하고 안정된 환경에서 자랄 수 있을지 늘 고민해왔습니다.",
      "물의 온도, 수질, 먹이의 질 하나하나에 주의를 기울이며, 최상의 컨디션을 유지할 수 있도록 세심하게 관찰하고 꾸준히 관리해왔습니다.",
      "이 과정은 생명에 대한 책임감을 배우는 동시에, 끈기와 세밀한 관찰력, 환경에 대한 민감한 감수성을 키우는 시간이었습니다.",
      "지금도 저는 어떤 일이든 생명을 대하듯 신중하고 정성스럽게 접근하려고 합니다.",
    ],
  },
  {
    src: "/movie.jpg",
    title: "🎬영화 속에서 배우는 교훈과 감정의 성장",
    paragraphs: [
      "영화는 단순히 오락적인 요소를 넘어, 각기 다른 인물들의 삶을 들여다보며 교훈을 얻는 시간이었습니다.",
      "주인공이 고난을 겪고 이를 극복하는 과정은 저에게 끈기와 인내의 중요성을 깨닫게 해주었습니다.",
      "또한, 그들이 겪는 감정의 변화나 갈등 해소 방법을 통해 감성적인 성장을 경험했습니다.",
      "이러한 경험들은 현실에서도 더 큰 결단을 내릴 수 있게 도움을 주었고, 어려운 상황에서 감정적으로 더 단단해질 수 있는 원동력이 되었습니다.",
    ],
  },
  {
    src: "/travel.jpg",
    title: "✈️미래에 대한 태도, 여행에서 길을 얻다.",
    paragraphs: [
      "여행은 저의 삶과 일에 있어서도 커다란 자양분이 됩니다.",
      "누구를 만나든 그 사람의 배경을 존중하고, 다양한 시각을 유연하게 받아들이는 태도는 협업이나 커뮤니케이션에서 강점이 됩니다.",
      "또한, 예측할 수 없는 상황 속에서 유연하게 대처하는 여행자의 태도는 제가 어떤 문제에 직면해도 침착하고 전략적으로 접근할 수 있게 도와줍니다.",
      "여행은 결국 ‘사람을 배우는 시간’이었습니다. 그 만남 속에서 저는 단단해졌고, 동시에 유연해졌습니다. 그래서 저는 앞으로도 더 많은 사람을 만나고, 더 넓은 삶을 배우기 위해 계속해서 낯선 곳으로 향할 것입니다.",
    ],
  },
];
const tmiSlides = [
  {
    src: "/tmi1.jpg",
    title: "👾픽셀 너머의 철학, Invader를 좇다",
    paragraphs: [
      "파리에서 생활하던 때, 몇 건물에 그려져있는 그림을 본 적이 있습니다. 누군가는 낙서로 지나쳤겠지만, 저는 그 안에서 묘한 예술적 울림을 느꼈습니다.",
      "알아보니 'Invader'라는 작품이었고, 그는 전 세계를 무대로 픽셀 아트를 설치하며 도시를 ‘게임화’하고 있었습니다.",
      "이후부터는 새로운 장소에 갈 때마다 Invader 작품을 찾는 게 저만의 작은 퀘스트가 되었습니다. 매일 걷는 길, 또는 새로운 길을 다니면서 평소에 보는것이 아닌 새로운 것을 보려 노력했습니다.",
      "세상을 바라보는 시선을 바꾸고 항상 보는것들이 아닌 새로운것을 찾으려하다보니 그동안 당연한 것에, 또 익숙한것에 안일해있다는것을 깨달았습니다.",
      "이런 시선은 일상에서도 발휘됩니다. 평범한 풍경 속에서도 재미와 창의성을 발견하려는 감각은, 제가 어떤 작업을 할 때에도 ‘틀 밖에서 생각하는 힘’으로 이어집니다.",
    ],
  },
  {
    src: "/tmi2.jpg",
    title: "🎮게임 그 이상, 전략과 팀워크를 배운 리그오브레전드",
    paragraphs: [
      "스무 살, 저는 전국 대학생 리그오브레전드 대회에 참가했습니다. 단순한 게임이 아니라, 진지한 경쟁의 장이었고, 우리는 32강부터 시작해 결국 준우승이라는 값진 결과를 만들었습니다.",
      "이 대회는 저에게 ‘경쟁’에 대한 개념을 완전히 바꿔 놓았습니다. 매 경기마다 전략을 짜고, 상대 팀의 플레이 스타일을 분석하며, 그에 맞게 전술을 조정해 나가는 과정은 마치 체스와도 같았습니다.",
      "무엇보다 중요한 건 팀워크였습니다. 아무리 개인 역량이 뛰어나도, 팀 간의 소통이 없으면 승리를 만들 수 없다는 사실을 뼈저리게 배웠습니다.",
      "승패를 떠나, 그 순간들 속에서 저는 책임감과 집중력, 그리고 빠르게 판단하고 행동하는 결단력을 키웠습니다. 이 경험은 지금 제가 어떤 프로젝트를 하든, 그 속에 전략적으로 사고하고 팀을 조율하는 힘으로 이어지고 있습니다.",
      "게임은 제게 단순한 취미가 아닌, ‘사람과 시스템을 이해하고 소통하는 훈련장’이었습니다.",
    ],
  },
  {
    src: "/tmi3.jpg",
    title: "💌언어를 넘어 진심을 나눈 순간",
    paragraphs: [
      "파리의 한식당에서 일하던 어느 날, 식사를 마친 프랑스 아이들이 다가와 ‘잘 먹었습니다!’라는 한국어 문장을 조심스럽게 따라 읽으며 이 손편지를 건넸습니다.",
      "그 아이는 제가 서빙할 때 무언가 특별함을 느꼈던 것 같았습니다. 낯선 언어임에도 불구하고 저를 위해 직접 한국어로 마음을 표현해주려는 그 순수한 노력은 말로 다 표현할 수 없는 감동이었습니다.",
      "이 경험은 ‘진심은 언어를 초월한다’는 사실을 몸소 깨닫게 해주었고, 제가 하고 있는 일의 가치를 다시금 되새기게 만들었습니다.",
      "한식이란 문화적 매개체를 통해 사람들과 따뜻한 소통을 나눌 수 있다는 것, 그리고 그 속에서 누군가의 기억에 좋은 사람으로 남을 수 있다는 건 제가 일을 대하는 태도를 바꾸어놓았습니다.",
      "그 이후로 저는 어떤 역할을 맡든, 그 속에서 누군가에게 따뜻함을 전할 수 있는 사람이 되고자 다짐하게 되었습니다.",
    ],
  },
];

function Hero() {
  const fullText = "안녕녕하세요. FE개발자를 꿈꾸는 김도건입니다.";
  const textArray = fullText.split("");
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isTmiModalOpen, setIsTmiModalOpen] = useState(false);
  const [tmiSlide, setTmiSlide] = useState(0);
  const [tmiDirection, setTmiDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < textArray.length) {
        setDisplayedText((prev) => prev + (textArray[indexRef.current] ?? ""));
        indexRef.current += 1;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isModalOpen || isTmiModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    //cleanup(언마운트되거나 닫힐 때 복구)
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen, isTmiModalOpen]);

  //슬라이드 함수
  const moveSlide = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const carry = Number(e.currentTarget.dataset.dst);
    if (e.currentTarget.value === "hobby") {
      setDirection(carry);
      setCurrentSlide((prev) => (prev + carry + images.length) % images.length);
    } else {
      setTmiDirection(carry);
      setTmiSlide((prev) => (prev + carry + tmiSlides.length) % tmiSlides.length);
    }
  }, []);

  const handleModalOpen = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.value === "hobby") {
      setIsModalOpen(true);
    } else {
      setIsTmiModalOpen(true);
    }
  }, []);

  //이미지 애니메이션 설정
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden">
      {/* 프로필 이미지 */}
      <motion.img
        src="profileimg.jpg"
        alt="프로필 이미지"
        className="w-60 h-60 rounded-xl shadow-lg mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* 소개글 */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        {displayedText}
      </motion.p>

      <motion.p
        className="text-lg md:text-xl text-gray-300 mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        Name : 김도건
        <br />
        Birth : 97.07.02
        <br />
        Major : Aerospace Dynamic
        <br />
      </motion.p>

      {/* 버튼 */}
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          onClick={handleModalOpen}
          value={"hobby"}
        >
          Hobby
        </button>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          onClick={handleModalOpen}
          value={"tmi"}
        >
          TMI
        </button>
      </motion.div>

      {/* 모달 */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setIsModalOpen(false)} //바깥 클릭 시 닫힘
        >
          <div
            className="relative bg-white p-6 rounded-xl max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()} //내부 클릭 시 닫기 방지
          >
            {/* 슬라이더 */}
            <div className="relative flex items-center justify-center mb-4 h-[300px]">
              <button
                onClick={moveSlide}
                className="absolute left-0 p-2 text-gray-600 hover:text-black z-10"
                value={"hobby"}
                data-dst={-1}
              >
                <FaArrowLeft size={20} />
              </button>

              <div className="w-full h-[300px] flex justify-center items-center overflow-hidden relative">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.img
                    key={`${currentSlide}-${images[currentSlide].src}`}
                    src={images[currentSlide].src}
                    alt={`슬라이드 ${currentSlide + 1}`}
                    className="max-h-[300px] w-auto object-contain rounded-lg absolute"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                  />
                </AnimatePresence>
              </div>
              <button
                onClick={moveSlide}
                className="absolute right-0 p-2 text-gray-600 hover:text-black z-10"
                value={"hobby"}
                data-dst={1}
              >
                <FaArrowRight size={20} />
              </button>
            </div>

            {/* 설명 텍스트 */}
            <div className="text-center text-gray-700 mb-4">
              <h2 className="text-xl font-bold mb-4">{images[currentSlide].title}</h2>
              {images[currentSlide].paragraphs.map((para, index) => (
                <p key={index} className="mb-2">
                  {para}
                </p>
              ))}
            </div>

            {/* Exit 버튼 */}
            <div className="flex justify-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}

      {isTmiModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setIsTmiModalOpen(false)}
        >
          <div
            className="relative bg-white p-6 rounded-xl max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/*슬라이더*/}
            <div className="relative flex items-center justify-center mb-4 h-[300px]">
              <button
                onClick={moveSlide}
                className="absolute left-0 p-2 text-gray-600 hover:text-black z-10"
                value={"tmi"}
                data-dst={-1}
              >
                <FaArrowLeft size={20} />
              </button>

              <div className="w-full h-[300px] flex justify-center items-center overflow-hidden relative">
                <AnimatePresence custom={tmiDirection} mode="wait">
                  <motion.img
                    key={`${tmiSlide}-${tmiSlides[tmiSlide].src}`}
                    src={tmiSlides[tmiSlide].src}
                    alt={`슬라이드 ${tmiSlide + 1}`}
                    className="max-h-[300px] w-auto object-contain rounded-lg absolute"
                    custom={tmiDirection}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                  />
                </AnimatePresence>
              </div>

              <button
                onClick={moveSlide}
                className="absolute right-0 p-2 text-gray-600 hover:text-black z-10"
                value={"tmi"}
                data-dst={1}
              >
                <FaArrowRight size={20} />
              </button>
            </div>

            {/*설명 텍스트*/}
            <div className="text-center text-gray-700 mb-4">
              <h2 className="text-xl font-bold mb-4">{tmiSlides[tmiSlide].title}</h2>
              {tmiSlides[tmiSlide].paragraphs.map((para, index) => (
                <p key={index} className="mb-2">
                  {para}
                </p>
              ))}
            </div>

            {/*Exit 버튼*/}
            <div className="flex justify-center">
              <button
                onClick={() => setIsTmiModalOpen(false)}
                className="px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
export default memo(Hero);
