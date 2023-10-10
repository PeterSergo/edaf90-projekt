import "./App.css";
import { useState } from "react";
import InputField from "./InputField";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink, Outlet } from "react-router-dom";
import DropDown from "./DropDown";
import MediaViewer from "./MediaViewer";
import { MyContext } from "./MyContext";
import { ViewMyContext } from "./ViewMyContext";
function App() {
  const [movieInfo, setMovieInfo] = useState("");
  const [movieToSearch, setMovie] = useState("");
  const [mediaType, setMediaType] = useState("");

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

  const submit = (event) => {
    event.preventDefault();

    const url = "http://www.omdbapi.com/?apikey=b32e5c98";
    let urlParameters = "&t=" + movieToSearch;
    if (/\d/.test(movieToSearch)) {
      urlParameters = "&i=" + movieToSearch;
    }

    urlParameters = urlParameters + "&type=" + mediaType;
    console.log(urlParameters);
    fetch(url + urlParameters)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        handleMovieInfoChange(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="container py-4">
      <MyContext.Provider value={"top level"}></MyContext.Provider>
      <Header />
      <ViewMyContext />
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>

      <Footer />

      <form onSubmit={submit}>
        <InputField type={"Search for movie"} onChange={handleMovieChange} />
        <DropDown options={mediaTypes} onChange={handleMediaTypeChange} />
        <button type="submit">Search</button>
      </form>

      <MediaViewer value={movieInfo} />
    </div>
  );
}

function Header() {
  return (
    <header className="pb-3 mb-4 border-bottom">
      <span className="fs-4">IMDB reviews</span>
    </header>
  );
}

function Navbar() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">
          Hem
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/filmer">
          Våra Filmer
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/varukorg">
          Din Varukorg
        </NavLink>
      </li>
    </ul>
  );
}

function Footer() {
  return (
    <footer className="pt-3 mt-4 text-muted border-top">Projekt EDAF90</footer>
  );
}

export default App;
