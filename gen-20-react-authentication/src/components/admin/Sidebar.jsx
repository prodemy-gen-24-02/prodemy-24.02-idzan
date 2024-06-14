import { Link, useLocation } from "react-router-dom";
import { BsFolder, BsCart, BsArrowLeftShort } from "react-icons/bs";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { useState } from "react";
import logo from "../../assets/logowebtugas-w.svg";

const menuItems = [
  {
    name: "Dashboard",
    icon: RiDashboardHorizontalFill,
    path: "/admin/dashboard",
  },
  { name: "List Kategori", icon: BsFolder, path: "/admin/category" },
  { name: "List Produk", icon: BsCart, path: "/admin/product" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  return (
    <aside
      className={`bg-gray-800 text-white relative ${
        open ? "w-72" : "w-20"
      } duration-300 min-h-screen flex flex-col items-center`}
    >
      <BsArrowLeftShort
        onClick={() => setOpen(!open)}
        className={`bg-white z-10 text-zinc-950 text-3xl rounded-full absolute -right-3 top-9 border border-zinc-950 cursor-pointer ${
          !open && "rotate-180"
        }`}
      />
      <div className="flex flex-col items-center py-4 w-full">
        <img
          src={logo}
          alt="Logo"
          className={`w-24 h-24 ${!open && "hidden"}`}
        />
      </div>
      <nav className="flex flex-col p-4 space-y-4 w-full">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center p-2 rounded-md transition duration-200 ${
              location.pathname === item.path
                ? " text-cyan-400 scale-105"
                : "text-white hover:bg-gray-700 hover:text-white hover:scale-105"
            }`}
          >
            <item.icon className="text-2xl" />
            <span className={`ml-4 ${!open && "hidden"}`}>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
