import { useState } from "react"
// import {FrameA} from "../assets/FrameA.png"
// import {FrameB} from "../assets/FrameB.png" 



type Product = {
    id: number;
    name: string;
    description: string;
    image: string;
}

const categories =[
  "All",
  "Bike Oils",
  "Petrol Engine Oil",
  "Diesel Engine Oil",
  "Transmission Oil",
  "Heavy Duty Engine Oils",
]

const products: Product [] = [
     {
    id: 1,
    name: "Casstek Premium 4T 20W-40 Api SL/MA2",
    description: "Premium performance multigrade engine oil.",
    image: "/src/assets/FrameB.png",
  },
  {
    id: 2,
    name: "Cassidy Synthetic Motor Oil 5W-30",
    description: "Advanced synthetic oil for petrol engines.",
    image: "/src/assets/FrameB.png",
  },
  {
    id: 3,
    name: "Cassidy Premium Diesel Engine Oil",
    description: "Formulated for diesel-powered vehicles.",
    image: "/src/assets/FrameB.png",
  },
  {
    id: 4,
    name: "Cassidy Heavy Duty Engine Oil",
    description: "Designed for heavy-duty diesel engines.",
    image: "/src/assets/FrameB.png",
  },
  {
    id: 5,
    name: "Cassidy Transmission Fluid",
    description: "High-performance transmission fluid.",
    image: "/src/assets/FrameB.png",
  },
  {
    id: 6,
    name: "Cassidy Bike Oil 10W-30",
    description: "Specially formulated for motorcycles.",
    image: "/src/assets/FrameB.png",
  },
  {
    id: 7,
    name: "Cassidy Petrol Engine Oil 10W-40",
    description: "High-quality oil for petrol engines.",
    image: "/src/assets/FrameB.png",
  },
  {
    id: 8,
    name: "Cassidy Synthetic Gear Oil",
    description: "Synthetic oil for gear systems.",
    image: "/src/assets/FrameB.png",
  },
  // Add more product objects here...
];

const AllLubricants = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    
    const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) =>
          p.name.toLowerCase().includes(activeCategory.toLowerCase())
        );
    
  return (
    <div>
      {/*Hero Banner*/}
     <section className="relative bg-cover w-full m-0 bg-center text-white text-center p-32 h-64 " style={{ backgroundImage: "url('/src/assets/BgAuto.png')" }}>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div>
        <h2 className="text-4xl font-bold">Automatic Lubricants</h2>
      </div>
     </section>

     {/* Main Content */}
     <main className="container mx-auto px-6 py-12">
      <div className="flex gap-8">
        {/* Side Bar */}
        <aside  className="w-1/4">
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li 
                key={cat} 
                className={`cursor-pointer ${activeCategory === cat ? 'text-blue-500 font-bold' : 'text-gray-700'}`}
                onClick={() => setActiveCategory(cat)} >
                {cat}
              </li>
            ))}
          </ul>
        </aside>   

        {/* Product List */}    
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4">
        {filteredProducts.map((product:Product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow">
            <img src={product.image} alt={product.name}  className="w-full h-56 object-contain"/>
            <div  className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
             <p className="text-gray-600 text-sm">{product.description}</p>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">See More</button>
          </div>
          </div>
        ))}
        </section>
      </div>
     </main>
    </div>
  )
}

export default AllLubricants