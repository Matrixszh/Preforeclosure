import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import meet1 from "../public/meet1.jpg";
import meet2 from "../public/meet2.jpg";
import meet3 from "../public/meet3.jpg";
import meet4 from "../public/meet4.jpg";
import meet5 from "../public/meet5.jpg";

// Add image URLs to the reviews
const reviews = [
  {
    title: "Finding Preforeclosure Leads",
    text: "Nita teaches how to find preforeclosure leads using public records and real estate tools. You’ll discover strategies for building a reliable lead pipeline that keeps opportunities flowing consistently.",
    image: meet1,
  },
  {
    title: "Scrubbing and Narrowing Down Leads",
    text: "Nita explains how to refine your list by scrubbing out entries. Then, she shows how to narrow down leads by analyzing factors like property details and urgency, helping you focus on the highest-potential deals.",
    image: meet3,
  },
  {
    title: "Talking To Homeowners",
    text: "Learn effective communication strategies for cold calling and door knocking. Nita shares techniques to build trust with homeowners and their families, approaching them with empathy and professionalism to increase your chances of closing deals.",
    image: meet4,
  },
  {
    title: "Tools and Resources",
    text: "We’re committed to making sure you’ve got everything you need to get out there and land those deals! Along with access to loads of training and education, these tools in your arsenal will help you close successful deals!",
    image: meet5,
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
        return prevProgress + 100 / (autoPlaySpeed / updateInterval);
      });
    }, updateInterval);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  // Handle progress bar click to change slides
  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBarWidth = e.currentTarget.offsetWidth;
    const clickPosition =
      e.clientX - e.currentTarget.getBoundingClientRect().left;
    const newIndex = Math.floor(
      (clickPosition / progressBarWidth) * reviews.length
    );

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
      >
        {reviews.map((data, index) => (
          <div
            key={index}
            className="flex flex-col bg-[linear-gradient(93deg,#AC9552_40%,#F6CA78_70%,#AC9552_100%)] shadow-lg border-2 border-[#AC9552] rounded-xl items-start p-6 gap-4 lg:w-[50vw] lg:h-[70vh] mx-auto pt-6 w-[90%] min-h-[70vh]"
            // Ensure enough height for the content
          >
            {/* Image at the top */}
            <div className="w-full aspect-[4/3] relative mb-4">
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
              <h2 className="text-black font-semibold text-[#AC9552] lg:text-lg text-lg mb-2">
                "{data.title}"
              </h2>
              <p className="text-black text-base lg:text-xl">"{data.text}"</p>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Progress Bar */}
      <div
        className="w-[80%] lg:w-[50vw] h-2 bg-gray-200 rounded-full my-4"
        onClick={handleProgressBarClick}
      >
        <div
          className="h-full bg-[#AC9552] rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
