import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import nissan from "../public/nissan.png";
import toyota from "../public/toyota.png";
import honda from "../public/honda.png";
import mercedes from "../public/mercedes2.png";
import vw from "../public/Volkswagen.png"
import audi from "../public/audi.png"
import LandRover from "../public/LandRover.png"
import BMW from "../public/BMW.png"
import Skoda from "../public/Skoda.png"

interface Brand {
  image: StaticImageData;
}

const brands: Brand[] = [
  { image: vw },
  { image: audi },
  { image: LandRover },
  { image: Skoda },
  { image: nissan },
  { image: toyota },
  { image: honda },
  { image: mercedes },
];

export default function Brands() {
  return (
    <div className="slider-container overflow-hidden">
      <div className="slider">
        {[...brands, ...brands, ...brands].map((data, index) => (
          <div
            key={index}
            className="slide flex items-center justify-center h-[30vh] lg:h-[60vh] w-full px-4"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={data.image}
                alt={`Brand ${(index % brands.length) + 1}`}
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}