import React from "react";
import { useState } from "react";

function MediaViewer({ value }) {
  const submit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submit}>
        <br />
        <br />
        <br />
        <br />
        <br />

        <p>{value["Title"]}</p>
        <p>{value["Year"]}</p>
        <button type="submit">Add to cart</button>
      </form>
    </div>
  );
}

export default MediaViewer;
