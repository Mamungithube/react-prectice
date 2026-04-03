import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="font-sans text-[#1A3765]">
      <div className="relative h-[400px] flex flex-col">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1950&q=80" className="w-full h-full object-cover" alt="bg" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <Navbar />
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-white">
          <p className="uppercase tracking-[0.3em] text-[10px] mb-2 font-bold opacity-70">Home / About Us</p>
          <h1 className="text-5xl font-serif font-bold">About Us</h1>
        </div>
      </div>

      <section className="py-24 max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 border-l-4 border-blue-600 pl-4">About Us</p>
          <h2 className="text-4xl font-serif font-bold mb-6">Committed To Making Legal Help Accessible</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">At Shodek Apex, we believe everyone deserves access to professional legal support without the high hourly rates or complicated processes.</p>
        </div>
        <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80" className="rounded-[40px] shadow-xl" alt="About" />
      </section>

      <section className="py-24 bg-blue-600 text-center text-white">
        <h2 className="text-3xl font-serif font-bold mb-4">We Help You With Quality Legal Lawyer</h2>
        <p className="text-sm opacity-80 mb-8 max-w-2xl mx-auto">We connect you with experienced, trusted lawyers to handle your legal needs with expert guidance every step of the way.</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold">Get Started</button>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-20">
        <div>
          <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
          <p className="text-gray-500 text-sm leading-relaxed italic border-l-2 border-gray-200 pl-6">To provide affordable, professional legal support that offers ongoing legal protection for personal, business, and estate needs.</p>
        </div>
        <div>
          <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
          <p className="text-gray-500 text-sm leading-relaxed italic border-l-2 border-gray-200 pl-6">Our platform simplifies legal services with transparent pricing, expert guidance, and flexible plans tailored to your needs.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;