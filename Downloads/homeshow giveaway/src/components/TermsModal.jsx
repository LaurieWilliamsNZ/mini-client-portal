import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const TermsModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-flyer-yellow p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-flyer-dark">
                Giveaway Terms & Conditions
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-flyer-dark hover:bg-opacity-10 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-flyer-dark" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-160px)]">
              <div className="space-y-6 text-flyer-dark">
                <section>
                  <h3 className="text-xl font-bold text-flyer-dark mb-3">Promoter</h3>
                  <p className="leading-relaxed">
                    The promoter of this giveaway is Inspected, powered by Osmium ("the Promoter").
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-flyer-dark mb-3">Eligibility</h3>
                  <ul className="space-y-2 leading-relaxed">
                    <li>• Entry is open to New Zealand residents aged 18 years or over.</li>
                    <li>• Employees of Inspected, Osmium, Heat & Anger, and their immediate families are not eligible to enter.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-flyer-dark mb-3">How to Enter</h3>
                  <ul className="space-y-2 leading-relaxed">
                    <li>• To enter, complete the entry form at homeshow.inspected.co.nz during the Auckland Home Show event.</li>
                    <li>• Required details include full name, phone number, email address, and industry.</li>
                    <li>• Only one entry per person will be accepted. Multiple entries may result in disqualification.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-flyer-dark mb-3">Prize</h3>
                  <p className="mb-3 leading-relaxed">
                    The prize is a Heat & Anger coffee lover's hamper valued at over $200, which includes:
                  </p>
                  <ul className="space-y-1 leading-relaxed ml-4">
                    <li>• 1kg Heat & Anger whole coffee beans</li>
                    <li>• 1x scented coffee candle (Raglan Candles)</li>
                    <li>• 1x bottle of Cameo Chai syrup</li>
                    <li>• 1x bottle of Cameo Lemon, Honey & Ginger syrup</li>
                    <li>• 1 pack of barista cleaning cloths</li>
                    <li>• 1x head cleaning brush</li>
                    <li>• 1x Caffeto espresso cleaning kit</li>
                    <li>• 1x 250g Westcoast Cocoa deluxe hot chocolate</li>
                    <li>• 1x jar of Carousel jersey caramels</li>
                    <li>• 1x jar of Pascals marshmallows</li>
                  </ul>
                  <p className="mt-3 leading-relaxed">
                    The prize is not transferable, exchangeable, or redeemable for cash in whole or in part.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-flyer-dark mb-3">Winner Selection & Notification</h3>
                  <ul className="space-y-2 leading-relaxed">
                    <li>• The winner will be drawn at random within 7 days after the Home Show ends.</li>
                    <li>• The winner will be contacted by phone or email.</li>
                    <li>• If the winner cannot be contacted within 7 days, the Promoter reserves the right to redraw.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-flyer-dark mb-3">Privacy & Marketing</h3>
                  <ul className="space-y-2 leading-relaxed">
                    <li>• By entering, participants agree that their details will be collected by the Promoter for the purposes of administering the giveaway.</li>
                    <li>• Entrants may also choose to receive marketing communications from Heat & Anger and/or Inspected by selecting the relevant checkboxes on the entry form. These are optional and not required to enter.</li>
                    <li>• Personal information will be stored securely and handled in accordance with the NZ Privacy Act 2020.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-flyer-dark mb-3">Validity of Entries</h3>
                  <ul className="space-y-2 leading-relaxed">
                    <li>• The Promoter accepts no responsibility for incomplete, late, lost, or misdirected entries.</li>
                    <li>• Any attempt to deliberately damage or undermine the legitimate operation of the giveaway may result in disqualification.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-flyer-dark mb-3">Verification</h3>
                  <ul className="space-y-2 leading-relaxed">
                    <li>• The Promoter reserves the right to verify the validity of entries and entrants (including identity, age, and residency).</li>
                    <li>• The Promoter may disqualify any entrant who tampers with the entry process or who submits an entry not in accordance with these Terms & Conditions.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-flyer-dark mb-3">Liability</h3>
                  <ul className="space-y-2 leading-relaxed">
                    <li>• To the maximum extent permitted by law, the Promoter, Heat & Anger, and all associated agencies accept no responsibility for any loss, damage, claim, injury, or expense suffered by any person in connection with the giveaway or use of the prize.</li>
                    <li>• Nothing in these Terms & Conditions limits your rights under the Consumer Guarantees Act 1993.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-flyer-dark mb-3">Changes</h3>
                  <ul className="space-y-2 leading-relaxed">
                    <li>• If for any reason the prize is unavailable, the Promoter reserves the right to substitute a prize of equal or greater value.</li>
                    <li>• The Promoter may amend, suspend, or cancel the giveaway at any time without notice, subject to applicable laws.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-flyer-dark mb-3">Publicity</h3>
                  <p className="leading-relaxed">
                    By entering, the winner agrees to participate in reasonable publicity activities related to the giveaway (such as name and photo being published), without additional compensation, except where prohibited by law.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-flyer-dark mb-3">Governing Law</h3>
                  <p className="leading-relaxed">
                    The giveaway and these Terms & Conditions are governed by the laws of New Zealand, and any disputes will be subject to the exclusive jurisdiction of the New Zealand courts.
                  </p>
                </section>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-flyer-gray p-6 flex justify-end border-t border-gray-200">
              <button
                onClick={onClose}
                className="bg-flyer-yellow text-flyer-dark px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TermsModal;
