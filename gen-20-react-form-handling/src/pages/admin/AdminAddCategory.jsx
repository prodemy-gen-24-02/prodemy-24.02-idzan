import AdminLayout from "../../Layout/AdminLayout";
import AddCategoryForm from "../../components/admin/AddCategoryForm";

const handleSubmit = (data) => {
  console.log("data: ", data);
};

const AdminAddCategory = () => {
  return (
    <AdminLayout>
      <AddCategoryForm onSubmit={handleSubmit} />
    </AdminLayout>
  );
};

export default AdminAddCategory;
