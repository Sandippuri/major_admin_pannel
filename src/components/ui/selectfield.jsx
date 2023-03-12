import React from "react";
import cn from "classnames";

const SelectField = (props) => {
  return (
    <div className={cn(props.className)}>
      <label
        htmlFor="campusProgramme"
        className="block mb-2 text-sm font-medium text-primary"
      >
        {props.title}
      </label>
      <select
        name="campusProgramme"
        className="input-field"
        value={props.value}
      >
        {props.options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
