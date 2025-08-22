
import { Link } from "react-router-dom";
import BgAuto from "../assets/BgAuto.png";
import { FrameD, FrameE, FrameO, FrameQ, FrameR, FrameU } from "../assets";




const products  = [
  {
    id: 1,
    name: "CASSGOLD SUPER MOTOR OIL 20W-50 API SL/CF",
    description: "Super Performance Multigrade designed with deposit guard technology",
    image: FrameE,
  },
  {
    id: 2,
    name: "CASSGOLD POWER MOTOR OIL SAE40 API SF/CF",
    description: "High Performance mono-grade mineral engine oil",
    image: FrameU,
  },

  {
    id: 3,
    name: "CASSGOLD PASSENGER MOTOR OIL 20W-50 API SG/CF-4",
    description: "World class mineral technology engine oil designed for superior wear protection",
    image: FrameD,
  },
  {
    id: 4,
    name: "CASSGOLD ADVANCED FULLY SYNTHETIC MOTOR OIL 5W-40 API SN/CF",
    description: "Synthetic technology engine oil designed for superior wear protection",
    image: FrameO,
  },

  {
    id: 5,
    name: "CASSGOLD ULTRATECH FULLY SYNTHETIC MOTOR OIL 0W-30 API SN-CF",
    description: "Fully synthetic technology engine oil designed for superior wear protection",
    image: FrameD,
  },
  {
    id: 6,
    name: "CASSGOLD ULTRATECH FULLY SYNTHETIC MOTOR OIL 0W-40 API SN-CF",
    description: "Fully synthetic technology engine oil designed for superior wear protection",
    image: FrameR,
  },
  {
    id: 7,
     name: "CASSGOLD ADVANCED FULLY SYNTHETIC MOTOR OIL 5W-40 API SN/CF",
    description: "Synthetic technology engine oil designed for superior wear protection",
    image: FrameO,
  },
  {
    id: 8,
    name: "CASSGOLD ULTRATECH FULLY SYNTHETIC MOTOR OIL 0W-20 API SN-CF",
    description: "Fully synthetic technology engine oil designed for superior wear protection",
    image: FrameQ,
  },
];





const PetrolEngineOil = () => {
  return (
<div>
     {/*Hero Banner*/}
     <section className="relative bg-cover w-full m-0 bg-center text-white text-center p-32 h-64 " style={{ backgroundImage: BgAuto }}>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div>
        <h2 className="text-4xl font-bold">Automatic Lubricants</h2>
      </div>
     </section>

     {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4 text-sm text-gray-600">
        <a href="/" className="hover:text-orange-500">Home</a> 
        <span className="mx-2">/</span>
        <a href="/lubricants" className="hover:text-orange-500">Lubricants</a>
        <span className="mx-2">/</span>
        <span className="text-orange-500 font-medium">PetrolEngineOil</span>
      </div>

       {/* Main Content */}
           <main className="container mx-auto px-6 py-12">
            <div className="flex gap-8">
       {/* Sidebar */}
          <aside className="w-1/4">
            <ul className="space-y-3">
              <li><Link to="/lubricants" className="hover:text-orange-500">All</Link></li>
              <li><Link to="/lubricants/bike-oils" className="hover:text-orange-500">Bike Oils</Link></li>
              <li><Link to="/lubricants/petrol-engine-oil" className="text-orange-500 font-bold">Petrol Engine Oil</Link></li>
              <li><Link to="/lubricants/diesel-engine-oil" className="hover:text-orange-500">Diesel Engine Oil</Link></li>
              <li><Link to="/lubricants/transmission-oil" className="hover:text-orange-500">Transmission Oil</Link></li>
              <li><Link to="/lubricants/heavy-duty-engine-oil" className="hover:text-orange-500">Heavy Duty Engine Oils</Link></li>
            </ul>
          </aside>

             {/* Products */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-3/4">
            {products.map((product) => (
              <div
                key={product.id}
                className=" rounded-lg shadow-md overflow-hidden bg-white"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-contain"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                  <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                    See more
                  </button>
                </div>
              </div>
            ))}
          </section>
  </div>
 </main>
</div>

  )
}

export default PetrolEngineOil;