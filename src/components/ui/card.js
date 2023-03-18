import React from "react";
import cn from "classnames";

const Card = (props) => {
  return (
    <div
      className={cn(
        props.className,
        "p-6 bg-white border text-primary border-gray-200 rounded-lg shadow-md hover:cursor-pointer"
      )}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Card;
