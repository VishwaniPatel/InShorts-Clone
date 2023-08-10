import React from "react";
import Card from "../component/UI/Card";
import UseFilterData from "../hooks/UseFilterData";

const Home = () => {
  // fetch filtered data according to category
  const filteredData = UseFilterData();
  return (
    <div>
      {filteredData.map((res) => (
        //passing news data to card UI
        <Card news={res} key={res.hash_id} />
      ))}
    </div>
  );
};

export default Home;
