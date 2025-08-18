import Group from "../assets/Group.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0F2C44] text-white py-6">
      {/* Top Content */ }
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
           <div className="  border-[4px] border-solid border-[#F7CA18] mb-25 rounded-r-full w-37">
            <div >
               <img src={Group}
           alt="Cassidy Oil"
            className="w-32 mb-1"/>
            </div>
        </div>

        {/* Company*/}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li> <a href="/">About Us</a></li>
            <li>  <a href="/">Careers</a> </li>
          </ul>
        </div> 

        
        {/* Connect */}
        <div>
          <h3 className="font-semibold mb-4">Connect</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>

        {/* Find Us */}
         <div>
          <h3 className="font-semibold mb-4">Find Us</h3>
          <p className="text-sm text-gray-300">
            Amazing Grace Plaza, by New Extension <br />
            BBA Tradefair Lagos–Badagry Expressway
          </p>
         </div>
      </div>

      {/* Divider */ }
      <div className="border-t border-gray-500 max-w-7xl mx auto"/>

      {/* Bottom Section */ }
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
               <p>© 2023 Cassidy Energy. All rights reserved</p>
                <a href="#" className="mt-2 md:mt-0 hover:underline">
                    Terms & conditions
                </a>
      </div>
    </footer>

  )
}

export default Footer