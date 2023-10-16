import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink, Outlet } from "react-router-dom";
import { MyContext } from "./MyContext";
import { ViewMyContext } from "./ViewMyContext";
import { useState } from "react";

function App() {
  /*
  let cart =
    localStorage.getItem("cart") === null
      ? []
      : JSON.parse(localStorage.getItem("cart"));
  */

  const [cart, setCart] = useState(
    localStorage.getItem("cart") === null
      ? []
      : JSON.parse(localStorage.getItem("cart"))
  );

  //let cart = [];
  return (
    <div className="container py-4">
      <MyContext.Provider value={{ cart, setCart }}>
        <Header />
        <ViewMyContext />
        <Navbar />
        <div id="detail">
          <Outlet />
        </div>

        <Footer />
      </MyContext.Provider>
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
