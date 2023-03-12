import React from "react";

const Textarera = (props) => {
  return (
    <div className={props.className}>
      <label
        htmlFor={props.name}
        className="block mb-2 text-md font-medium text-gray-900"
      >
        {props.title}
      </label>
      <textarea
        vaue={props.value}
        onChange={props.onChange}
        rows={3}
        type={props.type}
        name={props.name}
        id={props.id}
        className={`${props.width} input-field`}
        placeholder={props.placeholder}
        required
      />
    </div>
  );
};

export default Textarera;
