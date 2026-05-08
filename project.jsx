import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, MapPin, Clock, Star, CheckCircle, 
  Instagram, Facebook, Twitter, Menu, X, 
  Dumbbell, Users, Award, Zap, ChevronUp, MessageCircle
} from 'lucide-react';

const FitnessFirstGym = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle Navbar Background on Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { label: 'Reviews', value: '233+', icon: <Star className="text-orange-500" /> },
    { label: 'Rating', value: '4.3', icon: <Award className="text-orange-500" /> },
    { label: 'Equipment', value: 'Modern', icon: <Dumbbell className="text-orange-500" /> },
    { label: 'Price', value: 'Affordable', icon: <Zap className="text-orange-500" /> },
  ];

  const plans = [
    { name: 'Admission', price: '100', duration: 'One Time', features: ['Registration Fee', 'ID Card', 'Orientation'] },
    { name: 'Monthly', price: '600', duration: 'per month', features: ['Weight Training', 'Cardio Access', 'Trainer Guidance', 'Flexible Timings'], popular: true },
    { name: 'Yearly', price: '4500', duration: 'per year', features: ['All Monthly Features', 'Free Assessment', 'Locker Access', 'Discounted PT'] },
  ];

  return (
    <div className="bg-neutral-950 text-white font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-2xl font-black tracking-tighter text-orange-500 leading-none">FITNESS FIRST</h1>
            <span className="text-[10px] font-medium text-neutral-400 tracking-[0.2em] uppercase">ఫిట్నెస్ మొదటి జిమ్</span>
          </div>

          <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
            {['Home', 'About', 'Membership', 'Trainers', 'Gallery', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-orange-500 transition-colors">{item}</a>
            ))}
          </div>

          <button className="hidden md:block bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105">
            JOIN NOW
          </button>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover grayscale-[0.5]" 
            alt="Gym Background" 
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-orange-500 font-bold tracking-[0.3em] mb-4 uppercase">Dilsukhnagar's Premier Fitness Hub</h2>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">TRAIN <span className="text-transparent stroke-white stroke-2" style={{ WebkitTextStroke: '1px white' }}>HARD</span>.<br />STAY STRONG.</h1>
            <p className="text-xl text-neutral-300 mb-8 max-w-lg">Transform Your Body. Build Your Confidence. Professional training at the most affordable rates in Hyderabad.</p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg font-bold text-lg transition-all">START FREE TRIAL</button>
              <button className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all backdrop-blur-sm">VIEW PLANS</button>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-neutral-800" />)}
              </div>
              <p className="text-sm font-medium"><span className="text-orange-500">4.3 ⭐</span> (233+ Reviews)</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-neutral-900 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                key={idx} 
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                <p className="text-neutral-400 text-sm uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-2">Pricing</h2>
            <h3 className="text-4xl md:text-5xl font-black">MEMBERSHIP PLANS</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={idx}
                className={`p-8 rounded-3xl border ${plan.popular ? 'border-orange-500 bg-orange-500/5' : 'border-white/10 bg-neutral-900'} relative`}
              >
                {plan.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-[10px] font-bold px-4 py-1 rounded-full uppercase">Most Popular</span>}
                <h4 className="text-xl font-bold mb-4">{plan.name}</h4>
                <div className="mb-6">
                  <span className="text-4xl font-black">₹{plan.price}</span>
                  <span className="text-neutral-500 text-sm ml-2">{plan.duration}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center text-sm text-neutral-300">
                      <CheckCircle size={16} className="text-orange-500 mr-3" /> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-orange-600 hover:bg-orange-700' : 'bg-white/10 hover:bg-white/20'}`}>
                  CHOOSE PLAN
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-black mb-8">LOCATE US</h2>
              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-600/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-orange-500" />
                  </div>
                  <p className="text-neutral-300">H No: 1-8-13 & 14, Opp Dilsukhnagar Community Hall, Vikas Nagar, Hyderabad, 500060</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-600/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-orange-500" />
                  </div>
                  <p className="text-neutral-300">+91 91332 90700</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-600/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-orange-500" />
                  </div>
                  <p className="text-neutral-300">Daily: 5:00 PM - 10:00 PM (Check for morning slots)</p>
                </div>
              </div>
              
              {/* Simple Map Placeholder */}
              <div className="w-full h-64 rounded-3xl bg-neutral-800 border border-white/10 overflow-hidden">
                <iframe 
                  title="Gym Location"
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.045053677465!2d78.5205!3d17.3685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb990000000000%3A0x0!2zMTfCsDIyJzA2LjYiTiA3OMKwMzEnMTMuOCJF!5e0!3m2!1sen!2sin!4v1715000000000"
                  style={{ filter: 'invert(90%) hue-rotate(180deg)' }}
                />
              </div>
            </div>

            <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Book a Free Session</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 transition-all" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 transition-all" />
                <select className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 transition-all">
                  <option>Select Interest</option>
                  <option>Weight Loss</option>
                  <option>Muscle Gain</option>
                  <option>General Fitness</option>
                </select>
                <textarea rows="4" placeholder="Your Message" className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 transition-all"></textarea>
                <button className="w-full bg-orange-600 hover:bg-orange-700 py-4 rounded-xl font-black uppercase tracking-widest transition-all">SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-orange-500 mb-4 tracking-tighter">FITNESS FIRST GYM</h2>
          <p className="italic text-neutral-500 mb-8 max-w-md mx-auto">"Transform Your Body. Build Your Confidence."</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="p-3 bg-neutral-900 rounded-full hover:text-orange-500 transition-all"><Facebook size={20} /></a>
            <a href="#" className="p-3 bg-neutral-900 rounded-full hover:text-orange-500 transition-all"><Instagram size={20} /></a>
            <a href="#" className="p-3 bg-neutral-900 rounded-full hover:text-orange-500 transition-all"><Twitter size={20} /></a>
          </div>
          <p className="text-neutral-600 text-sm">© 2026 Fitness First Gym Hyderabad. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919133290700" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default FitnessFirstGym;
