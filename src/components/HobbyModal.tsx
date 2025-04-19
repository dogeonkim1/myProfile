"use client";
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
