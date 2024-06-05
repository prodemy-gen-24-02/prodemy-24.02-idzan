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
    </Routes>
  );
}

export default App;
