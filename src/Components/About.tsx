import { OilAbout } from "../assets"

const About = () => {
  return (
    <div>
         <section className="bg-white py-16 px-6 lg:px-20">
      {/* Top section */}
      <div className="max-w-6xl mx-auto">
        {/* Orange line + small heading */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="w-8 h-0.5 bg-orange-500"></span>
          <span className="tracking-widest text-gray-500 text-sm uppercase">
            Know About Us
          </span>
        </div>

        {/* Main text grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-12">
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

        {/* Image */}
        <div>
          <img
            src={OilAbout} // 👉 Replace with your image path
            alt="Engine oil being poured"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
      </div>
    </section>
    </div>
  )
}

export default About