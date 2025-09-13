import Group from "../assets/Group.svg";
import {MenuOpen, MenuClose } from "../assets";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="w-full bg-white ">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 py-4">
       {/* Logo */}
      <Link to="/">
        <img src={Group} alt="Cassidy Energy" className="h-12 w-auto ml-5 sm:ml-0 md:ml-10" />
      </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-base">
          <li>
            <NavLink
              to="/"
              className= {({isActive})=> isActive ? "text-secondary font-bold " :  "text-navgrey font-semibold hover:text-[#002b36] "}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about-us"
              className={({isActive})=> isActive ? "text-secondary font-bold " :  "text-navgrey font-semibold hover:text-[#002b36] "}
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/lubricants"
              className={({isActive})=> isActive ? "text-secondary font-bold " :  "text-navgrey font-semibold hover:text-[#002b36] "}
            >
              Lubricants
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({isActive})=> isActive ? "text-secondary font-bold " :  "text-navgrey font-semibold hover:text-[#002b36] "}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-[#002b36] transition-colors duration-200"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ?(
           <img src={MenuClose} alt="Close menu"  className="w-6 h-6"></img>
            ): (
            <img src={MenuOpen} alt="Open menu" className="w-6 h-6"></img>)}
        </button>
      </div>
 
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-8 py-4">
          <ul className="space-y-4 text-base">
            <li>
              <NavLink
                to="/"
                 className={({isActive})=> isActive ? "text-secondary font-bold " :  "text-navgrey font-semibold hover:text-[#002b36] "}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about-us"
                className={({isActive})=> isActive ? "text-secondary font-bold " :  "text-navgrey font-semibold hover:text-[#002b36] "}
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/lubricants"
                 className={({isActive})=> isActive ? "text-secondary font-bold " :  "text-navgrey font-semibold hover:text-[#002b36] "}
              >
                Lubricants
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                 className={({isActive})=> isActive ? "text-secondary font-bold " :  "text-navgrey font-semibold hover:text-[#002b36] "}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
