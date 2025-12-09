import React from "react";
import {Search as SearchIcon} from "@mui/icons-material"

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

       
        <div className="flex items-center">
          <h1 className="text-3xl font-extrabold  flex">
            <span className="text-lime-500">U</span>
            <span className="text-blue-700">NLEASHED</span>
          </h1>
        </div>

        
        <ul className="hidden md:flex items-center space-x-12 text-sm font-bold text-gray-800">
          <li className="hover:text-blue-600 cursor-pointer">ABOUT</li>
          <li className="hover:text-blue-600 cursor-pointer flex items-center space-x-1">
            <span>SERVICES</span>
            <span className="text-xs">▼</span>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">INDUSTRIES</li>
          <li className="hover:text-blue-600 cursor-pointer">BLOG</li>
          <li className="hover:text-blue-600 cursor-pointer">WORK</li>
        </ul>

      
        <div className="flex items-center space-x-6">
          <button className="bg-blue-800 text-white px-7 py-3 rounded-full text-sm font-bold  hover:bg-blue-900 transition">
            START A PROJECT
          </button>

          <SearchIcon className="text-black-700 hover:text-blue-600 text-3xl cursor-pointer" fontSize="medium" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
