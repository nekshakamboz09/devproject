import React from "react";
import Navbar from "./Navbar";
import servicesBg from "../assets/servicesBg.jpg";

const SectionOne = () => (
  <div className="relative w-full min-h-[70vh]">
    <img
      src={servicesBg}
      alt="Services"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative flex flex-col items-center justify-start py-40 text-center px-4 ">
      <p className="text-white sm:text-lg mt-6 opacity-90 ">
        <span className="text-lime-500 hover:text-white cursor-pointer hover:underline hover:decoration-rose-500 ">
          Home
        </span>
        /Services
      </p>
      <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mt-6">
        Services
      </h1>
    </div>
  </div>
);

const SectionTwo = () => (
  <div className="bg-white flex flex-col justify-center items-center text-center mt-20 mb-20">
    <h1 className="text-6xl font-bold text-blue-950 ">
      What will you Unleash?
    </h1>
    <p className="px-6 sm:px-12 md:px-24 lg:px-40 xl:px-60 py-10 text-base sm:text-lg lg:text-xl ">
      Creating custom websites, applications and software that drive measurable
      results is in our DNA. Aligning our team with your goals makes that
      possible.
    </p>
    <button className="bg-lime-500 text-white px-6 py-2 rounded-full text-xl hover:bg-lime-600 transition duration-300 font-semibold outline-2 outline-transparent hover:outline-lime-500 hover:text-lime-500 hover:bg-white-100 cursor-pointer">
      START THE DISCOVERY PROCESS
    </button>
  </div>
);

const SectionThree=()=>(
  <div>
    
  </div>
);

const Services = () => {
  return (
    <>
      <Navbar />
      <SectionOne />
      <SectionTwo />
    </>
  );
};

export default Services;
