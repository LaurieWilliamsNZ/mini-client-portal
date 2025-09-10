# Email and Slack Setup Guide

## Email Configuration

### Option 1: EmailJS (Recommended for quick setup)
1. Go to https://www.emailjs.com/
2. Create a free account
3. Create a new service (Gmail, Outlook, etc.)
4. Create an email template with these variables:
   - `{{to_email}}` - recipient email
   - `{{subject}}` - email subject
   - `{{message}}` - email content
   - `{{from_name}}` - sender name
5. Get your Service ID, Template ID, and User ID
6. Add to your environment variables:
   ```
   EMAILJS_SERVICE_ID=your_service_id
   EMAILJS_TEMPLATE_ID=your_template_id
   EMAILJS_USER_ID=your_user_id
   ```

### Option 2: SendGrid (More robust)
1. Go to https://sendgrid.com/
2. Create an account and get API key
3. Add to your environment variables:
   ```
   SENDGRID_API_KEY=your_sendgrid_api_key
   FROM_EMAIL=laurie@getosmium.com
   ```

## Slack Configuration

1. Go to your Slack workspace
2. Create a new app at https://api.slack.com/apps
3. Go to "Incoming Webhooks" and enable it
4. Create a new webhook for your channel
5. Copy the webhook URL
6. Add to your environment variables:
   ```
   SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK
   ```

## Environment Variables

Create a `.env` file in your project root with:

```
# SendGrid Configuration
SENDGRID_API_KEY=your_sendgrid_api_key_here
FROM_EMAIL=laurie@getosmium.com

# Slack Configuration
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK
```

## Testing

1. Fill out the giveaway form
2. Submit an entry
3. Check:
   - Laurie's email (laurie@getosmium.com) for the email notification
   - Your Slack channel for the formatted message

## Features

### Email Notifications
- Sent to: laurie@getosmium.com
- Subject: "New Giveaway Entry - [Name]"
- Includes all form data in HTML and text format
- Professional formatting

### Slack Notifications
- Rich message formatting with blocks
- All form data organized in sections
- Timestamp and submission details
- Easy to read in Slack interface
