
import React, { useContext, useEffect, useState } from "react";
import UseBookmarkNewsData from "../hooks/UseBookmarkNewsData";
import Card from "./../component/UI/Card";
import { deleteUserSavedNewsData } from "../services/SavedNewsDataService";
import NewsContext from "../store/Context";

const SavedNews = () => {
  const newsData = UseBookmarkNewsData();
  // console.log(newsData);
  const userId = localStorage.getItem("userId");
  const { setSavedNewsItems, savedNewsItems } = useContext(NewsContext);


  // const [saveNewsData, setSavedNewsData] = useState([]);

  useEffect(() => {
    setSavedNewsItems(newsData)
  }, [newsData])



  /**
   * get the newdId from the card via in  onDeleteSavedNews
   * @param {*} newsId 
   */
  const handleDeleteNewsData = (newsId) => {
    deleteUserSavedNewsData(userId, newsId)
    setSavedNewsItems((prev) => {
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
      {savedNewsItems.map((res) => (
        //passing news data to card UI
        <Card news={res} id={res.news_id} key={res.id} onDeleteSavedNews={handleDeleteNewsData} />
      ))}
    </div>
  );
};

export default SavedNews;
