import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className="w-full bg-neutral-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">

        {/* Left Section */}
        <div className="mb-4 mt-8 px-10 text-center md:text-left">
          <h2 className="text-6xl font-bold leading-18">
            Let's Get <br />
            Started!
          </h2>

          <button className="bg-lime-500 text-black px-4 py-2 rounded-full text-lg font-bold hover:bg-neutral-800 hover:text-lime-500 outline-2 outline-transparent cursor-pointer hover:outline-lime-500 transition mt-5">
            CONTACT US
          </button>

          <div className="mt-8 pb-0 text-gray-300 text-lg">
            © 2025 Unleashed Technologies. All Rights Reserved. |
            <p className="underline hover:text-lime-500 hover:decoration-white cursor-pointer">
              Privacy Policy
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="mb-4 mt-8 px-2 text-center md:text-right">
          <div className="flex justify-center md:justify-end px-8">
            <h1 className="text-6xl font-extrabold flex space-x-2">
              <span className="text-lime-500">U</span>
              <span className="text-white">NLEASHED</span>
            </h1>
          </div>

          <p className="mt-6 text-2xl font-bold px-8">Sign up for our newsletter</p>

         <input
  type="email"
  placeholder="Enter your email"
  required
  className="mt-6 mx-auto md:ml-60 bg-amber-50 text-neutral-500 
             w-full max-w-xs h-8 text-xl text-center 
             rounded-3xl outline-4 outline-transparent 
             hover:outline-lime-500 block"
/>


          <div className="mt-16 text-gray-300 text-lg flex flex-wrap justify-center md:justify-end px-10 space-x-4 font-semibold">
            <p className="hover:text-lime-500 cursor-pointer">ABOUT US</p>
            <p className="hover:text-lime-500 cursor-pointer">CONTACT US</p>
            <p className="hover:text-lime-500 cursor-pointer">CAREERS</p>

            <LinkedInIcon className="hover:text-lime-500 cursor-pointer" />
            <TwitterIcon className="hover:text-lime-500 cursor-pointer" />
            <FacebookIcon className="hover:text-lime-500 cursor-pointer" />
            <InstagramIcon className="hover:text-lime-500 cursor-pointer" />
            <YouTubeIcon className="hover:text-lime-500 cursor-pointer" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
