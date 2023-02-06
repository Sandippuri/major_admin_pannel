import React from "react";

const Inputfield = (props) => {
  return (
    <div className={props.className}>
      <label
        htmlFor={props.name}
        className="block mb-2 text-md font-medium text-primary"
      >
        {props.title}
      </label>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        id={props.id}
        className={`${props.width} input-field`}
        placeholder={props.placeholder}
        required
      />
    </div>
  );
};

export default Inputfield;
