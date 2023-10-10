import React, { useState, useEffect } from "react";

const Order = () => {
  const exempel = [
    { name: "Pirates", info: "lorem", id: "1" },
    { name: "Pirates2", info: "lorem", id: "2" },
  ];
  return (
    <div className="container bg-light col-12">
      {exempel.map((film) => (
        <div className="container bg-white border p-2" key={film["id"]}>
          {film["Name"]}
        </div>
      ))}
    </div>
  );
};

export default Order;
