import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import { Link } from "react-router-dom";


const CasstekPrem = () => {
  const { id } = useParams<{ id: string }>(); // Get product id from URL
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="text-center mt-10 text-red-500">Product not found</p>;
  }
 
  const testData = [
    { parameter: "Appearance", method: "Visual", value: "Clear" },
    { parameter: "Colour", method: "Visual", value: "Brown" },
    { parameter: "Density at 300C (g/ml)",  method: "ASTM D 1298",  value: "858",    },
    {parameter: "Kinematic Viscosity at 400C (cSt)",method: "ASTM D445",value: "130",},
    { parameter: "Kinematic Viscosity at 1000C (cSt)", method: "ASTM D445", value: "14.8", },
    { parameter: "Viscosity Index", method: "ASTM D 2270", value: "115" },
    { parameter: "Pour Point (0C)", method: "ASTM D 97", value: "-21" },
    { parameter: "Flash Point (COC) (0C)", method: "ASTM D 93", value: "240" },
    { parameter: "TBN (mg KOH/g)", method: "ASTM D 2896B", value: "8" },
  ];
  return (
    <div className="w-full">
      {/*Hero Banner*/}
      <section
        className="relative bg-cover w-full m-0 bg-center text-white text-center p-25 h-64 "
        style={{ backgroundImage: `url(/assets/bg-auto.png)` }}
      >
        <div>
          <h2 className="text-4xl font-bold">Automatic Lubricants</h2>
        </div>
      </section>

      {/*Breadcrumb navbar*/}
      <div className="container mx-auto px-6 py-4 text-sm text-navgrey">
        <Link to="/" className="hover:text-color-primary font-medium">
        HOME
      </Link>
      <span className="mx-2 font-medium">/</span>
      <Link to="/lubricants" className="hover:text-primary font-medium">
        LUBRICANTS
      </Link>
      <span className="mx-2 font-medium">/</span>
      <span className="text-black font-medium">{product.name}</span>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Description */}
          <section>
            <h2 className="text-xl font-semibold mb-2">DESCRIPTION</h2>
            <p className="text-gray-700 leading-relaxed">
              {product.descriptions}
            </p>
          </section>

          {/* Performance */}
          <section>
            <h2 className="text-xl font-semibold mb-2">PERFORMANCE</h2>
            <p className="text-gray-700">{product.performance}</p>
          </section>

          {/* Application */}
          <section>
            <h2 className="text-xl font-semibold mb-2">APPLICATION</h2>
            <p className="text-gray-700">{product.applications}</p>
          </section>

          {/* Product Benefits */}
          <section>
            <h2 className="text-xl font-semibold mb-4">PRODUCT BENEFITS</h2>
            <ul className="list-disc pl-6 space-y-2">
              {product.productBenefits?.map((benefit, index) => (
                <li className="marker:text-primary  text-gray-700" key={index}>{benefit}</li>
              ))}
            </ul>
          </section>

          {/* Specification Table */}
          <section className="overflow-x-auto mt-6">
            <table className="min-w-full border border-gray-300 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-left">
                    Test Parameters
                  </th>
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
          </section>

          {/* Storage */}
          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2">STORAGE</h2>
            <p className="text-gray-700">{product.storage}</p>
             <Link
                to={product.pdfLink}
                target="_blank"
                download
                className="text-red-600 font-semibold flex items-center mt-2"
              >
                📥 Click here to download PDF
            </Link>
          </section>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-start">
          <img
            src={product.image}
            alt={product.name}
            className="w-100 h-78 object-contain m-0 p-0 "
          />
        </div>
      </div>
    </div>
  );
};

export default CasstekPrem;
