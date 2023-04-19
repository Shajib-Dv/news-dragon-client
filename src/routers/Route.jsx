/** @format */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import MainContainer from "../components/MainContainer";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
    ],
  },
]);

export default Route;
