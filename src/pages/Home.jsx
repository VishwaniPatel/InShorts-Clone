import React, { useContext, useEffect, useState } from "react";
import Card from "../component/UI/Card";
import UseFilterData from "../hooks/UseFilterData";
import NewsContext from "../store/Context";
import UseSearchData from "../hooks/UseSearch";

const Home = () => {
  // fetch filtered data according to category
  const { searchTerm } = useContext(NewsContext);
  const filteredData = UseFilterData();
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    const searchData = UseSearchData(filteredData, searchTerm)
    setSearchedData(searchData)
  }, [filteredData, searchTerm])


  return (
    <div>
      {searchedData.map((res) => (
        //passing news data to card UI
        <Card news={res} key={res.hash_id} />
      ))}
    </div>
  );
};

export default Home;
