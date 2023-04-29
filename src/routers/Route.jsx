/** @format */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import MainContainer from "../components/MainContainer";
import Categories from "../components/Categories";
import News from "../components/News";
import NewsDetails from "../components/NewsDetails";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "category/:id",
        element: <Categories />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "news",
    element: <News />,
    children: [
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <NewsDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default Route;
