'use client'

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
    const fullText = '안녕녕하세요. FE개발자를 꿈꾸는 김도건입니다.';
    const textArray = fullText.split('');
    const [displayedText, setDisplayedText] = useState('');
    const indexRef = useRef(0);

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

            {/* 버튼 */}
            <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
            >
                <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                    버튼1
                </button>
                <button className="px-6 py-2 bg-gray-300 text-gray-800 rounded-xl hover:bg-gray-400 transition">
                    버튼 2
                </button>
            </motion.div>
        </section>
    );
}
