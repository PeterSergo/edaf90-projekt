import React, { useState, useEffect } from "react";
import DropDown from "./DropDown";
import MediaViewer from "./MediaViewer";
import InputField from "./InputField";

const Order = () => {
  const [movieInfo, setMovieInfo] = useState("");
  const [movieToSearch, setMovie] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [cart, setCart] = useState([]);

  const handleCartChange = (event) => {
    setCart([ ...cart, event ]);
  };

  const handleMovieInfoChange = (event) => {
    setMovieInfo(event);
  };

  const handleMovieChange = (event) => {
    setMovie(event.target.value);
  };
  const handleMediaTypeChange = (event) => {
    if (event.target.value === "All") {
      setMediaType("");
      return;
    }

    setMediaType(event.target.value);
  };
  const mediaTypes = ["movies", "series", "episode"];

  const addToCart = (event) => {
    event.preventDefault();
    handleCartChange(movieInfo);
  }


  const submit = (event) => {
    event.preventDefault();
    console.log(cart);

    const url = "http://www.omdbapi.com/?apikey=b32e5c98";
    let urlParameters = /\d/.test(movieToSearch) ? `&i=${movieToSearch}` : `&t=${movieToSearch}`;

    urlParameters = urlParameters + "&type=" + mediaType;
    console.log(urlParameters);
    fetch(url + urlParameters)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if(data["Response"] == "False"){
          return;
        }
        
        handleMovieInfoChange(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>

      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Varukorg</h2>
            {cart.map((film) => (
              <div className="card mb-3" key={film["imdbID"]}>
                <div className="card-body">
                  {film["Title"]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={submit} className="mt-4 container mt-5">
        <div className="form-group">
          <InputField type={"Search for movie"} onChange={handleMovieChange} />
        </div>
        <div className="form-group">
          <DropDown options={mediaTypes} onChange={handleMediaTypeChange} />
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>


      <MediaViewer value={movieInfo} submit={addToCart} />
    </div>
  );
};

export default Order;
