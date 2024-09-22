import React from "react";
import Image from "next/image";
import Nita from "../public/Nita.jpg";
import { ProfilePhoto } from "./ProfilePhoto";
export const AboutUs = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-5  lg:px-16 gap-14">
      <div className="flex flex-col gap-6  lg:items-start items-center">
        <h1 className="flex gap-2 text-3xl text-black lg:text-4xl">
          Meet{" "}
          <span className="flex flex-col text-[#AC9552] items-center ">
            <p>Nita</p>

          </span>{" "}
        </h1>
        <p
          className="text-lg text-black lg:text-xl lg:pr-14 text-justify text-center  px-2 tracking-tight"
          style={{ lineHeight: "1.85" }}
        >
         Nita has been doing direct-to-seller since 2017 and has done numerous
          deals that include mainly preforeclosures and probates. Currently, 
          she is partnering with people nationwide and creating a door-knocking
           team in Illinois. She is the co-host on the preforeclosures daily dial 
           in the SubTo Community every Wednesday with Caroline Cain and is a leader
            in Chicago. When her and her husband started, they had no money, so she
             was forced to doing direct-to-seller to find the best deals out there. 
             She has done a lot of mindset work/wholesaling training and masterminds.
              
          <span className="hidden lg:flex lg:pt-4 tracking-tight">
          She has also done intensive meditation training and is a Master with 
              body and brain centers, which has helped her in her success and healing
               from her past traumas. She has been a victor, not a victim of domestic
                violence, and her purpose is to build homes for women that go through
                 domestic violence.
          </span>
        </p>
      </div>
      <div className="">
        <ProfilePhoto />
        <Image
          src={Nita}
          alt="Nita"
          className="rounded-full lg:hidden  w-[70vw] shadow-2xl"
        />
      </div>
    </div>
  );
};
