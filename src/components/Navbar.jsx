import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black p-2 md:p-4 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold tracking-wide text-emerald-300">WHITE BOARD APP</h1>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-4">
          <Link to={"/"} className="hover:underline transition-colors duration-200">Home</Link>
          <Link to={"/About"} className="hover:underline transition-colors duration-200">About</Link>
          <Link to={"/contact"} className="hover:underline transition-colors duration-200">Contact</Link>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link to={"/"} className="block hover:underline transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to={"/About"} className="block hover:underline transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to={"/contact"} className="block hover:underline transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>  
  )
}

export default Navbar