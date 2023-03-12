import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toaster = () => {
  return (
    <>
      <ToastContainer
        theme="dark"
        draggable
        position="top-right"
        limit={3}
        hideProgressBar={true}
        closeButton={false}
        autoClose={1500}
      />
    </>
  );
};

export const ToastMessage = ({ message, title }) => {
  return (
    <div className=" flex text-white flex-col gap-2 items-start text-center w-full">
      <p className="text-md font-bold ">{title}</p>
      <p className="text-sm text-green-600">{message}</p>
    </div>
  );
};
