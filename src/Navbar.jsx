import React, { useEffect, useState } from "react";
import LOGO from "./assets/logo.svg";
import { MENU_LINKS } from "./utils/data";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true); //Always show menu on large screens
      } else {
        setIsOpen(false); //Hide menu by default on small screens
      }
    };

    // Set initial state based on screen size
    handleResize();

    // Listen to resize events
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="container mx-auto px-6 sm:px-0 fixed bg-red500 left-1/2 transform -translate-x-1/2 top-5 z-10">
      <div className="flex items-center justify-between rounded-full bg-white/45 backdrop-blur-[12px] my-5 p-3 md:p-3">
        {/* logo */}
        <Link to="/">
          <img className=" h-8 sm:h-10 md:h-8 lg:h-10 ml-6 -mb-1" src={LOGO} />
        </Link>
        {/* <h1 className=" ml-6 font-bold text-2xl bg-gradient-to-r bg-clip-text text-transparent text-gradient-to-r from-[#f4a44f] to-[#ac573f]">
          DAVECODES
        </h1> */}

        {/* Hamburger Icon (Visible only on small screens) */}
        <button
          className=" block md:hidden text-[#333] mr-6 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 text-white hover:cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`
          ${isOpen ? "flex" : "hidden"} 
          menu-wrapper`}
        >
          {MENU_LINKS.map((item) => (
            <li key={item.id}>
              <Link
                // activeClass="active"
                activeclass="active"
                to={item.to}
                // smooth
                // spy
                offset={item.offset}
                className="menu-item text-black md:text-[11px] lg:text-[15px]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <button className=" hidden md:block h-12 text-[15px] md:text-[11px] lg:text-[15px] font-medium text-white bg-[#2B7DA0] rounded-full px-6 lg:px-9 transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer">
          Get a Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
