import {useParams} from "react-router-dom";
import { products } from "../../data/products";

const CasstekPrem = () => {
  const { id } = useParams<{ id: string }>(); // Get product id from URL
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="text-center mt-10 text-red-500">Product not found</p>;
  }


    const testData = [
    { parameter: "Appearance", method: "Visual", value: "Clear" },
    { parameter: "Colour", method: "Visual", value: "Brown" },
    { parameter: "Density at 300C (g/ml)", method: "ASTM D 1298", value: "858" },
    { parameter: "Kinematic Viscosity at 400C (cSt)", method: "ASTM D445", value: "130" },
    { parameter: "Kinematic Viscosity at 1000C (cSt)", method: "ASTM D445", value: "14.8" },
    { parameter: "Viscosity Index", method: "ASTM D 2270", value: "115" },
    { parameter: "Pour Point (0C)", method: "ASTM D 97", value: "-21" },
    { parameter: "Flash Point (COC) (0C)", method: "ASTM D 93", value: "240" },
    { parameter: "TBN (mg KOH/g)", method: "ASTM D 2896B", value: "8" },
  ];
  return (
    <div className="w-full">
         {/*Hero Banner*/}
     <section className="relative bg-cover w-full m-0 bg-center text-white text-center p-32 h-64 " style={{ backgroundImage: "url('/src/assets/BgAuto.png')" }}>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div>
        <h2 className="text-4xl font-bold">Automatic Lubricants</h2>
      </div>
     </section>

       {/*Breadcrumb navbar*/}    
      <div className="container mx-auto px-6 py-4 text-sm text-gray-600">
        <a href="/" className="hover:text-orange-500">Home</a> 
        <span className="mx-2">/</span>
        <a href="/lubricants" className="hover:text-orange-500">Lubricants</a>
        <span className="mx-2">/</span>
        <span className="text-orange-500 font-medium">CASSTEK PREMIUM 4T 20W-40 API SL/MA2</span>
      </div>


      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Description */}
          <section>
            <h2 className="text-xl font-semibold mb-2">DESCRIPTION</h2>
            <p className="text-gray-700 leading-relaxed">
             The engine in your bike risks damage all the time, when starting up, when running and even when the engine is off. CASSTEK PREMIUM 4T 20W-40 API SL/MA2 is a high performance 4 stroke Motorbike engine oil, which is engineered to protect your General Transportation and Power Bike engine and enhance its performance. By using world class additive molecule technology and high-quality base oil, CASSTEK oil clings to the engine and gearbox to provide excellent service in all operating conditions.
            </p>
          </section>

          {/* Performance */}
          <section>
            <h2 className="text-xl font-semibold mb-2">PERFORMANCE</h2>
            <p className="text-gray-700">Meets the requirements of SAE 20W-40, API SL, JASO MA2</p>
          </section>

          {/* Application */}
          <section>
            <h2 className="text-xl font-semibold mb-2">APPLICATION</h2>
            <p className="text-gray-700">
             CASSTEK PREMIUM 4T 20W-40 API SL/MA2 can be used in all 4-stroke motorbike engines manufactured by leading global OEMs. OEM recommended drain interval is to be followed.
            </p>
          </section>

          {/* Product Benefits */}
          <section>
            <h2 className="text-xl font-semibold mb-4">PRODUCT BENEFITS</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Enhanced protection of engine parts at the point of engine start up.</li>
              <li>Reduced propensity of sludge deposits which ensures superior engine cleanliness during normal operation.</li>
              <li>Reduced propensity of oil thickening and oxidation thereby reducing oil consumption under normal operating conditions.</li>
              <li>Reduced Disc wear and Valve Train wear.</li>
              <li>Excellent corrosion protection, even when engine is off.</li>
            </ul>
          </section>

          {/* Specification Table */}
              <section className="overflow-x-auto mt-6">
                <table className="min-w-full border border-gray-300 rounded-lg">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="border px-4 py-2 text-left">Test Parameters</th>
                          <th className="border px-4 py-2 text-left">Test Methods</th>
                          <th className="border px-4 py-2 text-left">Typical Values</th>
                        </tr>
                      </thead>
                      <tbody>
                        {testData.map((row, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border px-4 py-2">{row.parameter}</td>
                            <td className="border px-4 py-2">{row.method}</td>
                            <td className="border px-4 py-2">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                </table>
              </section >

          {/* Storage */}
          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2">STORAGE</h2>
            <p className="text-gray-700">
              All packages should be stored under cover and should not be stored where ambient temperature exceeds 600C or freezing conditions. To avoid ingress of water and damage, drums should be stored horizontally if they are stored outside. Follow MSDS for further instructions on storage, safe handling, and disposal of the product.
            </p>
            <a
              href="#"
              className="text-red-600 font-semibold flex items-center mt-2"
            >
              📥 Click here to download PDF
            </a>
          </section>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-start">
          <img
           
            src={product.image}
              alt={product.name}
              className="w-64 h-64 object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>




    </div>
  )
}

export default CasstekPrem;