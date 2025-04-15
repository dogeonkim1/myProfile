'use client'

import React from "react";
import { motion } from "framer-motion";
import useInView from "../hooks/useInView";

export default function FadeInSection({children}: {children:React.ReactNode}) {
    const {ref, isInView} = useInView();

    return(
        <motion.div
            ref={ref}
            initial={{opacity: 0, y:50}}
            animate={isInView ? {opacity:1, y:0} : {opacity: 0, y:50}}
            transition={{duration: 0.8, ease:"easeOut"}}
            className="my-20"
        >
            {children}
        </motion.div>
    )
}