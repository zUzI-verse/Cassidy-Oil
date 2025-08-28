// import {FrameF} from "../assets/FrameF.png";
import {useParams} from "react-router-dom";
import { products } from "../../data/products";


const CassgoldAdvaced40 = () => {
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
             <section className="relative bg-cover w-full m-0 bg-center text-white text-center p-32 h-64 " style={{ backgroundImage:`url(/assets/bg-auto.png)`}}>
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
                <span className="text-orange-500 font-medium">CASSTEK PREMIUM 4T 20W-40 API SL/MA2</span>
              </div>


              {/* Main Content */}
              <div className="container mx-auto px-6  py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
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
                        <p className="text-gray-700">Meets JASO MA2 and API SL standards (20W-40, API SL, JASO MA2)</p>
                      </section>

                      {/* Application */}
                      <section>
                        <h2 className="text-xl font-semibold mb-2">APPLICATION</h2>
                        <p className="text-gray-700">
                          CASTON PREMIUM 4T (20W-40, API SL, JASO MA2) can be used in 4-stroke motorbike engines manufactured by
                          leading global OEMs. OEM recommendations should be followed.
                        </p>
                      </section>

                       {/* Product Benefits */}
                        <section>
                          <h2 className="text-xl font-semibold mb-4">PRODUCT BENEFITS</h2>
                          <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Minimizes deposits on engine parts and reduces sludge formation.</li>
                            <li>Provides excellent protection of engine parts with minimum engine wear during normal operating conditions.</li>
                            <li>Outstanding thermal and oxidation stability reducing oil consumption under normal driving conditions.</li>
                            <li>Excellent corrosion protection for metallic engine parts.</li>
                            <li>Ensures smooth operation and extended engine life.</li>
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
                                All packages should remain closed and stored in a clean environment with moderate temperature to
                                prevent contamination. Avoid extreme heat or freezing conditions. For safety, refer to the Material Safety
                                Data Sheet (MSDS) before handling.
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
                              src="/images/oil-product.png"
                              alt="CASTON PREMIUM 4T"
                              className="w-64 object-contain" />
                        </div>        
            </div>
    </div>
  )
}
export default CassgoldAdvaced40;