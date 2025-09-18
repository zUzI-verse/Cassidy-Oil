import Footerlogo from "../assets/FooterLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#152C41] text-white py-10 w-full overflow-hidden">
      {/* MOBILE LAYOUT */}
      <div className="md:hidden md:ml-10 max-w-7xl mx-auto px-6  mb-20">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={Footerlogo} alt="Cassidy Energy" className="w-28 mb-6" />
          </Link>
        </div>

        {/* Company + Connect side-by-side */}
        <div className="flex  space-y-10">
          {/* Company */}
          <div className="flex-1 min-w-[9rem]">
            <h3 className="font-bold mb-10">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="mb-10">
                <Link to="/about-us" className="hover:underline ">
                  About Us
                </Link>
              </li>
              <li className="mb-10">
                <Link to="/lubricants" className="hover:underline ">
                  Lubricants
                </Link>
              </li>
              <li className="mb-10">
                <Link to="/contact" className="hover:underline ">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="flex-1 min-w-[9rem]">
            <h3 className="font-bold mb-10 ml-24">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="mb-10 ml-24">
                <Link to="#" className="hover:underline">
                  Facebook
                </Link>
              </li>
              <li className="mb-10 ml-24">
                <Link to="#" className="hover:underline">
                  Instagram
                </Link>
              </li>
              <li  className="mb-10 ml-24">
                <Link to="#" className="hover:underline">
                  Twitter
                </Link>
              </li>
              <li className="mb-10 ml-24">
                <Link to="#" className="hover:underline">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Find Us centered beneath */}
        <div className="mt-8 text-left ">
          <h3 className="font-bold mb-3">Find Us</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Amazing Grace Plaza, by New Extension
            <br />
            BBA Tradefair Lagos–Badagry Expressway
          </p>
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:grid max-w-7xl mx-auto px-12 grid-cols-4 gap-8">
        {/* Logo */}
        <div className="flex flex-col">
          <Link to="/">
            <img src={Footerlogo} alt="Cassidy Energy" className="w-32 mb-4" />
          </Link>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-7">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="mb-7">
              <Link to="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li className="mb-7">
              <Link to="/lubricants" className="hover:underline">
                Lubricants
              </Link>
            </li>
            <li className="mb-7">
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-bold mb-7">Connect</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="mb-7">
              <Link to="https://web.facebook.com/?_rdc=1&_rdr#" className="hover:underline">
                Facebook
              </Link>
            </li>
            <li className="mb-7">
              <Link to="https://www.instagram.com/" className="hover:underline">
                Instagram
              </Link>
            </li>
            <li className="mb-7">
              <Link to="https://x.com/" className="hover:underline">
                Twitter
              </Link>
            </li>
            <li className="mb-7">
              <Link to="https://api.linkedin.com/login" className="hover:underline">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        {/* Find Us */}
        <div >
          <h3 className="font-bold mb-5">Find Us</h3>
          <p className="text-sm text-gray-300 leading-relaxed ">
            Amazing Grace Plaza, by New Extension
            <br />
            BBA Tradefair Lagos–Badagry Expressway
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-500 mt-8" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 md:ml-9 py-4 flex flex-col md:flex-row items-left justify-between text-sm text-gray-300 ">
        <p>© 2023 Cassidy Energy. All rights reserved</p>
        <Link to="#" className="mt-5 md:mt-0 hover:underline">
          Terms & conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
