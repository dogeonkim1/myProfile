'use client'

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {AnimatePresence} from 'framer-motion';

const images = [
    { src: '/dongchan.png', caption: '첫 번째 경험 설명입니다.' },
    { src: '/dongchan.png', caption: '두 번째 경험 설명입니다.' },
    { src: '/dongchan.png', caption: '세 번째 경험 설명입니다.' },
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
                    experience
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
                        <p className="text-center text-gray-700 mb-4">
                            {images[currentSlide].caption}
                        </p>

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
