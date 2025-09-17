import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BannerA, BannerB, BannerC, blueBottle } from "../assets";
import NewsSection from "./NewsSection";
import EngineCare from "./EngineCare";
import ProductSection from "./ProductSection";
import Subscription from "./Subscription";


type Slide = {
  image: string;
  text: string;
};

const slide: Slide[] = [
  {
    image: BannerA,
    text: "Ensuring Optimal Engine  Protection and Performance",
  },
  {
    image: BannerB,
    text: "Desiged to meet your specific need",
  },
  {
    image: BannerC,
    text: "High Quality Premium Lubricant",
  },
];
const Home = () => {
  const [current, setCurrent] = useState(0);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="w-full">
      <section className="relative w-full h-[80vh] overflow-hidden ">
        {/* Slide container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            style={{ backgroundImage: `url(${slide[current].image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-cover bg-center"
          >
      
            {/* Text content*/}
            <div className="absolute bottom-20 left-10 text-white max-w-xl">
              <motion.h1
                key={slide[current].text}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-3xl break-normal text-shadow-2xs md:text-5xl font-bold "
              >
                {slide[current].text}
              </motion.h1>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-8 flex gap-3 ">
          {slide.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-primary w-4 h-4 " : "bg-gray-400 mt-1"
              }`}
            ></button>
          ))}
        </div>
      </section>
      {/* About Us Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-8 py-16 max-w-6xl mx-auto ">
        {/* Text Content */}
        <div>
          <div className="flex items-center gap-5 mb-4">
              <div className="border w-15 h-0.5  text-primary  mb-2 bg-primary"></div>
              <p className="uppercase text-navgrey md:text-black font-semibold mb-2 tracking-wide">
                Know abaout Us
              </p>
          </div>
          <div className="ml-6 md:ml-20">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">
            At Cassidy Energy, we&apos;re passionate about engines
          </h2>
          <p className="text-gray-600 mb-10 text-left max-w-[600px] leading-relaxed">
            With years of experience in the industry, we understand the
            importance of using high-quality oil to protect and enhance engine
            performance. That’s why we’re dedicated to producing the finest
            engine oils on the market.
          </p>
          <Link to="/about-us">
          <button className="px-6 py-5 md:px-6 md:py-3  w-full md:w-[133px]  bg-primary text-white font-semibold rounded-md shadow hover:bg-orange-600 transition">
            Learn more
          </button>
          </Link>
          </div>
        </div>
        {/* Image Content */}
        <div className="flex-1 ml-10">
          <img
            src={blueBottle}
            alt="Cassidy Product"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Products Section */}
          <ProductSection/>


 {/* Engine Protection Section */}
         <EngineCare/>

      {/* Subscription Section */}
          <Subscription/>

      {/* News Section */}
          <NewsSection />
    </div>
  );
};

export default Home;
