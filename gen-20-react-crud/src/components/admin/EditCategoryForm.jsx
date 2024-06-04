import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  namaKategori: yup.string().required("Nama tidak boleh kosong"),
  imgSrc: yup
    .string()

    .required("URL gambar tidak boleh kosong"),
});

const EditCategoryForm = ({ onSubmit }) => {
  const { id } = useParams();

  const [category, setCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    // Ambil data kategori yang akan diedit berdasarkan ID dari server
    axios
      .get(`http://localhost:3000/categories/${id}`)
      .then((response) => {
        setCategory(response.data);
        setValue("namaKategori", response.data.namaKategori);
        setValue("imgSrc", response.data.imgSrc);
        setSelectedImage(response.data.imgSrc);
      })
      .catch((error) => {
        console.error("Error fetching category:", error);
      });
  }, [id, setValue]);

  const handleImageChange = (e) => {
    const url = e.target.value;
    setSelectedImage(url);
    setValue("imgSrc", url);
  };

  const submitForm = (data) => {
    onSubmit(data);
  };

  if (!category) return <p>Loading...</p>;

  return (
    <div className="mx-4">
      <h2 className="text-2xl">Edit Kategori</h2>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="max-w-md mx-auto p-4"
      >
        <div className="mb-4">
          <label className="block mb-1">Nama Kategori:</label>
          <input
            {...register("namaKategori")}
            className={`w-full px-4 py-2 rounded-md border ${
              errors.namaKategori ? "border-red-500" : "border-gray-300"
            }`}
          />
          <p className="text-red-500 mt-1">{errors.namaKategori?.message}</p>
        </div>

        <div className="mb-4">
          <label className="block mb-1">Icon URL:</label>
          <input
            type="text"
            {...register("imgSrc")}
            onChange={handleImageChange}
            value={selectedImage}
            className={`w-full px-4 py-2 rounded-md border ${
              errors.imgSrc ? "border-red-500" : "border-gray-300"
            }`}
          />
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Preview"
              className="mt-2 w-24 h-24 object-cover"
            />
          )}
          <p className="text-red-500 mt-1">{errors.imgSrc?.message}</p>
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

export default EditCategoryForm;
