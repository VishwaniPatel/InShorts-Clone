import React from "react";
import { BookmarkIcon } from "@heroicons/react/outline";
import { BookmarkIcon as SolidBookmarkIcon } from "@heroicons/react/solid"
import { postUserSavedNewsData } from "../services/SavedNewsDataService";
const SaveForLater = ({ news }) => {

  const userId = localStorage.getItem("userId")

  /**
   * 
   */
  const handleSavedNewsData = () => {
    postUserSavedNewsData(news, userId)
  }




  return (
    <>
      <div className="flex  items-center justify-center  w-10 h-10 rounded-full bg-white shadow-lg flex-shrink-0 absolute -top-5 right-5 md:static ">
        <BookmarkIcon className="block h-4 w-4" onClick={handleSavedNewsData} />
      </div>
      <div className="flex  items-center justify-center  w-10 h-10 rounded-full bg-white shadow-lg flex-shrink-0 absolute -top-5 right-5 md:static">
        <SolidBookmarkIcon className=" block h-5 w-5" />
      </div>
    </>
  );
};

export default SaveForLater;
