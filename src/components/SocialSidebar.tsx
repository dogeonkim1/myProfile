"use client";

import { memo } from "react";
import { FaInstagram, FaPhoneAlt, FaGithub } from "react-icons/fa";

function SocialSidebar() {
  return (
      <div className="sticky top-10 left-5 flex flex-col items-start gap-6 z-50">
          <a
              href="https://www.instagram.com/dogeonni/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
          >
              <FaInstagram className="text-xl text-gray-700 hover:text-pink-500 transition" />
          </a>
          <a href="tel:010-6420-4131" className="inline-flex">
              <FaPhoneAlt className="text-xl text-gray-700 hover:text-green-500 transition" />
          </a>
          <a
              href="https://github.com/dogeonkim1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
          >
              <FaGithub className="text-xl text-gray-700 hover:text-black transition" />
          </a>
      </div>
  );
}

export default memo(SocialSidebar);
