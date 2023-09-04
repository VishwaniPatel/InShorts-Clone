import React, { useContext, useEffect, useState } from "react";
import UseBookmarkNewsData from "../customeHooks/UseBookmarkNewsData";
import Card from "./../component/UI/Card";
import { deleteUserSavedNewsData } from "../services/SavedNewsDataService";
import NewsContext from "../store/Context";

const SavedNews = () => {
  const newsData = UseBookmarkNewsData();
  const userId = localStorage.getItem("userId");
  const { setSavedNewsItems, savedNewsItems } = useContext(NewsContext);
  useEffect(() => {
    const savedData = newsData.reverse();
    setSavedNewsItems(savedData);
  }, [newsData]);

  /**
   * get the newdId from the card via in  onDeleteSavedNews
   * @param {*} newsId
   */
  const handleDeleteNewsData = (newsId) => {
    deleteUserSavedNewsData(userId, newsId);
    setSavedNewsItems((prev) => {
      return prev.filter((res) => res.news_id !== newsId);
    });
  };

  return (
    <>
      {savedNewsItems.map((res) => (
        //passing news data to card UI
        <Card
          news={res}
          id={res.news_id}
          key={res.id}
          onDeleteSavedNews={handleDeleteNewsData}
        />
      ))}
    </>
  );
};

export default SavedNews;
