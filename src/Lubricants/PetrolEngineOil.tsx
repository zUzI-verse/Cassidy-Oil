import { Link } from "react-router-dom";
import {
  FrameD,
  FrameE,
  FrameO,
  FrameQ,
  FrameR,
  FrameU,
  FrameS,
  FrameV,
} from "../assets";

const products = [
  {
    id: 3,
    name: "CASSGOLD SUPER MOTOR OIL 20W-50 API SL/CF",
    description:
      "Super Performance Multigrade designed with deposit guard technology",
    image: FrameE,
  },
  {
    id: 4,
    name: "CASSGOLD POWER MOTOR OIL SAE40 API SF/CF",
    description: "High Performance mono-grade mineral engine oil",
    image: FrameU,
  },

  {
    id: 5,
    name: "CASSGOLD PASSENGER MOTOR OIL 20W-50 API SG/CF-4",
    description:
      "World class mineral technology engine oil designed for superior wear protection",
    image: FrameD,
  },
  {
    id: 6,
    name: "CASSGOLD ADVANCED FULLY SYNTHETIC MOTOR OIL 5W-40 API SN/CF",
    description:
      "Synthetic technology engine oil designed for superior wear protection",
    image: FrameO,
  },

  {
    id: 7,
    name: "CASSGOLD ULTRATECH FULLY SYNTHETIC MOTOR OIL 0W-30 API SN-CF",
    description:
      "Fully synthetic technology engine oil designed for superior wear protection",
    image: FrameS,
  },
  {
    id: 8,
    name: "CASSGOLD ULTRATECH FULLY SYNTHETIC MOTOR OIL 0W-40 API SN-CF",
    description:
      "Fully synthetic technology engine oil designed for superior wear protection",
    image: FrameR,
  },
  {
    id: 9,
    name: "CASSGOLD ADVANCED FULLY SYNTHETIC MOTOR OIL 5W-30 API SN/CF",
    description:
      "Fully synthetic technology engine oil designed for superior wear protection",
    image: FrameV,
  },
  {
    id: 10,
    name: "CASSGOLD ULTRATECH FULLY SYNTHETIC MOTOR OIL 0W-20 API SN-CF",
    description:
      "Fully synthetic technology engine oil designed for superior wear protection",
    image: FrameQ,
  },
];

const PetrolEngineOil = () => {
  return (
    <div>
      {/*Hero Banner*/}
      <section
        className="relative bg-cover w-full m-0 bg-center text-white text-center py-38 h-64 "
        style={{ backgroundImage: `url(/assets/bg-auto.png)` }}
      >
        <div>
          <h2 className="text-4xl font-bold">Automatic Lubricants</h2>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4 text-sm text-gray-600">
        <Link to="/" className="text-navgrey font-medium ">
          HOME
        </Link>
        <span className="mx-2">/</span>
        <Link to="/lubricants" className="text-[#1D2130] font-medium">
          LUBRICANTS
        </Link>
      
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-1/4">
            <ul className="space-y-3">
              <li>
                <Link to="/lubricants" className="hover:text-primary font-medium">
                  All
                </Link>
              </li>
              <li>
                <Link
                  to="/lubricants/bike-oils"
                  className="hover:text-primary font-medium"
                >
                  Bike Oils
                </Link>
              </li>
              <li>
                <Link
                  to="/lubricants/petrol-engine-oil"
                  className="text-primary font-bold"
                >
                  Petrol Engine Oil
                </Link>
              </li>
              <li>
                <Link
                  to="/lubricants/diesel-engine-oil"
                  className="hover:text-primary font-medium"
                >
                  Diesel Engine Oil
                </Link>
              </li>
              <li>
                <Link
                  to="/lubricants/transmission-oil"
                  className="hover:text-primary font-medium"
                >
                  Transmission Oil
                </Link>
              </li>
              <li>
                <Link
                  to="/lubricants/heavy-duty-engine-oil"
                  className="hover:text-primary font-medium"
                >
                  Heavy Duty Engine Oils
                </Link>
              </li>
            </ul>
          </aside>

          {/* Products */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4">
            {products.map((product) => (
              <div
                key={product.id}
                className=" rounded-lg overflow-hidden bg-white"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-contain"
                />
                <div className="p-4">
                  <h3 className="font-semibold  w-[199px] h-[38px] mb-10">{product.name}</h3>
                  <p className="text-gray-600 text-sm w-[227px] h-[46px]">{product.description}</p>
                  <Link
                    to={`/lubricants/dataonlube/casstek-premium/${product.id}`}
                  >
                    <button className=" bg-primary text-white px-[35px] py-[11px] mt-7 rounded cursor-pointer">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default PetrolEngineOil;
