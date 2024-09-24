"use client"
import Image from "next/image";
import bg_img from "../public/Bg_logo.jpg";
import React, { useState, useEffect } from "react";
import Blogs from "@/components/Blogs";
import Meetups from "@/components/MeetUps";
import Company from "@/components/Company";
import { Footer } from "@/components/Footer";
import { useInView } from "react-intersection-observer";
import { Button_Component } from "@/components/Button_Component";
import { AboutUs } from "@/components/AboutUs";
import Collabs from "@/components/Collabs";
import Workshops from "@/components/Workshops";
import AppointmentForm from "@/components/AppointmentForm";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

export default function Home() {
  const [scrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
          setIsVisible(false);
        } else {
          setIsScrolled(false);
          setIsVisible(true);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold:0.1
  })
  return (
    <main>
     <div className={`flex gap-5 items-center z-20 fixed bottom-4 right-4 md:bottom-8 md:right-8 animate-pulse`}>
      <div className="overflow-hidden">
        <p className={`text-white text-md md:text-lg font-bold transition-all duration-300 ease-in-out ${isVisible ? "opacity-100 translate-x-0 visible" : "opacity-0 -translate-x-full invisible"}`}>
          Contact Now!
        </p>
      </div>
      <Button_Component />
    </div>
      <section id="home" className="min-h-screen overflow-hidden bg-black flex flex-col items-center scroll-smooth">
        <div className="absolute inset-0 h-full">
          <Image
            src={bg_img}
            alt="bg_image"
            className="opacity-35 h-screen object-cover"
            style={{ maxHeight: '800px' }}
          />
        </div>
        {/* <Header /> */}
        <div className="relative w-full px-4 md:px-0 lg:w-[54vw] md:w-[80vw] min-h-[300px] shrink-0 flex flex-col lg:items-start items-center justify-between z-10 lg:mt-[35vh] mt-[30vh] lg:ml-[5.313vw] mx-auto gap-[22vh] lg:gap-0">
          <div className="flex flex-col gap-6">
          <h1 className="md:text-8xl text-4xl text-white font-medium text-center md:text-left">
              <span className="bg-[linear-gradient(93deg,#AC9552_40%,#F6CA78_70%,#AC9552_100%)] bg-clip-text text-transparent">
                Preforeclosure
              </span>
            </h1>
            <h2 className="md:text-4xl text-md text-white font-medium text-center md:text-left">
              <span className="bg-white bg-clip-text text-transparent ">
                From Pre-Foreclosures to Profit, Real Estate Starts Here!
              </span>
            </h2>
          </div>
          <div className="flex lg:w-auto">
            <button className="relative overflow-hidden group lg:p-3 p-2 rounded-[10px] text-white font-sm border-2 border-transparent hover:border-[#AC9552] transition-colors duration-300">
              <span onClick={()=>{router.push("#form")}} className="relative z-10 lg:text-md md:text-lg text-sm px-[80px] md:px-[80px] lg:px-0 " >
               GET A QUOTE
              </span>
              <div className="absolute inset-0 bg-[linear-gradient(93deg,#AC9552_40%,#F6CA78_70%,#AC9552_100%)] group-hover:opacity-0 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>
      
      <section className=" relative bg-white min-h-screen flex items-center justify-center flex-col">
      <div className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]" 
        id="AboutUs">
          <p className="text-[#7C640E] text-center px-8 py-1 rounded-2xl text-sm tracking-wider">
            WHO AM I
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-16 bg-black"></div>
            <h1 className="text-black text-center text-2xl lg:text-6xl">About Me</h1>
            <div className="h-[2px] w-16 bg-black "></div>
          </div>
          </div>
        <AboutUs/>
      </section>
      <section className=" relative bg-white  flex items-center justify-center flex-col gap-10">
      <div className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]" 
        id="AboutUs">
          <p className="text-[#7C640E] text-center px-8 py-1 rounded-2xl text-sm tracking-wider">
            READ UP
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-16 bg-black "></div>
            <h1 className="text-black text-center text-2xl lg:text-6xl">My Blogs</h1>
            <div className="h-[2px] w-16 bg-black "></div>
          </div>
          </div>
        <Blogs/>
      </section>
      <section className="relative overflow-hidden  flex items-center justify-center flex-col gap-10">
      <div className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]">
          <p className="text-[#7C640E] text-center text-sm tracking-wider">
            WHAT ARE WE
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-16 bg-black "></div>
            <h1 className="text-black text-center text-2xl lg:text-6xl">My Company</h1>
            <div className="h-[2px] w-16 bg-black "></div>
          </div>
        </div>
        {/* <Company/> */}
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
      <section id="meetups" className="scroll-mt-14  relative bg-White flex flex-col gap-10">
      <div className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]">
          <p className="text-[#7C640E] text-center px-8 py-1 rounded-2xl text-sm tracking-wider">
          WHERE IDEAS MEET OPPORTUNITIES
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-16 bg-black "></div>
            <h1 className="text-black text-center text-2xl lg:text-6xl">Chicago Meets</h1>
            <div className="h-[2px] w-16 bg-black "></div>
          </div>
        </div>
        <Meetups />
        <p className="px-7 text-center text-justify lg:text-xl text-lg md:px-14"  style={{ lineHeight: "1.85" }}>
            Chicago Meetups is where ambitious minds come together to connect, learn, and grow. Our events focus on fostering meaningful relationships among like-minded individuals while providing valuable insights into real estate, particularly pre-foreclosures, and the power of mindset. Whether you’re a seasoned professional or just starting out, Chicago Meetups is the perfect place to network, share ideas, and unlock new opportunities. Join us and be part of a community where knowledge meets action, and ideas turn into success .
            </p>
      
      </section>
      <section id="reviews" className="scroll-mt-14 min-h-screen relative bg-White flex flex-col gap-10">
      <div className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]">
          <p className="text-[#7C640E] text-center px-8 py-1 rounded-2xl text-sm tracking-wider">
          WHERE IDEAS MEET OPPORTUNITIES
          </p> 
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-16 bg-black "></div>
            <h1 className="text-black text-center text-2xl lg:text-6xl">Our Workshops</h1>
            <div className="h-[2px] w-16 bg-black "></div>
          </div>
        </div>
        <Workshops/>
      </section>
      <section className="scroll-mt-14  relative bg-White flex flex-col gap-10 bg-black">
      <div className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]">
          <p className="text-[#7C640E] text-center px-8 py-1 rounded-2xl text-sm tracking-wider text-white">
          SEE WHAT WE DO
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-16 bg-[#7C640E] "></div>
            <h1 className="text-white text-center text-2xl lg:text-6xl">Collabs</h1>
            <div className="h-[2px] w-16 bg-[#7C640E] "></div>
          </div>
        </div>
        <Collabs/>
      </section>
      <section id="form" className="scroll-mt-14 relative bg-White flex flex-col gap-10">
      <div className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]">
          <p className="text-[#7C640E] text-center px-8 py-1 rounded-2xl text-sm tracking-wider">
          WHERE IDEAS MEET OPPORTUNITIES
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-16 bg-black "></div>
            <h1 className="text-black text-center text-2xl lg:text-6xl">Contact Us</h1>
            <div className="h-[2px] w-16 bg-black "></div>
          </div>
        </div>
        <AppointmentForm/>
        </section>

      <Footer/>
      </main>
  );
}
