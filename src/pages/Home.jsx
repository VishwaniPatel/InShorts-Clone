import React, { useContext, useEffect, useState } from "react";
import Card from "../component/UI/Card";
import UseFilterData from "../customeHooks/UseFilterData";
import NewsContext from "../store/Context";
import UseSearchData from "../customeHooks/UseSearch";
const Home = () => {
  // fetch filtered data according to category
  const filteredData = UseFilterData();

  const { searchTerm } = useContext(NewsContext);
  // const [searchedData, setSearchedData] = useState([]);

  // useEffect(() => {
  //   const searchData = UseSearchData(filteredData, searchTerm);
  //   setSearchedData(searchData);
  // }, [filteredData, searchTerm]);
  // var updateData;
  const handleSavedData = (data) => {
    console.log(data);
    // updateData = data
    updateAllNewsDataFromDatabase(data, data.id)
  }
  return (
    <>
      {filteredData.map((res,index) => (
        //passing news data to card UI
        <Card news={res} id={res.news_id} key={index} onSavedData={handleSavedData} />
      ))}
    </>
  );
};

export default Home;
