import React, { useState } from "react";
import Header from "./Header";
import Routing from "../../routes/Routing";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "../UI/Navbar";

const Master = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

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
        setSidebarOpen(false)
    }

    return (
        <div className="bg-base h-full  overflow-auto">
            <Header handleSidebarToggle={handleSidebarToggle} />
            {/* send props to sidebar  */}
            <Sidebar isSidebarOpen={isSidebarOpen} onCloseSidebar={handleCloseSidebar} />
            <div className="container mx-auto ">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default Master;
