import { useState } from "react"
import { Link } from "react-router-dom";
 import FrameF  from "../assets/FrameF.png";
 import {FrameB} from "../assets";




type Product = {
    id: number;
    name: string;
    description: string;
    image: string;
}

const categories = [
  { name: "All", path: "/lubricants" },
  { name: "Bike Oil", path: "/lubricants/bike-oils" },
  { name: "Petrol Engine Oil", path: "/lubricants/petrol-engine-oil" },
  { name: "Diesel Engine Oil", path: "/lubricants/diesel-engine-oil" },
  { name: "Transmission Oil", path: "/lubricants/transmission-oil" },
  { name: "Heavy Duty Engine Oils", path: "/lubricants/heavy-duty-engine-oils" },
];
const products: Product [] = [
     {
    id: 1,
    name: "CASSKET PREMIUM 4T 20W-40 Api SL/MA2",
    description: " Premium Multigrade Okada, Kekenapep engine oil ",
    image: FrameF,
  },
  {
    id: 2,
    name: "CASSTEK MOTO 4T 20W-40 API SF/CF",
    description: "High Performance Multigrade Okada, Kekenapep engine oil",
    image: "/src/assets/FrameG.png",
  },
  {
    id: 3,
    name: "CASSGOLD SUPER MOTOR OIL 20W-50 API SL/CF",
    description: "Super Performance Multigrade designed with deposit guard technology",
    image: "/src/assets/FrameE.png",
  },
  {
    id: 4,
    name: "CASSGOLD POWER MOTOR OIL SAE40 API SF/CF",
    description: "High Performance mono-grade mineral engine oil",
    image: "/src/assets/FrameU.png",
  },
  {
    id: 5,
    name: "CASSGOLD PASSENGER MOTOR OIL 20W-50 API SG/CF-4",
    description: "World class mineral technology engine oil designed for superior wear protection",
    image: "/src/assets/FrameD.png",
  },
  {
    id: 6,
    name: "CASSGOLD ADVANCED FULLY SYNTHETIC MOTOR OIL 5W-40 API SN/CF",
    description: "Synthetic technology engine oil designed for superior wear protection",
    image: "/src/assets/FrameO.png",
  },
  {
    id: 7,
    name: "CASSTURBO HD SAE40 API CF/SF",
    description: "Heavy duty Mono-grade mineral engine oil",
    image: "/src/assets/FrameL.png",
  },
  {
    id: 8,
    name: "CASSTURBO HD PLUS 15W40 CF-4/SG",
    description: "Fleet multigrade diesel engine oil designed to provide superior performanc for trucks, buses, light commercial vehicle.",
    image: "/src/assets/FrameK.png",
  },
  {
    id: 9,
    name: "CASSTURBO HD ULTRA 15W40 CI-4",
    description: "Long drain premium performance Multigrade diesel engine oil designed for modern heavy duty engine",
    image: "/src/assets/FrameC.png",
  },
  {
    id: 10,
    name: "CASSTURBO HD FORCE 15W40 CH-4",
    description: "Superior Performance Multigrade diesel engine oil designed with active protection",
    image: FrameB,
  },
  {
    id: 11,
    name: "CASSTRANS DEX D2 ATF DEXRON IID",
    description: "Multivehicle automatics transmission fluid and power steering fluid",
    image: "/src/assets/FrameM.png",
  },
  {
    id: 12,
    name: "CASSTRANS DEX H3 ATF DEXRON IIIH/IIIM",
    description: "Multivehicle automatics transmission fluid and power steering fluid",
    image: "/src/assets/FrameA.png",
  },
  {
    id: 13,
    name: "CASSGOLD ULTRATECH FULLY SYNTHETIC MOTOR OIL 0W-30 API SN-CF",
    description: "Fully synthetic technology engine oil designed for superior wear protection",
    image: "/src/assets/FrameD.png",
  },
  {
    id: 14,
    name: "CASSGOLD ULTRATECH FULLY SYNTHETIC MOTOR OIL 0W-40 API SN-CF",
    description: "Fully synthetic technology engine oil designed for superior wear protection",
    image: "/src/assets/FrameR.png",
  },
  {
    id: 15,
    name: "CASSGOLD ADVANCED FULLY SYNTHETIC MOTOR OIL 5W-30 API SN/CF",
    description: "Fully synthetic technology engine oil designed for superior wear protection",
    image: "/src/assets/FrameV.png",
  },
  {
    id: 16,
    name: "CASSGOLD ULTRATECH FULLY SYNTHETIC MOTOR OIL 0W-20 API SN-CF",
    description: "Fully synthetic technology engine oil designed for superior wear protection",
    image: "/src/assets/FrameQ.png",
  },
  {
    id: 17,
    name: "CASSTURBO HD SAE40 API SF/CF 25L",
    description: "",
    image: "/src/assets/FrameI.png",
  },
  {
    id: 18,
    name: "CASSGOLD SUPER MOTOR OIL 20W-50 API SL/CF 25L",
    description: "",
    image: "/src/assets/FrameN.png",
  },
  {
    id: 19,
    name: "CASSGOLD SUPER MOTOR OIL 20W-50 API SL/CF  200L",
    description: "",
    image: "/src/assets/FrameH.png",
  },
  {
    id: 20,
    name: "CASSTURBO HD SAE40 API SF/CF 25L 200L",
    description: "",
    image: "/src/assets/FrameJ.png",
  },

];

const AllLubricants = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    
    const filteredProducts =
    activeCategory === "All" ? products : products.filter((p) =>
          p.name.toLowerCase().includes(activeCategory.toLowerCase())
        );
    
  return (
    <div>
      {/*Hero Banner*/}
     <section className="relative bg-cover w-full m-0 bg-center text-white text-center p-32 h-64 " style={{ backgroundImage: "url('/src/assets/BgAuto.png')" }}>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div>
        <h2 className="text-4xl font-bold">Automatic Lubricants</h2>
      </div>
     </section>


      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-6 py-4 text-sm text-gray-600">
        <Link to="/" className="hover:text-orange-500">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/lubricants" className="text-orange-500 font-medium">
          Lubricants
        </Link>
      </div>

     {/* Main Content */}
     <main className="container mx-auto px-6 py-12">
      <div className="flex gap-8">

        {/* Side Bar */}
       <aside className="w-1/4">
          <ul className="space-y-3">
          {categories.map((cat) => (
            <li key={cat.name}
              className={`cursor-pointer ${activeCategory === cat.name ? "text-orange-500 font-bold" : "text-gray-700 hover:text-orange-500"}`}
              onClick={() => setActiveCategory(cat.name)}
            >
              <Link
                to={cat.path}
                className="text-gray-700 hover:text-orange-500"
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
    </aside>
  

        {/* Product List */}    
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4">
        {filteredProducts.map((product:Product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow">
            <img src={product.image} alt={product.name}  className="w-full h-56 object-contain"/>
            <div  className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
             <p className="text-gray-600 text-sm">{product.description}</p>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">See More</button>
          </div>
          </div>
        ))}
        </section>
      </div>
     </main>
    </div>
  )
}

export default AllLubricants