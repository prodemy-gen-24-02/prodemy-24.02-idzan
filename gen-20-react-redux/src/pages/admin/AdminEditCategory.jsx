import axios from "axios";
import AdminLayout from "../../Layout/AdminLayout";
import EditCategoryForm from "../../components/admin/EditCategoryForm";
import { mutate } from "swr";
import { useNavigate, useParams } from "react-router-dom";

const AdminEditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    axios
      .put(`http://localhost:3000/categories/${id}`, data)
      .then(() => {
        mutate();
        alert("Data berhasil di edit");
        navigate("/admin/category");
      })
      .catch((error) => {
        alert("Error mengedit category:", error);
        
      });
  };

  return (
    <AdminLayout>
      <EditCategoryForm onSubmit={handleSubmit} />
    </AdminLayout>
  );
};

export default AdminEditCategory;
