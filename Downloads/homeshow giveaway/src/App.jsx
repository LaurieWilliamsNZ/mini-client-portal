import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
// Toast functionality removed
import HeroSection from '@/components/HeroSection';
import PrizeSection from '@/components/PrizeSection';
import EntryForm from '@/components/EntryForm';
import ThankYouMessage from '@/components/ThankYouMessage';
import Footer from '@/components/Footer';
import AdminPanel from '@/components/AdminPanel';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  const handleFormSubmit = () => {
    setIsSubmitted(true);
  };

  const handleNewEntry = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      <Helmet>
        <title>Win Coffee! - Auckland Home Show Giveaway | Heat & Anger x Inspected</title>
        <meta name="description" content="Enter to win an epic Heat & Anger coffee lover's hamper valued over $200 at the Auckland Home Show. Free entry with amazing coffee prizes!" />
        <meta name="keywords" content="Auckland Home Show, coffee giveaway, Heat & Anger, Inspected, win coffee, free entry" />
        <meta property="og:title" content="Win Coffee! - Auckland Home Show Giveaway" />
        <meta property="og:description" content="Enter to win an epic Heat & Anger coffee lover's hamper valued over $200!" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen">
        {!isSubmitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <HeroSection />
            <PrizeSection />
            <EntryForm onSubmit={handleFormSubmit} />
          </motion.div>
        ) : (
          <ThankYouMessage onNewEntry={handleNewEntry} />
        )}
        
        <Footer onAdminClick={() => setShowAdmin(!showAdmin)} />
        
        {showAdmin && (
          <AdminPanel onClose={() => setShowAdmin(false)} />
        )}
        
      </div>
    </>
  );
}

export default App;