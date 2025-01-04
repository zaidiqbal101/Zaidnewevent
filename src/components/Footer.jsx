import React from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#290F23] text-white py-12 rounded-tl-[90px]">
      <div className="container mx-auto px-4">
        {/* Planner Logo and Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col items-start">
            <img
              src="/assets/logo.png"
              alt="Planner Logo"
              className="w-52 h-full mb-4"
            />
            <p className="text-left text-lg font-medium max-w-lg">
              Planners Events is dedicated to orchestrating your special day in a manner that ensures lasting memories for a lifetime.
            </p>
          </div>

          {/* Useful Links and Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Useful Links Section */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Useful Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="/aboutus" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="/gallery" className="text-gray-400 hover:text-white">Gallery</a></li>
                <li><a href="/contactpage" className="text-gray-400 hover:text-white">Contact Us</a></li>
              
              </ul>
            </div>

            {/* Contact Info Section */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li>H-169,1st Floor <br /> Noida Sector -63</li>
                <li><a href="mailto:info@plannersevents.in" className="text-gray-400 hover:text-white">info@plannersevents.in</a></li>
                <li><a href="tel:+919650398807" className="text-gray-400 hover:text-white">+91 96503 98807</a></li>
                <li><a href="tel:+919999988014" className="text-gray-400 hover:text-white">+91 99999 88014</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mb-8 text-center md:text-left">
          <h4 className="text-xl font-semibold mb-4">Let's Connect</h4>
          <ul className="flex justify-center md:justify-start space-x-4">
            <li><a href="https://www.instagram.com" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a></li>
            <li><a href="https://www.facebook.com" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a></li>
            <li><a href="https://www.youtube.com" className="text-gray-400 hover:text-white"><FaYoutube size={24} /></a></li>
            <li><a href="https://www.linkedin.com" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a></li>
          </ul>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-sm text-gray-400 mt-8">
          <p>
            Developed By <a href="https://www.brainydx.com" className="text-gray-400 hover:text-white">Powered By Nikatby Group</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
