import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Upload } from 'lucide-react';

const Appointment = () => {
  return (
    <div className="font-sans">
      <div className="relative h-[400px] flex flex-col">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1950&q=80" className="w-full h-full object-cover" alt="bg" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <Navbar />
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-serif font-bold">Appointment</h1>
        </div>
      </div>

      <section className="py-24 max-w-4xl mx-auto px-10">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-serif font-bold mb-4">Let's Make a Appointment with us first</h2>
        </div>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
               <label className="text-xs font-bold uppercase text-gray-500">Your Name</label>
               <input type="text" placeholder="Enter your name" className="w-full p-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-blue-200 outline-none transition" />
            </div>
            <div className="space-y-2">
               <label className="text-xs font-bold uppercase text-gray-500">Your Email</label>
               <input type="email" placeholder="Enter your email" className="w-full p-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-blue-200 outline-none transition" />
            </div>
            <div className="space-y-2">
               <label className="text-xs font-bold uppercase text-gray-500">Your Phone</label>
               <input type="tel" placeholder="Enter your phone" className="w-full p-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-blue-200 outline-none transition" />
            </div>
            <div className="space-y-2">
               <label className="text-xs font-bold uppercase text-gray-500">Service</label>
               <select className="w-full p-4 bg-gray-50 border-transparent rounded-xl outline-none transition appearance-none">
                  <option>Choose service</option>
                  <option>Personal Injury</option>
                  <option>Family Law</option>
               </select>
            </div>
          </div>
          
          <div className="p-10 border-2 border-dashed border-blue-100 rounded-[32px] text-center bg-blue-50/20">
             <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm mb-4"><Upload size={20} /></div>
             <p className="font-bold text-gray-700">Choose a file or drag & drop it here</p>
             <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-widest">JPEG, PNG, PDF up to 50MB</p>
             <button type="button" className="mt-4 text-blue-600 font-bold border-b border-blue-600">Browse File</button>
          </div>

          <button className="w-full bg-blue-900 text-white py-5 rounded-2xl font-bold shadow-xl shadow-blue-900/20">Make Appointment</button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Appointment;