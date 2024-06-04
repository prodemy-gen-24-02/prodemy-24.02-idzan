import axios from "axios";
import AdminLayout from "../../Layout/AdminLayout";

import { mutate } from "swr";
import { useParams } from "react-router-dom";
import EditProductForm from "../../components/admin/EditProductForm";

const AdminEditProduct = () => {
  const { id } = useParams();

  const handleSubmit = (data) => {
    axios
      .put(`http://localhost:3000/products/${id}`, data)
      .then(() => {
        mutate();
        alert("Data berhasil di edit");
      })
      .catch((error) => {
        alert("Error mengedit category:", error);
      });
  };

  return (
    <AdminLayout>
      <EditProductForm onSubmit={handleSubmit} />
    </AdminLayout>
  );
};

export default AdminEditProduct;
