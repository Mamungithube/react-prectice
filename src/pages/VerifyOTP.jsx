import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const VerifyOTP = () => {
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    if (e.target.value.length === 1 && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerify = () => {
    alert("OTP Verified! Redirecting to Home...");
    navigate('/');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }} 
      animate={{ opacity: 1, x: 0 }} 
      className="flex min-h-screen font-sans"
    >
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-10 bg-white">
        <div className="max-w-[400px] w-full">
            <Link to="/register" className="text-gray-400 text-sm mb-10 block hover:text-black">← Back</Link>
            <div className="w-14 h-14 border rounded-xl flex items-center justify-center font-bold text-[#1A3765] mb-8 shadow-sm">SA</div>
            <h1 className="text-3xl font-serif font-bold mb-2">Verify OTP</h1>
            <p className="text-gray-400 text-xs mb-10 leading-relaxed max-w-[300px]">Check your message, because we send you a code for Verification</p>
            
            <div className="flex gap-4 mb-10">
                {[0, 1, 2, 3].map((i) => (
                    <input 
                        key={i} 
                        id={`otp-${i}`} 
                        type="text" 
                        maxLength="1" 
                        onChange={(e) => handleChange(e, i)}
                        className="w-14 h-14 border-2 rounded-xl text-center text-xl font-bold focus:border-[#1A3765] outline-none transition shadow-sm hover:border-gray-300" 
                    />
                ))}
            </div>

            <div className="text-center mb-8">
                <p className="text-[10px] text-gray-400 mb-1">A code has been sent to your phone</p>
                <button className="text-[#1A3765] text-xs font-bold underline">Resend in 00:57</button>
            </div>

            <button 
              onClick={handleVerify}
              className="w-full bg-[#1A3765] text-white py-4 rounded-xl font-bold shadow-xl hover:bg-blue-900 transition"
            >
              Verify
            </button>

            <div className="mt-20 text-[10px] text-gray-400 uppercase tracking-widest flex justify-between">
                <span>© 2025 Shodek Apex Ltd.</span>
                <Link to="#" className="hover:text-black">Term & Condition</Link>
            </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 relative">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?fit=crop&w=1000&q=80" 
          alt="law" className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-[#1A3765]/10"></div>
      </div>
    </motion.div>
  );
};

export default VerifyOTP;