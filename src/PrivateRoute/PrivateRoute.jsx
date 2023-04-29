/** @format */

import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, userLoader } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }
  if (userLoader) {
    return <p>Loading....</p>;
  }
  return <Navigate state={{ from: location }} to="/login" replace />;
};

export default PrivateRoute;
