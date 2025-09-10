import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

// Load environment variables from .env file
dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { to, subject, html, text } = req.body;

    if (!process.env.SENDGRID_API_KEY) {
      throw new Error('SendGrid API key not configured');
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: to,
      from: process.env.FROM_EMAIL || 'laurie@getosmium.com',
      subject: subject,
      text: text,
      html: html,
    };
    
    await sgMail.send(msg);

    res.status(200).json({ message: 'Email sent successfully' });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ message: 'Failed to send email: ' + error.message });
  }
}
