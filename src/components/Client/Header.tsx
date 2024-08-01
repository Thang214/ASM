import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [growboxDropdownOpen, setGrowboxDropdownOpen] = useState(false);
  const [toepfeDropdownOpen, setToepfeDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleGrowboxDropdown = () => {
    setGrowboxDropdownOpen(!growboxDropdownOpen);
  };

  const toggleToepfeDropdown = () => {
    setToepfeDropdownOpen(!toepfeDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data: any) => {
    const { keywords } = data;
    navigate(`search?keyword=${keywords}`);
  };
  return (
    <header className="bg-gradient-to-r from-[#4E7C32] to-[#A7AF97]">
      <div className="flex items-center justify-between p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center w-full md:w-2/6 bg-white px-4 py-2 rounded ml-48"
        >
          <input
            type="text"
            {...register("keywords")}
            className="outline-none placeholder-gray-400 flex-1 "
            placeholder="Suchen Sie nach Produkten, Marken und mehr"
          />
          <button>
            <FaSearch className="h-5 w-5 text-gray-400 ml-2" />
          </button>
        </form>
        <div className="flex space-x-16 pr-40">
          <div className="hidden md:flex items-center text-white ml-4">
            <p>EN</p>
            <svg
              className="w-4 h-4 inline-block ml-1 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 12l6-6H4l6 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="hidden md:flex items-center text-white ml-4">
            <FaUser />
            <p className="ml-2">Account</p>
          </div>
          <div className="hidden md:flex items-center text-white ml-4">
            <FaShoppingCart />
            <p className="ml-2">Cart</p>
          </div>
        </div>
        <button className="block md:hidden text-white" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <hr className="bg-white w-10/12 mx-auto hidden md:block" />

      <nav
        className={`max-w-[1200px] mx-auto px-4 ${
          menuOpen ? "block" : "hidden"
        } md:block`}
      >
        <ul className="flex flex-col md:flex-row justify-center md:justify-start">
          <li className="relative mx-2">
            <Link to="">
              <div className="block py-2 md:py-6 text-white">
                Beleuchtung
                <svg
                  className="w-4 h-4 inline-block ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12l6-6H4l6 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </li>
          <li className="relative mx-2">
            <div
              className="block py-2 md:py-6 text-white cursor-pointer"
              onClick={toggleGrowboxDropdown}
            >
              Growbox
              <svg
                className="w-4 h-4 inline-block ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12l6-6H4l6 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {growboxDropdownOpen && (
              <div className="absolute left-0 mt-1 bg-white shadow-lg rounded-md">
                <ul className="py-1">
                  <li>
                    <Link
                      to="/shop"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Komplettsets
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="relative mx-2">
            <Link to="">
              <div className="block py-2 md:py-6 text-white">
                Dünger
                <svg
                  className="w-4 h-4 inline-block ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12l6-6H4l6 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </li>
          <li className="relative mx-2">
            <Link to="">
              <div className="block py-2 md:py-6 text-white">
                Erde & Substrate
                <svg
                  className="w-4 h-4 inline-block ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12l6-6H4l6 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </li>
          <li className="relative mx-2">
            <div
              className="block py-2 md:py-6 text-white cursor-pointer"
              onClick={toggleToepfeDropdown}
            >
              Töpfe & Behälter
              <svg
                className="w-4 h-4 inline-block ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12l6-6H4l6 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {toepfeDropdownOpen && (
              <div className="absolute left-0 mt-1 bg-white shadow-lg rounded-md">
                <ul className="py-1">
                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Eckige Töpfe
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Runde Töpfe
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Untersetzer
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Pflanzschalen
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="relative mx-2">
            <Link to="">
              <div className="block py-2 md:py-6 text-white">
                Bewässerung
                <svg
                  className="w-4 h-4 inline-block ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12l6-6H4l6 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </li>
          <li className="relative mx-2">
            <Link to="">
              <div className="block py-2 md:py-6 text-white">
                Pflanzen & Gärtnern
                <svg
                  className="w-4 h-4 inline-block ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12l6-6H4l6 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </li>
          <li className="relative mx-2">
            <Link to="">
              <div className="block py-2 md:py-6 text-white">
                Lüftung & Klimaanlage
                <svg
                  className="w-4 h-4 inline-block ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12l6-6H4l6 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
