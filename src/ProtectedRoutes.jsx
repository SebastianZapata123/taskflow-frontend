import { Navigate } from "react-router-dom";
import Dashboard from "./views/dashboard";

const ProtectedRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return <Dashboard />;
};

export default ProtectedRoute;
