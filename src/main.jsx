import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeAdmin } from "./components/HomeAdmin.jsx";
import { HomeUser } from "./components/HomeUser.jsx";
import { Owner } from "./components/Owner.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Context } from "./Context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/Owner",
    element: (
      <>
        <Navbar />
        <Owner />
      </>
    ),
  },
  {
    path: "/HomeAdmin",
    element: (
      <>
        <Navbar />
        <HomeAdmin />
      </>
    ),
  },
  {
    path: "/HomeNormal",
    element: (
      <>
        <Navbar />
        <HomeUser />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    <RouterProvider router={router} />
  </Context>
);
