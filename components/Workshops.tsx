import { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import bg_img from "../public/bg_img.jpg";

// Add image URLs to the reviews
const reviews = [
  {
    title: "Excellent Service",
    text: "The service at Xcellent Auto Repair was exceptional. The staff was friendly and the repairs were done promptly. Highly recommend!",
    image: bg_img,
  },
  {
    title: "Great Experience",
    text: "I had a great experience with Xcellent Auto Repair. They were transparent about the repairs and the costs. My car has never run better!",
    image: bg_img,
  },
  {
    title: "Highly Recommend",
    text: "Xcellent Auto Repair is the place to go for reliable and honest auto repair. The technicians are skilled and professional.",
    image: bg_img,
  },
  {
    title: "Outstanding Customer Service",
    text: "Outstanding customer service! The team went above and beyond to ensure my vehicle was repaired quickly and correctly.",
    image: bg_img,
  },
];

export default function ReviewsWithProgressBar() {
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const autoPlaySpeed = 4000; // Auto-play duration (in ms)
  const totalProgress = 100; // 100% progress
  const updateInterval = 100; // Interval to update progress bar in ms

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  // Reset progress bar when slide changes
  const handleBeforeChange = (nextSlide: number) => {
    setProgress(0);
    setCurrentIndex(nextSlide);
  };

  // Update progress bar on each interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= totalProgress) return 0; // Reset if complete
        return prevProgress + (100 / (autoPlaySpeed / updateInterval));
      });
    }, updateInterval);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  // Handle progress bar click to change slides
  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBarWidth = e.currentTarget.offsetWidth;
    const clickPosition = e.clientX - e.currentTarget.getBoundingClientRect().left;
    const newIndex = Math.floor((clickPosition / progressBarWidth) * reviews.length);
  
    if (newIndex >= 0 && newIndex < reviews.length) {
      setCurrentIndex(newIndex);
      setProgress(0); // Reset progress when clicked
    }
  };
  

  return (
    <div className="w-full flex flex-col items-center">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={autoPlaySpeed}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        pauseOnHover
        beforeChange={handleBeforeChange}
        className="w-full"
 // Set current index for Carousel
      >
        {reviews.map((data, index) => (
          <div
            key={index}
            className="flex flex-col bg-[linear-gradient(93deg,#AC9552_40%,#F6CA78_70%,#AC9552_100%)] shadow-lg border-2 border-[#AC9552] rounded-xl items-start p-6 gap-4 lg:w-[50vw] lg:h-[70vh] mx-auto pt-6 w-[80%]"
            style={{ minHeight: '70vh' }} // Ensure enough height for the content
          >
            {/* Image at the top */}
            <div className="w-full h-[40vh] relative mb-4">
              <Image
                src={data.image}
                alt={data.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                priority
              />
            </div>

            {/* Title and Description */}
            <div className="text-left w-full">
              <h2 className="text-black font-semibold text-[#AC9552] lg:text-2xl text-lg mb-2">"{data.title}"</h2>
              <p className="text-black text-base lg:text-xl">"{data.text}"</p>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Progress Bar */}
      <div className="w-[80%] lg:w-[50vw] h-2 bg-gray-200 mt-4 rounded-full" onClick={handleProgressBarClick}>
        <div
          className="h-full bg-[#AC9552] rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
