import { useState } from "react";
import { Link } from "react-router-dom";

// import {  FrameA, FrameB, FrameC, FrameD, FrameE,FrameF, FrameG, FrameH, FrameI, FrameJ, FrameK, FrameL, FrameM, FrameN, FrameO, FrameQ, FrameR, FrameU, FrameV,} from "../assets";
import { products } from "../data/products";
import type { Product } from "../data/products";
//  import FrameF  from "../assets/FrameF.png";



const categories = [
  { name: "All", path: "/lubricants" },
  { name: "Bike Oil", path: "/lubricants/bike-oils" },
  { name: "Petrol Engine Oil", path: "/lubricants/petrol-engine-oil" },
  { name: "Diesel Engine Oil", path: "/lubricants/diesel-engine-oil" },
  { name: "Transmission Oil", path: "/lubricants/transmission-oil" },
  {name: "Heavy Duty Engine Oils", path: "/lubricants/heavy-duty-engine-oils",
  },
];


const AllLubricants = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) =>
          p.name.toLowerCase().includes(activeCategory.toLowerCase())
        );

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

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-6 py-4 text-sm text-gray-600">
        <Link to="/" className="hover:text-orange-500">
          Home
        </Link>
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
                <li
                  key={cat.name}
                  className={`cursor-pointer ${
                    activeCategory === cat.name
                      ? "text-orange-500 font-bold"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
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
            {filteredProducts.map((product: Product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-contain"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                  {!product.noButton && (
                    <Link to={`/lubricants/dataonlub/cassket-prem${product.id}`}>
                    <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                      See More
                    </button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default AllLubricants;
