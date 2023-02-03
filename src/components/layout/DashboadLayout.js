import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DashboadLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className=" ml-64 pt-20 w-full mx-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboadLayout;
