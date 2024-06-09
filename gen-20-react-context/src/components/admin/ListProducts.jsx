import axios from "axios";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { BsPencil, BsTrash } from "react-icons/bs";
import { BiSort, BiFilter } from "react-icons/bi";
import useSWR, { mutate } from "swr";
import { useState, useMemo } from "react";
import { FormatRupiah } from "../../utils/FormatRupiah";
import { Link } from "react-router-dom";
import Popover from "../../utils/Popover";

const getProducts = (url) => axios.get(url).then((res) => res.data);

const ListProducts = () => {
  const { data: products, error } = useSWR(
    "http://localhost:3000/products",
    getProducts
  );

  const [columnFilters, setColumnFilters] = useState([]);

  const nameFilter = columnFilters.find((f) => f.id === "name")?.value || "";
  const categoryFilter =
    columnFilters.find((f) => f.id === "category")?.value || "";

  const onFilterChange = (id, value) => {
    setColumnFilters((prev) =>
      prev.filter((f) => f.id !== id).concat({ id, value })
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function onClickDelete
    (id) {
      const productToDelete = products?.find((product) => product.id === id);

      const confirmDelete = window.confirm(
        `Apakah Anda yakin ingin menghapus kategori "${productToDelete?.name}" ini?`
      );

      if (confirmDelete) {
        axios
          .delete(`http://localhost:3000/products/${id}`)
          .then(() => mutate("http://localhost:3000/products"));
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
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "category",
        header: "Kategori",
      },
      {
        accessorKey: "price",
        header: "Harga",
        cell: (props) => (
          <p className="flex justify-center items-center">
            {FormatRupiah(props.getValue())}
          </p>
        ),
      },
      {
      
        header: "Aksi",
        enableSorting: false,
        cell: (item) => (
          <div className="flex space-x-2 justify-center">
            <Link to={`/admin/product/edit/${item.row.getValue("id")}`}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded flex items-center">
                <BsPencil className="md:hidden" />
                <span className="hidden md:inline">Edit</span>
              </button>
            </Link>
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded flex items-center"
              onClick={() => onClickDelete(item.row.getValue("id"))}
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

  const data = useMemo(() => products || [], [products]);

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

  if (!products && !error) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mx-4">
      <div className="flex justify-between flex-col md:flex-row">
        <h2 className="text-2xl">List Produk</h2>
        <div className="space-x-2">
          <a href="/admin/product">
            <button className="mb-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
              Refresh
            </button>
          </a>
          <Link to="/admin/product/add-product">
            <button className="mb-4 py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600">
              Tambah Produk
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-start items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={nameFilter}
          onChange={(e) => onFilterChange("name", e.target.value)}
          className="py-2 px-4 border rounded"
        />
        <Popover
          content={
            <div>
              <label className="block mb-2">Filter by Category</label>
              <select
                value={categoryFilter}
                onChange={(e) => onFilterChange("category", e.target.value)}
                className="py-2 px-4 border rounded"
              >
                <option value="">All Categories</option>
                {products &&
                  [...new Set(products.map((product) => product.category))].map(
                    (category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    )
                  )}
              </select>
            </div>
          }
        >
          <BiFilter className="text-xl ml-4 cursor-pointer" />
        </Popover>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="border bg-gray-100 p-2">
                    <div className="flex items-center">
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

export default ListProducts;
