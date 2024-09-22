// components/ImageWithDescription.tsx
// components/ImageWithDescription.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

// Define the YouTube video URLs with descriptions and background colors
const videos = [
  {
    src: 'https://www.youtube.com/embed/R-BWQAclh4Y?si=6tDUyhd7Khk1dYR', // Example YouTube URL
    description: "Nita Patel shares her journey from hardship to success as a real estate wholesaler. After overcoming a difficult childhood and abusive marriage, she began wholesaling with $5,000. Through perseverance, door-knocking, and targeting overlooked deals, she built a thriving business, emphasizing self-belief and consistency in achieving success.",
    bgColor: '#000000', // Black
  },
  {
    src: 'https://www.youtube.com/embed/OjRC4JE8bzc?si=-zUwQ9Bii9wGaEjh', // Example YouTube URL
    description:"Nita Patel shares her journey from an accounting job to becoming a successful real estate investor in Chicago. She discusses her methods of acquiring deals, including door-knocking, cold-calling, and using lead sources. Nita emphasizes the importance of mindset, persistence, and personal development. She plans to expand into multi-unit properties and group homes for battered women.",
    bgColor: '#706129', // dark blue
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
      className="w-full min-h-screen flex flex-col justify-start items-center text-center bg-[#1a1a1a] px-4 pt-8 lg:pt-16"
      animate={{ backgroundColor: currentVideo.bgColor }}
      transition={{ duration: 1.5 }}
    >
      {/* Title Section */}
      <div className="flex flex-col items-center gap-2 justify-center mb-8 lg:mb-16">
        <p className="text-[#c2a85b] text-center px-8 py-1 rounded-2xl text-sm tracking-wider">
          See What We Do
        </p>
        <div className="flex items-center justify-center">
          <div className="h-[2px] w-16 bg-gray-400 mr-4"></div>
          <h1 className="text-white text-center text-3xl lg:text-6xl">
            Collaborations
          </h1>
          <div className="h-[2px] w-16 bg-gray-400 ml-4"></div>
        </div>
      </div>

      {/* Video and Navigation Dots */}
      <div {...handlers} className="relative mt-8 w-full flex justify-center">
        {/* Replace Image component with an iframe for the video */}
        <iframe
          src={currentVideo.src}
          title="YouTube video player"
          width="600"
          height="400"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl shadow-lg"
        ></iframe>
        <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex gap-2">
          {videos.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-4 w-4 rounded-full cursor-pointer ${
                index === currentIndex ? 'bg-[#c2a85b]' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <motion.p
        className="text-gray-300 mt-12 text-lg font-light max-w-[600px] px-4"
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