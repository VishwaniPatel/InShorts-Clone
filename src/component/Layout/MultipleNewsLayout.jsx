import React from "react";
import Card from "../UI/Card";

const MultipleNewsLayout = ({ searchedData }) => {
  return (
    <>
      {/* Display news in card */}
      {searchedData.map((res) => (
        <Card news={res} key={res.id} />
      ))}
    </>
  );
};

export default MultipleNewsLayout;
