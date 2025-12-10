import React from "react";
import Navbar from "./Navbar";
import image from "../assets/image.png";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpg";
import visibilty from "../assets/visibilty.png";
import ConfidenceIcon from "../assets/confidence.png";
import IntegrationIcon from "../assets/integration.png";
import InsightIcon from "../assets/insight.png";
import insights1 from "../assets/insights1.jpg";
import insights2 from "../assets/insights2.webp";
import insights3 from "../assets/insights3.webp";
import Footer from "./Footer";



const HeroSection = () => (
  <div className="relative w-full h-[90vh]">
    <img
      src={image}
      alt="hero background"
      className="w-full h-full object-cover brightness-50"
    />

    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <p className="text-lime-400 text-lg font-medium mb-4">
        Home <span className="text-white"> / </span>
        Services <span className="text-white"> / </span>
        Website Development Services
      </p>

      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        Website Development Services
      </h1>

      <p className="text-white text-lg mt-4 max-w-3xl">
        A development partner you can trust to manage complexity.
      </p>

      <button className="mt-6 bg-lime-500 hover:bg-lime-600 text-black font-semibold px-8 py-3 rounded-full text-lg">
        START A PROJECT
      </button>
    </div>
  </div>
);


const SectionTwo = () => (
  <div className="bg-lime-400 mt-0 pt-0">
    <div className="text-center px-6 sm:px-16 md:px-28 lg:px-40 text-white pt-20 pb-20">
      <h2 className="text-4xl sm:text-5xl font-bold leading-15 font-sans">
        Open Source Website Development Services You Can Trust
      </h2>

      <p className="text-lg pt-6 font-sans leading-relaxed">
        With our extensive expertise in PHP and our commitment to open
        source principles, we have the technical knowledge and experience to
        take on existing, unstable projects or to build you the ideal custom
        solution from the ground up. Our dedicated team specializes in
        providing top-notch website development services tailored to your
        specific needs, ensuring seamless integration, robust functionality,
        and captivating user experiences. Trust us, as open source PHP
        experts, to bring your vision to life with precision and expertise.
      </p>
    </div>
  </div>
);

const SectionThree = () => (
  <div className="pt-10 flex flex-col md:flex-row gap-6 px-4">
    {/* LEFT COLUMN */}
    <div className="w-full md:w-1/2 py-4 md:px-12">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-18">
        Web Development Services with Results in Mind
      </h1>

      <div className="py-8 text-lg leading-7 text-gray-700">
        <p>
          We understand that each website or custom software project has a
          business objective it supports. By investing in new technology,
          outsourced developers, or a new website, you expect to feel a
          positive impact. Our team is committed to understanding that
          impact and keeping it in mind as we build.
        </p>
        <br />

        <p>
          We also understand that meeting deadlines matters. We build features
          and functionality in incremental, rapid cycles. This waterfall
          approach results in smaller releases with more frequent measurements
          and updates. That means you can see the regular progress being made
          and our team has opportunities for continuous learning and
          effective adjustments.
        </p>

        <br />
        <h2 className="font-bold text-xl">Types of Development Projects Include:</h2>

        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>CMS Websites in Drupal</li>
          <li>CMS Websites in WordPress</li>
          <li>Custom Software Projects</li>
          <li>Symfony-Driven Applications</li>
          <li>E-Commerce (B2B & B2C)</li>
          <li>CMS Websites in WordPress</li>
          <li>Custom Asset Tracking Systems</li>
          <li>Inventory Management Systems</li>
          <li>Integrated ERPs</li>
          <li>Micro-Services Applications</li>
          <li>Drupal 7 to 9 Migrations</li>
          <li>Drupal 10 Migrations</li>
        </ul>

        <br />
        <p>
          While each project is slightly different and often has unique
          requirements, our team is focused on making sure the final product
          achieves your business objectives.
        </p>
      </div>
    </div>

 
    <div className="w-full md:w-1/2 px-4">
      <img src={image2} alt="Development Example" className="w-full h-auto rounded" />
    </div>
  </div>
);


