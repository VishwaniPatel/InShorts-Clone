import React, { useContext, useState, useEffect } from "react";
import SinglePageNewsCard from "../UI/SinglePageNewsCard";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import NewsContext from "../../store/Context";
const SinglePageLayout = ({ news }) => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  useEffect(() => {
    setCurrentNewsIndex(0);
  }, []);
  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        // Scrolled down, go to the next news item
        handleNextNews();
      } else if (event.deltaY < 0) {
        // Scrolled up, go to the previous news item
        handlePreviousNews();
      }
    };

    // Attach the scroll event listener to the document
    document.addEventListener("wheel", handleScroll);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener("wheel", handleScroll);
    };
  }, [currentNewsIndex]);

  // Change next news on click of button
  const handleNextNews = () => {
    if (currentNewsIndex < news.length - 1) {
      setCurrentNewsIndex(currentNewsIndex + 1);
    }
  };
  // Change previous news on click of button
  const handlePreviousNews = () => {
    if (currentNewsIndex > 0) {
      setCurrentNewsIndex(currentNewsIndex - 1);
    }
  };
  return (
    <>
      {news.length > 0 && (
        <div className="flex flex-col">
          <div className="flex justify-end">
            {/* Button to change previous news */}
            <button
              onClick={handlePreviousNews}
              disabled={currentNewsIndex === 0}
              className={`text-primary p-2 bg-inverted rounded-full ${
                currentNewsIndex === 0
                  ? "disabled:opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <ChevronUpIcon className="h-6 w-6  text-inverted" />
            </button>
          </div>
          {/* News card to display single news */}
          <SinglePageNewsCard news={news[currentNewsIndex]} key={news.id} />
          <div className="flex justify-end">
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
