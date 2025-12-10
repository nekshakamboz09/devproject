import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className="w-full bg-neutral-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Let's Get <br /> Started!
          </h2>

          <button
            className="bg-lime-500 text-black px-6 py-2 rounded-full text-lg font-bold 
                       hover:bg-neutral-800 hover:text-lime-500 hover:outline-lime-500 
                       outline-2 outline-transparent transition mt-5"
          >
            CONTACT US
          </button>

          <div className="mt-6 text-gray-300 text-base sm:text-lg">
            © 2025 Unleashed Technologies. All Rights Reserved. |
            <span className="underline ml-2 hover:text-lime-500 cursor-pointer">
              Privacy Policy
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-center md:text-right">

          {/* Logo */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold flex justify-center md:justify-end space-x-2">
            <span className="text-lime-500">U</span>
            <span className="text-white">NLEASHED</span>
          </h1>

          <p className="mt-6 text-xl sm:text-2xl font-bold">Sign up for our newsletter</p>

          {/* Newsletter Input */}
          <div className="flex justify-center md:justify-end mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="bg-amber-50 text-neutral-500 w-full max-w-xs sm:max-w-sm h-10 text-lg 
                         text-center rounded-3xl outline-4 outline-transparent 
                         hover:outline-lime-500"
            />
          </div>

          {/* Links + Icons */}
          <div className="mt-15 text-gray-300 text-base sm:text-lg flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 font-semibold">
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
