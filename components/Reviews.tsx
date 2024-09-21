import { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
const reviews = [
  {
    title: "Excellent Service",
    text: "The service at Xcellent Auto Repair was exceptional. The staff was friendly and the repairs were done promptly. Highly recommend!",
  },
  {
    title: "Great Experience",
    text: "I had a great experience with Xcellent Auto Repair. They were transparent about the repairs and the costs. My car has never run better!",
  },
  {
    title: "Highly Recommend",
    text: "Xcellent Auto Repair is the place to go for reliable and honest auto repair. The technicians are skilled and professional.",
  },
  {
    title: "Outstanding Customer Service",
    text: "Outstanding customer service! The team went above and beyond to ensure my vehicle was repaired quickly and correctly.",
  },
];

export default function Reviews() {
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
  return (
      
      <Carousel responsive={responsive} autoPlay={true} infinite={true} autoPlaySpeed={4000} removeArrowOnDeviceType={["tablet", "mobile"]}  pauseOnHover   className=" ">
      {reviews.map((data:any, index:any) => {
          return (
             <>     
             
            <div key={index} className="flex flex-col g-whmd:custom-bite  bg-[linear-gradient(93deg,#E60404_0.45%,#800202_74.27%,#850202_99.52%,#820202_99.53%)]  rounded-xl items-center gap-[8vh] lg:gap-[14vh] lg:w-[52vw] lg:h-[60vh] mx-auto pt-10 h-[55vh] w-[80%]">
            <div className="">
                <h2 className="font-bold text-white lg:text-5xl italic text-2xl text-center">"{ data.title}"</h2>
            </div>
            <div>
                <p className="text-white px-4 text-center text-xl lg:text-3xl italic">"{ data.text}"</p>
            </div>
                  </div>
                  </>
              )
          })}
 
</Carousel>
      
);
}
