import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};
const AdminPrivateRoute = ({ isLoggedIn, isAdmin, children }) => {
  if (!isLoggedIn || !isAdmin) {
    return <Navigate to="/login" />;
  }
  return children;
};

export { AdminPrivateRoute, PrivateRoute };
