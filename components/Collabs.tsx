// components/ImageWithDescription.tsx
// components/ImageWithDescription.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

// Define the YouTube video URLs with descriptions and background colors
const videos = [
  {
    id: "EmiZdD0ZCiM?si=seje_DjbeXk5ePJt", // Example YouTube URL
    description:
      "Nita Patel transformed her life from an abusive marriage and financial struggles to becoming a multi-millionaire in real estate. Through personal development and focusing on off-market deals, she built a portfolio of 26 rental properties. Nita emphasizes the importance of mindset, persistence, and building rapport with sellers in her journey",
    bgColor: "#000000", // dark blue
  },
  {
    id: "OjRC4JE8bzc?si=-zUwQ9Bii9wGaEjh", // Example YouTube URL
    description:
      "Nita Patel shares her journey from an accounting job to becoming a successful real estate investor in Chicago. She discusses her methods of acquiring deals, including door-knocking, cold-calling, and using lead sources. Nita emphasizes the importance of mindset, persistence, and personal development. She plans to expand into multi-unit properties and group homes for battered women.",
    bgColor: "#706129", // dark blue
  },
  {
    id: "R-BWQAclh4Y?si=6tDUyhd7Khk1dYR", // Example YouTube URL
    description:
      "Nita Patel shares her journey from hardship to success as a real estate wholesaler. After overcoming a difficult childhood and abusive marriage, she began wholesaling with $5,000. Through perseverance, door-knocking, and targeting overlooked deals, she built a thriving business, emphasizing self-belief and consistency in achieving success.",
    bgColor: "#01032D", // Black
  },
];

export default function Collabs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setCurrentVideo(videos[currentIndex]);
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 1
      );
    }, 30);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setProgress(0);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrevious = () => {
    setProgress(0);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
    trackMouse: true,
    trackTouch: true,
    onSwiping: (event) => event.event.preventDefault(),
  });

  return (
    <motion.div
      className="w-full flex flex-col justify-start items-center text-center bg-[#1a1a1a] px-4 pt-8 lg:pt-16"
      animate={{ backgroundColor: currentVideo.bgColor }}
      transition={{ duration: 1.5 }}
    >
      {/* Video and Navigation Dots */}
      <div
        {...handlers}
        className="relative w-full lg:w-[45vw] lg:h-[45vh] md:w-[35vw] md:h-[20vh] h-[54vw]"
      >
        Replace Image component with an iframe for the video
        <iframe
          src={`https://www.youtube.com/embed/${currentVideo.id}`}
          title="YouTube video player"
          width="600"
          height="400"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-lg"
        ></iframe>
        <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex gap-2">
          {videos.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-4 w-4 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-[#c2a85b]" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <motion.p
        className="text-gray-300 md:text-xl text-sm leading-7 py-12 text-justify lg:max-w-[70%] "
        key={currentVideo.description}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {currentVideo.description}
      </motion.p>
    </motion.div>
  );
}
