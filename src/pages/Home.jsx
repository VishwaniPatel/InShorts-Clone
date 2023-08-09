import React from "react";
import Card from "../component/UI/Card";
import UseNewsData from "../hooks/UseNewsData";

const Home = () => {
  // fetch all news data
  const allNewsData = UseNewsData("all_news");
  return (
    <div>
      {allNewsData.map((res) => (
        //passing news data to card UI
        <Card news={res} key={res.hash_id} />
      ))}
    </div>
  );
};

export default Home;
