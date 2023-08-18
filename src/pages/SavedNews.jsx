import React, { useContext, useEffect, useState } from "react";
import UseBookmarkNewsData from "../hooks/UseBookmarkNewsData";
import Card from "./../component/UI/Card";
import { deleteUserSavedNewsData } from "../services/SavedNewsDataService";

const SavedNews = () => {
  const newsData = UseBookmarkNewsData();
  const userId = localStorage.getItem("userId");

  const [saveNewsData, setSavedNewsData] = useState([]);

  useEffect(() => {
    setSavedNewsData(newsData)
    console.log(saveNewsData);
  }, [newsData])



  /**
   * get the newdId from the card via in  onDeleteSavedNews
   * @param {*} newsId 
   */
  const handleDeleteNewsData = (newsId) => {
    deleteUserSavedNewsData(userId, newsId)
    setSavedNewsData((prev) => {
      return prev.filter((res) => res.news_id !== newsId)
    })
    // console.log('id', newsId, newsData[0].news_id)
    // const deleteNewsId = saveNewsData.filter((res) => res.news_id !== newsId)
    // console.log(deleteNewsId)
    // saveNewsData.splice(deleteNewsId, 1)
    // saveNewsData.splice(0, 1)
  }


  return (
    <div>
      {saveNewsData.map((res) => (
        //passing news data to card UI
        <Card news={res} id={res.news_id} key={res.id} onDeleteSavedNews={handleDeleteNewsData} />
      ))}
    </div>
  );
};

export default SavedNews;
