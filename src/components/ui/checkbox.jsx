import React from "react";

const Checkbox = (props) => {
  return (
    <div className="flex items-center gap-2 m-1 py-2">
      <input className="" type="checkbox" onClick={props.onClick} />
      <label
        htmlFor={props.name}
        className="block text-sm font-medium text-primary"
      >
        {props.title}
      </label>
    </div>
  );
};

export default Checkbox;
