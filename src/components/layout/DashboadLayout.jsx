import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DashboadLayout = () => {
  return (
    <>
      <Navbar className="layout sticky top-0 z-10" />
      <Sidebar className="layout fixed h-auto min-h-[calc(100vh-50px)] w-64" />
      <main className=" pl-64">
        <div className="layout layout-py">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default DashboadLayout;
