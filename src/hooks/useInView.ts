"use client"
//이 파일은 React컴포넌트가 아닌 커스텀 훅임
//내부에서 JSX를 반환하거나 사용하지 않는다.
//일반 함수와 타입만 존재하는 로직 중심 유틸리티 코드이기 때문에 tsx가 아닌 ts임.
import {useEffect, useRef, useState} from "react";

export default function useInView(threshold = 0.1) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            {threshold}
        );
        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if(ref.current) {
                observer.disconnect();
            }
        };
    }, [ref,threshold]);
    return {ref, isInView};
}