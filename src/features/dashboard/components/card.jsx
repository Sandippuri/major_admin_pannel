import React from "react";

const Card = (props) => {
  return (
    <div className="w-full p-6 bg-white border text-primary border-gray-200 rounded-lg shadow-md cursor-pointer hover:bg-gray-100">
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-primary">
          {props.title}
        </h5>
      </a>
      <h1 className="mb-3 text-4xl font-bold text-center text-primary">
        {props.count}
      </h1>

      <div className="flex justify-end">
        {props.icon}
      </div>
    </div>
  );
};

export default Card;
