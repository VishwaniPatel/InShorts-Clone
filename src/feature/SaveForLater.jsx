import React, { useEffect, useState } from "react";
import { BookmarkIcon } from "@heroicons/react/outline";
import { BookmarkIcon as SolidBookmarkIcon } from "@heroicons/react/solid";
import { postUserSavedNewsData } from "../services/SavedNewsDataService";
import UseBookmarkNewsData from "../hooks/UseBookmarkNewsData";
const SaveForLater = ({ news }) => {
  const savedData = UseBookmarkNewsData();
  const [savedNews, setNewsData] = useState(null);
  const userId = localStorage.getItem("userId");
  const handleSavedNewsData = () => {
    postUserSavedNewsData(news, userId);
  };
  useEffect(() => {
    for (const newsItem of savedData) {
      if (news.id == newsItem.id) {
        setNewsData({
          ...news,
          isSaved: true,
        });
        return; // Exit loop after match is found
      }

      setNewsData({
        ...news,
        isSaved: false,
      });
    }
  }, [news, savedData]);
  return (
    <>
      {savedNews && (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg flex-shrink-0 absolute -top-5 right-5 md:static">
          {savedNews.isSaved ? (
            <SolidBookmarkIcon className="block h-5 w-5" />
          ) : (
            <BookmarkIcon
              className="block h-4 w-4"
              onClick={handleSavedNewsData}
            />
          )}
        </div>
      )}
    </>
  );
};

export default SaveForLater;



