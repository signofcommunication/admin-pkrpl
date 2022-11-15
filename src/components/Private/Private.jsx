import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useProvider } from "../../Provider/Provider";

function Private() {
  const { isAuthenticated } = useProvider();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default Private;
