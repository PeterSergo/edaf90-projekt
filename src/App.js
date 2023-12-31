import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink, Outlet } from "react-router-dom";
import { MyContext } from "./MyContext";
import { useState, useReducer } from "react";
import { useNavigation, useLocation } from "react-router-dom";
import BootstrapSpinner from "./BootstrapSpinner";

function App() {
  const navigation = useNavigation();
  function reducer(cart, action) {
    let updatedCart;

    switch (action.type) {
      case "add":
        updatedCart = [...cart, action.payload];
        break;
      case "remove":
        updatedCart = cart.filter((item) => item.imdbID !== action.payload);
        break;
      case "clear":
        updatedCart = [];
        break;
      default:
        updatedCart = cart;
    }

    // Update local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    return updatedCart;
  }

  const [cart, dispatch] = useReducer(
    reducer,
    localStorage.getItem("cart") === null
      ? []
      : JSON.parse(localStorage.getItem("cart"))
  );

  return (
    <div className="container py-4">
      <MyContext.Provider value={{ cart, dispatch }}>
        <Header />
        <Navbar />
        <div id="detail">
          {navigation.state === "loading" ||
          navigation.state === "submitting" ? (
            <BootstrapSpinner />
          ) : (
            <Outlet />
          )}
        </div>

        <Footer />
      </MyContext.Provider>
    </div>
  );
}

function Header() {
  return (
    <header className="pb-3 mb-4 border-bottom">
      <span className="fs-4">Filmer & serier</span>
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
      <li className="nav-item">
        <NavLink className="nav-link" to="/historik">
          Din Beställningshistorik
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
