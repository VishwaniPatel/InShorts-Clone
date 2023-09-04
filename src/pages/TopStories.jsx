import React from "react";
import UseNewsData from "../customeHooks/UseNewsData";
import Card from "../component/UI/Card";

const TopStories = () => {
  // fetch top stories news data
  const topStories = UseNewsData("top_stories");

  return (
    <>
      {topStories.map((res) => (
        //passing news data to card UI
        <Card news={res} key={res.id} />
      ))}
    </>
  );
};

export default TopStories;
