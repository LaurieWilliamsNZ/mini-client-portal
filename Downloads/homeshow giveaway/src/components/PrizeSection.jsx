import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Package, Sparkles, Heart } from 'lucide-react';

const PrizeSection = () => {
  const prizeItems = [
    {
      icon: Coffee,
      title: "Premium Coffee Beans",
      description: "Freshly roasted specialty coffee beans from Heat & Anger's signature blends"
    },
    {
      icon: Package,
      title: "Coffee Accessories",
      description: "Professional brewing equipment and coffee accessories for the perfect cup"
    },
    {
      icon: Sparkles,
      title: "Exclusive Merchandise",
      description: "Limited edition Heat & Anger branded items and coffee lover essentials"
    },
    {
      icon: Heart,
      title: "Surprise Extras",
      description: "Additional coffee treats and goodies to complete your coffee experience"
    }
  ];

  return (
    <section className="py-16 px-4 bg-flyer-dark-blue">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-flyer-yellow mb-4">
            What's included?
          </h2>
          <p className="text-xl text-flyer-white max-w-2xl mx-auto">
            An incredible collection of coffee essentials worth over $200, carefully curated for true coffee enthusiasts
          </p>
        </motion.div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {prizeItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="prize-card p-6 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">{item.title}</h3>
              <p className="text-charcoal text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div> */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-flyer-white p-8 rounded-3xl text-center max-w-2xl mx-auto shadow-lg"
        >
          <img alt="Heat & Anger Coffee Prize Bundle" className="w-full rounded-2xl mb-6" src="/src/components/giveaway.jpeg" />
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-flyer-dark">What's included?</h3>
            <div className="text-left space-y-2">
              <p className="text-flyer-dark">• 1kg of Heat & Anger whole coffee beans</p>
              <p className="text-flyer-dark">• 1x scented coffee candle hand poured by Raglan Candles</p>
              <p className="text-flyer-dark">• 1x bottle of Cameo Chai syrup</p>
              <p className="text-flyer-dark">• 1x bottle of Cameo Lemon, Honey & Ginger Syrup</p>
              <p className="text-flyer-dark">• 1 pack of barista cleaning cloths</p>
              <p className="text-flyer-dark">• 1x head cleaning brush</p>
              <p className="text-flyer-dark">• 1x Caffeto espresso cleaning kit</p>
              <p className="text-flyer-dark">• 1x 250g Westcoast Cocoa deluxe hot chocolate</p>
              <p className="text-flyer-dark">• 1x jar of Carousel jersey caramels</p>
              <p className="text-flyer-dark">• 1x jar of pascals marshmallows</p>
            </div>
   
            <div className="inline-flex items-center gap-2 bg-flyer-yellow text-flyer-dark px-6 py-3 rounded-full font-bold text-lg">
              <Sparkles className="w-5 h-5" />
              Total Value: $200+
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrizeSection;