import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow ">
        <Outlet /> {/* This renders the child route content is that placeholder — it tells React Router:
           👉 “Insert the child route’s element here.” */}
        </main>
        <Footer />
    </div>
  )
}

export default Layout