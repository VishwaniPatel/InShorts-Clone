import React from "react";
import UseNewsData from "../hooks/UseNewsData";
import Card from "../component/UI/Card";
// import UseSearchData from "../hooks/UseSearch";
import NewsContext from "../store/Context";

const TopStories = () => {
  // fetch top stories news data
  const { searchTerm } = useContext(NewsContext)
  const topStories = UseNewsData("top_stories");
  // const searchedNewsData = UseSearchData(topStories, searchTerm)

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
