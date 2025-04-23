"use client";
import { memo, MouseEvent, useCallback, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { ModalProps } from "@/type/types";

//이미지 애니메이션 설정
export const variants = {
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

function MainModalComponent({ data, modalHandler, value }: ModalProps) {
  const [direction, setDirection] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const moveSlide = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const carry = Number(e.currentTarget.dataset.dst);
    setDirection(carry);
    setCurrentSlide((prev) => (prev + carry + data.length) % data.length);
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={modalHandler} //바깥 클릭 시 닫힘
      data-value={value}
    >
      <div
        className="relative bg-white p-6 rounded-xl max-w-2xl w-[90vw] h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} //내부 클릭 시 닫기 방지
      >
        {/* 슬라이더 */}
        <div className="relative flex items-center justify-center mb-4 h-[300px]">
          <button
            onClick={moveSlide}
            className="absolute left-0 p-2 text-gray-600 hover:text-black z-10"
            value={value}
            data-dst={-1}
          >
            <FaArrowLeft size={20} />
          </button>

          <div className="w-full h-[300px] flex justify-center items-center overflow-hidden relative">
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={`${currentSlide}-${data[currentSlide].src}`}
                src={data[currentSlide].src}
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
            value={value}
            data-dst={1}
          >
            <FaArrowRight size={20} />
          </button>
        </div>

        {/* 설명 텍스트 */}
        <div className="text-center text-gray-700 mb-4">
          <h2 className="text-xl font-bold mb-4">{data[currentSlide].title}</h2>
          {data[currentSlide].paragraphs.map((para, index) => (
            <p key={index} className="mb-2">
              {para}
            </p>
          ))}
        </div>

        {/* Exit 버튼 */}
        <div className="flex justify-center">
          <button
            onClick={modalHandler}
            className="px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
            data-value={value}
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(MainModalComponent);
