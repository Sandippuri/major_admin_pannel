import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DashboadLayout = () => {
  return (
    <>
      <Navbar className="layout sticky top-0 z-10 flex justify-between" />
      <Sidebar className="layout fixed h-auto min-h-[calc(100vh-50px)] w-72" />
      <main className="pl-72">
        <div className="layout layout-py">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default DashboadLayout;
