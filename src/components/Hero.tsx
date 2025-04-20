"use client";

import { motion } from "framer-motion";
import { memo, MouseEvent, useCallback, useEffect, useState } from "react";
import HobbyModal from "./HobbyModal";
import TMIModal from "./TMIModal";

function Hero() {
  const fullText = "안녕하세요. FE개발자를 꿈꾸는 김도건입니다.";
  const textArray = fullText.split("");
  const [displayedText, setDisplayedText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTmiModalOpen, setIsTmiModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) => `${prev}${textArray[prev.length] || ""}`);
    }, 100);
    return () => clearInterval(interval);
  }, [textArray]);

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

  const handleModalOpen = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.value === "hobby") {
      setIsModalOpen(true);
    } else {
      setIsTmiModalOpen(true);
    }
  }, []);

  const handleModalClose = useCallback((e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    console.log("inHandle", e.currentTarget.dataset.value);
    if (e.currentTarget.dataset.value === "hobby") {
      setIsModalOpen(false);
      console.log("CLose");
    } else {
      setIsTmiModalOpen(false);
    }
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
      {isModalOpen && <HobbyModal modalHandler={handleModalClose} />}
      {isTmiModalOpen && <TMIModal modalHandler={handleModalClose} />}
    </section>
  );
}
export default memo(Hero);
