import React, { useContext, useEffect, useState } from "react";
import Card from "../component/UI/Card";
import UseFilterData from "../customHooks/UseFilterData";
import NewsContext from "../store/Context";
import UseSearchData from "../customHooks/UseSearch";
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
