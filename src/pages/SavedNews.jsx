
import React, { useContext, useEffect, useState } from "react";
import UseBookmarkNewsData from "../hooks/UseBookmarkNewsData";
import Card from "./../component/UI/Card";
import { deleteUserSavedNewsData } from "../services/SavedNewsDataService";
import NewsContext from "../store/Context";
import UseSearchData from "../hooks/UseSearch";

const SavedNews = () => {
  const newsData = UseBookmarkNewsData();
  // console.log(newsData);
  const userId = localStorage.getItem("userId");
  const { setSavedNewsItems, savedNewsItems, searchTerm } = useContext(NewsContext);


  // const [saveNewsData, setSavedNewsData] = useState([]);

  useEffect(() => {
    setSavedNewsItems(newsData.reverse())
    // const data = savedNewsItems.reverse()
    // console.log(data);
  }, [newsData])
  const searchedNewsData = UseSearchData(savedNewsItems, searchTerm)
  // console.log(searchedNewsData);




  /**
   * get the newdId from the card via in  onDeleteSavedNews
   * @param {*} newsId 
   */
  const handleDeleteNewsData = (newsId) => {
    deleteUserSavedNewsData(userId, newsId)
    // setSavedNewsItems((prev) => {
    //   return prev.filter((res) => res.news_id !== newsId)
    // })
    searchedNewsData.filter((res) => res.news_id !== newsId)

  }


  return (
    <div>
      {searchedNewsData.map((res) => (
        //passing news data to card UI
        <Card news={res} id={res.news_id} key={res.id} onDeleteSavedNews={handleDeleteNewsData} />
      ))}
    </div>
  );
};

export default SavedNews;
