import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
export const Footer = () => {
    const handleCall = () => {
        window.location.href = 'tel:+1 (773) 743-8800';
      };
    return (
        

<footer id="contact" className="bg-white rounded-lg shadow dark:bg-gray-900  ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Image src={logo} alt="logo"/>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#AboutUs" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#meetups" className="hover:underline me-4 md:me-6">Meet Ups</a>
                </li>
                <li>
                    <a onClick={handleCall}   className="hover:underline">Contact</a>
                </li>
            </ul>
            
        </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="flex flex-col items-center justify-center gap-8 mb-3">
                    <div className="flex gap-4 items-center">
                        <FaPhoneAlt className="text-[#C1C1C1] lg:text-2xl text-lg"/>
                        <p className="text-[#C1C1C1] lg:text-2xl text-lg">+1 (773) 743-8800</p>
                     </div>
                    <div className="flex gap-4 items-center">
                        <FaLocationDot className="text-[#C1C1C1] lg:text-2xl text-lg"/>
                        <p className="text-[#C1C1C1]  lg:text-2xl text-lg">6233 N California Ave, Chicago, IL 60659</p>
                    </div>
                </div>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">™</a>. All Rights Reserved.</span>
    </div>
</footer>


    )
}
