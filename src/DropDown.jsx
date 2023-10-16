import React from "react";

function DropDown({ onChange, options }) {
  return (
    <div className="form-group">
      <label htmlFor="mediaType">Please select a media type</label>
      <select
        className="form-control"
        id="mediaType"
        name="mediaType"
        onChange={onChange}
      >
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
