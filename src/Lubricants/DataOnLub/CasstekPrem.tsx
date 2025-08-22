

const CasstekPrem = () => {
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
        <span className="text-orange-500 font-medium">CASTON PREMIUM 4T (20W-40, API SL, JASO MA2)</span>
      </div>





      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Description */}
          <section>
            <h2 className="text-xl font-semibold mb-2">DESCRIPTION</h2>
            <p className="text-gray-700 leading-relaxed">
              This is a high-quality 4-stroke engine oil that offers excellent engine protection and
              performance in a wide range of operating conditions. CASTON PREMIUM 4T (20W-40) is formulated
              with advanced additives that provide outstanding wear protection, oxidation stability, and
              thermal stability. This oil offers a long service life and helps extend engine life.
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
            <table className="w-full border border-gray-300 text-left text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border">Test Parameters</th>
                  <th className="p-3 border">Test Methods</th>
                  <th className="p-3 border">Typical Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Appearance</td>
                  <td className="p-3 border">Visual</td>
                  <td className="p-3 border">Clear</td>
                </tr>
                <tr>
                  <td className="p-3 border">Color</td>
                  <td className="p-3 border">Visual</td>
                  <td className="p-3 border">L</td>
                </tr>
                <tr>
                  <td className="p-3 border">Density @30°C (g/ml)</td>
                  <td className="p-3 border">ASTM D 1298</td>
                  <td className="p-3 border">0.890</td>
                </tr>
                <tr>
                  <td className="p-3 border">Kinematic Viscosity @40°C (cSt)</td>
                  <td className="p-3 border">ASTM D 445</td>
                  <td className="p-3 border">130</td>
                </tr>
                <tr>
                  <td className="p-3 border">Kinematic Viscosity @100°C (cSt)</td>
                  <td className="p-3 border">ASTM D 445</td>
                  <td className="p-3 border">14.5</td>
                </tr>
                <tr>
                  <td className="p-3 border">Viscosity Index</td>
                  <td className="p-3 border">ASTM D 2270</td>
                  <td className="p-3 border">115</td>
                </tr>
                <tr>
                  <td className="p-3 border">Flash Point (°C)</td>
                  <td className="p-3 border">ASTM D 92</td>
                  <td className="p-3 border">230</td>
                </tr>
                <tr>
                  <td className="p-3 border">Pour Point (°C)</td>
                  <td className="p-3 border">ASTM D 97</td>
                  <td className="p-3 border">-24</td>
                </tr>
                <tr>
                  <td className="p-3 border">TBN (mg KOH/g)</td>
                  <td className="p-3 border">ASTM D 2896</td>
                  <td className="p-3 border">7.0</td>
                </tr>
              </tbody>
            </table>
          </section>

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
            className="w-64 object-contain"
          />
        </div>
      </div>




    </div>
  )
}

export default CasstekPrem;