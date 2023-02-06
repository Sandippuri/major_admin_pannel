import { React, useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

const Navbar = ({ className }) => {
  return (
    <>
      <nav className={cn(className, "bg-primary py-[19px]")}>
        <Link to="/" className="flex items-center text-white text-xl font-bold">
          IOE DashBoard
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
