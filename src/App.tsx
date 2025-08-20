import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Footer from "./Components/Footer"
import Contact from "./Components/Contact"
import Layout from "./Components/Layout"
import AllLubricants from "./Lubricants/AllLubricants"



const App = () => {
  return (
   <BrowserRouter>
     <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about us" element={<About/>} />
          <Route path="lubricants" element={<AllLubricants />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
        <Footer />
         </div>
    </BrowserRouter>
     
  )
}

export default App