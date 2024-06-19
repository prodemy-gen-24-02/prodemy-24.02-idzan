import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import { Provider, useDispatch, useSelector } from "react-redux";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import AdminAddCategory from "./pages/admin/AdminAddCategory";
import AdminAddProduct from "./pages/admin/AdminAddProduct";
import AdminCategory from "./pages/admin/AdminCategory";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminEditCategory from "./pages/admin/AdminEditCategory";
import AdminEditProduct from "./pages/admin/AdminEditProduct";
import AdminProduct from "./pages/admin/AdminProduct";
import store from "./store";
import { GuestRoute, PrivateRoute, AdminRoute } from "./routes/RouteConfig";
import Login from "./pages/LoginPage";
import { useEffect } from "react";
import { fetchCart } from "./store/reducers/cartSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      dispatch(fetchCart());
    }
  }, [dispatch, user]);
  return (
    <Provider store={store}>
      <Routes>
        <Route element={<PrivateRoute allowedRoles={["user", "admin"]} />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
        <Route element={<GuestRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<AdminRoute />}>
          <Route path="/admin">
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="category">
              <Route index element={<AdminCategory />} />
              <Route path="add-category" element={<AdminAddCategory />} />
              <Route path="edit/:id" element={<AdminEditCategory />} />
            </Route>
            <Route path="product">
              <Route index element={<AdminProduct />} />
              <Route path="add-product" element={<AdminAddProduct />} />
              <Route path="edit/:id" element={<AdminEditProduct />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Provider>
  );
}

export default App;
