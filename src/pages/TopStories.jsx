import React from "react";
import UseNewsData from "../hooks/UseNewsData";
import Card from "../component/UI/Card";

const TopStories = () => {
  // fetch top stories news data
  const topStories = UseNewsData("top_stories");
  return (
    <div>
      {topStories.map((res) => (
        //passing news data to card UI
        <Card news={res} key={res.hash_id} />
      ))}
    </div>
  );
};

export default TopStories;
