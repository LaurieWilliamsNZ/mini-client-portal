// Slack API endpoint for sending giveaway entries
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    
    if (!slackWebhookUrl) {
      console.error('Slack webhook URL not configured');
      return res.status(500).json({ message: 'Slack webhook not configured' });
    }

    const response = await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body)
    });

    if (response.ok) {
      res.status(200).json({ message: 'Slack message sent successfully' });
    } else {
      throw new Error('Slack API error');
    }

  } catch (error) {
    console.error('Slack sending error:', error);
    res.status(500).json({ message: 'Failed to send Slack message' });
  }
}
