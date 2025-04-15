'use client'

import {useEffect, useState} from "react";
import {motion,AnimatePresence} from "framer-motion";

export default function ScrollProgressBar() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrolled = (scrollTop / docHeight) * 100
            setScrollPercentage(scrolled)
            setIsScrolling(scrollTop > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <AnimatePresence>
            {isScrolling && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-[5px] z-[9999] bg-transparent"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                >
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                        style={{width:`${scrollPercentage}%`}}
                        transition={{ease: 'easeOut', duration:0.2}}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}