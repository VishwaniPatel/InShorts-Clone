import React, { useContext } from "react";
import UseNewsData from "../hooks/UseNewsData";
import Card from "../component/UI/Card";
import NewsContext from "../store/Context";
import UseSearchData from "../hooks/UseSearch";
const TrendingNews = () => {
  // fetch trending news data
  const { searchTerm } = useContext(NewsContext)
  const trending = UseNewsData("trending");
  const searchedNewsData = UseSearchData(trending, searchTerm)

  return (
    <div>
      {searchedNewsData.map((res) => (
        //passing news data to card UI
        <Card news={res} key={res.id} />
      ))}
    </div>
  );
};

export default TrendingNews;
