import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Order from "./Order";
import Movies from "./Movies";
import ErrorPage from "./ErrorPage";
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "filmer",
        element: <Movies />,
      },
      {
        path: "varukorg",
        element: <Order />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
