import AdminLayout from "../../Layout/AdminLayout";
import AddProductForm from "../../components/admin/AddProductForm";

const handleSubmit = (data) => {
  console.log("data: ", data);
};

const AdminAddProduct = () => {
  return (
    <AdminLayout>
      <AddProductForm onSubmit={handleSubmit} />
    </AdminLayout>
  );
};

export default AdminAddProduct;
