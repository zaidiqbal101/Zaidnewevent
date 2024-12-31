import React from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
 
const Footer = () => {
  return (
    <footer className="bg-pink-900 text-white py-12 rounded-tl-[90px]">
      <div className="container mx-auto px-4">
        {/* Planner Logo and Description */}
        <div className=" container grid-cols-1 ">
          <img
            src="/assets/logo.png"
            alt="Planner Logo"
            className="w-52 h-full mb-1"
          />
          <p className="text-left text-lg font-medium max-w-lg">
            Planners Events is dedicated to orchestrating your special day in a manner that ensures lasting memories for a lifetime.
          </p>
        </div>
 
        {/* Useful Links Section */}
        <div className="flex gap-[5%] justify-end relative bottom-20">
          <div>
            <h4 className="text-xl font-semibold mb-4">Useful Links</h4>
            <ul>
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="/gallery" className="text-gray-400 hover:text-white">Gallery</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white">Terms and Conditions</a></li>
            </ul>
          </div>
 
          {/* Contact Info Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul>
              <li>125, Second Floor, <br/>
              Shahpur Jat, Siri Fort, New Delhi - 110049</li>
              <li><a href="mailto:info@plannersevents.in" className="text-gray-400 hover:text-white">info@plannersevents.in</a></li>
              <li><a href="tel:+919650398807" className="text-gray-400 hover:text-white">+91 96503 98807</a></li>
              <li><a href="tel:+919999988014" className="text-gray-400 hover:text-white">+91 99999 88014</a></li>
            </ul>
          </div>
 
          {/* Social Media Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Let's Connect</h4>
            <ul className="flex space-x-4">
              <li><a href="https://www.instagram.com" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a></li>
              <li><a href="https://www.facebook.com" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a></li>
              <li><a href="https://www.youtube.com" className="text-gray-400 hover:text-white"><FaYoutube size={24} /></a></li>
              <li><a href="https://www.linkedin.com" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a></li>
            </ul>
          </div>
        </div>
 
        {/* Footer Bottom Section */}
        <div className="text-center text-sm text-gray-400">
          <p>Developed By <a href="https://www.brainydx.com" className="text-gray-400 hover:text-white">Nikatby Technologies</a></p>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;