import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "../UI/Navbar";
import { NewsProvider } from "../../store/ContextProvider";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from "react-toastify";


const Master = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [loginToastedDisplay, setLoginToastedDisplay] = useState(false)
  const { isAuthenticated } = useAuth0()


  /**
   * to open the sidebar
   */
  const handleSidebarToggle = () => {
    setSidebarOpen(true);
  };

  /**
   * to show for successfull login
   */
  useEffect(() => {
    if (isAuthenticated && loginToastedDisplay) {
      toast.success('Login Successfully', {
        position: toast.POSITION.TOP_RIGHT
      })
    }
    setLoginToastedDisplay(true)
  }, [isAuthenticated, loginToastedDisplay])

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
        {isAuthenticated &&
          <ToastContainer />
        }
      </div>
    </NewsProvider>
  );
};

export default Master;
