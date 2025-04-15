'use client';

import { motion } from 'framer-motion';
import {
    SiJavascript, SiMysql, SiNextdotjs, SiTailwindcss, SiTypescript
} from "react-icons/si";
import {
    FaCss3Alt, FaGithub, FaHtml5, FaJava, FaNodeJs, FaReact, FaWindows
} from "react-icons/fa";

const categories = [
    {
        title: 'OS',
        bgLabel: '-OS-',
        skills: [
            { icon: <FaWindows size={35} className="text-blue-500" />, label: 'Windows' },
        ],
    },
    {
        title: 'Web',
        bgLabel: '-Web-',
        skills: [
            { icon: <FaHtml5 size={35} className="text-orange-500" />, label: 'HTML' },
            { icon: <FaCss3Alt size={35} className="text-blue-600" />, label: 'CSS' },
            { icon: <SiJavascript size={35} className="text-yellow-400" />, label: 'Javascript' },
            { icon: <SiTypescript size={35} className="text-blue-400" />, label: 'Typescript' },
            { icon: <SiTailwindcss size={35} className="text-cyan-400" />, label: 'TailwindCSS' },
        ],
    },
    {
        title: 'Framework',
        bgLabel: '-Framework-',
        skills: [
            { icon: <FaReact size={35} className="text-cyan-500" />, label: 'React Native' },
            { icon: <SiNextdotjs size={35} className="text-black dark:text-white" />, label: 'Next.js' },
            { icon: <FaNodeJs size={35} className="text-green-600" />, label: 'Node.js' },
        ],
    },
    {
        title: 'Programming & DB',
        bgLabel: '-Programming-',
        skills: [
            { icon: <FaJava size={35} className="text-red-500" />, label: 'Java' },
            { icon: <SiMysql size={35} className="text-blue-700" />, label: 'MySQL' },
        ],
    },
    {
        title: 'Version Control',
        bgLabel: '-Version-',
        skills: [
            { icon: <FaGithub size={35} className="text-orange-600" />, label: 'Git' },
            { icon: <FaGithub size={35} className="text-black dark:text-white" />, label: 'GitHub' },
        ],
    },
];

export default function SkillsSection() {
    return (
        <section className="mt-32 px-4">
            {/* Section Title */}
            <motion.h2
                className="text-3xl font-bold text-center mb-12 text-gray-800"
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                Language
            </motion.h2>

            {/* Category Cards */}
            <div className="flex flex-wrap justify-center gap-8">
                {categories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        className={`
              relative bg-white 
              shadow-xl       /* ← 그림자 조절 위치: shadow-md, shadow-lg, shadow-xl 등 Tailwind로 변경 가능 */
              rounded-2xl 
              p-6 
              w-[260px]       /* 카드 너비 고정 */
              h-[300px]       /* 카드 높이 고정 */
              flex flex-col justify-between 
              overflow-hidden
            `}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.2 }}
                    >
                        {/* Background Label */}
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-gray-200 opacity-20 pointer-events-none select-none z-0 whitespace-nowrap">
              {category.bgLabel}
            </span>

                        {/* Foreground Content */}
                        <div className="relative z-10">
                            <h3 className="text-xl font-semibold mb-4 text-green-600 text-center">
                                {category.title}
                            </h3>

                            <div className="grid grid-cols-2 gap-4 justify-items-center">
                                {category.skills.map((skill) => (
                                    <div key={skill.label} className="flex flex-col items-center">
                                        {skill.icon}
                                        <span className="mt-2 text-sm">{skill.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
