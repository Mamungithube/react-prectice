import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("User Data:", data);
    // ফর্ম ঠিক থাকলে ওটিপি পেজে পাঠিয়ে দেবে
    navigate('/verify-otp');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="flex flex-col lg:flex-row-reverse min-h-screen w-full bg-white font-sans overflow-hidden"
    >
      {/* Right Side: Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80" 
          alt="Law context" className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Left Side: Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 lg:px-24">
        <div className="w-full max-w-[420px]">
          <Link to="/login" className="text-gray-400 mb-6 flex items-center gap-2 text-sm hover:text-black transition">
            <span>←</span> Back
          </Link>
          
          <div className="mb-10 text-left">
            <div className="w-14 h-14 border border-gray-200 rounded-xl flex items-center justify-center shadow-sm mb-6">
               <span className="text-[#1A3765] font-bold">SA</span>
            </div>
            <h1 className="text-3xl font-serif font-extrabold text-[#111827] mb-2">Register</h1>
            <p className="text-gray-500 text-sm italic">Let's create new account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Input */}
            <div>
              <div className={`border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-lg flex items-center h-[54px] focus-within:ring-1 focus-within:ring-[#1A3765]`}>
                <span className="pl-4 text-gray-400">👤</span>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 outline-none text-sm" 
                />
              </div>
              {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name.message}</p>}
            </div>

            {/* Phone Input */}
            <div>
              <div className={`flex border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-lg overflow-hidden h-[54px]`}>
                <div className="bg-gray-50 px-3 flex items-center gap-1 border-r h-full text-xs font-bold text-gray-600">
                   <img src="https://flagcdn.com/w20/ng.png" width="16" alt="NG" /> +234
                </div>
                <input 
                  type="tel" 
                  placeholder="000 000 000" 
                  {...register("phone", { required: "Phone is required", minLength: { value: 10, message: "Invalid phone number" } })}
                  className="w-full px-4 outline-none text-sm" 
                />
              </div>
              {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone.message}</p>}
            </div>

            <button type="submit" className="w-full bg-[#1A3765] text-white py-3.5 rounded-lg font-bold text-sm shadow-md mt-4 hover:bg-blue-900 transition">
              Register
            </button>
          </form>

          <p className="mt-8 text-center text-[13px] text-gray-600 font-medium">
            Already have an account? <Link to="/login" className="text-[#1A3765] font-bold underline ml-1">Login Here</Link>
          </p>

          <div className="mt-20 flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            <p>© 2025 Shodek Apex Ltd. All rights reserved.</p>
            <Link to="#" className="text-[#1A3765]">Term & Condition</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Register;