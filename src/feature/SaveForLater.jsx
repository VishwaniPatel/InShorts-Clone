import React, { useContext, useEffect, useState } from "react";
import { BookmarkIcon } from "@heroicons/react/outline";
import { BookmarkIcon as SolidBookmarkIcon } from "@heroicons/react/solid";
import { deleteUserSavedNewsData, postUserSavedNewsData } from "../services/SavedNewsDataService";
import { toast } from "react-toastify";
import NewsContext from "../store/Context";


const SaveForLater = ({ news, newsId, onDeletedata }) => {

  const { savedNewsItems } = useContext(NewsContext)

  // Use local component state to manage icon visibility
  const userId = localStorage.getItem("userId");
  const [isSaved, setIsSaved] = useState(false);


  // const savedNewsData = UseBookmarkNewsData()
  useEffect(() => {
    const isNewsSaved = savedNewsItems.find((res) => res.id === news.id)
    setIsSaved(isNewsSaved)
  }, [savedNewsItems, news.id])

  /**
   *
   */
  const handleSavedNewsData = () => {
    postUserSavedNewsData(news, userId).then(() => {
      setIsSaved(true)
    })
    /**
     * for showing message when news is saved
     */
    toast.success('Saved News Successfully', {
      position: toast.POSITION.TOP_RIGHT
    })
  }

  /**
   * send id to the Card Component
   */
  const handleDeleteNewsData = () => {
    setIsSaved(false)
    deleteUserSavedNewsData(userId, newsId)
    savedNewsItems.filter((res) => res.news_id !== newsId)
    onDeletedata(newsId)
    /**
     * show message when news is deleted
     */
    toast.error('Delete saved newsdata', {
      position: toast.POSITION.TOP_RIGHT
    })

  }


  return (
    <>
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg flex-shrink-0 absolute -top-5 right-5 md:static cursor-pointer">
        {isSaved ? (
          <SolidBookmarkIcon className="block h-5 w-5 " onClick={handleDeleteNewsData} />
        ) : (
          <BookmarkIcon className="block h-4 w-4 " onClick={handleSavedNewsData} />
        )}
        {/* <ToastContainer /> */}
      </div>
    </>
  );
};

export default SaveForLater;