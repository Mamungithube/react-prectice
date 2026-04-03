import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="font-sans">
      <div className="relative h-[400px] flex flex-col">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&w=1950&q=80" className="w-full h-full object-cover" alt="bg" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <Navbar />
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-serif font-bold">Contact Us</h1>
        </div>
      </div>

      <section className="py-24 max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-20 items-center">
         <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80" className="rounded-[40px]" alt="Contact" />
         <div>
            <h2 className="text-4xl font-serif font-bold mb-8 leading-tight">28 Years has been a legal attorney and consulting</h2>
            <div className="space-y-4">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="flex items-center gap-3 font-bold text-gray-700">
                    <CheckCircle size={18} className="text-blue-900" /> Success Handled Cases
                 </div>
               ))}
            </div>
         </div>
      </section>

      <section className="py-24 bg-gray-50 px-10">
         <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
            <div>
               <h3 className="text-3xl font-serif font-bold mb-8">Get in Touch with Us</h3>
               <p className="text-gray-500 mb-10 text-sm">If you have any questions, just fill in the contact form, and we will answer you shortly.</p>
               <div className="space-y-10">
                  <div className="flex gap-6"><Phone className="text-blue-900" /> <div><p className="text-xs font-bold text-gray-400 uppercase">Phone</p><p className="font-bold">+1-800-123-4567</p></div></div>
                  <div className="flex gap-6"><Mail className="text-blue-900" /> <div><p className="text-xs font-bold text-gray-400 uppercase">Email</p><p className="font-bold">info@shodekapex.com</p></div></div>
                  <div className="flex gap-6"><MapPin className="text-blue-900" /> <div><p className="text-xs font-bold text-gray-400 uppercase">Address</p><p className="font-bold">7500 Mechanic Rd. Miami, FL</p></div></div>
               </div>
            </div>
            <div className="bg-white p-10 rounded-[32px] shadow-2xl border border-gray-100">
               <form className="space-y-6">
                  <div className="space-y-2"><label className="text-[10px] font-bold uppercase text-gray-400">Full Name</label><input type="text" className="w-full p-4 bg-gray-50 rounded-xl outline-none" /></div>
                  <div className="space-y-2"><label className="text-[10px] font-bold uppercase text-gray-400">Email Address</label><input type="email" className="w-full p-4 bg-gray-50 rounded-xl outline-none" /></div>
                  <div className="space-y-2"><label className="text-[10px] font-bold uppercase text-gray-400">Message</label><textarea className="w-full p-4 bg-gray-50 rounded-xl h-32 outline-none"></textarea></div>
                  <button className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold">Submit Now</button>
               </form>
            </div>
         </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;