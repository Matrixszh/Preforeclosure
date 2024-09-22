import React from "react";
import Image from "next/image";
import Nita from "../public/Nita.jpg";


export const ProfilePhoto = () => {
  return (
    <div className="hidden lg:block relative">
      

      <div
        className="p-12 shadow-2xl z-10 relative"
        style={{
          background: "#C7B77D",
          width: "30vw", // Adjust width based on your design
        }}
      >
        <Image
          src={Nita}
          alt="Nita"
          className="rounded-lg z-10"
          style={{ width: "100%" }} // Image width is relative to the parent div
          priority
        />
      </div>

      
    </div>
  );
};
