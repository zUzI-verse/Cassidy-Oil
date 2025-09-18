import { Link } from "react-router-dom";
import FrameP from "../assets/FrameP.png"; 

// Type for heading and description blocks
type SectionContent = {
  label: string;
  heading: string;
  description: string;
};

// Type for product items
type Product = {
  title: string;
  description: string;
};

const content: SectionContent = {
  label: "What We Do",
  heading: "Our Range of Products",
  description:
    "At Cassidy Energy, we offer a wide range of high-quality engine oils to suit all types of vehicles. Whether you're driving a daily car, riding a motorcycle, or operating heavy machinery, we have the right oil for you. Our products are designed to meet the specific needs of each application, ensuring maximum performance and protection. From conventional to synthetic oils, Cassidy energy has got you covered.",
};

const products: Product[] = [
  {
    title: "CASSTEK PREMIUM 4T 20W-40 API SL/MA2",
    description: "Premium Multigrade Okada, Kekenapep engine oil",
  },
  {
    title: "CASSTEK MOTO 4T 20W-40 API SF/CF",
    description: "High Performance Multigrade Okada, Kekenapep engine oil",
  },
  {
    title: "CASSGOLD SUPER MOTOR OIL 20W-50 API SL/CF",
    description:
      "Super Performance Multigrade designed with deposit guard technology",
  },
  {
    title: "CASSGOLD POWER MOTOR OIL SAE40 API SF/CF",
    description: "High Performance mono grade mineral engine oil",
  },
];

const ProductSection = () => {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center px-6 md:px-18 py-16 bg-gray-50 w-full">
      {/* Text Content */}
      <div>
        {/* Label with line */}
        <div className="flex items-center gap-5 mb-4">
          <div className="border w-15 h-0.5 bg-primary text-primary"></div>
          <p className="uppercase text-black font-semibold tracking-wide">
            {content.label}
          </p>
        </div>

        {/* Heading & Paragraph */}
        <div className="ml-6 md:ml-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {content.heading}
          </h2>
          <p className="text-gray-600 mb-6 w-full leading-relaxed">
            {content.description}
          </p>

          {/* Products List */}
          <ul className="space-y-8 w-full">
            {products.map((item, idx) => (
              <li key={idx}>
                <div className="flex items-start gap-3">
                   <div className="w-4.5 h-4.5 inline-block bg-primary rounded-sm shrink-0" />
                  <div>
                    <span className="font-extrabold">{item.title}</span>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link to="/lubricants">
            <button className="w-full md:w-[180px] px-6 py-5 md:py-3 mt-10 bg-primary text-white font-semibold rounded-md shadow hover:bg-orange-600 transition">
              See Lubricant
            </button>
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center md:mt-60 ml-0 md:ml-10">
        <img
          src={FrameP}
          alt="Cassidy Oil Products"
          className="w-full  object-contain"
        />
      </div>
    </section>
  );
};

export default ProductSection;
