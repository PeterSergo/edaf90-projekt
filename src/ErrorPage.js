import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1 style={{ color: "red" }}>404 Error</h1>
      <h1>Oj! Du verkar ha hamnat fel. Sidan du söker existerar inte.</h1>
      <p>Du kanske vill gå hit istället?</p>
      <li key="Hem">
        <NavLink to="/">Home</NavLink>
      </li>
      <li key="Filmer">
        <NavLink to="/filmer">Movies</NavLink>
      </li>
      <li key="Varukorg">
        <NavLink to="/varukorg">Order</NavLink>
      </li>
    </div>
  );
}
