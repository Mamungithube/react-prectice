import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Shield, Scale, Landmark, Home as HomeIcon, MapPin,
    FileText, Briefcase, Globe, Star, Check, Play, Mail, Phone, ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import { h1 } from 'framer-motion/client';

// সোশ্যাল আইকনগুলোর জন্য সরাসরি SVG (লাইব্রেরি এরর এড়াতে)
const SocialIcons = {
    Facebook: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
    ),
    Twitter: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.2-18 11.6 7.2.1 11.3-4.5 11.3-4.5 0 0-5.5-.3-7.7-6.9 0 0 1.5.1 2.3-.1C2.3 7.5.5 3.9.5 3.9c0 0 1.9 1.1 3.5 1.1 0 0-3.3-6.1 1.7-8.5 0 0 3.5 4.5 10.3 4.8 0 0-.5-2.6 1.4-4.2 0 0 1.8-1.4 4.1.1 0 0 1.4.2 2.1-.5 0 0-.4 1.2-1.1 1.9 0 0 1.2.1 1.9-.4 0 0-.7.9-1.4 1.5z"></path></svg>
    ),
    Linkedin: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    ),
    Instagram: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    )
};

const services = [
    { name: 'Personal Injury Law', icon: <Scale size={28} /> },
    { name: 'Family Law', icon: <FileText size={28} /> },
    { name: 'Criminal Defense', icon: <Shield size={28} /> },
    { name: 'Real Estate Law', icon: <HomeIcon size={28} /> },
    { name: 'Estate Planning', icon: <Landmark size={28} /> },
    { name: 'Business Law', icon: <Briefcase size={28} /> },
    { name: 'Employment Law', icon: <Briefcase size={28} /> },
    { name: 'Immigration Law', icon: <Globe size={28} /> },
];

