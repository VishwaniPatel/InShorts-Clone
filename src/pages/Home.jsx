import React, { useContext, useEffect, useState } from "react";
import Card from "../component/UI/Card";
import UseFilterData from "../customeHooks/UseFilterData";
import NewsContext from "../store/Context";
import UseSearchData from "../customeHooks/UseSearch";
import SinglePageLayout from "../component/Layout/SinglePageLayout";
import MultipleNewsLayout from "../component/Layout/MultipleNewsLayout";
const Home = () => {
  // fetch filtered data according to category
  const filteredData = UseFilterData();
  const { searchTerm } = useContext(NewsContext);
  const [searchedData, setSearchedData] = useState([]);
  const { showAlternateLayout } = useContext(NewsContext);

  useEffect(() => {
    const searchData = UseSearchData(filteredData, searchTerm);
    setSearchedData(searchData);
  }, [filteredData, searchTerm]);

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
      {/* Switch layout according to user choice */}
      {showAlternateLayout
        ? searchedData.length > 0 && <SinglePageLayout news={searchedData} />
        : searchedData.length > 0 && (
            <MultipleNewsLayout searchedData={searchedData} />
          )}
    </>
  );
};

export default Home;
