import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Coffee, CheckCircle, Gift, Users, ArrowLeft } from 'lucide-react';

const ThankYouMessage = ({ onNewEntry }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-flyer-dark-blue">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="brand-gradient p-6 rounded-full"
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-flyer-yellow">
            Thanks for Entering!
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="form-card p-8 rounded-3xl mb-8"
        >
          <div className="space-y-6">
            <div className="flex justify-center">
              <img alt="Coffee celebration" className="w-32 h-32 rounded-full object-cover" src="https://images.unsplash.com/photo-1691775755067-a9807ac8939c" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-flyer-dark">
                You're in the draw! ☕
              </h2>
              
              <p className="text-lg text-flyer-dark leading-relaxed">
                We'll contact the winner by phone or email after the Auckland Home Show. 
                Good luck, and thanks for visiting our booth!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-flyer-yellow rounded-xl">
                <Gift className="w-8 h-8 text-flyer-dark mx-auto mb-2" />
                <p className="font-semibold text-flyer-dark">Prize Value</p>
                <p className="text-sm text-flyer-dark">Over $200</p>
              </div>
              
              <div className="text-center p-4 bg-flyer-white rounded-xl">
                <Users className="w-8 h-8 text-flyer-dark mx-auto mb-2" />
                <p className="font-semibold text-flyer-dark">Winner Announced</p>
                <p className="text-sm text-flyer-dark">After Home Show</p>
              </div>
              
              <div className="text-center p-4 bg-flyer-yellow rounded-xl">
                <Coffee className="w-8 h-8 text-flyer-dark mx-auto mb-2" />
                <p className="font-semibold text-flyer-dark">Contact Method</p>
                <p className="text-sm text-flyer-dark">Phone or Email</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-flyer-white">
            Want to enter someone else? You can submit another entry below.
          </p>
          
          <Button
            onClick={onNewEntry}
            className="brand-button text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 mx-auto"
          >
            <ArrowLeft className="w-5 h-5" />
            Submit Another Entry
          </Button>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default ThankYouMessage;