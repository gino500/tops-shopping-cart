import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import Checkout from "./components/Checkout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App />  To be assesed*/}
    <RouterProvider router={router} />
  </React.StrictMode>
);

/*{
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Home/>
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "/shop/checkout",
    element: <Checkout/>
  } */
