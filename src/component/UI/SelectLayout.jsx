import React, { useContext, useState, useEffect } from "react";
import NewsContext from "../../store/Context";
import { ViewGridIcon } from "@heroicons/react/solid";
import { DocumentIcon } from "@heroicons/react/outline";
const SelectLayout = () => {
  const { showAlternateLayout, setShowAlternateLayout } =
    useContext(NewsContext);

  // Toggle the layout on click of button
  const toggleLayout = () => {
    if (showAlternateLayout) {
      setShowAlternateLayout(false);
      localStorage.setItem("layout", "grid");
    } else {
      setShowAlternateLayout(true);
      localStorage.setItem("layout", "single");
    }
  };

  useEffect(() => {
    const storedLayout = localStorage.getItem("layout");
    if (storedLayout === "grid") {
      setShowAlternateLayout(false)
    } else {
      setShowAlternateLayout(true)
    }
  }, []);



  return (
    <div
      className="relative flex cursor-pointer"
      data-te-toggle="tooltip"
      data-te-placement="top"
      data-te-ripple-init
      data-te-ripple-color="light"
      title="Change Layout"
      onClick={toggleLayout}

    >
      {/* Display tooltip on hover */}
      <div className="absolute bottom-0 left-0 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded-md opacity-0 invisible transition-opacity duration-300">
        Change Layout
      </div>
      {showAlternateLayout ? (
        // View multiple cards of news
        <ViewGridIcon className="w-6 h-6 ms-2 sm:text-primary text-inverted" />
      ) : (
        // View single card of news
        <DocumentIcon className="w-6 h-6 ms-2 sm:text-primary text-inverted" />
      )}
      <span className="text-inverted block sm:hidden ps-4">Layout</span>
    </div>
  );
};

export default SelectLayout;
