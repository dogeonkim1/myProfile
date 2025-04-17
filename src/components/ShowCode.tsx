'use client';

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeSamples = {
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
}`,
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
}`
};

{/*---------------------------------------------------------------------------------------------*/}
export default function ShowCode() {
    const [selectFile, setSelectFile] = useState<keyof typeof codeSamples>("1.tsx");

    const handleButtonClick = (file: keyof typeof codeSamples) => {
        setSelectFile(file);
    };

    return (
        <div className="flex flex-col lg:flex-row h-screen font-sans">
            {/* 좌측 메뉴 */}
            <aside className="w-full lg:w-1/5 bg-zinc-900 text-white p-6 space-y-4">
                <h2 className="text-2xl font-bold mb-6 border-b border-zinc-700 pb-2">Code Files</h2>
                <div className="flex flex-col space-y-2">
                    {Object.keys(codeSamples).map((file) => (
                        <button
                            key={file}
                            className={`px-4 py-2 rounded-md text-left transition ${
                                selectFile === file
                                    ? "bg-blue-500 text-white"
                                    : "bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                            }`}
                            onClick={() => handleButtonClick(file as keyof typeof codeSamples)}
                        >
                            {file}
                        </button>
                    ))}
                </div>
            </aside>

            {/* 코드뷰 */}
            <main className="w-full lg:w-4/5 bg-zinc-800 text-white p-6 overflow-auto">
                <h2 className="text-2xl font-semibold mb-4 border-b border-zinc-700 pb-2">
                    {selectFile}
                </h2>
                <div className="bg-zinc-900 rounded-lg shadow-inner p-4 max-h-[70vh] overflow-auto">
                    <SyntaxHighlighter language="tsx" style={vscDarkPlus} wrapLines={true} showLineNumbers>
                        {codeSamples[selectFile]}
                    </SyntaxHighlighter>
                </div>

                {/* 아래 이미지 구조 영역 */}
                {/*<div className="mt-8 border-t border-zinc-700 pt-6">*/}
                {/*    <h3 className="text-xl font-semibold mb-4">📦 프로젝트 구조</h3>*/}
                {/*    <img src="/ureca.jpg" alt="홈페이지 구조도" className="w-full rounded-lg shadow-md" />*/}
                {/*</div>*/}
            </main>
        </div>
    );
}
