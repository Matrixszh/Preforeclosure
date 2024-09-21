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
      title: '1',
      description: 'Fill out our form or call us to inquire about services and available slots.',
    },
    {
      title: '2',
      description: 'Provide details about your vehicle, and we will give you a personalized quote.',
    },
    {
      title: '3',
      description: 'Choose a convenient time for your service, and we’ll reserve a slot for you.',
    },
    {
      title: '4',
      description: 'Bring your car in at the scheduled time, our expert technicians will handle it.',
    },
  ];

  

  return (
      <div className="relative w-full min-h-screen flex flex-col items-center gap-[12vh] bg-black text-white">
          <div className="flex items-center justify-center gap-2 pt-8 relative z-10">
            <div>
              <Image src={forward} alt="forward" />
            </div>
            <div>
              <h1 className="text-white lg:text-6xl text-4xl">How It Works</h1>
            </div>
          </div>
      <div className="absolute inset-0">
        <Image
          src={bg_img2}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
        </div>
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center lg:justify-start lg:px-[5.313vw]">
            <div className="flex flex-col items-center text-center py-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Steps to Get Our Services
              </h2>
            </div>

        {/* Slider for mobile devices */}
         <div className="block lg:hidden w-full px-1">
        <Carousel responsive={responsive} autoPlay={true} infinite={true} autoPlaySpeed={4000}   pauseOnHover   className=" " customLeftArrow={<CustomLeftArrow/>} customRightArrow={<CustomRightArrow/>}>
          {slides.map((data:any, index:any) => {
          return (
             <>     
             
            <div key={index} className=" flex flex-col  bg-[linear-gradient(93deg,#E60404_0.45%,#800202_74.27%,#850202_99.52%,#820202_99.53%)]  rounded-xl items-center gap-[8vh] lg:gap-[14vh] lg:w-[52vw] lg:h-[60vh] mx-auto pt-10 h-[55vh] w-[80%]">
            <div className="">
                <h2 className="text-white lg:text-5xl  text-4xl text-center font-bold">{ data.title}</h2>
            </div>
            <div>
                <p className="text-white px-4 text-center text-xl lg:text-3xl ">{ data.description}</p>
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
              className="w-64 h-80 bg-gradient-to-r from-[#E60404] to-[#850202] m-4 flex flex-col gap-16 pt-5 items-center text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-xl"
            >
              <h2 className="text-6xl font-bold mb-2">{slide.title}</h2>
              <p className="text-center mx-4">{slide.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
