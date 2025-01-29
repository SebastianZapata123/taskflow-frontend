import React from "react";
import { createBrowserRouter } from "react-router-dom";
i;

// Function to get the access token from cookies
const getAccessToken = () => {
  return Cookies.get("accessToken");
};

// Function to check if the user is authenticated
const isAuthenticated = () => {
  return !!getAccessToken();
};

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    index: true,
  },
  {
    element: <ProtectedRoute isAuthenticated={isAuthenticated()} />,
    children: [
      {
        path: "/chat-list",
        element: <ChatList />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/video",
        element: <Video />,
      },
      {
        path: "/room",
        element: <Room />,
      },
    ],
  },
  {
    path: "*",
    element: <p>404 Error - Nothing here...</p>,
  },
]);

export default router;
