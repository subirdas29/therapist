import { useEffect, useState, useCallback } from 'react';
import AllFeaturedTherapist from './AllFeaturedTherapist';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const FeaturedTherapist = () => {
  const [therapists, setTherapists] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    fetch('therapist.json')
      .then(res => res.json())
      .then(data => setTherapists(data));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrevClick = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? therapists.length - 1 : prevIndex - 1));
  }, [therapists.length]);

  const handleNextClick = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === therapists.length - 1 ? 0 : prevIndex + 1));
  }, [therapists.length]);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        handleNextClick();
      }, 3000); // Adjust the interval as needed

      return () => clearInterval(interval);
    }
  }, [isMobile, handleNextClick]);

  const visibleCount = isMobile ? 3 : 4;

  const visibleTherapists = therapists.length > 0 ? [
    therapists[currentIndex % therapists.length],
    therapists[(currentIndex + 1) % therapists.length],
    therapists[(currentIndex + 2) % therapists.length],
    therapists[(currentIndex + 3) % therapists.length],
  ].slice(0, visibleCount) : [];

  // Determine the index for the blue button
  const blueButtonIndex = isMobile ? Math.floor(visibleCount / 2) : 0;

  return (
    <div>
      <h1 className='mx-[30px] mt-[30px] mb-[18px] font-medium text-lg'>Featured Therapist</h1>
      <div className='bg-[#FFFFFF] md:mx-[30px] rounded-xl'>
        <div className='flex gap-6 rounded-xl py-[30px] md:p-[30px]'>
          {!isMobile && (
            <button onClick={handlePrevClick} className='lg:flex items-center'>
              <FaAngleLeft className='text-4xl bg-[#D4E9FF] text-[#152A16] rounded-full p-2' />
            </button>
          )}
          {visibleTherapists.map((therapist, index) => (
            <AllFeaturedTherapist
              key={therapist.id}
              therapist={therapist}
              isBlue={index === blueButtonIndex} // Pass the isBlue prop
            />
          ))}
          {!isMobile && (
            <button onClick={handleNextClick} className='lg:flex items-center'>
              <FaAngleRight className='text-4xl bg-[#156BCA] text-[#FFFFFF] rounded-full p-2' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedTherapist;
