import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "../UI/Navbar";
import { NewsProvider } from "../../store/ContextProvider";
import UseBookmarkNewsData from "../../hooks/UseBookmarkNewsData";
import NewsContext from "../../store/Context";


const Master = () => {

  // const newsData = UseBookmarkNewsData()
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  // const { setSavedNewsItems } = useContext(NewsContext)

  // useEffect(() => {
  //   setSavedNewsItems(newsData)
  // }, [newsData])

  /**
   * to open the sidebar
   */
  const handleSidebarToggle = () => {
    setSidebarOpen(true);
  };

  /**
   * to close sidebar
   */
  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <NewsProvider>
      <div className="bg-base h-full  overflow-auto">
        <Header handleSidebarToggle={handleSidebarToggle} />
        {/* send props to sidebar  */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          onCloseSidebar={handleCloseSidebar}
        />
        <div className="container mx-auto p-4" onClick={handleCloseSidebar}>
          <Navbar />
          <Outlet />
        </div>
      </div>
    </NewsProvider>
  );
};

export default Master;
