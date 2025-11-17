import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Loader from "../utils/Loader";
import { Navigate, useLocation } from "react-router-dom";

const Protected = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  console.log("protected", user);
  const location = useLocation();

  if (loading) return Loader;
  if (user) return children;

  return <Navigate to={"/login"} state={location?.pathname}></Navigate>;
};

export default Protected;
