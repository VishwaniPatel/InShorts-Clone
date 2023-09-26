import React, { useContext, useEffect, useState } from "react";
import Card from "../component/UI/Card";
import UseFilterData from "./../hooks/UseFilterData";
import NewsContext from "../store/Context";
import UseSearchData from "../hooks/UseSearch";
import SinglePageLayout from "../component/Layout/SinglePageLayout";
import MultipleNewsLayout from "../component/Layout/MultipleNewsLayout";
const Home = () => {
  // fetch filtered data according to category
  const filteredData = UseFilterData();
  const { searchTerm, searchNewsData , showAlternateLayout} = useContext(NewsContext);
  const [searchedData, setSearchedData] = useState([]);

   // Use a useEffect to initialize searchedData when filteredData changes
   useEffect(() => {
    // Check if filterData is defined and not an empty object
    if (searchNewsData && Object.keys(searchNewsData).length > 0) {
      const searchData =  filteredData.filter((res) => res.title === searchNewsData.title);
      setSearchedData(searchData);
    } else {
      // If filterData is not set, use the entire filteredData
      setSearchedData(filteredData);
    }
  }, [filteredData, searchNewsData]);

useEffect(()=>{
  if(!searchTerm){
    setSearchedData(filteredData)
  }
  
},[filteredData,searchTerm])



  return (
    <>
      {searchedData.length === 0 ?
        (<p className="text-center text-primary">No records found</p>) :

        <>
          {/* Switch layout according to user choice */}
          {showAlternateLayout
            ? <SinglePageLayout news={searchedData} />
            : (
              <MultipleNewsLayout searchedData={searchedData} />
            )}
        </>
      }
    </>
  );
};

export default Home;
