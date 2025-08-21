import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import AllLubricants from "./Lubricants/AllLubricants"
import BikeOil from "./Lubricants/BikeOil"
import PetrolEngineOil from "./Lubricants/PetrolEngineOil"
import DieselEngine from "./Lubricants/DieselEngine"
import TransmissionOil from "./Lubricants/TransmissionOil"
import HeavyDutyEngineOil from "./Lubricants/HeavyDutyEngineOil"
import Footer from "./Components/Footer"








const App = () => {
  return (
   <BrowserRouter>
     <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About/>} />
          <Route path="contact" element={<Contact />} />
          {/* Lubricants routes */}
          <Route path="lubricants" element={<AllLubricants />} />
          <Route path="lubricants/bike-oils" element={<BikeOil />} />
          <Route path="lubricants/petrol-engine-oil" element={<PetrolEngineOil />} />
          <Route path="lubricants/diesel-engine-oil" element={<DieselEngine />} /> 
          <Route path="lubricants/transmission-oil" element={<TransmissionOil />} />
          <Route path="lubricants/heavy-duty-engine-oil" element={<HeavyDutyEngineOil />} />
        </Route>
      </Routes>
        <Footer />
         </div>
    </BrowserRouter>
     
  )
}

export default App