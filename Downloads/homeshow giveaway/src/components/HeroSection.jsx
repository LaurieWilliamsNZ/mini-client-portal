import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Gift, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 px-4 bg-flyer-dark-blue">
      <div className="absolute inset-0 qr-pattern opacity-5"></div>
      
      {/* Inspected Logo at Top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-8"
      >
        <img alt="Inspected Logo" className="h-80" src="/src/components/inspected SVG.svg" />
      </motion.div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex justify-center items-center gap-6 mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="bg-spanish-green p-5 rounded-full shadow-lg"
            >
              <Coffee className="w-10 h-10 text-white" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-french-blue p-5 rounded-full shadow-lg"
            >
              <Gift className="w-10 h-10 text-white" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="bg-cyan-process p-5 rounded-full shadow-lg"
            >
              <Star className="w-10 h-10 text-white" />
            </motion.div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-flyer-yellow">
            Win Coffee!
          </h1>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onClick={() => {
              const formSection = document.getElementById('entry-form');
              if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer hover:bg-green-700 active:bg-green-800"
          >
            Enter Now
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-2xl md:text-3xl text-flyer-white font-medium max-w-4xl mx-auto leading-relaxed">
            Enter the draw at the Home Show to win an epic 
            <span className="text-flyer-yellow font-bold"> Heat & Anger </span>
            coffee lover's hamper
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-flyer-yellow text-flyer-dark px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Star className="w-6 h-6" />
            Valued over $200
            <Star className="w-6 h-6" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          {/* Heat & Anger Logo */}
          <div className="text-center group">
            <a 
              href="https://www.heat-and-anger.nz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-white p-8 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105 cursor-pointer">
                <img alt="Heat & Anger Coffee Logo" className="h-32 mx-auto mb-4" src="/src/components/heatandangercoffee.jpeg" />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-flyer-dark mb-1">HEAT & ANGER</h3>
                  <p className="text-sm text-flyer-gray font-medium">LOCALLY CRAFTED</p>
                </div>
              </div>
            </a>
            <span className="text-2xl font-bold text-flyer-white mt-4 block">Heat & Anger</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;