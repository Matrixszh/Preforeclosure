import React, { useState, useEffect } from 'react';
import { useWindowSize } from "@uidotdev/usehooks";
import Carousel_Services from './Carousel_Services';
import Image from 'next/image';
import { Data } from '@/components/Data/Carousel_Services_data';

const Services = () => {

  return (
    <>
      <div className="block sm:hidden">
        <Carousel_Services />
      </div>
      <div className="hidden sm:block mt-[100px]">
        <div className="w-full px-4 md:px-[5.313vw] md:pb-10">
          <div className="flex flex-wrap justify-center">
            {Data.map((data, index) => (
              <div key={index} className="flex flex-col items-center mb-8 px-2  md:mb-0 md:w-1/2 lg:w-1/4">
                <Image src={data.img} alt="img" className="w-36 h-auto" />
                <div className="flex flex-col items-center py-2 gap-4 px-4">
                  <h3 className=" text-[#FF0202] text-2xl md:text-3xl">{data.title}</h3>
                  <p className=" text-black text-base md:text-lg text-center">{data.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
