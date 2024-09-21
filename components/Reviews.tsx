import { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import bg_img from "../public/bg_img.jpg"

// Add image URLs to the reviews
const reviews = [
  {
    title: "Excellent Service",
    text: "The service at Xcellent Auto Repair was exceptional. The staff was friendly and the repairs were done promptly. Highly recommend!",
    image: bg_img, // Add the path to the image
  },
  {
    title: "Great Experience",
    text: "I had a great experience with Xcellent Auto Repair. They were transparent about the repairs and the costs. My car has never run better!",
    image: bg_img,
  },
  {
    title: "Highly Recommend",
    text: "Xcellent Auto Repair is the place to go for reliable and honest auto repair. The technicians are skilled and professional.",
    image: bg_img,
  },
  {
    title: "Outstanding Customer Service",
    text: "Outstanding customer service! The team went above and beyond to ensure my vehicle was repaired quickly and correctly.",
    image: bg_img,
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
    <Carousel
      responsive={responsive}
      autoPlay={true}
      infinite={true}
      autoPlaySpeed={4000}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      pauseOnHover
      className=""
    >
      {reviews.map((data: any, index: any) => {
        return (
          <div
            key={index}
            className="flex flex-col bg-white shadow-3xl border-2 border-[#AC9552] rounded-xl items-start p-6 gap-4 lg:w-[50vw] lg:h-[70vh] mx-auto pt-6 w-[80%] shadow-lg"
          >
            {/* Image at the top */}
            <div className="w-full h-[40vh] relative mb-4">
              <Image
                src={data.image}
                alt={data.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>

            {/* Title and Description */}
            <div className="text-left w-full">
              <h2 className="font-semibold text-[#AC9552] lg:text-2xl text-lg mb-2">"{data.title}"</h2>
              <p className="text-black text-base lg:text-xl">"{data.text}"</p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}