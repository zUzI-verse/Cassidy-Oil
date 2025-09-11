import { Link } from "react-router-dom";
import { FrameH, FrameI, FrameJ, FrameN } from "../assets";

const products = [
  {
    id: 1,
    name: "CASSTURBO HD SAE40 API SF/CF 25L",
    description: "",
    image: FrameI,
    noButton: true,
  },
  {
    id: 2,
    name: "CASSGOLD SUPER MOTOR OIL 20W-50 API SL/CF 25L",
    description: "",
    image: FrameN,
    noButton: true,
  },

  {
    id: 3,
    name: "CASSGOLD SUPER MOTOR OIL 20W-50 API SL/CF  200L",
    description: "",
    image: FrameH,
    noButton: true,
  },
  {
    id: 4,
    name: "CASSTURBO HD SAE40 API SF/CF 25L 200L",
    description: "",
    image: FrameJ,
    noButton: true,
  },
];

const HeavyDutyEngineOil = () => {
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
        <Link to="/lubricants" className="text font-medium">
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
                <Link to="/lubricants" className="font-medium">
                  All
                </Link>
              </li>
              <li>
                <Link
                  to="/lubricants/bike-oils"
                  className="font-medium"
                >
                  Bike Oils
                </Link>
              </li>
              <li>
                <Link
                  to="/lubricants/petrol-engine-oil"
                  className="font-medium"
                >
                  Petrol Engine Oil
                </Link>
              </li>
              <li>
                <Link
                  to="/lubricants/diesel-engine-oil"
                  className="font-medium"
                >
                  Diesel Engine Oil
                </Link>
              </li>
              <li>
                <Link
                  to="/lubricants/transmission-oil"
                  className="font-medium"
                >
                  Transmission Oil
                </Link>
              </li>
              <li>
                <Link
                  to="/lubricants/heavy-duty-engine-oil"
                  className="text-primary font-bold"
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
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default HeavyDutyEngineOil;
