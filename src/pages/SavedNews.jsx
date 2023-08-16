import React, { useEffect, useState } from "react";
import UseBookmarkNewsData from "../hooks/UseBookmarkNewsData";
import Card from "./../component/UI/Card";

const SavedNews = () => {
  const NewsData = UseBookmarkNewsData();

  return (
    <div>
      {NewsData.map((res) => (
        //passing news data to card UI
        <Card news={res} key={res.id} buttonMode={'delete'} />
      ))}
    </div>
  );
};

export default SavedNews;
