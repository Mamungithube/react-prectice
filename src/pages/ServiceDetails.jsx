import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check, Star, ArrowRight, HelpCircle } from 'lucide-react';

const ServiceDetails = () => {
  return (
    <div className="font-sans">
      <div className="relative h-[400px] flex flex-col">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1950&q=80" className="w-full h-full object-cover" alt="bg" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <Navbar />
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-white">
          <p className="text-[10px] uppercase font-bold opacity-60 mb-2">Home / Services / Service Details</p>
          <h1 className="text-5xl font-serif font-bold">Services Details</h1>
        </div>
      </div>

      <section className="py-24 max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h2 className="text-4xl font-serif font-bold mb-8">We fight for your rights after accidents and injuries.</h2>
            <p className="text-gray-500 leading-relaxed mb-10">At Shodek Apex, we understand how overwhelming legal issues can be. Whether it's a personal injury claim, a contract dispute, or starting a new venture, our team is here to support you.</p>
            
            <h3 className="text-2xl font-serif font-bold mb-8">Legal Lawyer Process</h3>
            <div className="flex flex-wrap justify-between items-center gap-8 py-10 relative">
               <div className="text-center w-32"><div className="w-20 h-20 mx-auto bg-blue-900 text-white rounded-2xl flex items-center justify-center shadow-lg mb-4">💬</div><p className="text-xs font-bold uppercase">Discuss Problem</p></div>
               <div className="hidden md:block w-20 border-t-2 border-dashed border-gray-300"></div>
               <div className="text-center w-32"><div className="w-20 h-20 mx-auto bg-blue-900 text-white rounded-2xl flex items-center justify-center shadow-lg mb-4">📝</div><p className="text-xs font-bold uppercase">Make Agreement</p></div>
               <div className="hidden md:block w-20 border-t-2 border-dashed border-gray-300"></div>
               <div className="text-center w-32"><div className="w-20 h-20 mx-auto bg-blue-900 text-white rounded-2xl flex items-center justify-center shadow-lg mb-4">⚖️</div><p className="text-xs font-bold uppercase">Practice Place</p></div>
            </div>

            <div className="mt-20">
               <h3 className="text-2xl font-serif font-bold mb-8">Frequently Asked Questions</h3>
               <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="border border-gray-100 rounded-2xl p-6 flex justify-between items-center bg-gray-50/50">
                       <p className="font-bold text-sm">How long does the legal process usually take?</p>
                       <HelpCircle size={18} className="text-blue-600" />
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-10">
            <div className="p-8 bg-gray-50 rounded-[32px] border border-gray-100">
               <img src="https://i.pravatar.cc/300" className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-white shadow-md" alt="lawyer" />
               <div className="text-center mb-6">
                  <h4 className="font-bold text-lg">Lawyer Poria Alan</h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Property Lawyer</p>
                  <div className="flex justify-center text-yellow-500 mt-1"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
               </div>
               <div className="border-t border-gray-200 pt-6">
                  <p className="text-xs text-gray-400 font-bold uppercase mb-4">Price Detail</p>
                  <div className="flex justify-between font-bold text-lg mb-8"><span>Lawyer Fee</span> <span>$85/hr</span></div>
                  <button className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold">Book Now</button>
               </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceDetails;