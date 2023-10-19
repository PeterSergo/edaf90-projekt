import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "./MyContext.js";

const Order = () => {
  let { cart, dispatch } = useContext(MyContext);

  function handleClick(e) {
    e.preventDefault();

    cart.forEach((movie) => {
      fetch("http://localhost:8080/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Title: movie.Title,
          imdbID: movie.imdbID,
        }),
      });
    });

    //TODO: Lägg till någonvart idk
    //lägg till filmen i en order i server? ja rätt ok tack
  }

  function handleRemove(id) {
    //remove the movie from the cart by dispatching a remove action
    dispatch({ type: "remove", payload: id });

    //remove the movie from the server's 'orders' array by sending a DELETE request
    fetch(`http://localhost:8080/orders/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <div className="container bg-light col-12">
      <h2>Varukorg: </h2>
      <div className="p-3">
        {cart.map((film) => (
          <div
            className="row text-primary mt-2 p-3 border border-primary rounded-3"
            key={film["imdbID"]}
          >
            <div className="col p-1" key={film["imdbID"]}>
              {film["Title"]}
            </div>
            <button
              type="button p-1"
              className="btn-close"
              aria-label="Close"
              onClick={() => handleRemove(film["imdbID"], dispatch)}
            ></button>
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

function handleRemove(id, dispatch) {
  dispatch({ type: "remove", payload: id });
}

export default Order;
