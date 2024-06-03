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
    .required("Harga tidak boleh kosong")
    .typeError("Harga harus angka")
    .positive("Harga tidak boleh kurang dari 1"),
  description: yup.string().required("Deskripsi tidak boleh kosong"),
  images: yup
    .array()
    .required("Gambar tidak boleh kosong")
    .test(
      "fileType",
      "Format gambar tidak valid, hanya mendukung JPEG, PNG, dan SVG",
      (value) => {
        if (!value || value.length === 0) return false;
        return value.every(
          (file) =>
            file.type === "image/jpeg" ||
            file.type === "image/png" ||
            file.type === "image/svg+xml"
        );
      }
    )
    .min(4, "Tidak boleh kurang dari 4 gambar")
    .max(4, "Tidak boleh lebih dari 4 gambar"),
});

const getCategories = (url) => axios.get(url).then((res) => res.data);

const AddProductForm = ({ onSubmit }) => {
  const [imagePreviews, setImagePreviews] = useState([]);
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
      images: [],
    },
  });

  const { data: categories, error } = useSWR(
    "http://localhost:3000/categories",
    getCategories
  );

  if (error) return <div>Error fetching categories</div>;
  if (!categories) return <div>Loading...</div>;

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const validTypes = ["image/jpeg", "image/png", "image/svg+xml"];
    const isValidType = files.every((file) => validTypes.includes(file.type));

    if (files.length === 4 && isValidType) {
      setValue("images", files, { shouldValidate: true });
      const previews = files.map((file) => URL.createObjectURL(file));
      setImagePreviews(previews);
    } else {
      e.target.value = null;
      setValue("images", [], { shouldValidate: true });
      setImagePreviews([]);
    }
  };

  return (
    <div className="mx-4">
      <h2 className="text-2xl">Tambah Produk</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 ">
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
          <label className="block mb-1">Images:</label>
          <input
            type="file"
            accept="image/jpeg, image/png, image/svg+xml"
            multiple
            onChange={handleImageChange}
          />
          <div className="flex mt-2">
            {imagePreviews.map((preview, index) => (
              <img
                key={index}
                src={preview}
                alt={`Preview ${index + 1}`}
                className="w-24 h-24 object-cover mr-2"
              />
            ))}
          </div>
          <p className="text-red-500 mt-1">{errors.images?.message}</p>
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
