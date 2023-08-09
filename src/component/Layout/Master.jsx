import React from "react";
import Header from "./Header";
import Routing from "../../routes/Routing";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "../UI/Navbar";

const Master = () => {
  return (
    <div className="bg-base">
      <Header />
      <div className="container mx-auto ">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Master;
