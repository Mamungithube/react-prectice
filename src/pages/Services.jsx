import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Scale, FileText, Shield, Home as HomeIcon, Landmark, Briefcase, Globe, ArrowRight } from 'lucide-react';

const services = [
  { name: 'Personal Injury Law', icon: <Scale size={24} />, img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80" },
  { name: 'Family Law', icon: <FileText size={24} />, img: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?auto=format&fit=crop&w=400&q=80" },
  { name: 'Criminal Defense', icon: <Shield size={24} />, img: "https://images.unsplash.com/photo-1453941403708-341ff3b6a75f?auto=format&fit=crop&w=400&q=80" },
  { name: 'Real Estate Law', icon: <HomeIcon size={24} />, img: "https://images.unsplash.com/photo-1560513617-4576880c4639?auto=format&fit=crop&w=400&q=80" },
  { name: 'Personal Injury Law', icon: <Scale size={24} />, img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80" },
  { name: 'Family Law', icon: <FileText size={24} />, img: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?auto=format&fit=crop&w=400&q=80" },
  { name: 'Criminal Defense', icon: <Shield size={24} />, img: "https://images.unsplash.com/photo-1453941403708-341ff3b6a75f?auto=format&fit=crop&w=400&q=80" },
  { name: 'Real Estate Law', icon: <HomeIcon size={24} />, img: "https://images.unsplash.com/photo-1560513617-4576880c4639?auto=format&fit=crop&w=400&q=80" },
  { name: 'Personal Injury Law', icon: <Scale size={24} />, img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80" },
  { name: 'Family Law', icon: <FileText size={24} />, img: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?auto=format&fit=crop&w=400&q=80" },
  { name: 'Criminal Defense', icon: <Shield size={24} />, img: "https://images.unsplash.com/photo-1453941403708-341ff3b6a75f?auto=format&fit=crop&w=400&q=80" },
 { name: 'Real Estate Law', icon: <HomeIcon size={24} />, img: "https://images.unsplash.com/photo-1560513617-4576880c4639?auto=format&fit=crop&w=400&q=80" },
];

const Services = () => {
  return (
    <div className="font-sans">
      <div className="relative h-[400px] flex flex-col">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1950&q=80" className="w-full h-full object-cover" alt="bg" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <Navbar />
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-serif font-bold">Services</h1>
        </div>
      </div>

      <section className="py-24 max-w-7xl mx-auto px-10 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Professional And Trusted Lawyer Services</h2>
        <p className="text-gray-400 text-xs mb-16 italic">Our lawyer services combine professionalism, experience, and integrity to deliver personalized solutions tailored to your needs.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden group">
              <img src={s.img} className="h-48 w-full object-cover group-hover:scale-105 transition" alt={s.name} />
              <div className="p-6 text-left">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-sm text-blue-900">{s.name}</h4>
                  <div className="text-blue-600">{s.icon}</div>
                </div>
                <button className="w-10 h-10 rounded-full border border-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-64 relative overflow-hidden flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1950&q=80" className="absolute inset-0 w-full h-full object-cover" alt="cta" />
        <div className="absolute inset-0 bg-blue-900/40"></div>
        <h2 className="relative z-10 text-white text-3xl font-serif font-bold italic">Remember: If you win, we win.</h2>
      </div>

      <Footer />
    </div>
  );
};

export default Services;