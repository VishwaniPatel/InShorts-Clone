import React, { useContext } from "react";
import UseBookmarkNewsData from "../hooks/UseBookmarkNewsData";
import Card from "./../component/UI/Card";
import NewsContext from "../store/Context";
import Skeleton from "../component/UI/Skeleton";
const SavedNews = () => {
  const NewsData = UseBookmarkNewsData();
  const { isLoading } = useContext(NewsContext);
  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <div>
          {NewsData.map((res) => (
            //passing news data to card UI
            <Card news={res} key={res.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default SavedNews;
