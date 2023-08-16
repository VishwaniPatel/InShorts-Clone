import React from "react";
import UseNewsData from "../hooks/UseNewsData";
import Card from "../component/UI/Card";
const TrendingNews = () => {
  // fetch trending news data
  const trending = UseNewsData("trending");
  return (
    <div>
      {trending.map((res) => (
        //passing news data to card UI
        <Card news={res} key={res.id} />
      ))}
    </div>
  );
};

export default TrendingNews;
