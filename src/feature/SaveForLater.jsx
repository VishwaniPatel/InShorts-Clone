import React, { useEffect, useState } from "react";
import { BookmarkIcon } from "@heroicons/react/outline";
import { BookmarkIcon as SolidBookmarkIcon } from "@heroicons/react/solid";
import { postUserSavedNewsData } from "../services/SavedNewsDataService";
import UseBookmarkNewsData from "../hooks/UseBookmarkNewsData";


const SaveForLater = ({ news, newsId, onDeletedata }) => {
  // console.log(news);
  // Use local component state to manage icon visibility
  const userId = localStorage.getItem("userId");
  const [isSaved, setIsSaved] = useState(false);


  const savedNewsData = UseBookmarkNewsData()
  // console.log(savedNewsData);
  useEffect(() => {
    const isNewsSaved = savedNewsData.find((res) => res.id === news.id)
    // setIsSaved(isNewsSaved);
    setIsSaved(isNewsSaved)
  }, [savedNewsData, news.id])

  /**
   *
   */
  const handleSavedNewsData = () => {

    postUserSavedNewsData(news, userId).then(() => {
      setIsSaved(true)
    })
    // setSavedNewsItems((prevBookmarkNews) => [...prevBookmarkNews, news])
  }

  /**
   * send id to the Card Component
   */
  const handleDeleteNewsData = () => {
    // deleteUserSavedNewsData(userId, newsId).then(() => {
    //   const dataIndex = savedNewsData.findIndex((item) => item.id === newsId)
    //   savedNewsData.splice(dataIndex, 1)
    //   
    // })
    setIsSaved(false)
    onDeletedata(newsId)

  }


  return (
    <>
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg flex-shrink-0 absolute -top-5 right-5 md:static cursor-pointer">
        {isSaved ? (
          <SolidBookmarkIcon className="block h-5 w-5 " onClick={handleDeleteNewsData} />
        ) : (
          <BookmarkIcon className="block h-4 w-4 " onClick={handleSavedNewsData} />
        )}
      </div>
    </>
  );
};

export default SaveForLater;