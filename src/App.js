import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

const submit = (event) => {
  event.preventDefault();
};

function App() {
  return (
    <div className="container py-4">
      <Header />
      <Navbar />
      <Footer />

      <form onSubmit={submit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={"monkey"} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={"peter"} />
        </div>
        <button type="submit">Submit</button>
      </form>
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
        {/* <NavLink className="nav-link" to="/compose-salad">
          Komponera en sallad
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/view-order">
          Visa beställningen
        </NavLink> */}
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
