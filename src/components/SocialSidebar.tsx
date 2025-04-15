'use client'

import {FaInstagram, FaPhoneAlt, FaGithub} from 'react-icons/fa'

export default function SocialSidebar() {
    return(
        <div className="fixed top-10 left-5 flex flex-col items-center gap-6 z-50">
            <a href="https://www.instagram.com/dogeonni/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl text-gray-700 hover:text-pink-500 transition" />
            </a>
            <a href="010-6420-4131">
                <FaPhoneAlt className="text-xl text-gray-700 hover:text-green-500 transition" />
            </a>
            <a href="https://github.com/dogeonkim1" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-xl text-gray-700 hover:text-black transition" />
            </a>
            {/*<div className="w-px h-24 bg-gray-400 mt-2"/>*/}
        </div>
    )
}