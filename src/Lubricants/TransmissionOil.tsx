import { Link } from "react-router-dom";
import { FrameA, FrameM } from "../assets";

const products = [
  {
    id: 13,
    name: "CASSTRANS DEX D2 ATF DEXRON IID",
    description:
      "Multivehicle automatics transmission fluid and power steering fluid",
    image: FrameM,
  },
  {
    id: 14,
    name: "CASSTRANS DEX H3 ATF DEXRON IIIH/IIIM",
    description:
      "Multivehicle automatics transmission fluid and power steering fluid",
    image: FrameA,
  },
];

const TransmissionOil = () => {
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
                <Link to="/lubricants" className="  hover:text-primary font-medium">
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
                  className="  hover:text-primary font-medium"
                >
                  Petrol Engine Oil
                </Link>
              </li>
              <li>
                <Link
                  to="/lubricants/diesel-engine-oil"
                  className=" hover:text-primary font-medium"
                >
                  Diesel Engine Oil
                </Link>
              </li>
              <li>
                <Link
                  to="/lubricants/transmission-oil"
                  className="text-primary font-bold"
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
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4">
            {products.map((product) => (
              <div
                key={product.id}
                className=" rounded-lg  overflow-hidden bg-white"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-contain"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg  w-[191px] h-[38px] mb-8">{product.name}</h3>
                  <p className="text-black text-sm my-3  w-[227px] h-[46px]">{product.description}</p>
                  <Link
                    to={`/lubricants/dataonlube/casstek-premium/${product.id}`}
                  >
                    <button className=" bg-primary text-white px-[35px] py-[11px] mt-5 rounded cursor-pointer">
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

export default TransmissionOil;
