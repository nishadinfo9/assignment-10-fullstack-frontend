import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Layout from "../layout/Layout";
import NotFound from "../pages/NotFound/NotFound";

const AppRouter = () => {
  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/*", element: <NotFound /> },
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Home /> }],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRouter;
