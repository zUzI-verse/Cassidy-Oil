import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import AllLubricants from "./Lubricants/AllLubricants";
import BikeOil from "./Lubricants/BikeOil";
import PetrolEngineOil from "./Lubricants/PetrolEngineOil";
import DieselEngine from "./Lubricants/DieselEngine";
import TransmissionOil from "./Lubricants/TransmissionOil";
import HeavyDutyEngineOil from "./Lubricants/HeavyDutyEngineOil";
import CasstekPrem from "./Lubricants/DataOnLub/CasstekPrem";
import CasstekMoto from "./Lubricants/DataOnLub/CasstekMoto";


const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="contact" element={<Contact />} />
            {/* Lubricants routes */}
            <Route path="lubricants" element={<AllLubricants />} 
            />
            <Route path="lubricants/bike-oils" element={<BikeOil />}
             />
            <Route
              path="lubricants/petrol-engine-oil"
              element={<PetrolEngineOil />}
            />
            <Route
              path="lubricants/diesel-engine-oil"
              element={<DieselEngine />}
            />
            <Route
              path="lubricants/transmission-oil"
              element={<TransmissionOil />}
            />
            <Route
              path="lubricants/heavy-duty-engine-oil"
              element={<HeavyDutyEngineOil />}
            />
            {/* Lubricants Data */}
            <Route
              path="lubricants/dataonlub/cassket-prem/:id"
              element={<CasstekPrem />}
            />
           
            <Route
              path="lubricants/dataonlub/casstek-moto/:id"
              element={<CasstekMoto />}
            />


            {/* 404 Page */}
            <Route
              path="*"
              element={
                <h1 className="text-center mt-20 text-3xl">
                  404 - Page Not Found
                </h1>
              }
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
