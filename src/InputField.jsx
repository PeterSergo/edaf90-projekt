import React from 'react';

function InputField({ type, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={type} className="form-label">
        {type}:
      </label>
      <input
        type="text"
        id={type}
        name={type}
        className="form-control"
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
