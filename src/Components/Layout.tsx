import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";



const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow p-6">
        <Outlet /> {/* This renders the child route content is that placeholder — it tells React Router:
           👉 “Insert the child route’s element here.” */}
        </main>
        
    </div>
  )
}

export default Layout