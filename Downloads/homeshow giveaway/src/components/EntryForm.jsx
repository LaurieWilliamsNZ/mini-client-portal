
    import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Coffee, Send } from 'lucide-react';

const industries = [
  { value: 'property', label: 'Property' },
  { value: 'trades', label: 'Trades' },
  { value: 'food safety', label: 'Food Safety' },
  { value: 'hospitality', label: 'Hospitality' },
  { value: 'architecture & design', label: 'Architecture & Design' },
  { value: 'building & construction', label: 'Building & Construction' },
  { value: 'real estate', label: 'Real Estate' },
  { value: 'retail', label: 'Retail' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'coffee enthusiast', label: 'Coffee Enthusiast' },
  { value: 'other', label: 'Other' },
];

// Email notification function
const sendEntryNotification = async (entry) => {
  try {
    const emailData = {
      to: 'laurie@getosmium.com',
      subject: `New Giveaway Entry - ${entry.fullName}`,
      html: `
        <h2>New Giveaway Entry Received!</h2>
        <p><strong>Name:</strong> ${entry.fullName}</p>
        <p><strong>Email:</strong> ${entry.email}</p>
        <p><strong>Phone:</strong> ${entry.phoneNumber}</p>
        <p><strong>Industry:</strong> ${entry.industry}</p>
        ${entry.otherOccupation ? `<p><strong>Occupation:</strong> ${entry.otherOccupation}</p>` : ''}
        ${entry.companyName ? `<p><strong>Company:</strong> ${entry.companyName}</p>` : ''}
        ${entry.cityRegion ? `<p><strong>Location:</strong> ${entry.cityRegion}</p>` : ''}
        <p><strong>Submitted:</strong> ${entry.submittedAt}</p>
        <p><strong>Marketing Preferences:</strong></p>
        <ul>
          <li>Coffee Offers: ${entry.coffeeOffers ? 'Yes' : 'No'}</li>
          <li>Inspection Tips: ${entry.inspectionTips ? 'Yes' : 'No'}</li>
        </ul>
        <hr>
        <p><em>This entry was automatically generated from the Heat & Anger x Inspected giveaway form.</em></p>
      `,
      text: `
        New Giveaway Entry Received!
        
        Name: ${entry.fullName}
        Email: ${entry.email}
        Phone: ${entry.phoneNumber}
        Industry: ${entry.industry}
        ${entry.otherOccupation ? `Occupation: ${entry.otherOccupation}` : ''}
        ${entry.companyName ? `Company: ${entry.companyName}` : ''}
        ${entry.cityRegion ? `Location: ${entry.cityRegion}` : ''}
        Submitted: ${entry.submittedAt}
        
        Marketing Preferences:
        - Coffee Offers: ${entry.coffeeOffers ? 'Yes' : 'No'}
        - Inspection Tips: ${entry.inspectionTips ? 'Yes' : 'No'}
        
        This entry was automatically generated from the Heat & Anger x Inspected giveaway form.
      `
    };

    // Send to email
    await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    });

    // Send to Slack
    const slackMessage = {
      text: `🎉 New Giveaway Entry!`,
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "🎉 New Giveaway Entry!"
          }
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Name:*\n${entry.fullName}`
            },
            {
              type: "mrkdwn",
              text: `*Email:*\n${entry.email}`
            },
            {
              type: "mrkdwn",
              text: `*Phone:*\n${entry.phoneNumber}`
            },
            {
              type: "mrkdwn",
              text: `*Industry:*\n${entry.industry}`
            }
          ]
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Company:*\n${entry.companyName || 'Not provided'}`
            },
            {
              type: "mrkdwn",
              text: `*Location:*\n${entry.cityRegion || 'Not provided'}`
            },
            {
              type: "mrkdwn",
              text: `*Coffee Offers:*\n${entry.coffeeOffers ? 'Yes' : 'No'}`
            },
            {
              type: "mrkdwn",
              text: `*Inspection Tips:*\n${entry.inspectionTips ? 'Yes' : 'No'}`
            }
          ]
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: `Submitted: ${entry.submittedAt}`
            }
          ]
        }
      ]
    };

    await fetch('/api/send-slack', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackMessage)
    });

  } catch (error) {
    console.error('Email/Slack notification error:', error);
    // Don't throw error to prevent form submission failure
  }
};

