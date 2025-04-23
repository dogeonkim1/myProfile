"use client";

import { useEffect, useRef } from "react";

export default function useSectionScroll(duration = 800) {
    const sectionRefs = useRef<HTMLElement[]>([]);
    const isScrolling = useRef(false); // 스크롤 진행 여부
    const currentIndex = useRef(0); // 현재 인덱스

    useEffect(() => {
        sectionRefs.current = Array.from(document.querySelectorAll("section"));

        const handleScroll = (e: WheelEvent) => {
            if (isScrolling.current) return; // 이미 스크롤 중이면 무시
            isScrolling.current = true; // 스크롤 시작

            const direction = e.deltaY > 0 ? 1 : -1; // 아래로 스크롤 시 1, 위로 스크롤 시 -1
            const nextIndex = currentIndex.current + direction;

            // 인덱스 범위 확인
            if (nextIndex < 0 || nextIndex >= sectionRefs.current.length) {
                isScrolling.current = false; // 범위를 벗어나면 스크롤을 허용하지 않음
                return;
            }

            currentIndex.current = nextIndex;
            const target = sectionRefs.current[nextIndex];
            scrollToTarget(target.offsetTop, duration);

            // 애니메이션 딜레이 후 스크롤 가능하도록 설정
            setTimeout(() => {
                isScrolling.current = false; // 딜레이 후 스크롤 재개
            }, duration + 200); // duration + 200ms 후에 스크롤 재개
        };

        const scrollToTarget = (targetY: number, duration: number) => {
            const startY = window.scrollY;
            const diff = targetY - startY;
            let startTime: number | null = null;

            const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

            const animate = (time: number) => {
                if (!startTime) startTime = time;
                const elapsed = time - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = easeOutCubic(progress);

                window.scrollTo(0, startY + diff * eased);

                if (progress < 1) requestAnimationFrame(animate); // 애니메이션 진행 중이면 계속
            };

            requestAnimationFrame(animate); // 애니메이션 시작
        };

        // wheel 이벤트 리스너 등록
        window.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleScroll); // 리스너 해제
        };
    }, [duration]); // duration에 변화가 있을 때마다 실행
}
