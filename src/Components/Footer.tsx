
import Footerlogo from "../assets/FooterLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#152C41] text-white py-15 h-[365.9px]">
      {/* Top Content */ }
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
           <div className="mb-25 rounded-r-full w-37">
           <Link to = "/">
            <img src={Footerlogo}
            alt="Cassidy Oil"
              className="w-32 mb-1"/>
           </Link>
        </div>

        {/* Company*/}
        <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
            <li className="my-6"><Link to="/about-us">About Us</Link></li>
            <li className="my-6"><Link to="/lubricants"> Lubricant</Link></li>
            <li className="my-6"><Link to="/contact">Contact</Link></li></ul>
        </div> 
          

        
        {/* Connect */}
        <div>
          <h3 className="font-bold mb-4">Connect</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="my-6"><Link to="#">Facebook</Link></li>
            <li className="my-6"><Link to="#">Instagram</Link></li>
            <li className="my-6"><Link to="#">Twitter</Link></li>
            <li className="my-6"><Link to="#">LinkedIn</Link></li>
          </ul>
        </div>

        {/* Find Us */}
         <div>
          <h3 className="font-bold mb-4">Find Us</h3>
          <p className="text-sm  text-gray-300">
            Amazing Grace Plaza, by New Extension <br />
            BBA Tradefair Lagos–Badagry Expressway
          </p>
         </div>
      </div>

      {/* Divider */ }
      <div className="border border-gray-500 max-w-7xl mt-5"/>

      {/* Bottom Section */ }
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-[#FFFFFF">
               <p>© 2023 Cassidy Energy. All rights reserved</p>
                <a href="#" className="mt-2 md:mt-0 hover:underline">
                    Terms & conditions
                </a>
      </div>
    </footer>

  )
}

export default Footer