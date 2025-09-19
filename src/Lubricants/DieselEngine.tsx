import { Link } from "react-router-dom";
import { FrameL, FrameK, FrameC, FrameB } from "../assets";

const products = [
  {
    id: 11,
    name: "CASSTURBO HD SAE40 API CF/SF",
    description: "Heavy duty Mono-grade mineral engine oil",
    image: FrameL,
  },
  {
    id: 15,
    name: "CASSTURBO HD PLUS 15W40 CF-4/SG",
    description:
      "Fleet multigrade diesel engine oil designed to provide superior performance for trucks, buses, light commercial vehicle",
    image: FrameK,
  },

  {
    id: 12,
    name: "CASSTURBO HD ULTRA 15W40 CI-4",
    description:
      "Long drain premium performance Multigrade diesel engine oil designed for modern heavy duty engine",
    image: FrameC,
  },
  {
    id: 16,
    name: "CASSTURBO HD FORCE 15W40 CH-4",
    description:
      "Superior Performance Multigrade diesel engine oil designed with active protection",
    image: FrameB,
  },
];

const DieselEngine = () => {
  return (
    <div>
      {/*Hero Banner*/}
      <section
        className="relative bg-cover w-full m-0 bg-center text-white text-center  p-38 h-64 "
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
      <main className="container mx-auto  px-3 md:px-6 py-12">
        <div className="flex gap-2 md:gap-8">
          {/* Sidebar */}
          <aside className="w-1/4">
            <ul className="space-y-3">
              <li>
                <Link to="/lubricants" className=" hover:text-primary font-medium">
                  All
                </Link>
              </li>
              <li>
                <Link
                  to="/lubricants/bike-oils"
                  className=" hover:text-primary font-medium"
                >
                  Bike Oils
                </Link>
              </li>
              <li>
                <Link
                  to="/lubricants/petrol-engine-oil"
                  className=" hover:text-primary font-medium"
                >
                  Petrol Engine Oil
                </Link>
              </li>
              <li>
                <Link
                  to="/lubricants/diesel-engine-oil"
                  className="text-primary font-bold"
                >
                  Diesel Engine Oil
                </Link>
              </li>
              <li>
                <Link
                  to="/lubricants/transmission-oil"
                  className=" hover:text-primary font-medium"
                >
                  Transmission Oil
                </Link>
              </li>
              <li>
                <Link
                  to="/lubricants/heavy-duty-engine-oil"
                  className=" hover:text-primary font-medium"
                >
                  Heavy Duty Engine Oils
                </Link>
              </li>
            </ul>
          </aside>

          {/* Products */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className=" rounded-lg  overflow-hidden bg-white"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-50 object-contain"
                />
                <div className="ml-9">
                  <h3 className="font-semibold text-lg  w-[191px] h-[40px] mb-7">{product.name}</h3>
                  <div className="flex">
                     <p className="text-black text-sm my-2 flex-wrap w-[227px] h-[50px]">{product.description}</p>
                  </div>
                 
                  <Link
                    to={`/lubricants/dataonlube/casstek-premium/${product.id}`}
                  >
                    <button className=" bg-primary text-white px-[35px] py-[11px] mt-20 rounded cursor-pointer">
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

export default DieselEngine;
