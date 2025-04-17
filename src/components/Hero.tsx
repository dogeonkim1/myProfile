"use client";

import { motion } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";
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
        src:'/tmi1.jpg',
        title:'',
        paragraphs:[

        ]
    },
    {
        src:'/tmi2.jpg',
        title:'',
        paragraphs:[

        ]
    },
    {
        src:'/tmi3.jpg',
        title:'',
        paragraphs:[

        ]
    },
];


function Hero() {
    const fullText = "안녕녕하세요. FE개발자를 꿈꾸는 김도건입니다.";
    const textArray = fullText.split('');
    const [displayedText, setDisplayedText] = useState('');
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
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    //cleanup(언마운트되거나 닫힐 때 복구)
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  //슬라이드 함수
  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    const nextTmiSlide = () => {
        setTmiDirection(1);
        setTmiSlide((prev) => (prev + 1) % tmiSlides.length);
    };

    const prevTmiSlide = () => {
        setTmiDirection(-1);
        setTmiSlide((prev) => (prev -1 + tmiSlides.length) % tmiSlides.length);
    };

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
                    onClick={() => setIsModalOpen(true)}
                >
                    Hobby
                </button>
                <button
                    className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                    onClick={() => setIsTmiModalOpen(true)}
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
                onClick={prevSlide}
                className="absolute left-0 p-2 text-gray-600 hover:text-black z-10"
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
                onClick={nextSlide}
                className="absolute right-0 p-2 text-gray-600 hover:text-black z-10"
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
                    style={{backgroundColor:'rgba(0,0,0,0.5)'}}
                    onClick={() => setIsTmiModalOpen(false)}
                >
                    <div
                        className="relative bg-white p-6 rounded-xl max-w-2xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/*슬라이더*/}
                        <div className="relative flex items-center justify-center mb-4 h-[300px]">
                            <button
                                onClick={prevTmiSlide}
                                className="absolute left-0 p-2 text-gray-600 hover:text-black z-10"
                            >
                                <FaArrowLeft size={20}/>
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
                                            x:{type: "spring", stiffness:300, damping:30},
                                            opacity:{duration:0.2},
                                        }}
                                    />
                                </AnimatePresence>
                            </div>

                            <button
                                onClick={nextTmiSlide}
                                className="absolute right-0 p-2 text-gray-600 hover:text-black z-10"
                            >
                                <FaArrowRight size={20}/>
                            </button>
                        </div>

                        {/*설명 텍스트*/}
                        <div className="text-center text-gray-700 mb-4">
                            <h2 className="text-xl font-bold mb-4">
                                {tmiSlides[tmiSlide].title}
                            </h2>
                            {tmiSlides[tmiSlide].paragraphs.map((para, index) => (
                                <p key={index} className="mb-2">{para}
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
