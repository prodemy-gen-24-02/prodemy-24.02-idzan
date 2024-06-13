import AdminLayout from "../../Layout/AdminLayout";
import AddCategoryForm from "../../components/admin/AddCategoryForm";
import useSWR from "swr";
import axios from "axios";

const getCategory = (url) => axios.get(url).then((res) => res.data);

const AdminAddCategory = () => {
  const { data: categories, mutate } = useSWR(
    "http://localhost:3000/categories",
    getCategory
  );

  const handleSubmit = async (data) => {
    if (!categories) return;

    const newId =
      categories.length > 0
        ? Math.max(...categories.map((category) => parseInt(category.id))) + 1
        : 1;

    const payload = {
      id: newId.toString(),
      ...data,
    };

    try {
      await axios.post("http://localhost:3000/categories", payload);
      mutate();
      alert("Data berhasil ditambahkan");
    } catch (error) {
      alert("Error menambah category:", error);
    }
  };

  return (
    <AdminLayout>
      <AddCategoryForm onSubmit={handleSubmit} />
    </AdminLayout>
  );
};

export default AdminAddCategory;
