import React from "react";
import Navbar from "./Navbar";
import servicesBg from "../assets/servicesBg.jpg";
import services1 from "../assets/services1.jpg";
import services2 from "../assets/services2.jpg";
import services3 from "../assets/services3.jpg";
import services4 from "../assets/services4.jpg";  
import services5 from "../assets/services5.jpg";
import services6 from "../assets/services6.webp";
import services9 from "../assets/services9.jpg";
import services8 from "../assets/services8.jpg";      

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

const serviceFeatures = [
  {
    title: "Strategy & Optimization",
    description:
      "Using the findings and insights from the Discovery phase, we initiate Strategy. The focus of the Strategy Phase is project planning and documentation including Information Architecture (IA), user behaviors, content structure, search strategy, user journey mapping and proposed next steps.",
    image: services1, // change to your image
  },
  {
    title: "Design & User Experience",
    description:
      "Drawing inspiration from research provided by our clients or the Discovery Summary and Strategy Phase, we develop custom designs. The Unleashed review process ensures all designs align with your brand standards and support the overall creative strategy.",
    image: services2, // change to your image
  },
  {
    title: "Technology & Website Development",
    description:
      "With expertise in Drupal, WordPress, Symfony and more, the development team follows a proven, repeatable, best-practice approach to development. We’ve built a diverse team of experts with the skills to create custom solutions that can evolve and scale as your needs change.",
    image: services3, // change to your image
  },
  {
    title: "eCommerce Development",
    description:
      "Your shiny new website or application needs a place to live. Many of our clients choose to host on their own servers, but for those who don’t have the time to worry about extensive monitoring of resources, redundancy/high availability, security, and everything else from the OS forward, this is the service for you.",
    image: services4, // change to your image
  },
   {
    title: "Long-Term Partnership",
    description:
      "As our long-term partnership solution, Evolving Services Plans (ESPs) empower our clients to navigate a constantly changing world driven by shifting technology and organizational goals. ESP clients purchase a block of hours at a reduced rate and have the flexibility to use them as roadmaps shift within an allotted time-frame. ",
    image: services5, // change to your image
  }, {
    title: "eCommerce Website Development",
    description:
      "Unleashed leads the way in digital strategy, custom software, and web development. Specializing in eCommerce, we create captivating online platforms that drive sales and elevate brands to new heights, using cutting-edge tech and best practices.",
    image: services6, // change to your image
  }, {
    title: "Website Development Services",
    description:
      "With expertise in Drupal, WordPress, Symfony and more, the website development team follows a proven, repeatable, best-practice approach to development. We’ve built a diverse team of experts with the skills to create custom solutions that can evolve and scale as your needs change",
    image: services9, // change to your image
  }, {
    title: "Custom Application Development",
    description:
      "Tailored custom app development to meet your unique business needs. Our experienced team collaborates closely with you to understand objectives and create bespoke solutions.",
    image: services8, // change to your image
  }, 
    
];


const SectionThree=()=>(
  <div className="w-full bg-white py-20">
    <div className="max-w-7xl mx-auto px-6 space-y-24">
      {serviceFeatures.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-10 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* IMAGE */}
          <div className="w-full md:w-1/2">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {item.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {item.description}
            </p>

            <button className="hover:text-lime-500 text-lg font-semibold outline-2 outline-transparent bg-blue-900 text-white hover:outline-lime-500 py-2 px-4 rounded-4xl hover:bg-white cursor-pointer transition duration-300 ">
              LEARN MORE
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Services = () => {
  return (
    <>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </>
  );
};

export default Services;
