import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-white font-sans overflow-hidden">

      {/* Left: Professional Image Section (৫০০/৫০০ স্প্লিট) */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="https://img.freepik.com/free-photo/gavel-lawyer-office_23-2147890333.jpg" // এখানে আপনার ফিগমার অরিজিনাল ইমেজটা বসাবেন
          alt="Law context"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right: Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 lg:px-24">
        <div className="w-full max-w-[420px]">

          {/* Logo (ফিগমার ঐ বক্স লোগো) */}
          <div className="mb-12 text-center lg:text-left">
            <div className="w-16 h-16 border-2 border-brand-border rounded-xl flex items-center justify-center shadow-sm">
              <div className="text-brand-navy font-bold text-xl leading-none text-center">
                <img
                  src="https://img.freepik.com/free-photo/gavel-lawyer-office_23-2147890333.jpg" // এখানে আপনার ফিগমার অরিজিনাল ইমেজটা বসাবেন
                />
                {/* <span className="block text-sm">SA</span>
                    <span className="text-[10px] uppercase font-light">Shodek Apex</span> */}
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-extrabold text-[#111827] mb-2 tracking-tight">Login</h1>
            <p className="text-gray-500 text-sm font-medium">Let's login into your account first</p>
          </div>

          {/* Phone Input Box */}
          <form className="space-y-6">
            <div className="relative">
              <div className="flex items-center border border-brand-border rounded-lg overflow-hidden h-[54px] focus-within:ring-1 focus-within:ring-brand-navy">
                <div className="bg-gray-50 px-4 flex items-center gap-2 border-r h-full">
                  <img src="https://flagcdn.com/w20/ng.png" width="18" alt="NG" />
                  <span className="text-xs font-bold text-gray-600">+234</span>
                </div>
                <input
                  type="text"
                  placeholder="000 000 000"
                  className="w-full px-4 outline-none text-sm placeholder:text-gray-300"
                />
              </div>
            </div>

            <button className="w-full bg-[#1A3765] text-white py-[14px] rounded-lg font-bold text-sm hover:opacity-90 transition-all">
              Login
            </button>
          </form>

          {/* Divider with 'or' */}
          <div className="relative my-10 flex items-center justify-center">
            <div className="w-full border-t border-gray-100"></div>
            <span className="absolute bg-white px-4 text-xs font-bold text-gray-400">or</span>
          </div>

          {/* Social Buttons */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 border border-brand-border py-3 rounded-lg hover:bg-gray-50 transition text-sm font-bold text-gray-700">
              <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-4 h-4" alt="G" />
              Login with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 border border-brand-border py-3 rounded-lg hover:bg-gray-50 transition text-sm font-bold text-gray-700">
              <img src="https://www.svgrepo.com/show/303114/facebook-3.svg" className="w-4 h-4" alt="F" />
              Login with Facebook
            </button>
          </div>

          {/* Registration Link */}
          <div className="mt-8 text-center lg:text-left">
            <p className="text-[13px] text-gray-600 font-medium">
              Don't have an account? <Link to="/register" className="text-brand-navy font-bold underline decoration-2 underline-offset-4 ml-1">Register Here</Link>
            </p>
          </div>

          {/* Footer Bottom */}
          <div className="mt-20 flex justify-between items-center text-[10px] font-bold text-gray-400 tracking-wider">
            <p>© 2025 Shodek Apex Ltd. All rights reserved.</p>
            <Link to="#" className="text-brand-navy uppercase hover:underline">Term & Condition</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;