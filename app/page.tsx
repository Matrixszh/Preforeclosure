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
            className="opacity-35 h-screen object-cover lg:h-auto"
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
      <section className="min-h-screen flex flex-col relative">
        <div className="bg-black flex flex-col min-h-[30%] md:min-h-[40%] items-center">
          <div className="flex items-center justify-center gap-2 pt-8 ">
            <div>
              <Image src={forward} alt="forward" />
            </div>
            <div>
              <h1 className="text-white lg:text-6xl text-4xl">Services</h1>
            </div>
          </div>
          <Image src={car_large} alt="car small" className="relative top-[5vh] lg:-mt-[5vh] " />
        </div>
        <Services />
      </section>
  <section id="about"  className="scroll-smooth scroll-mt-14 relative min-h-screen flex flex-col">
    <div className="absolute inset-0">
      <Image
        src={about}
        alt="bg_img"
        fill
        className="object-cover"
      />
    </div>
  <div className="relative z-10 flex flex-col lg:gap-[12vh] md:gap-[10vh] gap-[1vh]">
    <div className="flex items-center justify-center gap-2 pt-8">
      <div>
        <Image src={forward} alt="forward" />
      </div>
      <div>
        <h1 className="text-white lg:text-6xl text-4xl">About Us</h1>
      </div>
    </div>
    <div className="flex flex-col items-center w-full px-[5.313vw]">
      <p className="text-white text-lg md:text-lg text-center px-4 lg:px-0 lg:text-2xl lg:leading-loose leading-loose">
        At Xcellent Auto Repair, we believe in providing reliable, honest, and transparent services. Our state-of-the-art facility is equipped with the latest technology to diagnose and repair your vehicle efficiently and accurately. Whether you need routine maintenance, complex repairs, or specialized services, we have the expertise to handle it all.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[13vw] place items-center mt-6">
        {About_data.map((data, index) => (
          <div key={index} className="flex flex-col items-center gap-2 md:gap-8">
            <Image src={data.img} alt="images" className="w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" />
            <p className="md:text-2xl text-lg text-white">{data.title}</p>
          </div>
        ))}
        </div>
      </div>
      </div>
    </section>
    <section className="min-h-screen bg-black flex flex-col gap-4 lg:gap-[16vh] md:gap-16" ref={ref}>
        <div className="flex items-center justify-center gap-2 pt-8">
          <div>
            <Image src={forward} alt="forward" />
          </div>
          <div>
            <h1 className="text-white lg:text-6xl text-4xl">We Are At</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 px-[5.313vw]">
          {Stats.map((data, index) => (
            <div key={index} className="flex flex-col items-center gap-6 py-3">
              <Image src={data.img} alt="img" className="w-12 h-12 lg:w-32 lg:h-32 md:w-24 md:h-24" />
              <CountUp start={0} end={data.count} delay={0} duration={3.0} useEasing={true} key={inView?1:0}>
                {({ countUpRef }) => (
                  <h1 className="text-white md:text-8xl text-4xl font-bold">
                    <span ref={countUpRef} />
                  </h1>
                )}
              </CountUp>
              <p className="text-white">{data.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className=" relative bg-black ">
        <HowItWorks/>
      </section>
      <section className=" relative bg-black ">
        <AboutUs/>
      </section>
      <section id="reviews" className="scroll-mt-14 min-h-screen relative bg-black flex flex-col lg:gap-[13vh] gap-[12vh]">
      <div className="flex items-center justify-center gap-2 pt-8">
          <div>
            <Image src={forward} alt="forward" />
          </div>
          <div>
            <h1 className="text-white lg:text-6xl text-3xl">Customer Reviews</h1>
          </div>
        </div>
        <Reviews/>
      </section>
      <section className="relative bg-black flex flex-col ">
      <div className="flex items-center justify-center gap-2 pt-8">
          <div>
            <Image src={forward} alt="forward" />
          </div>
          <div>
            <h1 className="text-white lg:text-6xl text-3xl">Brands We Serve</h1>
          </div>
        </div>
        <Brands/>
      </section>
      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
      <section className="relative">
      <div className="flex items-center justify-center gap-2 pt-8">
          <div>
            <Image src={forward} alt="forward" />
          </div>
          <div>
            <h1 className="text-black lg:text-6xl text-3xl">FAQs</h1>
          </div>
        </div>
        <Faqs/>
      </section>
      <Footer/>
      </main>
  );
}
