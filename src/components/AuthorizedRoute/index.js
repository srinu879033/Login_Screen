import React from "react";
import { Route, Navigate } from "react-router-dom";
const AuthorizedRoute = (props) => {
  const { children } = props;
  const token = localStorage.getItem("jwt_token");
  console.log("ending", token);
  if (token === null) {
    return <Navigate to="/fetch_normal" />;
  }
  return children;
};

export default AuthorizedRoute;
