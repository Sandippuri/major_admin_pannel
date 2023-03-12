import React from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

export const ListItem = (props) => {
  const navigate = useNavigate();
  return (
    <div className={cn(props.className)}>
      <button
        className="w-full ml-5 px-5 my-1"
        onClick={() => navigate(props.navigate)}
      >
        <div className="flex justify-start ">
          <div className="text-white pr-5">{props.icon}</div>
          <div className="text-white text-md">{props.listTitle}</div>
        </div>
      </button>
    </div>
  );
};
