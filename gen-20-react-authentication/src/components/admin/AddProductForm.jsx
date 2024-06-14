import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import useSWR from "swr";
import { useState } from "react";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Nama tidak boleh kosong")
    .min(3, "Nama tidak boleh kurang dari 3 karakter"),
  category: yup.string().required("Kategori harus dipilih"),
  price: yup
    .number()
    .typeError("Harga harus angka")
    .required("Harga tidak boleh kosong")
    .positive("Harga tidak boleh kurang dari 1"),
  description: yup.string().required("Deskripsi tidak boleh kosong"),
  images: yup
    .array()
    .of(
      yup
        .string()

        .required("URL gambar tidak boleh kosong")
    )
    .min(4, "Tidak boleh kurang dari 4 gambar")
    .max(4, "Tidak boleh lebih dari 4 gambar"),
});

const getCategories = (url) => axios.get(url).then((res) => res.data);

const AddProductForm = ({ onSubmit }) => {
  const [imageUrls, setImageUrls] = useState(["", "", "", ""]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      category: "",
      price: "",
      description: "",
      images: ["", "", "", ""],
    },
  });

  const { data: categories, error } = useSWR(
    "http://localhost:3000/categories",
    getCategories
  );

  if (error) return <div>Error fetching categories</div>;
  if (!categories) return <div>Loading...</div>;

  const handleImageUrlChange = (index, e) => {
    const urls = [...imageUrls];
    urls[index] = e.target.value;
    setImageUrls(urls);
    setValue("images", urls, { shouldValidate: true });
  };

  return (
    <div className="mx-4">
      <h2 className="text-2xl">Tambah Produk</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
        <div className="mb-4">
          <label className="block mb-1">Name:</label>
          <input
            {...register("name")}
            className={`w-full px-4 py-2 rounded-md border ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          <p className="text-red-500 mt-1">{errors.name?.message}</p>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Category:</label>
          <select
            {...register("category")}
            className={`w-full px-4 py-2 rounded-md border ${
              errors.category ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Pilih kategori ...</option>
            {categories.map((category) => (
              <option key={category.id} value={category.namaKategori}>
                {category.namaKategori}
              </option>
            ))}
          </select>
          <p className="text-red-500 mt-1">{errors.category?.message}</p>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Price:</label>
          <input
            {...register("price")}
            type="number"
            className={`w-full px-4 py-2 rounded-md border ${
              errors.price ? "border-red-500" : "border-gray-300"
            }`}
          />
          <p className="text-red-500 mt-1">{errors.price?.message}</p>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Description:</label>
          <textarea
            {...register("description")}
            className={`w-full px-4 py-2 rounded-md border ${
              errors.description ? "border-red-500" : "border-gray-300"
            }`}
          />
          <p className="text-red-500 mt-1">{errors.description?.message}</p>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Images URLs:</label>
          {imageUrls.map((url, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                value={url}
                onChange={(e) => handleImageUrlChange(index, e)}
                className={`w-full px-4 py-2 rounded-md border ${
                  errors.images && errors.images[index]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              <p className="text-red-500 mt-1">
                {errors.images && errors.images[index]?.message}
              </p>
              {url && (
                <img
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className="mt-2 w-24 h-24 object-cover"
                />
              )}
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
