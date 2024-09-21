import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'
import { useState, useEffect } from 'react'
import { useWindowSize } from "@uidotdev/usehooks";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import PopupForm from "@/components/PopupForm";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

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
  const size = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBodyLocked, setIsBodyLocked] = useState(false);
  useEffect(() => {
    if (size?.width ?? 0 >= 768) {
      setIsMenuOpen(false);
    }
  }, [size.width]);
  useEffect(() => {
    if (isBodyLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isBodyLocked]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsBodyLocked(!isBodyLocked);
  };
    return (
      <>
        <header className={`fixed flex justify-between w-full px-1 md:p-2 max-h-[75px]  z-20 ${isScrolled ? 'bg-black' : 'bg-transparent'} scroll-smooth`}>
          {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 z-40"
            onClick={toggleMenu}
          ></div>
          )}
          <Image
                    src={logo}
                    alt="bg_image"
          />
            <div className="hidden lg:flex justify-between items-center gap-8">
                    <p className="text-white font-bold hover:text-[#e20303] cursor-pointer"> <a href="#about ">About</a></p>
                    <p className="text-white font-bold hover:text-[#e20303] cursor-pointer"><a href="#reviews">Reviews</a> </p>
                    <p className="text-white font-bold hover:text-[#e20303] cursor-pointer"><a href="#contact">Contact</a></p>
            </div>
                <div className="hidden lg:block">
                    <button className='relative overflow-hidden group p-3 rounded-[10px] text-white font-bold border-2 border-transparent hover:border-[#9E0506] transition-colors duration-300'>
                        <span onClick={openPopup} className='relative z-10'>BOOK AN APPOINTMENT</span>
                        <div className='absolute inset-0 bg-[linear-gradient(93deg,#E60404_0.45%,#800202_74.27%,#850202_99.52%,#820202_99.53%)] group-hover:opacity-0 transition-opacity duration-300'></div>
                    </button>
                </div>
          <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden  focus:outline-none  dark:text-gray-400 z-50 relative mt-3"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Toggle menu</span>
                    <RxHamburgerMenu className="w-8 h-8 text-white" />
          </button>
          
        </header>
        <div className={`fixed top-0 right-0 w-64 bg-black z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button
                    onClick={toggleMenu}
                    className="absolute top-4 right-4 text-white"
                    aria-label="Close menu"
                >
                    <RxCross1 className="w-8 h-8" />
                </button>
                <div className="flex flex-col  justify-between h-full py-[80px]">
                  <div className="flex flex-col gap-8 pl-10">
              
                    <p className="text-white font-bold hover:text-[#e20303] cursor-pointer mb-4"><a onClick={toggleMenu} href="#about ">About</a></p>
                    <p className="text-white font-bold hover:text-[#e20303] cursor-pointer mb-4"><a onClick={toggleMenu} href="#reviews">Reviews</a> </p>
                    <p className="text-white font-bold hover:text-[#e20303] cursor-pointer mb-4"><a onClick={toggleMenu} href="#contact">Contact</a></p>
                  </div>
                  <div className="flex justify-center">
                    <button onClick={toggleMenu} className='relative overflow-hidden group p-3 rounded-[10px] text-white font-bold border-2 border-transparent hover:border-[#9E0506] transition-colors duration-300 mt-4'>
                        <span onClick={openPopup}  className='relative z-10'>BOOK AN APPOINTMENT</span>
                        <div className='absolute inset-0 bg-[linear-gradient(93deg,#E60404_0.45%,#800202_74.27%,#850202_99.52%,#820202_99.53%)] group-hover:opacity-0 transition-opacity duration-300'></div>
                    </button>
                  </div>
                </div>
        </div>
        <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
      </>
    )
}
