import { useState, useEffect } from 'react';
import Image from 'next/image';
import right from "../public/right_arrow.png";
import left from "../public/left_arrow.png";
import bg_img2 from "../public/bg_img2.jpeg";
import forward from "../public/Forward.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomLeftArrow } from './CustomLeftArrow';
import { CustomRightArrow } from './CustomRightArrow';

const Blogs = () => {
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

  const slides = [
    {
      title: 'Pre-foreclosure Saver',
      description: 'Are you facing the daunting prospect of foreclosure? Don not panic. There are steps you can take to avoid losing your home. By understanding the pre-foreclosure process and implementing effective strategies, you can significantly increase your chances of keeping your property.',
      link: 'https://www.facebook.com/share/fnWmP6VCjnXsfGCv/?mibextid=WC7FNe' // Link for this card
    },
    {
      title: 'Avoid Losing Your Home',
      description: "Facing foreclosure is a distressing situation for any homeowner. The looming threat of losing your home due to missed mortgage payments can cause sleepless nights and anxiety about your future. That's where Pre-foreclosure Saver steps in, offering a lifeline to help you navigate the complexities of pre-foreclosure .",
      link: 'https://www.facebook.com/share/DgHSqCUZWNZcZono/?mibextid=WC7FNe' // Link for this card
    },
    {
      title: 'Events',
      description: 'Choose a convenient time for your service, and we’ll reserve a slot for you.',
      link: '/events' // Link for this card
    },
    {
      title: 'Blogs',
      description: 'Bring your car in at the scheduled time, our expert technicians will handle it.',
      link: '/blogs' // Link for this card
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
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={4000}
          pauseOnHover
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {slides.map((data: any, index: any) => (
            <div key={index} className="flex flex-col bg-black rounded-xl items-center gap-[8vh] lg:gap-[14vh] lg:w-[52vw] lg:h-[60vh] mx-auto pt-10 h-[55vh] w-[80%]">
              <div>
                <h2 className="text-[#AC9552] lg:text-4xl text-3xl text-center font-bold">
                  {data.title}
                </h2>
              </div>
              <div className="w-full h-px bg-[#AC9552] my-1"></div>
              <div>
                <p className="text-[#AC9552] px-4 text-center text-xl lg:text-3xl">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Static cards for larger screens */}
      <div className="hidden lg:flex flex-wrap justify-center items-start gap-8 w-full">
        {slides.map((slide, index) => (
          <a
            key={index}
            href={slide.link} 
            target="_blank"
            rel="noopener noreferrer" 
            className="w-80 min-h-[28rem] bg-black m-4 flex flex-col gap-8 p-6 items-center text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-xl"
          >
            <h2 className="text-[#AC9552] text-4xl font-bold mb-4">
              {slide.title}
            </h2>
            <div className="w-full h-px bg-[#AC9552] mb-4"></div>
            <p className="text-justify text-[#AC9552] text-sm text-center mx-4">
              {slide.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;