const EntryForm = ({ onSubmit }) => {

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .matches(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes')
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must be less than 50 characters')
      .required('Full name is required'),
    phoneNumber: Yup.string()
      .matches(/^[\+]?[0-9\s\-\(\)]{8,15}$/, 'Please enter a valid phone number')
      .required('Phone number is required'),
    email: Yup.string()
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address')
      .max(100, 'Email must be less than 100 characters')
      .required('Email is required'),
    industry: Yup.string().required('Please select an industry'),
    otherOccupation: Yup.string()
      .when('industry', {
        is: 'other',
        then: (schema) => schema
          .min(2, 'Occupation must be at least 2 characters')
          .max(50, 'Occupation must be less than 50 characters')
          .matches(/^[a-zA-Z\s\-&]+$/, 'Occupation can only contain letters, spaces, hyphens, and ampersands')
          .required('Please specify your occupation'),
        otherwise: (schema) => schema.optional(),
      }),
    companyName: Yup.string()
      .max(100, 'Company name must be less than 100 characters')
      .matches(/^[a-zA-Z0-9\s\-&.,'()]+$/, 'Company name contains invalid characters'),
    cityRegion: Yup.string()
      .max(50, 'City/Region must be less than 50 characters')
      .matches(/^[a-zA-Z\s\-]+$/, 'City/Region can only contain letters, spaces, and hyphens'),
    agreeTerms: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions').required(),
    coffeeOffers: Yup.boolean(),
    inspectionTips: Yup.boolean(),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      industry: '',
      otherOccupation: '',
      companyName: '',
      cityRegion: '',
      agreeTerms: true,
      coffeeOffers: true,
      inspectionTips: true
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const entries = JSON.parse(localStorage.getItem('giveawayEntries') || '[]');
        const newEntry = {
          ...values,
          id: Date.now(),
          timestamp: new Date().toISOString(),
          submittedAt: new Date().toLocaleString('en-NZ')
        };
        
        entries.push(newEntry);
        localStorage.setItem('giveawayEntries', JSON.stringify(entries));

        // Send email notification
        await sendEntryNotification(newEntry);

        await new Promise(resolve => setTimeout(resolve, 1500));

        // Toast removed as requested

        onSubmit();
        resetForm();
      } catch (error) {
        console.error('Submission error:', error);
        // Error handling without toast
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section id="entry-form" className="py-8 md:py-16 px-4 bg-flyer-dark-blue">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-flyer-yellow mb-4">
            Enter to Win!
          </h2>
          <p className="text-lg md:text-xl text-flyer-white">
            Fill out the form below for your chance to win this incredible coffee bundle
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-flyer-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-lg"
        >
          <form onSubmit={formik.handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-flyer-dark font-semibold">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  pattern="[a-zA-Z\s'-]+"
                  maxLength="50"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                  placeholder="Enter your full name"
                  className="border border-gray-300 focus:border-french-blue rounded-lg text-flyer-dark placeholder:text-gray-500"
                />
                {formik.touched.fullName && formik.errors.fullName ? (
                  <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
                ) : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-flyer-dark font-semibold">
                  Phone Number *
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  pattern="[\+]?[0-9\s\-\(\)]{8,15}"
                  maxLength="15"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  placeholder="Enter your phone number"
                  className="border border-gray-300 focus:border-french-blue rounded-lg text-flyer-dark placeholder:text-gray-500"
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <div className="text-red-500 text-sm">{formik.errors.phoneNumber}</div>
                ) : null}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-flyer-dark font-semibold">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                maxLength="100"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Enter your email address"
                className="border-2 border-cyan-process-67 focus:border-cyan-process rounded-xl text-flyer-dark placeholder:text-gray-500"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry" className="text-flyer-dark font-semibold">
                Industry *
              </Label>
              <select
                id="industry"
                name="industry"
                value={formik.values.industry}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-3 py-2 border border-gray-300 focus:border-french-blue rounded-lg text-flyer-dark bg-white"
              >
                <option value="">Select your industry...</option>
                {industries.map((industry) => (
                  <option key={industry.value} value={industry.value}>
                    {industry.label}
                  </option>
                ))}
              </select>
              {formik.touched.industry && formik.errors.industry ? (
                <div className="text-red-500 text-sm">{formik.errors.industry}</div>
              ) : null}
            </div>

            {formik.values.industry === 'other' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="space-y-2"
              >
                <Label htmlFor="otherOccupation" className="text-flyer-dark font-semibold">
                  Please specify your occupation *
                </Label>
                <Input
                  id="otherOccupation"
                  name="otherOccupation"
                  type="text"
                  pattern="[a-zA-Z\s\-&]+"
                  maxLength="50"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.otherOccupation}
                  placeholder="e.g., Marketing Manager"
                  className="border border-gray-300 focus:border-french-blue rounded-lg text-flyer-dark placeholder:text-gray-500"
                />
                {formik.touched.otherOccupation && formik.errors.otherOccupation ? (
                  <div className="text-red-500 text-sm">{formik.errors.otherOccupation}</div>
                ) : null}
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-flyer-dark font-semibold">
                  Company / Business Name
                </Label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  pattern="[a-zA-Z0-9\s\-&.,'()]+"
                  maxLength="100"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.companyName}
                  placeholder="Enter company name (optional)"
                  className="border border-gray-300 focus:border-french-blue rounded-lg text-flyer-dark placeholder:text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cityRegion" className="text-flyer-dark font-semibold">
                  City / Region
                </Label>
                <Input
                  id="cityRegion"
                  name="cityRegion"
                  type="text"
                  pattern="[a-zA-Z\s\-]+"
                  maxLength="50"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cityRegion}
                  placeholder="Enter your city/region (optional)"
                  className="border border-gray-300 focus:border-french-blue rounded-lg text-flyer-dark placeholder:text-gray-500"
                />
              </div>
            </div>

            <div className="space-y-3 md:space-y-4 pt-4 border-t border-gray-300">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formik.values.agreeTerms}
                  onCheckedChange={(checked) => formik.setFieldValue('agreeTerms', checked)}
                  onBlur={formik.handleBlur}
                  className="mt-1"
                />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="agreeTerms" className="text-xs md:text-sm text-flyer-dark leading-relaxed">
                    I agree to the <span className="text-flyer-yellow font-semibold cursor-pointer hover:underline">Terms & Conditions</span> of the giveaway *
                  </Label>
                  {formik.touched.agreeTerms && formik.errors.agreeTerms ? (
                    <p className="text-sm text-red-500">{formik.errors.agreeTerms}</p>
                  ) : null}
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="coffeeOffers"
                  name="coffeeOffers"
                  checked={formik.values.coffeeOffers}
                  onCheckedChange={(checked) => formik.setFieldValue('coffeeOffers', checked)}
                  className="mt-1"
                />
                <Label htmlFor="coffeeOffers" className="text-xs md:text-sm text-flyer-dark leading-relaxed">
                  Yes, send me exclusive coffee offers from Heat & Anger
                </Label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="inspectionTips"
                  name="inspectionTips"
                  checked={formik.values.inspectionTips}
                  onCheckedChange={(checked) => formik.setFieldValue('inspectionTips', checked)}
                  className="mt-1"
                />
                <Label htmlFor="inspectionTips" className="text-xs md:text-sm text-flyer-dark leading-relaxed">
                  Yes, send me inspection and compliance tips from Inspected
                </Label>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="pt-6"
            >
              <Button
                type="submit"
                disabled={formik.isSubmitting}
                className="w-full brand-button text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl text-base md:text-lg flex items-center justify-center gap-2 md:gap-3"
              >
                {formik.isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Coffee className="w-6 h-6" />
                    </motion.div>
                    Submitting Entry...
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    Enter the Draw
                  </>
                )}
              </Button>
            </motion.div>
          </form>

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 p-4 bg-flyer-yellow rounded-xl text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <QrCode className="w-5 h-5 text-flyer-dark" />
              <span className="font-semibold text-flyer-dark">Quick Entry</span>
            </div>
            <p className="text-sm text-flyer-dark">
              Scan the QR code on our flyer for instant access to this form on your mobile device
            </p>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default EntryForm;
  