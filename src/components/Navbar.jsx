import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 flex justify-between items-center px-10 py-6 text-white bg-transparent">
      <div className="bg-white p-1 rounded font-bold text-[#1A3765] px-2 shadow-md">SA</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
        <Link to="/" className="hover:text-blue-300 transition">Home</Link>
        <Link to="/about-us" className="hover:text-blue-300 transition">About Us</Link>
        <Link to="/services" className="hover:text-blue-300 transition">Services</Link>
        <Link to="/contact-us" className="hover:text-blue-300 transition">Contact</Link>
      </div>

      <Link to="/login" className="hidden md:block bg-[#1A3765] px-6 py-2 rounded-lg font-bold text-sm hover:bg-blue-900 transition shadow-lg">
        Login
      </Link>

      {/* Mobile Toggle */}
      <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1A3765] p-10 flex flex-col gap-6 md:hidden shadow-2xl animate-fade-in">
          <a href="" className="text-lg">Home</a>
          <a href="/about-us" className="text-lg">About Us</a>
          <a href="/services" className="text-lg">Services</a>
          <a href="/contact-us" className="text-lg">Contact</a>
          <Link to="/login" className="bg-white text-[#1A3765] text-center py-3 rounded-xl font-bold">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;