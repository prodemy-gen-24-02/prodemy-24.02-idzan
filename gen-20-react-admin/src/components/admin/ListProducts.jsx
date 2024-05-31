import axios from "axios";
import { BsPencil, BsTrash } from "react-icons/bs";
import useSWR from "swr";

const getProducts = (url) => axios.get(url).then((res) => res.data);

const ListProducts = () => {
  const { data: products, error } = useSWR(
    "http://localhost:3000/products",
    getProducts
  );

  if (!products && !error) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mx-4">
      <div className="flex justify-between flex-col md:flex-row  ">
        <h2 className="text-2xl">List Kategori</h2>
        <div className="space-x-2">
          <button className="mb-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
            Refresh
          </button>
          <button className="mb-4 py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600">
            Tambah Produk
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          {/* Buat header */}
          <tr>
            <th className="border bg-gray-100 p-2">No</th>
            <th className="border bg-gray-100 p-2">Nama Produk</th>
            <th className="border bg-gray-100 p-2">Gambar</th>
            <th className="border bg-gray-100 p-2">Action</th>
          </tr>

          {/* Buat isinya datanya */}
          {products?.map((product, index) => (
            <tr key={product.id}>
              <td className="border p-2 text-center">{index + 1}</td>
              <td className="border p-2">{product.name}</td>
              <td className="border p-4 flex justify-center items-center">
                <img
                  className="size-14 md:size-28"
                  src={product.images[0]}
                  alt={product.name}
                />
              </td>
              <td className="border p-2  justify-center ">
                <div className="flex space-x-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded flex items-center">
                    <BsPencil className="md:hidden" />
                    <span className="hidden md:inline">Edit</span>
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded flex items-center">
                    <BsTrash className="md:hidden" />
                    <span className="hidden md:inline">Hapus</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ListProducts;