const ContactForm = () => (
  <div className="w-full px-4 sm:px-8 py-10">
    <form className="max-w-6xl mx-auto space-y-8">

      {/* First + Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block font-bold mb-2">First Name</label>
          <input
            type="text"
            className="w-full h-12 bg-gray-100 p-4 rounded outline-2 outline-transparent hover:outline-lime-500"
          />
        </div>

        <div>
          <label className="block font-bold mb-2">Last Name</label>
          <input
            type="text"
            className="w-full h-12 bg-gray-100 p-4 rounded outline-2 outline-transparent hover:outline-lime-500"
          />
        </div>
      </div>

     
      <div>
        <label className="block font-bold mb-2">Company Name</label>
        <input
          type="text"
          className="w-full h-12 bg-gray-100 p-4 rounded outline-2 outline-transparent hover:outline-lime-500"
        />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block font-bold mb-2">Phone Number</label>
          <input
            type="text"
            className="w-full h-12 bg-gray-100 p-4 rounded outline-2 outline-transparent hover:outline-lime-500"
          />
        </div>

        <div>
          <label className="block font-bold mb-2">
            Your Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full h-12 bg-gray-100 p-4 rounded outline-2 outline-transparent hover:outline-lime-500"
            required
          />
        </div>
      </div>

    
      <div>
        <label className="block font-bold mb-2">
          How can we help? <span className="text-red-500">*</span>
        </label>
        <textarea
          rows="4"
          className="w-full bg-gray-100 p-4 rounded outline-2 outline-transparent hover:outline-lime-500"
          required
        ></textarea>
      </div>

      <button className="bg-lime-500 p-3 font-semibold rounded-4xl outline-2 outline-transparent hover:outline-lime-500 hover:bg-white hover:text-lime-500 cursor-pointer">
        SEND MESSAGE
      </button>
    </form>
  </div>
);

const SectionFour = () => (
   <div className="relative w-full h-full">
    {/* Background Image */}
    <img
      src={image3}
      alt="background"
      className="w-full h-full object-cover"
    />

    {/* Heading & Subtitle */}
    <div className="absolute inset-0 flex flex-col items-center justify-start pt-20 text-center px-4">
      
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        Key Benefits of Web  
        <br className="hidden sm:block" />
        Development Services
      </h1>

      <p className="text-white  sm:text-lg mt-6 mb-15 opacity-90">
        Executing on strategy and design.
      </p>
    </div>

    {/* 🟩 Cards Section (Centered Under Heading, NOT overlapping) */}
    <div className="absolute top-[40%] px-4 sm:px-10 flex flex-wrap justify-center gap-8 text-sm w-full ">
      
      <div className="bg-white  shadow-xl p-6 w-[260px] text-center">
        <img src={visibilty} className="w-52 h-52" />
        <h2 className="text-xl font-bold">Visibility</h2>
        <p className="text-gray-600 mt-2 leading-relaxed max-w-xs mx-auto">
         Track progress on your project from start to finish with a dedicated Project Manager and development lead.
        </p>
      </div>

      <div className="bg-white  shadow-xl p-8 w-[260px] text-center">
        <img src={InsightIcon} className="w-52 h-52" />
        <h2 className="text-xl font-bold">Insight</h2>
        <p className="text-gray-600 mt-2 leading-relaxed max-w-xs mx-auto">
          Ask questions–even the “dumb” ones–throughout the entire build. We know the answers
        </p>
      </div>

      <div className="bg-white  shadow-xl p-8 w-[260px] text-center">
        <img src={IntegrationIcon} className="w-52 h-52" />
        <h2 className="text-xl font-bold">Integration</h2>
        <p className="text-gray-600 mt-2 leading-relaxed max-w-xs mx-auto">
          By integrating with existing internal systems like CRM, AMS and ERPs we can create a holistic solution.


        </p>
      </div>

      <div className="bg-white  shadow-xl p-8 w-[260px] text-center">
        <img src={ConfidenceIcon} className="w-52 h-52" />
        <h2 className="text-xl font-bold">Confidence</h2>
        <p className="text-gray-600 mt-2 max-w-xs mx-auto leading-relaxed">
          Relax knowing we support security, accessibility, scalability, recoverability and transparency.
        </p>
      </div>
    </div>

  </div>
);

