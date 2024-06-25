import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ Component  }) => {
  const isAuthenticated = Boolean(localStorage.getItem("isAuthenticated"));

  if (isAuthenticated) {
    return Component ;
  }

  return <Navigate to="/login" />;
};

export default ProtectedRoute;
