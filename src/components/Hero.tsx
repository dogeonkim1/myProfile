'use client'

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {AnimatePresence} from 'framer-motion';

type ImageItem = {
    src: string;
    title:string;
    paragraphs:string[];
}

const images: ImageItem[] = [
    {
        src: '/turtle.jpg',
        title: '생명에 대한 애정으로 시작된 배움',
        paragraphs: [
            "어린 시절부터 수중 생물, 특히 거북이를 돌보는 것이 나의 오랜 취미였습니다.",
            "단순히 키우는 것을 넘어서, 이 작은 생명들이 어떻게 하면 건강하고 안정된 환경에서 자랄 수 있을지 늘 고민해왔습니다.",
            "물의 온도, 수질, 먹이의 질 하나하나에 주의를 기울이며, 최상의 컨디션을 유지할 수 있도록 세심하게 관찰하고 꾸준히 관리해왔습니다.",
            "이 과정은 생명에 대한 책임감을 배우는 동시에, 끈기와 세밀한 관찰력, 환경에 대한 민감한 감수성을 키우는 시간이었습니다.",
            "지금도 저는 어떤 일이든 생명을 대하듯 신중하고 정성스럽게 접근하려고 합니다."
        ]
    },
    {
        src: '/dongchan.png',
        caption: '두 번째 경험 설명입니다.'
    },
    {
        src: '/dongchan.png',
        caption: '세 번째 경험 설명입니다.'
    },
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
        if(isModalOpen){
            document.body.style.overflow='hidden';
        }else{
            document.body.style.overflow='';
        }

        //cleanup(언마운트되거나 닫힐 때 복구)
        return () => {
            document.body.style.overflow= '';
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

    //이미지 애니메이션 설정
    const variants = {
        enter: (direction: number) => ({
            x:direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center:{
            x:0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0  ? -300 : 300,
            opacity: 0,
        })
    }
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
                Name : 김도건<br/>
                Birth : 97.07.02<br/>
                Major : Aerospace Dynamic<br/>
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
                    Hoby
                </button>
                <button className="px-6 py-2 bg-gray-300 text-gray-800 rounded-xl hover:bg-gray-400 transition">
                    버튼 2
                </button>
            </motion.div>

            {/* 모달 */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    style={{backgroundColor:'rgba(0,0,0,0.5)'}}
                    onClick={() => setIsModalOpen(false)}//바깥 클릭 시 닫힘
                >
                    <div className="relative bg-white p-6 rounded-xl max-w-2xl w-full"
                        onClick={(e) => e.stopPropagation()}    //내부 클릭 시 닫기 방지
                    >
                        {/* 슬라이더 */}
                        <div className="relative flex items-center justify-center mb-4 h-[300px]">
                            <button onClick={prevSlide} className="absolute left-0 p-2 text-gray-600 hover:text-black z-10">
                                <FaArrowLeft size={20}/>
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
                                            x:{type: "spring",stiffness:300, damping:30},
                                            opacity: {duration: 0.2}
                                        }}
                                    />
                                </AnimatePresence>
                            </div>
                            <button onClick={nextSlide} className="absolute right-0 p-2 text-gray-600 hover:text-black z-10">
                                <FaArrowRight size={20}/>
                            </button>
                        </div>

                        {/* 설명 텍스트 */}
                        <div className="text-center text-gray-700 mb-4">
                            <h2 className="text-xl font-bold mb-4">
                                {images[currentSlide].title}
                            </h2>
                            {images[currentSlide].paragraphs.map((para, index) => (
                                <p key={index} className="mb-2">{para}</p>
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
        </section>
    );
}