const SectionFive = () => (
  <div className="pt-20 bg-white pb-20 px-4 sm:px-8">
    {/* heading */}
    <div className="  items-center justify-start  text-center px-4">
      <h1 className=" text-blue-900 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        Our Most Popular Web  
        <br className="hidden sm:block" />
        Development Services
      </h1>
    </div>
    {/* cards */}
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-10">
      {/* Card 1 */}
      <div className=" rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
        <h2 className="text-4xl font-bold mb-4">Symfony Solutions</h2>
        <p className="text-gray-700 text-xl">
          As the exclusive North American SensioLabs partner, we offer certified Symfony developers for the most complex custom software and integration needs.
        </p>
        <button className="mt-4 text-black p-6 rounded-4xl text-bold text-center font-semibold bg-lime-500 oultine-1 outline-transparent hover:outline-2 hover:outline-lime-500 hover:text-lime-500 hover:bg-white cursor-pointer">START A PROJECT</button>
      </div>
      {/* Card 2 */}
      <div className=" rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
        <h2 className="text-4xl font-bold mb-4">Drupal Websites</h2>
        <p className="text-gray-700 text-xl">
  Having built and launched more than 50 enterprise instances in Drupal, we understand the platform's capabilities. We also manage migrations from Drupal 7 or 9 to Drupal 10.
        </p>
        <button className="mt-4 text-black p-6 rounded-4xl text-bold text-center font-semibold bg-lime-500 oultine-1 outline-transparent hover:outline-2 hover:outline-lime-500 hover:text-lime-500 hover:bg-white cursor-pointer">START A PROJECT</button>
      </div>
      {/* Card 3 */}
      <div className=" rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
        <h2 className="text-4xl font-bold mb-4">Custom Software</h2>
        <p className="text-gray-700 text-xl">
          We can build inventory management, asset tracking, custom APIs, document management systems, and custom solutions to your unique specifications.
        </p>
        <button className="mt-4 text-black p-6 rounded-4xl text-bold text-center font-semibold bg-lime-500 oultine-1 outline-transparent hover:outline-2 hover:outline-lime-500 hover:text-lime-500 hover:bg-white cursor-pointer">START A PROJECT</button>
      </div>
      {/* Card 4 */}
      <div className=" rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
        <h2 className="text-4xl font-bold mb-4">WordPress Websites</h2>
        <p className="text-gray-700 text-xl">
          Our team has built websites in WordPress for everything from traditional blog sites to fully customized, integrated enterprise websites. We can leverage the WordPress platform to meet your requirements.
        </p>
        <button className="mt-4 text-black p-6 rounded-4xl text-bold text-center font-semibold bg-lime-500 oultine-1 outline-transparent hover:outline-2 hover:outline-lime-500 hover:text-lime-500 hover:bg-white cursor-pointer transition ">START A PROJECT</button>
      </div>
        </div>
        </div>
  
);

const SectionSix=()=>(
  <div className="pt-10 bg-white pb-20 px-4 sm:px-8">
    <div className="items-center justify-start  text-center px-4">
      <h1 className="text-blue-900 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        Related Insights
      </h1>
    </div>
    {/* cards */}
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-10">
      {/* Card 1 */}
      <div className=" p-4">
        <img src={insights1} alt="Insight 1" className="w-full h-48 object-cover rounded mb-4" />
         <h2 className="text-xl font-bold mb-2 text-lime-500">BLOG</h2>
        <h2 className="text-4xl font-bold text-blue-900 leading-12 mb-2 hover:underline hover:underline-offset-4 hover:decoration-rose-700 cursor-pointer hover:text-black">Mastering B2B eCommerce Website Development: Insights from Industry Experts</h2>
        <p className="text-gray-700 text-xl">
          eCommerce web development is critical for B2B success. We explore key factors when designing your B2B eCommerce website.
        </p>
        <button className="mt-3 text-blue-900 pt-4 font-bold text-center cursor-pointer hover:text-lime-500 hover:pl-2">READ MORE</button>
        </div>
      {/* Card 2 */}
      <div className=" p-4">
        <img src={insights2} alt="Insight 1" className="w-full h-48 object-cover rounded mb-4" />
         <h2 className="text-xl font-bold mb-2 text-lime-500">BLOG</h2>
        <h2 className="text-4xl font-bold text-blue-900 leading-12 mb-2 hover:underline hover:underline-offset-4 hover:decoration-rose-700 cursor-pointer hover:text-black">Important Website Metrics for Associations to Track</h2>
        <p className="text-gray-700 text-xl">
          Discover key website metrics to boost engagement, personalization, and growth for associations. Measure success today.
        </p>
        <button className="mt-3 text-blue-900 pt-4 font-bold text-center cursor-pointer hover:text-lime-500 hover:pl-2">READ MORE</button>
        </div>
      {/* Card 3 */}
      <div className=" p-4">
        <img src={insights3} alt="Insight 1" className="w-full h-48 object-cover rounded mb-4" />
         <h2 className="text-xl font-bold mb-2 text-lime-500">BLOG</h2>
        <h2 className="text-4xl font-bold text-blue-900 leading-12 mb-2 hover:underline hover:underline-offset-4 hover:decoration-rose-700 cursor-pointer hover:text-black">5 Key Features of Any Great Association Website</h2>
        <p className="text-gray-700 text-xl">
        Build a successful association website with user-focused design, accessibility, and community engagement.
        </p>
        <button className="mt-3 text-blue-900 pt-4 font-bold text-center cursor-pointer hover:text-lime-500 hover:pl-2">READ MORE</button>
        </div>
        </div>
    <button className="mt-8 bg-blue-900 hover:bg-white hover:text-blue-900 outline-2 outline-transparent hover:outline-blue-900 text-white font-bold px-3 py-2 rounded-full text-lg mx-auto block cursor-pointer"> ALL INSIGHTS</button>
      
    </div>
);



const Home = () => (
  <>
    <Navbar />
    <HeroSection />
    <SectionTwo />
    <SectionThree />
    <ContactForm />
    <SectionFour/>
    <SectionFive/>
    <SectionSix/>
    <Footer />
  </>
);

export default Home;
