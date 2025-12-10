import React, { useState } from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  // ⭐ ADDED FOR MOBILE
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false); // mobile dropdown

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-3xl font-extrabold flex">
            <span className="text-lime-500">U</span>
            <span className="text-blue-700">NLEASHED</span>
          </h1>
        </div>

        {/* ⭐ HAMBURGER BUTTON FOR MOBILE */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Desktop Menu (unchanged) */}
        <ul className="hidden md:flex items-center space-x-12 text-sm font-bold text-gray-800">
          <li>
            <Link
              to="/about"
              className="hover:underline hover:underline-offset-4 hover:decoration-lime-500 cursor-pointer "
            >
              ABOUT
            </Link>
          </li>

          {/* Desktop Dropdown */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center space-x-1">
              <Link
                to="/services"
                className="group-hover:text-blue-600 group-hover:underline group-hover:underline-offset-4 group-hover:decoration-lime-500"
              >
                SERVICES
              </Link>
              <span className="text-xs">▼</span>
            </div>

            <div
              className="absolute left-0 top-full w-72 bg-white shadow-xl rounded 
                  opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto 
                  transition-all duration-200"
            >
              <ul className="p-6 space-y-4 text-sm font-bold text-gray-800">
                <li>
                  <Link
                    to="/services/strategy"
                    className="hover:underline hover:underline-offset-4 hover:decoration-lime-500"
                  >
                    Strategy & Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/design"
                    className="hover:underline hover:underline-offset-4 hover:decoration-lime-500"
                  >
                    Design & User Experience
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/technology"
                    className="hover:underline hover:underline-offset-4 hover:decoration-lime-500"
                  >
                    Technology & Website Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/ecommerce"
                    className="hover:underline hover:underline-offset-4 hover:decoration-lime-500"
                  >
                    eCommerce Website Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/custom-apps"
                    className="hover:underline hover:underline-offset-4 hover:decoration-lime-500"
                  >
                    Custom Application Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/devops"
                    className="hover:underline hover:underline-offset-4 hover:decoration-lime-500"
                  >
                    DevOps & Hosting
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/long-term"
                    className="hover:underline hover:underline-offset-4 hover:decoration-lime-500"
                  >
                    Long-Term Partnership
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link
              to="/industries"
              className="hover:underline hover:underline-offset-4 hover:decoration-lime-500 cursor-pointer"
            >
              INDUSTRIES
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="hover:underline hover:underline-offset-4 hover:decoration-lime-500 cursor-pointer"
            >
              BLOG
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              className="hover:underline hover:underline-offset-4 hover:decoration-lime-500 cursor-pointer"
            >
              WORK
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="bg-blue-800 text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-white hover:text-blue-800 outline-2 outline-transparent cursor-pointer hover:outline-blue-800 transition">
            START A PROJECT
          </button>

          <SearchIcon
            className="text-black-700 hover:text-blue-600 text-3xl cursor-pointer"
            fontSize="medium"
          />
        </div>
      </div>

      {/* ⭐ MOBILE MENU PANEL */}
      {menuOpen && (
        <div className="md:hidden bg-white w-full shadow-lg px-6 py-6 space-y-4 text-gray-800 text-lg font-bold">
          <p className="cursor-pointer">ABOUT</p>

          {/* ⭐ MOBILE SERVICES DROPDOWN */}
          <div>
            <p
              className="cursor-pointer flex items-center justify-between"
              onClick={() => setServiceOpen(!serviceOpen)}
            >
              SERVICES <span>▼</span>
            </p>

            {serviceOpen && (
              <ul className="pl-4 py-2 space-y-3 text-sm">
                <li>Strategy & Optimization</li>
                <li>Design & User Experience</li>
                <li>Technology & Website Development</li>
                <li>eCommerce Website Development</li>
                <li>Custom Application Development</li>
                <li>DevOps & Hosting</li>
                <li>Long-Term Partnership</li>
              </ul>
            )}
          </div>

          <p className="cursor-pointer">INDUSTRIES</p>
          <p className="cursor-pointer">BLOG</p>
          <p className="cursor-pointer">WORK</p>

          {/* ⭐ MOBILE BUTTON */}
          <button className="bg-blue-800 text-white px-7 py-3 rounded-full text-sm font-bold w-full">
            START A PROJECT
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
