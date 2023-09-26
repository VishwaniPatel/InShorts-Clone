import React, { useContext, useEffect, useState } from "react";
import UseBookmarkNewsData from "../hooks/UseBookmarkNewsData";
import { deleteUserSavedNewsData } from "../services/SavedNewsDataService";
import NewsContext from "../store/Context";
import SinglePageLayout from "../component/Layout/SinglePageLayout";
import MultipleNewsLayout from "../component/Layout/MultipleNewsLayout";
import UseSearchData from "../hooks/UseSearch";

const SavedNews = () => {
  const newsData = UseBookmarkNewsData();
  const userId = localStorage.getItem("userId");
  const { setSavedNewsItems, savedNewsItems } = useContext(NewsContext);
  const { showAlternateLayout, deletedNewsId, searchTerm } = useContext(NewsContext);


  useEffect(() => {
    setSavedNewsItems(newsData.reverse())
  }, [newsData])
  // console.log(searchedNewsData);
  


  /**
   * for delete savedNews 
   */
  useEffect(() => {
    if (deletedNewsId) {
      deleteUserSavedNewsData(userId, deletedNewsId)
      const updatedSavedNewsItems = savedNewsItems.filter((res) => res.news_id !== deletedNewsId);
      setSavedNewsItems(updatedSavedNewsItems);
    }

  }, [deletedNewsId])

  // Filter data based on the searchTerm
  const filteredData = searchTerm ? UseSearchData(savedNewsItems, searchTerm) : savedNewsItems;


  return (

    <>
      {/* Switch layout according to user choice */}
      {filteredData.length === 0 ? (
        <p className="text-center text-primary">No records found</p>
      ) : (
        <>
          {showAlternateLayout ? (
            <SinglePageLayout news={filteredData} />
          ) : (
            <MultipleNewsLayout searchedData={filteredData} />
          )}
        </>
      )}
    </>
  );
};

export default SavedNews;
