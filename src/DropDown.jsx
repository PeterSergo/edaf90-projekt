import React from "react";
import { useState } from "react";

function DropDown({ onChange, options }) {
  return (
    <div>
      Please select a media type
      <select onChange={onChange}>
        <option value="">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
