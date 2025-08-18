import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./Components/Footer"
import Contact from "./Components/Contact"
import Layout from "./Components/Layout"



const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Routes>
        <Route path="/" element={<Layout />} />
       < Route path="contact" element={<Contact />}/>     
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
    
  )
}

export default App