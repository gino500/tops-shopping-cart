import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App />  To be assesed*/}
    <RouterProvider router={router} />
  </React.StrictMode>
);
