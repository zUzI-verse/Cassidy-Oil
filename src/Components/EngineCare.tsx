import React, { useState, useRef } from "react";
import { MechA, MechB, MechC } from "../assets";


const EngineCare: React.FC = () => {
  const images = [MechB, MechA, MechC];
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

// Swipe logic
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
 const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
  };


  return (
    <section className="px-8 py-16 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Protect Your Engine with <br />
        Cassidy standard oil
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto w-[390px] mb-10 md:w-full">
        Whether you&apos;re a seasoned mechanic or a casual car enthusiast, we
        have the knowledge and expertise to help you get the most out of your
        engine.
      </p>

      {/* Mobile View: Swipe Slider */}
      <div
        className="relative w-full overflow-hidden md:hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`slide-${idx}`}
              className="w-full h-64 object-cover  flex-shrink-0 rounded-md shadow-md"
            />
          ))}
        </div>
      </div>

      {/* Desktop View: Grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
  );
};

export default EngineCare;