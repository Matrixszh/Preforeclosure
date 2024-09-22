import { useState, useEffect } from 'react';
import Image from 'next/image';
import right from "../public/right_arrow.png"
import left from "../public/left_arrow.png"
import bg_img2 from "../public/bg_img2.jpeg"
import forward from "../public/Forward.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomLeftArrow } from './CustomLeftArrow';
import { CustomRightArrow } from './CustomRightArrow';
const HowItWorks = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'News',
      description: 'Fill out our form or call us to inquire about services and available slots.',
    },
    {
      title: 'News',
      description: 'Provide details about your vehicle, and we will give you a personalized quote.',
    },
    {
      title: 'News',
      description: 'Choose a convenient time for your service, and we’ll reserve a slot for you.',
    },
    {
      title: 'News',
      description: 'Bring your car in at the scheduled time, our expert technicians will handle it.',
    },
  ];

  

  return (
      <div className="relative w-full min-h-screen flex flex-col items-center gap-[12vh] bg-white text-white">
          <div className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]">
          <p className="text-[#7C640E] text-center px-8 py-1 rounded-2xl text-sm tracking-wider">
            READ UP
          </p>
          <div className="flex items-center justify-center">
            <div className="h-[2px] w-16 bg-black mr-4"></div>
            <h1 className="text-black text-center text-3xl lg:text-6xl">My Blogs</h1>
            <div className="h-[2px] w-16 bg-black ml-4"></div>
          </div>
        </div>


        {/* Slider for mobile devices */}
         <div className="block lg:hidden w-full px-1">
        <Carousel responsive={responsive} autoPlay={true} infinite={true} autoPlaySpeed={4000}   pauseOnHover   className=" " customLeftArrow={<CustomLeftArrow/>} customRightArrow={<CustomRightArrow/>}>
          {slides.map((data:any, index:any) => {
          return (
             <>     
             
            <div key={index} className=" flex flex-col  bg-black  rounded-xl items-center gap-[8vh] lg:gap-[14vh] lg:w-[52vw] lg:h-[60vh] mx-auto pt-10 h-[55vh] w-[80%]">
            <div className="">
                <h2 className="text-[#AC9552] lg:text-5xl  text-4xl text-center font-bold">{ data.title}</h2>
            </div>
            <div className="w-full h-px bg-[#AC9552] my-1"></div>
            <div>
                <p className="text-[#AC9552] px-4 text-center text-xl lg:text-3xl ">{ data.description}</p>
            </div>
                  </div>
                  </>
              )
          })}
 
      </Carousel>
        </div> 

        {/* Static cards for larger screens */}
        <div className="hidden lg:flex flex-wrap justify-center items-center gap-10 w-full">
          {slides.map((slide, index) => (
            <div
            key={index}
            className="w-64 h-80 bg-black m-4 flex flex-col gap-16 pt-5 items-center text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-xl"
          >
            <h2 className="text-[#AC9552] text-6xl font-bold mb-2">{slide.title}</h2>
            <div className="w-full h-px bg-[#AC9552] my-1"></div>
            <p className="text-[#AC9552] text-center mx-4">{slide.description}</p>
          </div>
          ))}
        </div>
      </div>
    
  );
};

export default HowItWorks;
