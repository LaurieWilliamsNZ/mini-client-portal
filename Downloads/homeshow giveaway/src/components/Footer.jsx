import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Shield, Heart } from 'lucide-react';

const Footer = ({ onAdminClick }) => {
  return (
    <footer className="bg-flyer-dark-blue text-flyer-white py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-flyer-white text-sm">
          © 2024 Heat & Anger x Inspected. All rights reserved.
        </p>
        <p className="text-flyer-white text-xs mt-2 opacity-80">
          Giveaway terms and conditions apply.
        </p>
      </div>
    </footer>
  );
};

export default Footer;