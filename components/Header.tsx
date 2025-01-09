"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useWindowSize } from "@uidotdev/usehooks";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Router, useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const items = [
    { item: "Home", id: "home" },
    { item: "Companies", id: "companies" },
    { item: "Contact", id: "pricing" },
  ];
  const menuItemsRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const size = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBodyLocked, setIsBodyLocked] = useState(false);

  const toggleMenu = (targetSectionId?: string) => {
    setIsMenuOpen(!isMenuOpen);
    setIsBodyLocked(!isBodyLocked);

    if (targetSectionId) {
      const section = document.getElementById(targetSectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  const SectionScroll = (targetSectionId: string) => {
    if (targetSectionId) {
      const section = document.getElementById(targetSectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuItemsRef.current, {
        xPercent: 200,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(menuItemsRef.current, {
        xPercent: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.inOut",
      });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (size?.width ?? 0 >= 768) {
      setIsMenuOpen(false);
    }
  }, [size.width]);

  useEffect(() => {
    if (isBodyLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isBodyLocked]);

  return (
    <nav className="absolute top-0 left-0 right-0 bg-transparent z-50 h-[70px] lg:h-[80px] w-full md:px-6 px-3">
      <div className=" h-full flex justify-center lg:justify-between items-center ">
        <a href="#">
          <Image
            src={logo}
            alt="logo"
            className="
              hover:cursor-pointer
              mt-14
              lg:mt-2
              lg:w-[180px] 
              w-[200px]
              drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]   /* Glow effect */
                 /* Remove glow on medium and larger screens */
                    /* Optional pulsing effect for the glow */
                    /* Remove animation on medium and larger screens */
            "
            priority
          />
        </a>
        <div className="hidden lg:block">
          <button className="relative overflow-hidden group px-6 py-2 rounded-[10px] text-white font-sm border-2 border-transparent hover:border-[#AC9552] transition-colors duration-300">
            <span
              onClick={() => SectionScroll("form")}
              className="relative z-10 lg:text-lg md:text-lg text-md px-[80px] md:px-[80px] lg:px-0"
            >
              CONTACT
            </span>
            <div className="absolute inset-0 bg-[linear-gradient(93deg,#AC9552_40%,#F6CA78_70%,#AC9552_100%)] group-hover:opacity-0 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40"
          onClick={() => toggleMenu()}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50  ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="flex justify-end p-4">
            <button
              onClick={() => toggleMenu()}
              className="text-2xl"
              aria-label="Close menu"
            >
              <IoMdClose className="text-[#D72323] text-4xl" />
            </button>
          </div>
          <div className="flex flex-col gap-14 p-4 overflow-hidden">
            {items.map((item, index) => (
              <div className="relative" key={index}>
                <div
                  className="bg-[#D72323] absolute top-0 left-0 w-full h-full z-10 rounded-xl"
                  ref={(el) => {
                    menuItemsRef.current[index] = el;
                  }}
                ></div>
                <button
                  className="text-left border-gray-400 text-xl text-black border-[1px] px-4 rounded-xl shadow-lg py-1 font-bold bg-white w-full"
                  onClick={() => toggleMenu(item.id.toLowerCase())}
                >
                  {item.item}
                </button>
              </div>
            ))}
          </div>
          <div className="p-4">
            <button
              className="w-full bg-[#D72323] border-[1px] border-gray-300 py-3 rounded-xl text-lg font-medium text-white hover:border-[#D72323] hover:bg-white hover:text-[#D72323] transition duration-300"
              onClick={() => {
                toggleMenu();
                SectionScroll("pricing");
              }}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
