import React, { useEffect, useState } from "react";
import { BookmarkIcon } from "@heroicons/react/outline";
import { BookmarkIcon as SolidBookmarkIcon } from "@heroicons/react/solid";
import { deleteUserSavedNewsData, getUserSavedNewsData, postUserSavedNewsData } from "../services/SavedNewsDataService";
import UseBookmarkNewsData from "../hooks/UseBookmarkNewsData";
const SaveForLater = ({ news }) => {
  // console.log(news);
  // Use local component state to manage icon visibility

  const userId = localStorage.getItem("userId");
  const [isSaved, setIsSaved] = useState(false);
  const [getDeleteItem, setGetDeleteItem] = useState(false);

  const savedNewsData = UseBookmarkNewsData()
  // console.log(savedNewsData);
  useEffect(() => {
    const isNewsSaved = savedNewsData.filter((res) => {
      if (res.id === news.id) {
        setIsSaved(true);
        return res
      }
    })
    setGetDeleteItem(...isNewsSaved)
  }, [savedNewsData, news.id])

  /**
   *
   */
  const handleSavedNewsData = () => {
    console.log(isNewsSaved)
    postUserSavedNewsData(news, userId).then(() => {
      setIsSaved(true)
    })
  }

  const handleDeleteNewsData = () => {
    console.log(getDeleteItem)
    deleteUserSavedNewsData(userId, savedNewsData.id).then(() => {
      setIsSaved(false)
      // getUserSavedNewsData()
    })
  }


  return (
    <>
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg flex-shrink-0 absolute -top-5 right-5 md:static">
        {isSaved ? (
          <SolidBookmarkIcon className="block h-5 w-5 cursor-pointer" onClick={handleDeleteNewsData} />
        ) : (
          <BookmarkIcon className="block h-4 w-4 cursor-pointer" onClick={handleSavedNewsData} />
        )}
      </div>
    </>
  );
};

export default SaveForLater;



