import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Data } from "./Data/Carousel_Services_data"
import Image from 'next/image';

const Carousel_Services = () => {
    
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
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
        {Data.map((data:any, index:any) => {
            return (
               <>     
                <div className="flex items-center justify-center relative top-12">
                <Image
                key={index}
                 src={data.img}
                alt="services img"
                height={100}
                />
                            
                </div>
              <div key={index} className="flex flex-col md:custom-bg-white  bg-[linear-gradient(1deg,rgba(0,0,0,0.99)_0.93%,rgba(81,81,81,0.99)_99.01%)]  rounded-xl items-center gap-8 h-[350px] w-[300px] mx-auto ">
              <div className="mt-10">
                  <h2 className="text-white text-3xl pt-10">{ data.title}</h2>
              </div>
              <div>
                  <p className="text-white px-4 text-center">{ data.info}</p>
              </div>
                    </div>
                    </>
                )
            })}
   
</Carousel>
        
  );
};

export default Carousel_Services;