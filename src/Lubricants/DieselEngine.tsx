import { Link } from "react-router-dom";
import { FrameL, FrameK, FrameC, FrameB } from "..";

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
      "Fleet multigrade diesel engine oil designed to provide superior performanc for trucks, buses, light commercial vehicle.",
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
        className="relative bg-cover w-full m-0 bg-center text-white text-center p-32 h-64 "
        style={{ backgroundImage: `url(/assets/bg-auto.png)` }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div>
          <h2 className="text-4xl font-bold">Automatic Lubricants</h2>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4 text-sm text-gray-600">
        <a href="/" className="hover:text-orange-500">
          Home
        </a>
        <span className="mx-2">/</span>
        <a href="/lubricants" className="hover:text-orange-500">
          Lubricants
        </a>
        <span className="mx-2">/</span>
        <span className="text-orange-500 font-medium">Diesel Engine Oil</span>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-1/4">
            <ul className="space-y-3">
              <li>
                <Link to="/lubricants" className="hover:text-orange-500">
                  All
                </Link>
              </li>
              <li>
                <Link
                  to="/lubricants/bike-oils"
                  className="hover:text-orange-500"
                >
                  Bike Oils
                </Link>
              </li>
              <li>
                <Link
                  to="/lubricants/petrol-engine-oil"
                  className="hover:text-orange-500"
                >
                  Petrol Engine Oil
                </Link>
              </li>
              <li>
                <Link
                  to="/lubricants/diesel-engine-oil"
                  className="text-orange-500 font-bold"
                >
                  Diesel Engine Oil
                </Link>
              </li>
              <li>
                <Link
                  to="/lubricants/transmission-oil"
                  className="hover:text-orange-500"
                >
                  Transmission Oil
                </Link>
              </li>
              <li>
                <Link
                  to="/lubricants/heavy-duty-engine-oil"
                  className="hover:text-orange-500"
                >
                  Heavy Duty Engine Oils
                </Link>
              </li>
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
                  <Link
                    to={`/lubricants/dataonlube/casstek-premium/${product.id}`}
                  >
                    <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
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
