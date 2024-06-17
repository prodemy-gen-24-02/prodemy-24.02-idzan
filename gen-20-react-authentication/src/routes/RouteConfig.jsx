import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ allowedRoles }) {
  const { token, user } = useSelector((state) => state.auth);

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

function AdminRoute() {
  const { token, user } = useSelector((state) => state.auth);
  return token && user.role === "admin" ? <Outlet /> : <Navigate to="/" />;
}

function GuestRoute() {
  const { token, user } = useSelector((state) => state.auth);
  return !token ? (
    <Outlet />
  ) : user?.role === "admin" ? (
    <Navigate to="/admin/dashboard" />
  ) : (
    <Navigate to="/" />
  );
}

export { PrivateRoute, AdminRoute, GuestRoute };
