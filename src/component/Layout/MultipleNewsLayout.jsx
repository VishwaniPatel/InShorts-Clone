import React from "react";
import Card from "../UI/Card";

const MultipleNewsLayout = ({ searchedData }) => {
  return (
    <>
      {/* Display news in card */}
      {searchedData.map((res, index) => (
        <Card news={res} key={index} />
      ))}
    </>
  );
};

export default MultipleNewsLayout;
