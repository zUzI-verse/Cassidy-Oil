import { useState } from "react";
import { Link } from "react-router-dom";
// import {  FrameA, FrameB, FrameC, FrameD, FrameE, FrameF, FrameG, FrameH, FrameI, FrameJ, FrameK, FrameL, FrameM, FrameN, FrameO, FrameQ, FrameR, FrameU, FrameV,} from "../assets";
import { products } from "../data/products";
import type { Product } from "../data/products";




const categories = [
  { name: "All", path: "/lubricants" },
  { name: "Bike Oils", path: "/lubricants/bike-oils" },
  { name: "Petrol Engine Oil", path: "/lubricants/petrol-engine-oil" },
  { name: "Diesel Engine Oil", path: "/lubricants/diesel-engine-oil" },
  { name: "Transmission Oil", path: "/lubricants/transmission-oil" },
  {name: "Heavy Duty Engine Oils", path: "/lubricants/heavy-duty-engine-oil",
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
        className="relative bg-cover w-full m-0 bg-center text-white text-center py-38 h-64 "
        style={{ backgroundImage: `url(/assets/bg-auto.png)` }}
      > 
        <div>
          <h2 className="text-4xl text-center font-bold">Automatic Lubricants</h2>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-6 py-4  text-sm text-gray-600">
        <Link to="/" className="text-navgrey font-medium ">
          HOME
        </Link>
        <span className="mx-2">/</span>
        <Link to="/lubricants" className="text-[#1D2130] font-medium">
          LUBRICANTS
        </Link>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-3 md:px-6 py-12">
        <div className="flex gap-2 md:gap-8">
          {/* Side Bar */}
          <aside className="w-1/4">
            <ul className="space-y-3">
              {categories.map((cat) => (
               <li key={cat.name} className="cursor-pointer">
  <Link
      to={cat.path}
      onClick={() => setActiveCategory(cat.name)}
      className={`font-medium ${
        activeCategory === cat.name
          ? "text-orange-500 font-bold" // active state
          : "text-[#1D2130] hover:text-orange-500" // default + hover
      }`}
      >
      {cat.name}
  </Link>
</li>
              ))}
            </ul>
          </aside>

          {/* Product List */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {filteredProducts.map((product: Product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg flex flex-col">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-50 object-contain "
                />
                <div className="ml-9">
                  <h3 className="font-medium w-[191px] h-[38px] mb-15">{product.name}</h3>
                  <p className=" text-sm w-[227px] h-[56px] mt-3">{product.description}</p>
                  {!product.noButton && (
                   <Link 
                   to={`/lubricants/dataonlube/casstek-premium/${product.id}`}
                   >
                    <div>
                      <button className=" bg-primary text-white mt-7 px-[35px] py-[11px]  rounded cursor-pointer">
                      See More
                    </button>
                    </div>                   
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
