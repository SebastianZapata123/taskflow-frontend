import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Signup from "./views/Singup";
import Dashboard from "./views/dashboard";
import ProtectedRoute from "./ProtectedRoutes";
import { useState } from "react";

// Function to check if the user is authenticated
const isAuthenticated = () => {
  const [isLogged, setIsLogged] = useState(false);

  if (localStorage.getItem("jwt") === localStorage.getItem("jwt")) {
  }
};

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/login",
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
