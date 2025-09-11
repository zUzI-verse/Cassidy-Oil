import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BannerA, BannerB, BannerC, FrameP, blueBottle, MechA, MechB, MechC } from "../assets";
import NewsSection from "./NewsSection";


type Slide = {
  image: string;
  text: string;
};

const slide: Slide[] = [
  {
    image: BannerA,
    text: "Ensuring Optimal Engine Protection and Performance",
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
      <section className="relative w-full h-[80vh] overflow-hidden">
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
                className="text-3xl md:text-5xl font-bold"
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
      <section className="grid md:grid-cols-2 gap-10 items-center px-8 py-16 max-w-6xl mx-auto">
        {/* Text Content */}
        <div>
          <div className="flex items-center gap-5 mb-4">
             {/* Decorative line and subtitle */}
             <div className="border w-15  mb-2 h-0.5 text-primary bg-primary"></div>
          <p className="uppercase text-navgrey tracking-wide font-semibold mb-2">
            Know About Us
          </p>
          </div>
          <div className="ml-20">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">
            At Cassidy Energy, we&apos;re passionate about engines
          </h2>
          <p className="text-gray-600 mb-6 w-[600px] leading-relaxed">
            With years of experience in the industry, we understand the
            importance of using high-quality oil to protect and enhance engine
            performance. That’s why we’re dedicated to producing the finest
            engine oils on the market.
          </p>
          <Link to="/about-us">
          <button className="px-6 py-3 bg-primary text-white font-semibold rounded-md shadow hover:bg-orange-600 transition">
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
      <section className="grid md:grid-cols-2 gap-10 items-center px-18 py-18 bg-gray-50 w-full ">
        {/* Text Content */}
        <div>
          <div className="flex items-center gap-5 mb-4">
              <div className="border w-15 h-0.5  text-primary  mb-2 bg-primary"></div>
              <p className="uppercase text-black font-semibold mb-2 tracking-wide">
                What We Do
              </p>
          </div>
          <div className="ml-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Range of Products
          </h2>
          <p className="text-gray-600 mb-6 w-[600px]  leading-relaxed">
            At Cassidy Energy, we offer a wide range of high-quality engine oils
            to suit all types of vehicles. Whether you&apos;re driving a daily
            car, riding a motorcycle, or operating heavy machinery, we have the
            right oil for you. Our products are designed to meet the specific
            needs of each application, ensuring maximum performance and
            protection.
          </p>

          {/* Product list */}
          <ul className="space-y-10">
            <li>
               <div className="w-4.5 h-4.5 inline-block bg-primary rounded-sm shrink-0" />
              <span className="font-extrabold ml-4.5">
                CASSTEK PREMIUM 4T 20W-40 API SL/MA2
              </span>{" "}
              <p className="text-gray-600 text-sm ml-9 ">
                Premium Multigrade Okada, Kekenapep engine oil
              </p>
            </li>
            <li>
             <div className="w-4.5 h-4.5 inline-block bg-primary rounded-sm shrink-0" />
              <span className="font-extrabold ml-4.5">
                CASSTEK MOTO 4T 20W-40 API SF/CF
              </span>{" "}
              <p className="text-gray-600 text-sm ml-9">
                High Performance Multigrade Okada, Kekenapep engine oil
              </p>
            </li>
            <li>
              <div className="w-4.5 h-4.5 inline-block bg-primary rounded-sm shrink-0" />
              <span className="font-extrabold ml-4.5">
                CASSGOLD SUPER MOTOR OIL 20W-50 API SL/CF
              </span>{" "}
              <p className="text-gray-600 text-sm ml-9">
                Super Performance Multigrade designed with deposit guard technology 
              </p>
            </li>
            <li>
              <div className="w-4.5 h-4.5 inline-block bg-primary rounded-sm shrink-0" />
              <span className="font-extrabold ml-4.5">
                CASSGOLD POWER MOTOR OIL SAE40 API SF/CF
              </span>{" "}
              <p className="text-gray-600 text-sm ml-9">
                High Performance mono grade mineral engine oil
              </p>
            </li>
          </ul>

          {/* CTA Button */}
          <Link to="/lubricants">
            <button className="mt-15 px-6 py-3 bg-primary text-white font-semibold rounded-md shadow hover:bg-orange-600 transition">
              See lubricants
            </button>
          </Link>
        </div>
        </div>
          

        {/* Images */}
        <div className="flex justify-center mt-45 ml-10">
          <img
            src={FrameP}
            alt="Cassidy Oil Products"
            className="w-[696.30291748046880] h-[391px] md:w-[450px] object-contain"
          />
        </div>
      </section>

      {/* Engine Protection Section */}
      <section className="px-8 py-16 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Protect Your Engine with <br />
          Cassidy standard oil
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Whether you&apos;re a seasoned mechanic or a casual car enthusiast, we
          have the knowledge and expertise to help you get the most out of your
          engine.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src={MechB}
            alt="Mechanic working"
            className="rounded-md shadow-md object-cover"
          />
          <img
            src={MechA}
            alt="Mechanic explaining"
            className="rounded-md shadow-md object-cover"
          />
          <img
            src={MechC}
            alt="Oil product by car"
            className="rounded-md shadow-md object-cover"
          />
        </div>
      </section>

      {/* Subscription Section */}
    <section className=" text-white py-16 px-6 rounded-lg bg-cover w-[1110px] mx-10 mb-10 bg-center" style={{ backgroundImage: `url(/assets/subscribe-img.png)` }}>
        <div className="max-w-3xl mx-auto text-center ">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Subscribe to get <br/> the latest updates
          </h3>
          <form className="flex flex-col sm:flex-col mx-auto  justify-center gap-4 mt-6 w-2/3" >
          <div className="flex">
             <input
              type="email"
              placeholder="Your email"
              className="flex-1 min-w-[250px] px-4 py-5 rounded-md border-1 text-white bg-secondary focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-5 bg-primaryb font-semibold rounded-sm shadow hover:bg-orange-400 text-[#152C41] transition"
            > Subscribe
            </button>
          </div>         
          </form>
        </div>
      </section>

      {/* News Section */}
      <NewsSection />
    </div>
  );
};

export default Home;
