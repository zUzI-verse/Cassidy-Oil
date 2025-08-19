import { useState } from "react"


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
    name: "Cassidy Supreme Motor Oil 20W-50",
    description: "Premium performance multigrade engine oil.",
    image: "/images/oil1.png ",
  },
  {
    id: 2,
    name: "Cassidy Synthetic Motor Oil 5W-30",
    description: "Advanced synthetic oil for petrol engines.",
    image: "/images/oil2.png",
  },
  {
    id: 3,
    name: "Cassidy Premium Diesel Engine Oil",
    description: "Formulated for diesel-powered vehicles.",
    image: "/images/oil3.png",
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
     <section className="relative bg-cover bg-center text-white p-32 mt-16 h-64 " style={{ backgroundImage: "url('/src/assets/bg 2 1.png')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
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
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Learn More</button>
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