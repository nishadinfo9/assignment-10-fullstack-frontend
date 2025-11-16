import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Layout from "../layout/Layout";
import NotFound from "../pages/NotFound/NotFound";
import AddHabits from "../pages/AddHabits/AddHabits";
import MyHabits from "../pages/MyHabits/myHabits";
import AllHabits from "../pages/AllHabits/AllHabits";

const AppRouter = () => {
  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/*", element: <NotFound /> },
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/add-habits", element: <AddHabits /> },
        { path: "/my-habits", element: <MyHabits /> },
        { path: "/all-habits", element: <AllHabits /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRouter;
