
import { MechA, MechB, MechC } from "../assets";


const EngineCare: React.FC = () => {
  const images = [MechB, MechA, MechC];
 
 return (
    <section className="px-8 py-16 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Protect Your Engine with <br />
        Cassidy standard oil
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto w-full mb-10 md:w-full">
        Whether you&apos;re a seasoned mechanic or a casual car enthusiast, we
        have the knowledge and expertise to help you get the most out of your
        engine.
      </p>

      {/* Mobile View: Horizontal Scroll Slider */}
      <div
        className="
          flex space-x-4 overflow-x-auto snap-x snap-mandatory
          [-ms-overflow-style:none] [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          md:hidden
        "
      >
        {images.map((img, idx) => (
          <div key={idx} className="flex-shrink-0 w-72 snap-center">
            <img
              src={img}
              alt={`slide-${idx}`}
              className="w-full h-64 object-cover rounded-md shadow-md"
            />
          </div>
        ))}
      </div>

      {/* Desktop View: Grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
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