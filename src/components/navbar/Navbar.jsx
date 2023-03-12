import { React, useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux-toolkit/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = ({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logoutUser());
    toast.success("Logged out");
    navigate("/login");
  };
  return (
    <>
      <nav className={cn(className, "bg-primary py-[19px]")}>
        <Link to="/" className="flex items-center text-white text-xl font-bold">
          IOE DashBoard
        </Link>
        <button
          onClick={logoutHandler}
          className="px-2 text-primary font-semibold bg-white rounded-sm hover:bg-gray-200"
        >
          logout
        </button>
      </nav>
    </>
  );
};

export default Navbar;