const Home = () => {

    // const fakeData = [
    //     { id: 1, title: "We do right by You", desc: "We prioritize your interests and fight for the best possible outcome." },
    //     { id: 2, title: "We do right by You", desc: "We prioritize your interests and fight for the best possible outcome." },
    //     { id: 3, title: "We do right by You", desc: "We prioritize your interests and fight for the best possible outcome." },
    //     { id: 4, title: "We do right by You", desc: "We prioritize your interests and fight for the best possible outcome." },
    // ]

    // const [count, setCount] = useState(0);
    // const [comment, setComment] = useState('')
    // const [showComment, setShowComment] = useState([])

    // const handleSubmit = (newComment) => {
    //     setShowComment([...showComment, newComment]);
    //     setComment('');
    // };
    

    return (
        <div className="font-sans text-[#1A3765] bg-white overflow-x-hidden">

            {/* 1. HERO SECTION */}
            <section className="relative h-screen flex flex-col">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?fit=crop&w=1950&q=80" alt="bg" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
                </div>

                <Navbar />
                <div>jsdj</div>

                <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center text-white px-6">
                    <p className="uppercase tracking-[0.5em] text-[10px] font-bold mb-6 opacity-80 italic">JUSTICE, INTEGRITY, RESULTS</p>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold max-w-5xl leading-[1.1] mb-10">
                        In Legal Battles, <img src="https://flagcdn.com/w40/ng.png" className="inline w-10 mx-2" alt="icon" /> We Stand With You <br />
                        <span className="text-blue-400 italic">Seeking Justice,</span> Upholding The Law, <Scale className="inline mx-2" /> And <br />
                        Fighting For Your Future.
                    </h1>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="mt-12">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                            <ChevronDown size={20} />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* {
                fakeData.map(item => <Card key={item.id} title={item.title} desc={item.desc} />)
            }

            <h2 className='px-5'>{count}</h2>

            <button className='bg-green-500 px-4 py-2' onClick={() => setCount(count + 1)}>Click Me</button> */}

            {/* <div>
                <input type="text" placeholder='Write something' className='border' onChange={(e) => setComment(e.target.value)} />
                <button className='bg-red-500 px-5 py-2' onClick={() => handleSubmit(comment)}>Submit</button>
                <p>{showComment} </p>
            </div> */}
{/* 
            <div className="mt-4">
                <input type="text" placeholder='Write something' className='border' onChange={(e) => setComment(e.target.value)} />
                <button className='bg-red-500 px-5 py-2' onClick={() => handleSubmit(comment)}>Submit</button>
                {showComment.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div> */}

            {/* 2. STATS SECTION */}
            <section className="py-24 bg-white px-10 border-b border-gray-100">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
                    <div className="max-w-md">
                        <h2 className="text-2xl font-serif font-bold text-gray-800 leading-snug mb-4">Trusted by millions for reliable and expert solutions.</h2>
                        <p className="text-gray-400 text-xs leading-relaxed">From conveyancing to launching new ventures, our work is more than just about law. We help millions navigate important life decisions with confidence.</p>
                    </div>
                    <div className="flex-1 flex justify-around w-full">
                        <div className="text-center px-10 border-r border-gray-200">
                            <h3 className="text-5xl font-bold mb-2">100+</h3>
                            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Users</p>
                        </div>
                        <div className="text-center px-10 border-r border-gray-200">
                            <h3 className="text-5xl font-bold mb-2">400+</h3>
                            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Talent backend legalities</p>
                        </div>
                        <div className="text-center px-10">
                            <h3 className="text-5xl font-bold mb-2">15</h3>
                            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Years of journey</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. WHY US / ABOUT SECTION */}
            <section className="py-32 max-w-7xl mx-auto px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border-l-4 border-blue-600 pl-4">WHY US</p>
                        <h2 className="text-5xl font-serif font-bold mb-8 leading-tight">Built on Trust, Chosen for Results.</h2>
                        <p className="text-gray-500 text-sm mb-10 leading-relaxed italic max-w-md">With over 15 years of experience and millions of satisfied customers, we've earned our reputation as a leader in legal and business services.</p>
                        <div className="space-y-6">
                            {[
                                { title: "We do right by You", desc: "We prioritize your interests and fight for the best possible outcome." },
                                { title: "We've got you covered in all 50 states", desc: "Our network ensures you have representation everywhere you go." },
                                { title: "Flat-rate fees", desc: "Simple, transparent pricing with no hidden costs or surprises." }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-xl transition duration-500">
                                    <h4 className="font-bold text-[#1A3765] mb-2">{item.title}</h4>
                                    <p className="text-[11px] text-gray-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80" alt="About" className="rounded-[40px] shadow-2xl" />
                    </div>
                </div>
            </section>

            {/* 4. SERVICES GRID */}
            <section className="py-32 bg-[#F3F6FA] text-center px-10">
                <h2 className="text-4xl font-serif font-bold mb-4">Professional And Trusted Lawyer Services</h2>
                <p className="text-gray-400 text-xs mb-20 max-w-2xl mx-auto italic">Our lawyer experts provide our best legal practices to deliver personal solutions tailored to your needs.</p>
                <div className="grid grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto border border-gray-200">
                    {services.map((s, i) => (
                        <div key={i} className="p-16 border border-gray-100 bg-white hover:bg-[#1A3765] hover:text-white transition-all duration-500 cursor-pointer group flex flex-col items-center">
                            <div className="mb-6 group-hover:scale-110 transition duration-300 text-blue-600 group-hover:text-white">{s.icon}</div>
                            <h4 className="text-[10px] font-bold uppercase tracking-widest">{s.name}</h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. SUBSCRIPTION PLAN */}
            <section className="py-32 text-center px-10">
                <div className="mb-20">
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 flex items-center justify-center gap-4">
                        <span className="w-10 h-[1px] bg-gray-200"></span> Subscription Plan <span className="w-10 h-[1px] bg-gray-200"></span>
                    </p>
                    <h2 className="text-4xl font-serif font-bold">Membership Options for Ongoing <br /> Legal Support</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Monthly */}
                    <div className="p-12 border border-gray-100 rounded-[40px] text-left hover:shadow-2xl transition-all duration-500">
                        <h3 className="text-gray-400 text-xs font-bold mb-2">Monthly</h3>
                        <div className="flex items-baseline mb-10"><span className="text-4xl font-bold">$19.99</span><span className="text-gray-400 text-xs italic ml-1">/month</span></div>
                        <button className="w-full bg-[#1A3765] text-white py-4 rounded-xl font-bold mb-10 hover:bg-blue-900 transition">Choose Plan</button>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-[11px] text-gray-500"><Check size={14} className="text-blue-600 mt-0.5" /> Up to 3 lawyer consultations per month</li>
                            <li className="flex items-start gap-3 text-[11px] text-gray-500"><Check size={14} className="text-blue-600 mt-0.5" /> Priority booking for general legal needs</li>
                        </ul>
                    </div>
                    {/* Yearly */}
                    <div className="p-12 border-2 border-blue-600 rounded-[40px] text-left shadow-xl relative scale-105 bg-white">
                        <h3 className="text-gray-400 text-xs font-bold mb-2">Yearly</h3>
                        <div className="flex items-baseline mb-10"><span className="text-4xl font-bold">$199.99</span><span className="text-gray-400 text-xs italic ml-1">/year</span></div>
                        <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold mb-10 hover:bg-blue-700 transition shadow-lg shadow-blue-200">Choose Plan</button>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-[11px] text-gray-500"><Check size={14} className="text-blue-600 mt-0.5" /> Unlimited consultations throughout the year</li>
                            <li className="flex items-start gap-3 text-[11px] text-gray-500"><Check size={14} className="text-blue-600 mt-0.5" /> Dedicated legal case manager</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 6. TESTIMONIALS */}
            <section className="py-32 bg-white text-center px-10">
                <div className="mb-20">
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 flex items-center justify-center gap-4">
                        <span className="w-10 h-[1px] bg-gray-200"></span> Testimonials <span className="w-10 h-[1px] bg-gray-200"></span>
                    </p>
                    <h2 className="text-4xl font-serif font-bold mb-4">Our Happy Client Say About Us</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto mb-16">
                    {/* Video Cards */}
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="relative rounded-[40px] overflow-hidden group h-[400px]">
                            <img src={`https://images.unsplash.com/photo-150${i}003211169-0a1dd7228f2d?fit=crop&w=400&q=80`} alt="Client" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <button className="absolute top-6 left-6 bg-black/40 backdrop-blur-md text-white text-[10px] px-4 py-2 rounded-full flex items-center gap-2 font-bold"><Play size={12} fill="white" /> Play Video</button>
                            <div className="absolute bottom-8 left-8 text-left text-white">
                                <h4 className="font-bold text-lg">Mark T.</h4>
                                <p className="text-[10px] opacity-60 uppercase font-bold tracking-widest">Host of 'Tech Talks'</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-gray-50/50 p-8 rounded-[40px] text-left border border-gray-100">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-blue-100"></div><div><h5 className="font-bold text-xs">Sophia L.</h5><p className="text-[9px] text-gray-400 font-bold uppercase">Creative Director</p></div></div>
                                <div className="flex text-yellow-500 gap-0.5"><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /></div>
                            </div>
                            <p className="text-[11px] text-gray-500 leading-relaxed font-medium">"Listening here is like a creative recharge. It brings valuable insights for my entrepreneurial journey."</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. CTA SECTION */}
            <section className="py-24 bg-[#F3F6FA] text-center px-10">
                <h2 className="text-4xl font-serif font-bold mb-4">Ready To Simplify Your Legal Needs?</h2>
                <p className="text-gray-400 text-sm mb-12 italic">Sign up today or request a demo to see how LegalEase can help you.</p>
                <button className="bg-[#1A3765] text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/20">Get Started</button>
            </section>

            {/* 8. FOOTER */}
            <footer className="bg-white pt-24 pb-10 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
                        <div className="col-span-1">
                            <div className="bg-[#1A3765] text-white w-14 h-14 flex items-center justify-center rounded-2xl font-bold text-xl mb-8">SA</div>
                            <p className="text-sm text-gray-400 leading-relaxed mb-10">Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie.</p>
                            <div className="flex gap-4 text-gray-300">
                                <a href="#" className="hover:text-blue-600 transition"><SocialIcons.Facebook /></a>
                                <a href="#" className="hover:text-blue-600 transition"><SocialIcons.Linkedin /></a>
                                <a href="#" className="hover:text-blue-600 transition"><SocialIcons.Twitter /></a>
                                <a href="#" className="hover:text-blue-600 transition"><SocialIcons.Instagram /></a>
                            </div>
                        </div>
                        <div><h4 className="font-bold text-[#1A3765] mb-8 uppercase text-xs tracking-widest">Home</h4><ul className="space-y-4 text-xs text-gray-400 font-bold uppercase tracking-widest"><li>About Us</li><li>Services</li><li>Contact Us</li></ul></div>
                        <div className="col-span-2"><h4 className="font-bold text-[#1A3765] mb-8 uppercase text-xs tracking-widest">Contact Us</h4><ul className="space-y-4 text-xs text-gray-400 font-medium"><li><Phone size={14} className="inline mr-2" /> +12 3272 8282</li><li><MapPin size={14} className="inline mr-2" /> 7500 Mechanic Rd. Miami, FL 33135</li><li><Mail size={14} className="inline mr-2" /> shodek@apex.com</li></ul></div>
                    </div>
                    <div className="pt-10 border-t flex justify-center text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">@2025 Shodek Legal. All rights reserved.</div>
                </div>
            </footer>
        </div>
    );
};

export default Home;