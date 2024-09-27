import { useState, useEffect } from "react";
import Image from "next/image";
import right from "../public/right_arrow.png";
import left from "../public/left_arrow.png";
import bg_img2 from "../public/bg_img2.jpeg";
import forward from "../public/Forward.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomLeftArrow } from "./CustomLeftArrow";
import { CustomRightArrow } from "./CustomRightArrow";

const Blogs = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const slides = [
    {
      title: "Pre-foreclosure Saver",
      description:
        "Are you facing the daunting prospect of foreclosure? Don not panic. There are steps you can take to avoid losing your home. By understanding the pre-foreclosure process and also implementing effective strategies, you can significantly increase your chances of keeping your property.",
      link: "https://www.facebook.com/share/fnWmP6VCjnXsfGCv/?mibextid=WC7FNe", // Link for this card
    },
    {
      title: "Avoid Losing Your Home",
      description:
        "Facing foreclosure is a distressing situation for any homeowner. The looming threat of losing your home due to missed mortgage payments can cause sleepless nights and anxiety about your future. That's where Pre-foreclosure Saver steps in, offering a lifeline to help you navigate the complexities of pre-foreclosure.",
      link: "https://www.facebook.com/share/DgHSqCUZWNZcZono/?mibextid=WC7FNe", // Link for this card
    },
  ];

  return (
    <div className="relative w-full  flex flex-col items-center gap-[12vh] bg-white text-white">
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
            <a
              key={index}
              href={data.link} // Add link here
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col bg-gradient-to-b from-black to-[#AC9552] rounded-xl items-center gap-[5vh] lg:gap-[14vh] lg:w-[52vw] lg:h-[60vh] mx-auto pt-10 min-h-[63vh] max-h-[68vh] w-[80%] no-underline"
            >
              <div>
                <h2 className="text-[#AC9552] text-white lg:text-4xl text-xl text-center px-2">
                  {data.title}
                </h2>
              </div>
              <div className="w-[90%] h-[1px] bg-[#AC9552]"></div>
              <div>
                <p className="text-[#AC9552] h-[25vh] text-white px-4 text-center text-sm lg:text-3xl text-justify">
                  {data.description}
                </p>
              </div>
              <button className="">Read More</button>
            </a>
          ))}
        </Carousel>
      </div>

      {/* Static cards for larger screens */}
      <div className="hidden lg:flex flex-wrap justify-center items-start gap-8">
        {slides.map((slide, index) => (
          <a
            key={index}
            href={slide.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[45%] h-80 bg-gradient-to-b from-black to-[#AC9552] flex flex-col gap-8 p-6 items-center text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-xl"
          >
            <h2 className="text-[#AC9552] text-white text-4xl mb-4">
              {slide.title}
            </h2>
            <div className="w-full h-[1px] bg-[#AC9552]"></div>
            <p className="text-justify text-[#AC9552] text-white text-sm text-center mx-4">
              {slide.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
