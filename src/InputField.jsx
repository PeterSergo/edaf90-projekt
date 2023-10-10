import React from 'react';
import { useState } from 'react';

function InputField({type, onChange}) {
  return (
    <div>
        <label htmlFor={type}>{type}:</label>
        <input type="text" id={type} name={type} onChange={onChange} />
    </div>
  );
}

export default InputField;
