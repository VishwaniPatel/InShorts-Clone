import React, { useEffect, useState } from "react";
import UseBookmarkNewsData from "../hooks/UseBookmarkNewsData";
import Card from "./../component/UI/Card";

const SavedNews = () => {
  const newsData = UseBookmarkNewsData();

  const [saveNewsData, setSavedNewsData] = useState([]);

  useEffect(() => {
    setSavedNewsData(newsData)
  }, [newsData])
  return (
    <div>
      {saveNewsData.map((res) => (
        //passing news data to card UI
        <Card news={res} id={res.news_id} key={res.id} />
      ))}
    </div>
  );
};

export default SavedNews;
