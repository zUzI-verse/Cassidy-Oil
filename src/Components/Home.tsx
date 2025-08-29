

// src/pages/Home.tsx
import React from "react";
import { Button } from "@material-tailwind/react";
import { Card } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] bg-black">
        <img
          src="/images/hero-oil.jpg"
          alt="Engine Oil Pour"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-12 md:px-24 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-snug max-w-2xl">
            Ensuring optimal engine protection and performance.
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 gap-12">
        <div className="flex-1 space-y-6">
          <h4 className="text-orange-500 font-semibold tracking-wider uppercase">
            Know About Us
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            At Cassidy Energy, we're passionate about engines
          </h2>
          <p className="text-gray-600 leading-relaxed">
            With years of experience in the industry, we understand the
            importance of engine protection. Our goal is to provide outstanding
            engine performance. That’s why we’ve dedicated ourselves to
            producing the finest engine oils on the market.
          </p>
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl"
            placeholder=""
            onResize={() => {}}
            onResizeCapture={() => {}}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Learn more
          </Button>
        </div>
        <div className="flex-1">
          <img
            src="/images/product-blue.png"
            alt="Cassidy Product"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-100 px-8 md:px-20 py-20">
        <div className="text-center mb-12">
          <h4 className="text-orange-500 font-semibold tracking-wider uppercase">
            What We Do
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Range of Products
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            At Cassidy Energy, we’re committed to helping you get the best out
            of your engines. Our products are designed to meet global standards
            and give your vehicles the care they deserve.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Cassket Premium 4T 20W-40 API SL/MA2",
              img: "/images/product1.png",
            },
            {
              name: "Cassket Motor Oil 20W-40 API SJ/CF",
              img: "/images/product2.png",
            },
            {
              name: "Cassgold Super Motor Oil 15W-30 API SJ/CF",
              img: "/images/product3.png",
            },
            {
              name: "Cassgold Power Motor Oil SAE40 API SF/CF",
              img: "/images/product4.png",
            },
          ].map((product, index) => (
            <Card
              key={index}
              className="rounded-2xl shadow-md hover:shadow-lg transition"
              placeholder=""
              onResizeCapture={() => {}}
              onResize={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <div className="p-6 flex flex-col items-center space-y-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-40 object-contain"
                />
                <h3 className="text-lg font-semibold text-center">
                  {product.name}
                </h3>
                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl"
                  placeholder=""
                  onResize={() => {}}
                  onResizeCapture={() => {}}
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  See Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>




       {/* ---------------- STANDARD OIL SECTION ---------------- */}
      <section className="px-8 md:px-20 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Protect Your Engine with Cassidy Standard Oil
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Whether you’re a seasoned mechanic or a casual car enthusiast, we have
          the knowledge and expertise to help you get the most out of your
          engine.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <img
            src="/images/mechanic1.jpg"
            alt="Mechanic working"
            className="rounded-2xl shadow-md object-cover w-full h-72"
          />
          <img
            src="/images/mechanic2.jpg"
            alt="Mechanic teaching"
            className="rounded-2xl shadow-md object-cover w-full h-72"
          />
          <img
            src="/images/mechanic3.jpg"
            alt="Mechanic product"
            className="rounded-2xl shadow-md object-cover w-full h-72"
          />
        </div>
      </section>

      {/* ---------------- SUBSCRIBE SECTION ---------------- */}
      <section className="bg-[#0c213a] px-8 md:px-20 py-16 text-center text-white rounded-2xl mx-6 md:mx-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Subscribe to get the latest updates
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <Input
            type="email"
            placeholder="Your email"
            className="flex-1 rounded-lg px-4 py-3 text-black"
            onResize={() => {}}
            onResizeCapture={() => {}}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            crossOrigin={undefined}
          />
          <Button
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg"
            placeholder=""
            onResize={() => {}}
            onResizeCapture={() => {}}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Subscribe
          </Button>
        </div>
      </section>

      {/* ---------------- NEWS SECTION ---------------- */}
      <section className="px-8 md:px-20 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Read Our News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Don’t destroy greenery and don’t spoil scenery",
              img: "/images/news1.jpg",
            },
            {
              title: "Is climate change happening faster than expected?",
              img: "/images/news2.jpg",
            },
            {
              title: "Top 10 facts about wind farms you didn’t know",
              img: "/images/news3.jpg",
            },
            {
              title: "Our goal is to make water available for everyone",
              img: "/images/news4.jpg",
            },
          ].map((news, idx) => (
            <Card
              key={idx}
              className="rounded-2xl shadow-md hover:shadow-lg transition"
              placeholder=""
              onResize={() => {}}
              onResizeCapture={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <img
                src={news.img}
                alt={news.title}
                className="rounded-t-2xl h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-md font-semibold">{news.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </section>






    </div>
  );
};

export default Home;
