import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Order from "./Order";
import Movies from "./Movies";
import ErrorPage from "./ErrorPage";
import History from "./History";
//import historyLoader from "./HistoryLoader";

async function historyLoader() {
  let orderHistory = {};
  await new Promise((resolve) => setTimeout(resolve, 500));
  await fetch("http://localhost:8080/orders", {
    method: "GET",
  })
    .then((result) => result.json())
    .then((data) => Object.assign(orderHistory, data));

  return orderHistory;
}

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
        loader: historyLoader,
        element: <History />,
      },
    ],
  },
]);

export default router;
