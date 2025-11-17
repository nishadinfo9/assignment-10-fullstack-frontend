import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Layout from "../layout/Layout";
import NotFound from "../pages/NotFound/NotFound";
import AddHabits from "../pages/AddHabits/AddHabits";
import MyHabits from "../pages/MyHabits/MyHabits";
import AllHabits from "../pages/AllHabits/AllHabits";
import HabitDetails from "../pages/HabitDetails/HabitDetails";
import Protected from "../Protected/Protected";

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
        {
          path: "/add-habits",
          element: (
            <Protected>
              <AddHabits />
            </Protected>
          ),
        },
        {
          path: "/edit-habits/:id",
          element: (
            <Protected>
              <AddHabits />
            </Protected>
          ),
        },
        {
          path: "/my-habits",
          element: (
            <Protected>
              <MyHabits />
            </Protected>
          ),
        },
        { path: "/all-habits", element: <AllHabits /> },
        {
          path: "/habit-details/:id",
          element: (
            <Protected>
              <HabitDetails />
            </Protected>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRouter;
