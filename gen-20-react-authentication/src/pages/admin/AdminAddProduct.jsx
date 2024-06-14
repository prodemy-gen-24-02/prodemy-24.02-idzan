import axios from "axios";
import AdminLayout from "../../Layout/AdminLayout";
import AddProductForm from "../../components/admin/AddProductForm";
import useSWR from "swr";

const getProduct = (url) => axios.get(url).then((res) => res.data);

const AdminAddProduct = () => {
  const {
    data: products,
    error,
    mutate,
  } = useSWR("http://localhost:3000/products", getProduct);

  const handleSubmit = async (data) => {
    try {
      // data.id = parseInt(data.id);

      await axios.post("http://localhost:3000/products", data);
      mutate();
      alert("Produk berhasil ditambahkan");
    } catch (error) {
      console.error("Error mengirim data:", error);
      alert("Terjadi kesalahan saat menambahkan produk");
    }
  };

  if (error) return <div>Error</div>;
  if (!products) return <div>Loading...</div>;

  return (
    <AdminLayout>
      <AddProductForm onSubmit={handleSubmit} />
    </AdminLayout>
  );
};

export default AdminAddProduct;
