import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Signup from "./views/Singup";
import Dashboard from "./views/dashboard";

// Function to check if the user is authenticated
const isAuthenticated = () => {
  if (localStorage.getItem("jwt") === localStorage.getItem("jwt")) {
    return true;
  }
};

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
    index: true,
  },
  {
    element: <ProtectedRoute isAuthenticated={isAuthenticated()} />,
    children: [
      {
        path: "/home",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <p>404 Error - Nothing here...</p>,
  },
]);

export default router;
