import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object().shape({
  namaKategori: yup.string().required("Nama tidak boleh kosong"),
  imgSrc: yup
    .mixed()
    .required("Gambar tidak boleh kosong")
    .test("fileType", "Format gambar tidak valid", (value) => {
      return (
        value &&
        ["image/jpeg", "image/png", "image/svg+xml"].includes(value.type)
      );
    })
    .test("fileSize", "Gambar terlalu besar", (value) => {
      return value && value.size <= 2000000; // ukurannya maksimal 2MB
    }),
});

const AddCategoryForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      namaKategori: "",
      imgSrc: null,
    },
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setValue("imgSrc", file);
    }
  };

  return (
    <div className="mx-4">
      <h2 className="text-2xl">Tambah Kategori</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
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
          <label className="block mb-1">Icon:</label>
          <input
            type="file"
            accept="image/jpeg, image/png, image/svg+xml"
            onChange={handleImageChange}
            className={`w-full px-4 py-2 ${
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

export default AddCategoryForm;
