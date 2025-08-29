import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   
    <nav className="bg-black p-2 text-white">
      <h1 className="text-2xl font-bold tracking-wide text-emerald-300 ">My Blog</h1>
      <div className="space-x-4">
        <Link to={"/"} className="hover:underline">Home</Link>
        <Link to={"/About"} className="hover:underline">About</Link>
       <Link to={"/contact"} className="hover:underline">Contact</Link>
      </div>
    </nav>  

  )
}

export default Navbar