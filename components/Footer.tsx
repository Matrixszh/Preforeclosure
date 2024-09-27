import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  const handleCall = () => {
    window.location.href = "tel:+1 (773) 743-8800";
  };
  return (
    <footer
      id="contact"
      className="bg-white rounded-lg shadow dark:bg-gray-900  "
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-center justify-center mt-6">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={logo}
              alt="logo"
              className=" hover:cursor-pointer md:-mt-5 md:w-[200px] w-[200px]"
            />
          </a>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex flex-col items-center justify-center gap-8 mb-3">
          {/* <div className="flex gap-4 items-center"> */}
          <Link
            href="tel:+1 (630) 489-8779"
            className="flex items-center gap-4"
          >
            <FaPhoneAlt className="text-[#AC9552] lg:text-lg text-sm " />
            <p className="text-[#AC9552] lg:text-lg text-sm">
              +1 (630) 489-8779
            </p>
          </Link>
          {/* </div> */}
          <div className="flex gap-4 items-center">
            <Link
              href="https://www.instagram.com/sharma_nitapatel?igsh=ZTVyc2RkN3FtbGdm&utm_source=qr"
              passHref
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-[#AC9552] lg:text-xl text-lg" />
              </a>
            </Link>
            <Link
              href="https://www.facebook.com/nita.patel.7509836?mibextid=LQQJ4d"
              passHref
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-[#AC9552] lg:text-xl text-lg" />
              </a>
            </Link>
            <Link
              href="https://www.linkedin.com/in/nita-patel-sharma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              passHref
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-[#AC9552] lg:text-xl text-lg" />
              </a>
            </Link>
          </div>
        </div>
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 2024{" "}
          <a href="#" className="hover:underline">
            ™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
