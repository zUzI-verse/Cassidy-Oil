import { OilAbout, AboutBottle } from "../assets";

const About = () => {
  return (
    <div>
      <section className="bg-white py-16 px-6 lg:px-20">
        {/* Top section */}
        <div className="max-w-6xl mx-auto">
          {/* Orange line + small heading */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="w-12 h-0.5 bg-primary"></span>
            <span className="tracking-widest text-gray-500 text-sm uppercase">
              Know About Us
            </span>
          </div>

          {/* Main text grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-12 ml-14">
            {/* Left heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              At Cassidy Energy, we’re passionate about engines
            </h2>

            {/* Right paragraph */}
            <p className="text-gray-600 text-base leading-relaxed">
              With years of experience in the industry, we understand the
              importance of using high-quality oil to protect and enhance engine
              performance. That’s why we’ve dedicated ourselves to producing the
              finest engine oils on the market.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-[#F8F8F8] py-10">
        {/* Image */}
        <div className="mx-5 -mt-25">
          <img
            src={OilAbout} // 👉 Replace with your image path
            alt="Engine oil being poured"
            className="rounded-lg shadow-md w-full mb-15  object-cover md:w-[1166px] "
          />
        </div>
        <div className="flex items-center gap-5 mb-4 ml-39 md:ml-10">
          <div className="border w-15 h-0.5  text-primary  mb-2 bg-primary"></div>
          <p className="uppercase text-black font-semibold mb-2 tracking-wide">
            OUR CORE BUSINESS
          </p>
        </div>
        <div className=" ml-20 px-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built on 3 fundamental pillars
          </h2>

          {/* Pillars */}
          <ul className="space-y-10">
            <li>
              <div className="w-4.5 h-4.5 inline-block bg-primary rounded-sm shrink-0" />
              <span className="font-extrabold ml-4.5">Base Oils</span>{" "}
              <p className="text-gray-600 text-sm mx-10">
                The Foundation of Performance We supply a wide range of
                high-quality base oils—Group I,II, II+, III, and niche
                specialties—that serve as the essential building blocks for
                finished lubricants. Sourced from reputable refineries and
                subjected to rigorous quality assurance, our base oils provide
                the optimal starting point for blenders seeking to formulate
                products that meet exacting specifications for viscosity,
                thermal stability, and oxidation resistance.
              </p>
            </li>
            <li>
              <div className="w-4.5 h-4.5 inline-block bg-primary rounded-sm shrink-0" />
              <span className="font-extrabold ml-4.5">
                Performance-Enhancing Additives
              </span>{" "}
              <p className="text-gray-600 text-sm mx-10">
                The true art of lubrication lies in the additive package.Cassidy
                Energy offers a comprehensive suite of advanced additive
                components and formulated packages engineered to meet the
                challenges of modern machinery. Our additives are designed to
                inhibit wear, prevent deposit formation, neutralize acids,
                reduce friction, and extend drain intervals, transforming a base
                oil into a high-performance fluid tailored for specific, severe
                applications.
              </p>
            </li>
            <li>
              <div className="w-4.5 h-4.5 inline-block bg-primary rounded-sm shrink-0" />
              <span className="font-extrabold ml-4.5">Finished Lubricants</span>{" "}
              <p className="text-gray-600 text-sm mx-10">
                3. Ready-to-Use Excellence For clients seeking complete,
                market-ready solutions, we provide a full line of premium
                finished lubricants. Our products encompass industrial hydraulic
                oils, gear oils, compressor oils, turbine oils, metalworking
                fluids, and a complete range of automotive and commercial
                vehicle lubricants. Each product is formulated to meet or exceed
                the demanding requirements of international OEMs and industry
                standards (API, ACEA, JASO, etc.), ensuring your equipment
                receives the best possible protection.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/*Vision*/}
      <section className="grid md:grid-cols-2 gap-10 items-center px-8 py-16 max-w-6xl mx-auto">
        {/* Image Content */}
        <div className="flex-1 ml-10">
          <img
            src={AboutBottle}
            alt="Cassidy Product"
            className="w-full max-w-md mx-auto"
          />
        </div>
        {/* Text Content */}
        <div className="">
          <div className="flex items-center gap-5 mb-2">
            <p className="uppercase text-black tracking-wide font-semibold  ml-10">
              Our Vision
            </p>
          </div>
          <div className="ml-10">
            <h3 className=" text-2xl font-bold mb-3 ">
              The most trusted global partner in lubrication excellence
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To be the most trusted global partner in lubrication excellence,
              empowering industries with innovative, sustainable, and <br />{" "}
              value-driven solutions.
            </p>
          </div>
          <div className="flex items-center gap-5 mb-2 mt-10">
            <p className="uppercase text-black tracking-wide font-semibold  ml-10">
              Our Mission
            </p>
          </div>
          <div className="ml-10">
            <h3 className=" text-2xl font-bold mb-3 ">
              We empower industries with superior lubrication solutions
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To deliver world-class lubrication solutions that enhance
              performance, protect equipment, and simplify supply chains <br />{" "}
              through superior products, technical expertise, and reliable
              service.
            </p>
          </div>
        </div>
      </section>
      {/* Subscription Section */}
      <section
        className=" text-white py-16 px-6 rounded-lg bg-cover md:w-[1110px]  mx-10 mb-10 bg-center"
        style={{ backgroundImage: `url(/assets/subscribe-image.png)` }}
      >
        <div className="max-w-3xl mx-auto text-center ">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Subscribe to get <br /> the latest updates
          </h3>
          <form className="flex flex-col sm:flex-col mx-auto  justify-center gap-4 mt-6 w-2/3">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-[250px] px-4 py-5 rounded-md border-1 text-white bg-secondary focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-5 bg-primaryb font-semibold rounded-sm shadow hover:bg-orange-400 text-[#152C41] transition"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default About;
