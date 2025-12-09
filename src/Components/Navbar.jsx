import React, { useState } from "react";
import { Search as SearchIcon } from "@mui/icons-material";

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
        <div className="md:hidden text-3xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Desktop Menu (unchanged) */}
        <ul className="hidden md:flex items-center space-x-12 text-sm font-bold text-gray-800">
          <li className="hover:underline hover:underline-offset-4 hover:decoration-lime-500 cursor-pointer ">
            ABOUT
          </li>

          {/* Desktop Dropdown */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center space-x-1">
              <span className="group-hover:text-blue-600 group-hover:underline group-hover:underline-offset-4 group-hover:decoration-lime-500">
                SERVICES
              </span>
              <span className="text-xs">▼</span>
            </div>

            <div
              className="absolute left-0 top-full w-72 bg-white shadow-xl rounded 
                  opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto 
                  transition-all duration-200"
            >
              <ul className="p-6 space-y-4 text-sm font-bold text-gray-800">
                <li className="hover:underline hover:underline-offset-4 hover:decoration-lime-500">
                  Strategy & Optimization
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:decoration-lime-500 cursor-pointer">
                  Design & User Experience
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:decoration-lime-500 cursor-pointer">
                  Technology & Website Development
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:decoration-lime-500 cursor-pointer">
                  eCommerce Website Development
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:decoration-lime-500 cursor-pointer">
                  Custom Application Development
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:decoration-lime-500 cursor-pointer">
                  DevOps & Hosting
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:decoration-lime-500 cursor-pointer">
                  Long-Term Partnership
                </li>
              </ul>
            </div>
          </li>

          <li className="hover:underline hover:underline-offset-4 hover:decoration-lime-500 cursor-pointer">
            INDUSTRIES
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:decoration-lime-500 cursor-pointer">
            BLOG
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:decoration-lime-500 cursor-pointer">
            WORK
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
