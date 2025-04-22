"use client";

import { memo, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const cardData = [
  {
    title: "In",
    bgColor: "bg-sky-200",
    labelColor: "bg-sky-300",
    text: "텍스트가 들어가게될 영역입니다.",
    image: "/dongchan.png",
  },
  {
    title: "In paris",
    bgColor: "bg-green-900",
    labelColor: "bg-green-400",
    text: "19.09.26 ~ 22.07.17",
    image: "/parismain.jpg",
  },
  {
    title: "In Yonsei",
    bgColor: "bg-zinc-800",
    labelColor: "bg-yellow-400",
    text: "22.09.30 ~ 04.08.29",
    image: "/ureca.jpg",
  },
  {
    title: "In Ureca",
    bgColor: "bg-purple-800",
    labelColor: "bg-purple-400",
    text: "25.01.20 ~ 25.08.12",
    image: "/ureca.jpg",
  },
];

function InfoCards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
        Card
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10 px-4">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className={`relative rounded-3xl p-4 flex-col justify-between shadow-md text-white ${card.bgColor}`}
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
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenIndex(null)}
            >
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg w-[90%] max-w-xl text-black relative"
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
                <p>{cardData[openIndex].text}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
export default memo(InfoCards);
