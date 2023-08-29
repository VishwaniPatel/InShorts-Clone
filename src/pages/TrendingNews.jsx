import React from "react";
import UseNewsData from "../customeHooks/UseNewsData";
import Card from "../component/UI/Card";
const TrendingNews = () => {
  // fetch trending news data
  const trending = UseNewsData("trending");
  return (
    <>
      {trending.map((res) => (
        //passing news data to card UI
        <Card news={res} key={res.id} />
      ))}
    </>
  );
};

export default TrendingNews;
