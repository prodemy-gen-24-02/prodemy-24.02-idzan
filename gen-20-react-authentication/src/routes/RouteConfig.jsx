import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { token } = useSelector((state) => state.auth);
  return token ? children : <Navigate to="/login" />;
}

function AdminRoute({ children }) {
  const { token, user } = useSelector((state) => state.auth);
  return token && user.role === "admin" ? children : <Navigate to="/" />;
}

function GuestRoute({ children }) {
  const { token } = useSelector((state) => state.auth);
  return !token ? children : <Navigate to="/" />;
}

export { PrivateRoute, AdminRoute, GuestRoute };
