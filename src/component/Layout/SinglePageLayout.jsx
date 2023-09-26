import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css';

import SinglePageNewsCard from "../UI/SinglePageNewsCard";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";

// Install Swiper modules

const SinglePageLayout = ({ news }) => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const swiperRef = useRef(null)
  useEffect(() => {
    if (!currentNewsIndex) {
      // swiperRef.current
      setCurrentNewsIndex(1)
    }
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowUp') {
        handlePreviousNews();
      }
      else if (event.key === 'ArrowDown') {
        handleNextNews();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    }

  }, [currentNewsIndex])

  const handleNextNews = () => {
    swiperRef.current.swiper.slideNext()
  };

  const handlePreviousNews = () => {
    swiperRef.current.swiper.slidePrev()
  };


  return (
    <>
      {news.length > 0 && (
        <div className="flex flex-col h-full ">
          <div className="flex justify-end">
            {/* Button to change previous news */}
            <button
              onClick={handlePreviousNews}
              disabled={currentNewsIndex === 0}
              className={`text-primary p-2 bg-inverted rounded-full ${currentNewsIndex === 0
                ? "disabled:opacity-50 cursor-not-allowed"
                : ""
                }`}
            >
              <ChevronUpIcon className="h-6 w-6 text-inverted" />
            </button>
          </div>

          <Swiper
            spaceBetween={40}
            direction="vertical"
            slidesPerView={1}
            // activeIndex={currentNewsIndex + 2}
            initialSlide={currentNewsIndex}
            // swipeHandler={() => { }}
            // onSwiper={(swiper) => setCurrentNewsIndex(1)}
            className="m-0"
            ref={swiperRef}
          >
            {news.map((newsItem, index) => (
              <SwiperSlide key={index}>
                <SinglePageNewsCard news={newsItem} key={news.id} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-end py-2">
            {/* Button to change next news */}
            <button
              onClick={handleNextNews}
              disabled={currentNewsIndex === news.length - 1}
              className="text-primary p-2 bg-inverted rounded-full"
            >
              <ChevronDownIcon className="h-6 w-6 text-inverted" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePageLayout;
