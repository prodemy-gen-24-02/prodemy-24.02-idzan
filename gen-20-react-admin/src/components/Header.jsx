import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logowebtugas.svg";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isHomePage = location.pathname === "/";

  return (
    <header className="bg-white shadow-md p-4 fixed top-0 left-0 w-full z-10">
      <div
        className={`flex items-center  justify-between ${
          isHomePage ? "md:justify-around" : "justify-beetween md:mx-12"
        } `}
      >
        <Link to={`/`}>
          <img className="h-10 w-auto cursor-pointer" src={logo} alt="logo" />
        </Link>

        {/* button hamburger untuk di mobile */}
        <button
          onClick={toggleMobileMenu}
          className="block md:hidden  mr-6 rounded focus:outline-none hover:bg-gray-200"
        >
          <i
            id="hamburger-icon"
            className={`fa-solid ${isMobileMenuOpen ? "fa-x" : "fa-bars"}`}
          ></i>
        </button>

        {/* Navigation Menu (desktop) */}
        {isHomePage && (
          <nav className="hidden md:flex items-center space-x-6 font-roboto">
            <a
              href="#home"
              className="text-gray-800 hover:text-cyan-600 transition duration-150"
            >
              Home
            </a>
            <a
              href="#category-section"
              className="text-gray-800 hover:text-cyan-600 transition duration-150"
            >
              Category
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-cyan-600 transition duration-150"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-cyan-600 transition duration-150"
            >
              Contact
            </a>
          </nav>
        )}

        {/* Hamburger menu */}
        <div
          id="hamburger-menu"
          className={`absolute top-20 right-0 z-[-1] w-full bg-white border transition-all duration-300 ${
            isMobileMenuOpen ? "" : "hidden"
          }`}
        >
          {isHomePage && (
            <ul className="flex flex-col items-left w-full text-base cursor-pointer pt-10">
              <li className="hover:bg-gray-200 py-4 px-6 w-full transition duration-150">
                <a className="text-gray-700" href="#home">
                  Home
                </a>
              </li>
              <li className="hover:bg-gray-200 py-4 px-6 w-full transition duration-150">
                <a className="text-gray-700" href="#category-section">
                  Category
                </a>
              </li>
              <li className="hover:bg-gray-200 py-4 px-6 w-full transition duration-150">
                <a className="text-gray-700" href="#">
                  About Us
                </a>
              </li>
              <li className="hover:bg-gray-200 py-4 px-6 w-full transition duration-150">
                <a className="text-gray-700" href="#">
                  Contact
                </a>
              </li>
              <li>
                <i className="fas fa-search text-gray-700 hover:bg-gray-200 cursor-pointer py-4 px-6 w-full transition duration-150"></i>
              </li>
              <li>
                <i className="fas fa-shopping-cart text-gray-700 hover:bg-gray-200 cursor-pointer py-4 px-6 w-full transition duration-150"></i>
              </li>
              <li>
                <i className="fas fa-user text-gray-700 hover:bg-gray-200 cursor-pointer py-4 px-6 w-full transition duration-150"></i>
              </li>
            </ul>
          )}
        </div>

        {/* Icons (desktop) */}
        <div className="hidden md:flex items-center space-x-4 transition duration-150">
          <i className="fas fa-search text-gray-800 hover:text-cyan-600 cursor-pointer"></i>
          <i className="fas fa-shopping-cart text-gray-800 hover:text-cyan-600 cursor-pointer"></i>
          <i className="fas fa-user text-gray-800 hover:text-cyan-600 cursor-pointer"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
