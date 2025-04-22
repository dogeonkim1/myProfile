"use client";

import { memo, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const cardData = [
  {
    title: "In paris",
    bgColor: "bg-green-900",
    labelColor: "bg-green-400",
    text: "19.09.26 ~ 22.07.17",
    image: "/parismain.jpg",
    modalContent:(
        <>
          <h3 className="text-lg font-semibold mb-2">새로운 시작과 첫 도전</h3>
          <p>2019년 9월, 항공정비사의 꿈을 안고 프랑스로 유학을 떠났습니다.<br/> 아무것도 모른 채 그저
              막연한 꿈 하나만 가지고 시작한 유학생활이었고, 모든게 낯설었지만 그만큼 설렘도 컸습니다.<br/>
              운 좋게 좋은 사람들과 인연을 맺고, 다양한 문화와 환경을 경험하면서 앞으로 모든 일이 잘 풀릴 것
              같다는 기대감이 생겼습니다.
              하지만 11월, 파리의 대규모 교통 파업, 전 세계를 멈춰 세운 코로나 팬데믹은 수업을 중단시키고
              바깥 출입또한 자유롭게 하지 못하게 했습니다. 그저 가만히 시간을 흘려보낼 순 없어, 불어 공부를 하며
              그때 처음 코딩이라는 새로운 분야를 접하게 되었습니다.
              당시엔 부모님의 경제적 도움 없이 모든 생활과 학업을 혼자서 해결하고 있었습니다.
              누구에게도 기대지 않고, 온전히 내 힘으로 버텨낸 시간이었고 그것이 저에겐 큰 자부심이 되었습니다.
              혼자서 해외에서 살아가고 있다는 사실 하나만으로도 스스로를 인정하게되는 시간이었습니다.
              물론 항공정비사의 꿈은 내려놓게 되었습니다. 하지만 그 과정을 통해 '무엇을 할 수 있고, 어떤 걸 잘할 수 있을까?
              라는 고민을 하게되었으며, 좌절이나 실패라고 생각하기보다는, 내 삶을 다시 설계할 수 있는 기회로 받아들여졌습니다.
              그렇게 코딩이라는 새로운 분야에 뛰어들게 되었습니다.
          </p>
        </>
    ),
  },
    {
        title: "My Certification",
        bgColor: "bg-sky-200",
        labelColor: "bg-sky-300",
        text: "20.12.20 ~ 21.04.30",
        image: "/certification.png",
        modalContent:(
            <>
                <h3 className="text-lg font-semibold mb-2">세부 내용1</h3>
                <p>상세 설명</p>
            </>
        ),
    },
  {
    title: "In Yonsei",
    bgColor: "bg-zinc-800",
    labelColor: "bg-yellow-400",
    text: "22.09.30 ~ 04.08.29",
    image: "/yonsei1.jpg",
    modalContent:(
        <>
          <h3 className="text-lg font-semibold mb-2">세부 내용1</h3>
          <p>상세 설명</p>
        </>
    ),
  },
  {
    title: "In Ureca",
    bgColor: "bg-purple-800",
    labelColor: "bg-purple-400",
    text: "25.01.20 ~ 25.08.12",
    image: "/ureca.jpg",
    modalContent:(
        <>
          <h3 className="text-lg font-semibold mb-2">세부 내용1</h3>
          <p>상세 설명</p>
        </>
    ),
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
            className={`relative aspect-square rounded-3xl p-4 flex flex-col justify-between shadow-md text-white ${card.bgColor}`}
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
                <div>{cardData[openIndex].modalContent}</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
export default memo(InfoCards);
