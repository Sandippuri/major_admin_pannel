import React from "react";

const Radio = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-2">
      <label htmlFor="yes">Is S/He a Doctor?</label>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 justify-start items-center">
          <input htmlFor="doctor" type="radio" name="Yes" id="yes" />
          <label htmlFor="yes">yes</label>
        </div>
        <div className="flex gap-2 justify-start items-center">
          <input htmlFor="doctor" type="radio" name="yes" id="yes" />
          <label htmlFor="yes">no</label>
        </div>
      </div>
    </div>
  );
};

export default Radio;
