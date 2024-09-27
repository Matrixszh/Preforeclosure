import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import bg_img from "../public/bg_img.jpg";
import cm1 from "../public/cm1.jpg";
import cm2 from "../public/cm2.jpg";
import cm3 from "../public/meet6.jpg";
import cm4 from "../public/cm4.jpg";

// Add image URLs to the reviews
const reviews = [
  {
    title: "Excellent Service",
    text: "The service at Xcellent Auto Repair was exceptional. The staff was friendly and the repairs were done promptly. Highly recommend!",
    image: cm1, // Add the path to the image
  },
  {
    title: "Great Experience",
    text: "I had a great experience with Xcellent Auto Repair. They were transparent about the repairs and the costs. My car has never run better!",
    image: cm2,
  },
  {
    title: "Highly Recommend",
    text: "Xcellent Auto Repair is the place to go for reliable and honest auto repair. The technicians are skilled and professional.",
    image: cm3,
  },
  {
    title: "Outstanding  Service",
    text: "Outstanding customer service! The team went above and beyond to ensure my vehicle was repaired quickly and correctly.",
    image: cm4,
  },
];

export default function MeetUps() {
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

  return (
    <>
      <div className="hidden md:flex">
        <div className="flex flex-wrap items-center justify-center gap-16 w-full px-7">
          {reviews.map((data: any, index: any) => {
            return (
              <Image
                key={index}
                src={data.image}
                alt={data.title}
                className="rounded-xl w-[20%] object-contain"
              />
            );
          })}
        </div>
      </div>
      <div className="md:hidden">
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
                className="flex flex-col bg-white shadow-3xl border-2 border-[#AC9552] rounded-xl items-start p-6 gap-4 lg:w-[50vw] lg:h-[70vh] mx-auto pt-6 w-[90%] shadow-lg"
              >
                {/* Image at the top */}
                <div className="w-full aspect-[4/4] relative mb-4">
                  <Image
                    src={data.image}
                    alt={data.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
