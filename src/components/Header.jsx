import React, { useState, useEffect } from "react";
import { ChevronDownIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Toggle dropdown
  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/aboutus" },
    {
      name: "Wedding",
      dropdown: [{ name: "Wedding Planners in Gaya", href: "/weddingdelhi" }],
    },
    {
      name: "Birthday",
      dropdown: [{ name: "Birthday Party Planner in Gaya", href: "/birthdaydelhi" }],
    },
    {
      name: "Services",
      dropdown: [
        { name: "Anniversary", href: "/servicesanniversary" },
        { name: "Kitty Party", href: "/kittyparty" },
        { name: "Baby Shower", href: "/babyshower" },
        { name: "Retirement Party", href: "/retirementparty" },
        { name: "Theme Party", href: "/themeparty" },
        { name: "Reunion Party", href: "/reunionparty" },
        { name: "Alumni Meet", href: "/AlumuniMeet" },
      ],
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blogpage" },
    { name: "Contact Us", href: "/contactPage" },
  ];

  return (
    <header className="bg-[#290f22] text-white z-50 relative">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src="/assets/Aryan-Event-Logo.png"
              alt="Aryan Events Logo"
              className="h-16"
            />
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <button
          className="block lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>

        {/* Sidebar for small screens */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-[#290f22] text-white z-50 transform transition-transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <button
            className="absolute top-4 right-4 focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <XIcon className="w-6 h-6 text-white" />
          </button>
          <nav className="mt-10">
            {links.map((link, idx) => (
              <div key={idx} className="px-4 py-2 dropdown">
                {link.dropdown ? (
                  <>
                    <button
                      className="flex items-center w-full text-left hover:text-yellow-400"
                      onClick={() => toggleDropdown(link.name)}
                    >
                      <span>{link.name}</span>
                      <ChevronDownIcon className="w-4 h-4 ml-auto" />
                    </button>
                    <div
                      className={`pl-4 ${
                        activeDropdown === link.name ? "block" : "hidden"
                      }`}
                    >
                      {link.dropdown.map((sublink, subIdx) => (
                        <a
                          key={subIdx}
                          href={sublink.href}
                          className="block py-1 hover:text-yellow-400"
                        >
                          {sublink.name}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a href={link.href} className="block hover:text-yellow-400">
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-6 z-50">
          {links.map((link, idx) => (
            <div key={idx} className="relative group dropdown">
              {link.dropdown ? (
                <>
                  <button
                    className="hover:text-yellow-400 flex items-center"
                    onClick={() => toggleDropdown(link.name)}
                  >
                    <span>{link.name}</span>
                    <ChevronDownIcon className="w-4 h-4 ml-1" />
                  </button>
                  {activeDropdown === link.name && (
                    <div className="absolute left-0 mt-2 bg-white text-gray-700 shadow-lg rounded-lg w-56 z-50">
                      {link.dropdown.map((sublink, subIdx) => (
                        <a
                          key={subIdx}
                          href={sublink.href}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {sublink.name}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={link.href} className="hover:text-yellow-400 block">
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
