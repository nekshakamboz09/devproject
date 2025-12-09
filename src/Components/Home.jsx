import React from "react";
import Navbar from "./Navbar";
import image from "../assets/image.png";
import image2 from "../assets/image2.jpeg";

// Hero Section
const HeroSection = () => (
  <div className="relative w-full h-[90vh]">
    <img
      src={image}
      alt="hero background"
      className="w-full h-full object-cover  brightness-50"
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

// Section Two
const SectionTwo = () => (
  <div className="bg-lime-400 mt-0 pt-0">
    <div className="text-center pl-70 pr-70 text-white pt-20 pb-20">
      <h2 className="text-5xl font-bold leading-15 font-sans ">
        Open Source Website Development Services You Can Trust
      </h2>
      <p className="text-lg pt-6 font-sans leading-relaxed ">
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

// Section Three
const SectionThree = () => (
  <div className="pt-10 flex gap-6">
    <div className="w-1/2 py-4 px-12">
      <h1 className="text-6xl font-bold text-gray-900 leading-18">
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
          We also understand that meeting deadlines matters. We build
          features and functionality in incremental, rapid cycles. This
          waterfall approach results in smaller releases with more frequent
          measurements and updates. That means you can see the regular
          progress being made and our team has opportunities for continuous
          learning and effective adjustments.
        </p>
        <br />
        <h2>Types of Development Projects Include:</h2>
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
    <div>
      <img src={image2} alt="Development Example" />
    </div>
  </div>
);

// Home Component
const Home = () => (
  <>
    <Navbar />
    <HeroSection />
    <SectionTwo />
    <SectionThree />
  </>
);

export default Home;
