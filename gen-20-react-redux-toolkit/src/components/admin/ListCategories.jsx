import axios from "axios";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { BsPencil, BsTrash } from "react-icons/bs";
import { BiSort } from "react-icons/bi";
import useSWR, { mutate } from "swr";
import { useState, useMemo,  } from "react";
import { Link } from "react-router-dom";

const getCategories = (url) => axios.get(url).then((res) => res.data);

const ListCategories = () => {
  const { data: categories, error } = useSWR(
    "http://localhost:3000/categories",
    getCategories
  );

  const [columnFilters, setColumnFilters] = useState([]);

  const nameFilter =
    columnFilters.find((f) => f.id === "namaKategori")?.value || "";

  const onFilterChange = (id, value) => {
    setColumnFilters((prev) =>
      prev.filter((f) => f.id !== id).concat({ id, value })
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function onClickDelete(id) {
    const categoryToDelete = categories?.find((category) => category.id === id);
    // Konfirmasi alert
    const confirmDelete = window.confirm(
      `Apakah Anda yakin ingin menghapus kategori "${categoryToDelete?.namaKategori}" ini?`
    );

    if (confirmDelete) {
      axios
        .delete(`http://localhost:3000/categories/${id}`)
        .then(() => mutate("http://localhost:3000/categories"));
    }
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        cell: (props) => (
          <p className="flex justify-center items-center">{props.getValue()}</p>
        ),
      },
      {
        accessorKey: "namaKategori",
        header: "Name",
      },
      {
        accessorKey: "imgSrc",
        header: "Gambar",
        enableSorting: false,
        cell: (info) => (
          <div className="flex justify-center items-center">
            <img className="size-14 md:size-28" src={info.getValue()} alt="" />
          </div>
        ),
      },
      {
        header: "Aksi",
        enableSorting: false,
        cell: (props) => (
          <div className="flex space-x-2 justify-center">
            <Link to={`/admin/category/edit/${props.row.getValue("id")}`}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded flex items-center">
                <BsPencil className="md:hidden" />
                <span className="hidden md:inline">Edit</span>
              </button>
            </Link>
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded flex items-center"
              onClick={() => onClickDelete(props.row.getValue("id"))}
            >
              <BsTrash className="md:hidden" />
              <span className="hidden md:inline">Hapus</span>
            </button>
          </div>
        ),
      },
    ],
    [onClickDelete]
  );

  const data = useMemo(() => categories || [], [categories]);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (!categories && !error) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mx-4">
      <div className="flex justify-between flex-col md:flex-row">
        <h2 className="text-2xl">List Kategori</h2>
        <div className="space-x-2">
          <a href="/admin/category">
            <button className="mb-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
              Refresh
            </button>
          </a>
          <Link to="/admin/category/add-category">
            <button className="mb-4 py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600">
              Tambah Kategori
            </button>
          </Link>
        </div>
      </div>
      <div className="flex  justify-start mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={nameFilter}
          onChange={(e) => onFilterChange("namaKategori", e.target.value)}
          className="py-2 px-4 border rounded"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="border bg-gray-100 p-2">
                    <div className="flex  items-center">
                      {header.column.columnDef.header}
                      {header.column.getCanSort() && (
                        <BiSort
                          className="text-sm mx-2 cursor-pointer"
                          onClick={header.column.getToggleSortingHandler()}
                        />
                      )}
                      {{ asc: "↑", desc: "↓" }[header.column.getIsSorted()]}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="border p-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListCategories;
