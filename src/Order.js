import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "./MyContext.js";

const Order = () => {
  const exempel = [
    { name: "Pirates", info: "lorem", id: "1" },
    { name: "Pirates2", info: "lorem", id: "2" },
    { name: "jonfp + axel porno big dick small chick", info: "loem", id: "3" },
  ];

  let { cart, setCart } = useContext(MyContext);

  return (
    <div className="container bg-light col-12">
      <h2>Varukorg: </h2>
      <div className="container bg-white border p-2">
        {cart.map((film) => (
          <div
            className="row text-primary mt-2 p-3 border border-primary rounded-3"
            key={film["imdbID"]}
          >
            <div className="col p-1" key={film["imdbID"]}>
              {film["Title"]}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleClick}
        type="submit"
        className="mt-4 btn btn-primary"
      >
        Beställ
      </button>
    </div>
  );
};

function handleClick(e) {
  e.preventDefault();
  //TODO: Lägg till någonvart idk
  //props.addSaladToCart(salad) fast istället add movie to cart?
  console.log("omg du beställde jonfp + axel porno big dick small chick");
}
export default Order;
