import React, { useContext } from "react";
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
    } else {
      setShowAlternateLayout(true);
    }
  };
  return (
    <div
      className="relative"
      data-te-toggle="tooltip"
      data-te-placement="top"
      data-te-ripple-init
      data-te-ripple-color="light"
      title="Change Layout"
    >
      {/* Display tooltip on hover */}
      <div className="absolute bottom-0 left-0 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded-md opacity-0 invisible transition-opacity duration-300">
        Change Layout
      </div>
      {showAlternateLayout ? (
        // View multiple cards of news
        <ViewGridIcon className="w-6 h-6 ms-2" onClick={toggleLayout} />
      ) : (
        // View single card of news
        <DocumentIcon className="w-6 h-6 ms-2" onClick={toggleLayout} />
      )}
    </div>
  );
};

export default SelectLayout;
