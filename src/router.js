import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Order from "./Order";
import Movies from "./Movies";
import ErrorPage from "./ErrorPage";
import History from "./History";

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
      {
        path: "/historik",
        element: <History />,
      },
    ],
  },
]);

export default router;
