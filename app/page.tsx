"use client"
import Image from "next/image";
import bg_img from "../public/bg_img.jpg";
import bg_img2 from "../public/bg_img2.jpeg";
import bg_img3 from "../public/bg_img3.jpeg";
import forward from "../public/Forward.png";
import car_small from "../public/car_small.png";
import car_large from "../public/car_large.png";
import logo from "../public/logo.png";
import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import Services from "@/components/Services";
import about from "../public/about.png";
import { About_data } from "@/components/Data/About_Data";
import { Stats } from "@/components/Data/We_Are_Data";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import Brands from "@/components/Brands";
import PopupForm from "@/components/PopupForm";
import Faqs from "@/components/Faqs";
import CountUp from 'react-countup';
import { Footer } from "@/components/Footer";
import { useInView } from "react-intersection-observer";
import { Button_Component } from "@/components/Button_Component";
import { AboutUs } from "@/components/AboutUs";

export default function Home() {
  const [scrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold:0.1
  })
  return (
    <main>
      <div className={`flex lg:gap-5 gap-5  items-center z-20 fixed lg:top-[82vh] ${scrolled?'lg:left-[90vw]':'lg:left-[80vw]'} top-[85vh] ${scrolled?'left-[85vw]':'left-[50vw]'} animate-pulse`}>
      {scrolled?null : <p className="text-white text-md md:text-lg font-bold">Contact Now!</p>}
      <Button_Component />
      </div>
      <section id="home" className="max-w-[1440px] min-h-screen overflow-hidden bg-black flex flex-col items-center scroll-smooth">
        <div className="absolute inset-0 h-full">
          <Image
            src={bg_img}
            alt="bg_image"
            className="opacity-35 h-100% object-cover lg:h-auto"
          />
        </div>
        <Header />
        <div className="relative w-full px-4 md:px-0 lg:w-[54vw] md:w-[80vw] min-h-[250px] shrink-0 flex flex-col lg:items-start items-center justify-between z-10 lg:mt-[40vh] mt-[30vh] lg:ml-[5.313vw] mx-auto gap-[22vh] lg:gap-0">
          <div>
            <h1 className="md:text-6xl text-5xl text-white font-bold lg:text-left text-center">
              Professional Auto{" "}
              <span className="bg-[linear-gradient(93deg,#E60404_65.36%,#850202_99.52%)] bg-clip-text text-transparent">
                Repair
              </span>{" "}
              &{" "}
              <span className="bg-[linear-gradient(93deg,#E60404_65.36%,#850202_99.52%)] bg-clip-text text-transparent">
                Maintenance
              </span>
            </h1>
          </div>
          <div className="flex lg:w-auto">
            <button className="relative overflow-hidden group lg:p-3 p-2 rounded-[10px] text-white font-bold border-2 border-transparent hover:border-[#9E0506] transition-colors duration-300">
              <span onClick={openPopup} className="relative z-10 lg:text-xl md:text-lg text-md px-[80px] md:px-[80px] lg:px-0">
                GET A QUOTE
              </span>
              <div className="absolute inset-0 bg-[linear-gradient(93deg,#E60404_0.45%,#800202_74.27%,#850202_99.52%,#820202_99.53%)] group-hover:opacity-0 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>
      
      <section className=" relative bg-white ">
      <div className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]">
          <p className="text-[#7C640E] text-center px-8 py-1 rounded-2xl text-sm tracking-wider">
            WHO AM I
          </p>
          <div className="flex items-center justify-center">
            <div className="h-[2px] w-16 bg-black mr-4"></div>
            <h1 className="text-black text-center text-3xl lg:text-6xl">About Me</h1>
            <div className="h-[2px] w-16 bg-black ml-4"></div>
          </div>
          </div>
        <AboutUs/>
      </section>
      <section className=" relative bg-white ">
        <HowItWorks/>
      </section>
      
      <section className="relative bg-White flex flex-col ">
      <div className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]">
          <p className="text-[#7C640E] text-center px-8 py-1 rounded-2xl text-sm tracking-wider">
            WHO AM I
          </p>
          <div className="flex items-center justify-center">
            <div className="h-[2px] w-16 bg-black mr-4"></div>
            <h1 className="text-black text-center text-3xl lg:text-6xl">About Me</h1>
            <div className="h-[2px] w-16 bg-black ml-4"></div>
          </div>
        </div>
        <Brands/>
         <div className="flex flex-col gap-8" id="event-content">
          <p
            className="text-lg lg:text-xl text-justify  md:px-14 px-7 "
            style={{ lineHeight: "1.85" }}
          >
            At the heart of our enterprises is a strong commitment to community
            and collaboration, and this is best exemplified through our dynamic
            events. Our events are not just gatherings but curated experiences
            where entrepreneurs, investors, and professionals from various
            industries come together to share knowledge, forge connections, and
            explore new opportunities.{" "}
            <span className="hidden md:flex md:pt-4">
              Hosted by our Visionary founder, these events focus on empowering
              individuals to start or build their own business, while showcasing
              the innovative solutions we offer across a diverse range of
              industries, including lead generation, real estate wholesaling,
              marketing, coaching, and more. We invite you to browse through the
              moments captured at our events, where like-minded individuals
              engage in insightful discussions, spark new ideas, and lay the
              foundation for future collaborations. Join us at our next event
              and become part of this growing, dynamic community.
            </span>
          </p>
          </div>
        
      </section>
      <section id="reviews" className="scroll-mt-14 min-h-screen relative bg-White flex flex-col lg:gap-[13vh] gap-[12vh]">
      <div className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]">
          <p className="text-[#7C640E] text-center px-8 py-1 rounded-2xl text-sm tracking-wider">
            WHO AM I
          </p>
          <div className="flex items-center justify-center">
            <div className="h-[2px] w-16 bg-black mr-4"></div>
            <h1 className="text-black text-center text-3xl lg:text-6xl">About Me</h1>
            <div className="h-[2px] w-16 bg-black ml-4"></div>
          </div>
        </div>
        <Reviews/>
      </section>
      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />

      <Footer/>
      </main>
  );
}
