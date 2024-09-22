"use client"
import Image from "next/image";
import bg_img from "../public/bg_img.jpg";
import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import Blogs from "@/components/Blogs";
import Meetups from "@/components/MeetUps";
import Company from "@/components/Company";
import PopupForm from "@/components/PopupForm";
import { Footer } from "@/components/Footer";
import { useInView } from "react-intersection-observer";
import { Button_Component } from "@/components/Button_Component";
import { AboutUs } from "@/components/AboutUs";
import Collabs from "@/components/Collabs";
import Workshops from "@/components/Workshops";
import AppointmentForm from "@/components/AppointmentForm";

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
      <section id="home" className="min-h-screen overflow-hidden bg-black flex flex-col items-center scroll-smooth">
        <div className="absolute inset-0 h-full">
          <Image
            src={bg_img}
            alt="bg_image"
            className="opacity-35 h-screen object-cover lg:h-auto"
            style={{ maxHeight: '800px' }}
          />
        </div>
        <Header />
        <div className="relative w-full px-4 md:px-0 lg:w-[54vw] md:w-[80vw] min-h-[250px] shrink-0 flex flex-col lg:items-start items-center justify-between z-10 lg:mt-[40vh] mt-[30vh] lg:ml-[5.313vw] mx-auto gap-[22vh] lg:gap-0">
          <div>
          <h1 className="md:text-8xl text-5xl text-white font-bold">
              <span className="bg-[linear-gradient(93deg,#AC9552_40%,#F6CA78_70%,#AC9552_100%)] bg-clip-text text-transparent">
                Preforeclosure
              </span>
            </h1>
            <h2 className="md:text-4xl text-xl text-white font-medium">
              <span className="bg-white bg-clip-text text-transparent">
                From Pre-Foreclosures to Profit, Real Estate Starts Here!
              </span>
            </h2>
          </div>
          <div className="flex lg:w-auto">
            <button className="relative overflow-hidden group lg:p-3 p-2 rounded-[10px] text-white font-bold border-2 border-transparent hover:border-[#AC9552] transition-colors duration-300">
              <span onClick={openPopup} className="relative z-10 lg:text-xl md:text-lg text-md px-[80px] md:px-[80px] lg:px-0">
                GET A QUOTE
              </span>
              <div className="absolute inset-0 bg-[linear-gradient(93deg,#AC9552_40%,#F6CA78_70%,#AC9552_100%)] group-hover:opacity-0 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>
      
      <section className=" relative bg-white ">
      <div className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]" 
        id="AboutUs">
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
        <Blogs/>
      </section>
      <section className="relative bg-White overflow-hidden ">
      <div className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]">
          <p className="text-[#7C640E] text-center text-sm tracking-wider">
            WHAT ARE WE
          </p>
          <div className="flex items-center justify-center py-4">
            <div className="h-[2px] w-16 bg-black mr-4"></div>
            <h1 className="text-black text-center text-3xl lg:text-6xl">My Company</h1>
            <div className="h-[2px] w-16 bg-black ml-4"></div>
          </div>
        </div>
        <Company/>
         <div className="flex flex-col gap-8" id="event-content">
          <p
            className="text-lg lg:text-xl text-justify  py-4 md:px-14 px-7 "
            style={{ lineHeight: "1.85" }}
          >
            We work differently at The Sharma Group Inc.. When you contact us and 
            submit the short property information , we’ll give you a 
            fair all-cash offer on your house within 24 hours… and the best part 
            is: we can close whenever YOU choose to close – it’s entirely up to you.
            {" "}
            <span className="hidden md:flex md:pt-4">
             It doesn’t matter what condition the house is in, or even if there are 
             tenants in there that you can’t get rid of… don’t worry about it. We’ll
              take care of it for you. And if you need the cash quickly, we can close
               in as little as 7 days because we buy houses with cash and don’t have 
               to rely on traditional bank financing.
            </span>
          </p>
          </div>
        
      </section>
      <section id="meetups" className="scroll-mt-14 min-h-screen relative bg-White flex flex-col lg:gap-[13vh] gap-[12vh]">
      <div className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]">
          <p className="text-[#7C640E] text-center px-8 py-1 rounded-2xl text-sm tracking-wider">
          WHERE IDEAS MEET OPPORTUNITIES
          </p>
          <div className="flex items-center justify-center">
            <div className="h-[2px] w-16 bg-black mr-4"></div>
            <h1 className="text-black text-center text-3xl lg:text-6xl">Chicago Meet Ups</h1>
            <div className="h-[2px] w-16 bg-black ml-4"></div>
          </div>
        </div>
        <Meetups/>
      </section>
      <section id="reviews" className="scroll-mt-14 min-h-screen relative bg-White flex flex-col lg:gap-[13vh] gap-[12vh]">
      <div className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]">
          <p className="text-[#7C640E] text-center px-8 py-1 rounded-2xl text-sm tracking-wider">
          WHERE IDEAS MEET OPPORTUNITIES
          </p>
          <div className="flex items-center justify-center">
            <div className="h-[2px] w-16 bg-black mr-4"></div>
            <h1 className="text-black text-center text-3xl lg:text-6xl">Our Workshops</h1>
            <div className="h-[2px] w-16 bg-black ml-4"></div>
          </div>
        </div>
        <Workshops/>
      </section>
      <section>
        <Collabs/>
      </section>
      <section id="form" className="scroll-mt-14 min-h-screen relative bg-White flex flex-col lg:gap-[13vh] gap-[12vh]">
      <div className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]">
          <p className="text-[#7C640E] text-center px-8 py-1 rounded-2xl text-sm tracking-wider">
          WHERE IDEAS MEET OPPORTUNITIES
          </p>
          <div className="flex items-center justify-center">
            <div className="h-[2px] w-16 bg-black mr-4"></div>
            <h1 className="text-black text-center text-3xl lg:text-6xl">Chicago Meet Ups</h1>
            <div className="h-[2px] w-16 bg-black ml-4"></div>
          </div>
        </div>
        <AppointmentForm/>
        </section>

      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />

      <Footer/>
      </main>
  );
}
