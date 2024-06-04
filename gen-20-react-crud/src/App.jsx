import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCategory from "./pages/admin/AdminCategory";
import AdminProduct from "./pages/admin/AdminProduct";

import AdminAddProduct from "./pages/admin/AdminAddProduct";
import AdminAddCategory from "./pages/admin/AdminAddCategory";

import AdminEditCategory from "./pages/admin/AdminEditCategory";
import AdminEditProduct from "./pages/admin/AdminEditProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />

      {/* halaman admin */}
      <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/category" element={<AdminCategory />} />
      <Route path="/admin/product" element={<AdminProduct />} />
      <Route
        path="/admin/category/add-category"
        element={<AdminAddCategory />}
      />
      <Route path="/admin/category/edit/:id" element={<AdminEditCategory />} />

      <Route path="/admin/product/add-product" element={<AdminAddProduct />} />
      <Route path="/admin/product/edit/:id" element={<AdminEditProduct />} />
    </Routes>
  );
}

export default App;
