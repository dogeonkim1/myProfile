"use client";

import { MouseEvent, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import {motion} from "framer-motion";

const codeSamples: { [key: string]: string } = {
    "Hero.tsx": `'use client'

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

type ImageItem = {
    src: string;
    title: string;
    paragraphs: string[];
};

const images: ImageItem[] = [
    {
        src: '/turtle.jpg',
        title: '🌱생명에 대한 애정으로 시작된 배움',
        paragraphs: [
            "어린 시절부터 수중 생물, 특히 거북이를 돌보는 것이 나의 오랜 취미였습니다.",
            "단순히 키우는 것을 넘어서, 이 작은 생명들이 어떻게 하면 건강하고 안정된 환경에서 자랄 수 있을지 늘 고민해왔습니다.",
            "물의 온도, 수질, 먹이의 질 하나하나에 주의를 기울이며, 최상의 컨디션을 유지할 수 있도록 세심하게 관찰하고 꾸준히 관리해왔습니다.",
            "이 과정은 생명에 대한 책임감을 배우는 동시에, 끈기와 세밀한 관찰력, 환경에 대한 민감한 감수성을 키우는 시간이었습니다.",
            "지금도 저는 어떤 일이든 생명을 대하듯 신중하고 정성스럽게 접근하려고 합니다."
        ]
    },
    {
        src: '/movie.jpg',
        title: '🎬영화 속에서 배우는 교훈과 감정의 성장',
        paragraphs: [
            "영화는 단순히 오락적인 요소를 넘어, 각기 다른 인물들의 삶을 들여다보며 교훈을 얻는 시간이었습니다.",
            "주인공이 고난을 겪고 이를 극복하는 과정은 저에게 끈기와 인내의 중요성을 깨닫게 해주었습니다.",
            "또한, 그들이 겪는 감정의 변화나 갈등 해소 방법을 통해 감성적인 성장을 경험했습니다.",
            "이러한 경험들은 현실에서도 더 큰 결단을 내릴 수 있게 도움을 주었고, 어려운 상황에서 감정적으로 더 단단해질 수 있는 원동력이 되었습니다."
        ]
    },
    {
        src: '/travel.jpg',
        title: '✈️미래에 대한 태도, 여행에서 길을 얻다.',
        paragraphs: [
            "여행은 저의 삶과 일에 있어서도 커다란 자양분이 됩니다.",
            "누구를 만나든 그 사람의 배경을 존중하고, 다양한 시각을 유연하게 받아들이는 태도는 협업이나 커뮤니케이션에서 강점이 됩니다.",
            "또한, 예측할 수 없는 상황 속에서 유연하게 대처하는 여행자의 태도는 제가 어떤 문제에 직면해도 침착하고 전략적으로 접근할 수 있게 도와줍니다.",
            "여행은 결국 ‘사람을 배우는 시간’이었습니다. 그 만남 속에서 저는 단단해졌고, 동시에 유연해졌습니다. 그래서 저는 앞으로도 더 많은 사람을 만나고, 더 넓은 삶을 배우기 위해 계속해서 낯선 곳으로 향할 것입니다."
        ]
    }
];

export default function Hero() {
    const fullText = "안녕녕하세요. FE개발자를 꿈꾸는 김도건입니다.";
    const textArray = fullText.split('');
    const [displayedText, setDisplayedText] = useState('');
    const indexRef = useRef(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (indexRef.current < textArray.length) {
                setDisplayedText(prev => prev + (textArray[indexRef.current] ?? ''));
                indexRef.current += 1;
            } else {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isModalOpen]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

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
            <motion.img
                src="profileimg.jpg"
                alt="프로필 이미지"
                className="w-60 h-60 rounded-xl shadow-lg mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            />

            <motion.p className="text-lg md:text-xl text-gray-700 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}>
                {displayedText}
            </motion.p>

            <motion.p className="text-lg md:text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}>
                Name : 김도건<br />
                Birth : 97.07.02<br />
                Major : Aerospace Dynamic<br />
            </motion.p>

            <motion.div className="flex gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition" onClick={() => setIsModalOpen(true)}>Hobby</button>
                <button className="px-6 py-2 bg-gray-300 text-gray-800 rounded-xl hover:bg-gray-400 transition">버튼 2</button>
            </motion.div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={() => setIsModalOpen(false)}>
                    <div className="relative bg-white p-6 rounded-xl max-w-2xl w-full"
                        onClick={(e) => e.stopPropagation()}>
                        <div className="relative flex items-center justify-center mb-4 h-[300px]">
                            <button onClick={prevSlide} className="absolute left-0 p-2 text-gray-600 hover:text-black z-10">
                                <FaArrowLeft size={20} />
                            </button>
                            <div className="w-full h-[300px] flex justify-center items-center overflow-hidden relative">
                                <AnimatePresence custom={direction} mode="wait">
                                    <motion.img
                                        key={\`\${currentSlide}-\${images[currentSlide].src}\`}
                                        src={images[currentSlide].src}
                                        alt={\`슬라이드 \${currentSlide + 1}\`}
                                        className="max-h-[300px] w-auto object-contain rounded-lg absolute"
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 }
                                        }}
                                    />
                                </AnimatePresence>
                            </div>
                            <button onClick={nextSlide} className="absolute right-0 p-2 text-gray-600 hover:text-black z-10">
                                <FaArrowRight size={20} />
                            </button>
                        </div>
                        <div className="text-center text-gray-700 mb-4">
                            <h2 className="text-xl font-bold mb-4">
                                {images[currentSlide].title}
                            </h2>
                            {images[currentSlide].paragraphs.map((para, index) => (
                                <p key={index} className="mb-2">{para}</p>
                            ))}
                        </div>
                        <div className="flex justify-center">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition">
                                Exit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
`.trim(),
    "CardSection.tsx": `'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

type Card = {
  id: number;
  title: string;
  image: string;
  content: string;
};

const cards: Card[] = [
  {
    id: 1,
    title: '카카오 스타일 카드',
    image: '/card1.jpg',
    content: '이 카드는 귀여운 디자인으로 제작되었습니다.'
  },
  {
    id: 2,
    title: '모던한 UI',
    image: '/card2.jpg',
    content: '모던하고 깔끔한 레이아웃의 예시입니다.'
  },
  {
    id: 3,
    title: '유저 친화적인 인터페이스',
    image: '/card3.jpg',
    content: '직관적인 디자인으로 사용성을 높였습니다.'
  },
  {
    id: 4,
    title: '재미있는 인터랙션',
    image: '/card4.jpg',
    content: '프레이머 모션을 활용한 부드러운 애니메이션'
  },
];

export default function CardSection() {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">💡 프로젝트 카드 소개</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map(card => (
          <motion.div
            key={card.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedCard(card)}
          >
            <img src={card.image} alt={card.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.content}</p>
              <div className="flex justify-end mt-2 text-blue-500">
                <FaArrowRight />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedCard && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
          onClick={() => setSelectedCard(null)}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 max-w-md w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedCard.image} alt={selectedCard.title} className="w-full h-48 object-cover rounded-xl mb-4" />
            <h3 className="text-xl font-bold mb-2">{selectedCard.title}</h3>
            <p className="text-gray-700 mb-4">{selectedCard.content}</p>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => setSelectedCard(null)}
            >
              닫기
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
`.trim(),
    "SkillsSection.tsx": `'use client'

import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiTypescript, SiMysql, SiNextdotjs } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-800" /> },
];

export default function SkillsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">🚀 기술 스택</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-lg font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}`.trim(),
    "SocialSidebar.tsx":`"use client";

import { memo } from "react";
import { FaInstagram, FaPhoneAlt, FaGithub } from "react-icons/fa";

function SocialSidebar() {
  return (
      <div className="sticky top-10 left-5 flex flex-col items-start gap-6 z-50">
          <a
              href="https://www.instagram.com/dogeonni/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
          >
              <FaInstagram className="text-xl text-gray-700 hover:text-pink-500 transition" />
          </a>
          <a href="tel:010-6420-4131" className="inline-flex">
              <FaPhoneAlt className="text-xl text-gray-700 hover:text-green-500 transition" />
          </a>
          <a
              href="https://github.com/dogeonkim1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
          >
              <FaGithub className="text-xl text-gray-700 hover:text-black transition" />
          </a>
      </div>
  );
}

export default memo(SocialSidebar);
`.trim(),
    "HobbyMC.tsx":`"use client";
import { memo } from "react";
import MainModalComponent from "./MainModalComponent";
import { DataType, SpecifiedModalProps } from "@/type/types";

const images: DataType[] = [
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

function HobbyModal({ modalHandler }: SpecifiedModalProps) {
  return <MainModalComponent data={images} modalHandler={modalHandler} value="hobby" />;
}

export default memo(HobbyModal);
`.trim(),
    "FadeInSection.tsx":`"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import useInView from "../hooks/useInView";

function FadeInSection({ children }: { children: React.ReactNode }) {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="my-20"
    >
      {children}
    </motion.div>
  );
}

export default memo(FadeInSection);
`.trim(),
    "AnimatedSC.tsx":`"use client";
import { motion } from "framer-motion";
import { memo } from "react";

function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default memo(AnimatedSection);
`.trim(),
    "TMIModal.tsx":`"use client";

import { memo } from "react";
import MainModalComponent from "./MainModalComponent";
import { DataType, SpecifiedModalProps } from "@/type/types";

const tmiSlides: DataType[] = [
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

function TMIModal({ modalHandler }: SpecifiedModalProps) {
  return <MainModalComponent data={tmiSlides} modalHandler={modalHandler} value="tmi" />;
}

export default memo(TMIModal);
`.trim(),

}

{
    /*---------------------------------------------------------------------------------------------*/
}
export default function ShowCode() {
    const [selectFile, setSelectFile] = useState("Hero.tsx");

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setSelectFile(e.currentTarget.value);
    };

    return (
        <div className="relative w-full fixed inset-0 z-50 bg-zinc-950 overflow-y-auto">
            {/* 제목 */}
            <motion.h2
                className="text-4xl font-extrabold text-zinc-100 text-center px-6 pt-10 mb-10 tracking-tight"
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                “An Inside Look at My Portfolio Code”
            </motion.h2>

            {/* 전체 컨텐츠 */}
            <div className="flex flex-col w-full max-w-7xl mx-auto px-6 pb-16 space-y-6">
                {/* 메뉴 버튼 영역 */}
                <div className="flex justify-center flex-wrap gap-2">
                    {Object.keys(codeSamples).map((file) => (
                        <button
                            key={file}
                            value={file}
                            onClick={handleButtonClick}
                            className={`px-4 py-2 rounded-xl text-sm font-medium shadow-sm transition-all border border-zinc-700 ${
                                selectFile === file
                                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
                                    : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
                            }`}
                        >
                            {file}
                        </button>
                    ))}
                </div>

                {/* 선택된 파일명 */}
                <div className="text-lg font-semibold text-zinc-200 border-b border-zinc-700 pb-2 text-center">
                    {selectFile}
                </div>

                {/* 코드 뷰어 */}
                <div className="bg-zinc-950 rounded-2xl shadow-lg ring-1 ring-zinc-800 p-5 h-[calc(100vh-20rem)] overflow-auto whitespace-pre-wrap break-words">
                    <SyntaxHighlighter
                        language="tsx"
                        style={vscDarkPlus}
                        wrapLines={true}
                        showLineNumbers
                        customStyle={{
                            backgroundColor: "transparent",
                            padding: 0,
                            margin: 0,
                            overflowX: "auto",
                            whiteSpace: "pre-wrap",
                            wordBreak: "break-word",
                        }}
                    >
                        {codeSamples[selectFile]}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
}
