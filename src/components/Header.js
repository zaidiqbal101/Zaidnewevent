import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const Header = () => {
  const [isWeddingDropdownOpen, setIsWeddingDropdownOpen] = useState(false);
  const [isBirthdayDropdownOpen, setIsBirthdayDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  return (
    <header className="bg-rose-800 text-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <img
            src="/assets/logo.png"
            alt="Planners Events Logo"
            className="h-16"
          />
        </div>

        {/* Mobile menu toggle button */}
        <button
          className="block lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <ChevronDownIcon className="w-6 h-6" />
        </button>

        {/* Navigation */}
        <nav className={`space-x-4 lg:flex ${isMenuOpen ? "block" : "hidden"}`}>
          <a href="/" className="hover:text-yellow-400">
            Home
          </a>
          <a href="aboutus" className="hover:text-yellow-400">
            About
          </a>

          {/* Wedding Dropdown */}
          <div
            className="inline-block relative group"
            onMouseEnter={() => setIsWeddingDropdownOpen(true)}
            onMouseLeave={() => setIsWeddingDropdownOpen(false)}
          >
            <button className="hover:text-yellow-400 inline-flex items-center">
              <span>Wedding</span>
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </button>
            <div
              className={`absolute left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 mt-0 ${
                isWeddingDropdownOpen ? "visible opacity-100" : ""
              }`}
            >
              <div className="pt-4">
                <div className="bg-white rounded-lg shadow-lg w-56 text-gray-700">
                  <ul className="py-2">
                    <li>
                      <a
                        href="/weddingdelhi"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Wedding Planners in Delhi
                      </a>
                    </li>
                    <li>
                      <a
                        href="/weddingnoida"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Wedding Planners in Noida
                      </a>
                    </li>
                    <li>
                      <a
                        href="/weddinggurgaon"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Wedding Planners in Gurgaon
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Birthday Dropdown */}
          <div
            className="inline-block relative group"
            onMouseEnter={() => setIsBirthdayDropdownOpen(true)}
            onMouseLeave={() => setIsBirthdayDropdownOpen(false)}
          >
            <button className="hover:text-yellow-400 inline-flex items-center">
              <span>Birthday</span>
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </button>

            <div
              className={`absolute left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 mt-0 ${
                isBirthdayDropdownOpen ? "visible opacity-100" : ""
              }`}
            >
              <div className="pt-4">
                <div className="bg-white rounded-lg shadow-lg w-56 text-gray-700">
                  <ul className="py-2">
                    <li>
                      <a
                        href="/birthdaydelhi"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Birthday Party Planner in Delhi
                      </a>
                    </li>
                    <li>
                      <a
                        href="/birthdaynoida"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Birthday Party Planner in Noida
                      </a>
                    </li>
                    <li>
                      <a
                        href="/birthdaygurgaon"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Birthday Party Planner in Gurgaon
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Services Dropdown */}
          <div
            className="inline-block relative group"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button className="hover:text-yellow-400 inline-flex items-center">
              <span>Services</span>
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </button>

            <div
              className={`absolute left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 mt-0 ${
                isServicesDropdownOpen ? "visible opacity-100" : ""
              }`}
            >
              <div className="pt-4">
                <div className="bg-white rounded-lg shadow-lg w-64 text-gray-700">
                  <ul className="py-2">
                    <li>
                      <a
                        href="/servicesanniversary"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Anniversary
                      </a>
                    </li>
                    <li>
                      <a
                        href="/kittyparty"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Kitty Party
                      </a>
                    </li>
                    <li>
                      <a
                        href="/babyshower"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Baby Shower
                      </a>
                    </li>
                    <li>
                      <a
                        href="/retirementparty"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Retirement Party
                      </a>
                    </li>
                    <li>
                      <a
                        href="/coupleproposals"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Couple Proposals
                      </a>
                    </li>
                    <li>
                      <a
                        href="/naamkaranceremony"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Naamkaran Ceremony
                      </a>
                    </li>
                    <li>
                      <a
                        href="/themeparty"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Theme Party
                      </a>
                    </li>
                    <li>
                      <a
                        href="/reunionparty"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Reunion Party
                      </a>
                    </li>
                    <li>
                      <a
                        href="/alumnimeet"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Alumni Meet
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <a href="gallery" className="hover:text-yellow-400">
            Gallery
          </a>
          <a href="blogpage" className="hover:text-yellow-400">
            Blog
          </a>
          <a href="contactPage" className="hover:text-yellow-400">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
