/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./routers/Route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Route} />
  </React.StrictMode>
);
