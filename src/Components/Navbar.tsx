import Group from "../assets/Group.svg";
import {Menu, X} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [ menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () =>setMenuOpen((prev) => !prev);


  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */ }
        <img src={Group} alt="Cassidy Energy" className="h-12 w-auto"/>
        {/* Desktop Menu */ }
        <ul className="hidden md:flex space-x-10 text-base">
          <li>
            <Link to="/" className="text-[#002b36] font-semibold hover:text-[#002b36]">
              Home
            </Link></li>

            <li>
            <Link to="/about us" className="text-[#002b36] font-semibold hover:text-[#002b36]">
             About Us 
            </Link></li>

            <li>
            <Link to="/lubricants" className="text-[#002b36] font-semibold hover:text-[#002b36]">
              Lubricants
            </Link></li>

            <li>
            <Link to="/contact" className="text-[#002b36] font-semibold hover:text-[#002b36]">
             Contact
            </Link></li>
        </ul>

        {/* Mobile Menu Button */ }
        <button 
          className="md:hidden text-gray-600 hover:text-[#002b36] transition-colors duration-200"
          onClick={toggleMenu}
          aria-label="Toggle Menu">
          {
            menuOpen ? <X className="h-6 w-6" /> : <Menu size={28} />}
          </button>
      </div>

      {/* Mobile Menu Dropdown */ }
      {menuOpen &&(
        <div className="md:hidden bg-white border-t border-gray-200 px-8 py-4">
          <ul className="space-y-4 text-base">
       <li>
            <Link to="/" className="text-[#002b36] font-semibold hover:text-[#002b36]">
              Home
            </Link></li>

            <li>
            <Link to="/about us" className="text-[#002b36] font-semibold hover:text-[#002b36]">
             About Us 
            </Link></li>

            <li>
            <Link to="/lubricantss" className="text-[#002b36] font-semibold hover:text-[#002b36]">
              Lubricants
            </Link></li>


            <li>
            <Link to="/contact" className="text-[#002b36] font-semibold hover:text-[#002b36]">
             Contact
            </Link></li>
          </ul>
        </div>
      )}   
    </nav>
   
  )
}

export default Navbar