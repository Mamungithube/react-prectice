import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1">
            <div className="bg-[#1A3765] text-white w-12 h-12 flex items-center justify-center rounded-xl font-bold text-xl mb-8">SA</div>
            <p className="text-sm text-gray-400 leading-relaxed mb-8">Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie.</p>
            <div className="flex gap-4 text-gray-400">
                {/* Facebook SVG */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                {/* Twitter SVG */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.2-18 11.6 7.2.1 11.3-4.5 11.3-4.5 0 0-5.5-.3-7.7-6.9 0 0 1.5.1 2.3-.1C2.3 7.5.5 3.9.5 3.9c0 0 1.9 1.1 3.5 1.1 0 0-3.3-6.1 1.7-8.5 0 0 3.5 4.5 10.3 4.8 0 0-.5-2.6 1.4-4.2 0 0 1.8-1.4 4.1.1 0 0 1.4.2 2.1-.5 0 0-.4 1.2-1.1 1.9 0 0 1.2.1 1.9-.4 0 0-.7.9-1.4 1.5z"></path></svg>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[#1A3765] mb-8 uppercase text-xs tracking-widest">Home</h4>
            <ul className="space-y-4 text-xs text-gray-400 font-bold uppercase tracking-widest">
              <li>About Us</li><li>Services</li><li>Contact Us</li>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="font-bold text-[#1A3765] mb-8 uppercase text-xs tracking-widest">Contact Us</h4>
            <ul className="space-y-4 text-xs text-gray-400 font-medium">
              <li className="flex items-center gap-3"><Phone size={14} /> +12 3272 8282</li>
              <li className="flex items-center gap-3"><MapPin size={14} /> 7500 Mechanic Rd. Miami, FL 33135</li>
              <li className="flex items-center gap-3"><Mail size={14} /> shodek@apex.com</li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t text-center text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">@2025 Shodek Legal. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;