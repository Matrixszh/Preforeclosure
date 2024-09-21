import React, { useEffect, useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";


export const Button_Component = () => {
    const [scrolled, setIsScrolled]=useState(false)
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    const handleCall = () => {
        window.location.href = 'tel:+1 (773) 743-8800';
      };
    return (
        <button onClick={handleCall} className="flex items-center justify-center rounded-full lg:w-20 lg:h-20 bg-black border-2 border-white w-10 h-10">
            <FaPhoneAlt className="text-red-600 lg:text-2xl text-md"/>
       </button>
    )
}
