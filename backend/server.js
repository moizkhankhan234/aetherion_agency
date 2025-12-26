const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Create SMTP transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'aetherionagency@gmail.com',
    pass: 'wlnq nvyx rblu gqtc'
  }
});

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { subject, body, replyTo, type } = req.body;

    // Create HTML email template matching the website theme
    const bodyLines = body.split('\n');
    let contentHtml = '';

    bodyLines.forEach(line => {
      if (line.includes(':')) {
        const [label, ...valueParts] = line.split(':');
        const value = valueParts.join(':').trim();
        contentHtml += `
          <div class="field">
            <div class="field-label">${label.trim()}</div>
            <div class="field-value">${value}</div>
          </div>
        `;
      } else if (line.trim()) {
        contentHtml += `<div class="field-value">${line}</div>`;
      }
    });

    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${subject}</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: 'Arial', sans-serif;
              background-color: #000000;
              color: #ffffff;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 40px 20px;
              background-color: #000000;
              border: 1px solid rgba(255, 255, 255, 0.1);
            }
            .header {
              border-left: 4px solid #ffffff;
              padding-left: 20px;
              margin-bottom: 40px;
            }
            .logo {
              font-size: 24px;
              font-weight: bold;
              text-transform: uppercase;
              letter-spacing: 0.1em;
              color: #ffffff;
              margin-bottom: 8px;
            }
            .subtitle {
              font-size: 14px;
              color: #888888;
              text-transform: uppercase;
              letter-spacing: 0.2em;
              font-weight: bold;
            }
            .content {
              background-color: rgba(255, 255, 255, 0.05);
              padding: 30px;
              border-radius: 4px;
              margin: 30px 0;
            }
            .section-title {
              font-size: 18px;
              font-weight: bold;
              text-transform: uppercase;
              letter-spacing: 0.1em;
              color: #ffffff;
              margin-bottom: 20px;
              border-bottom: 1px solid rgba(255, 255, 255, 0.2);
              padding-bottom: 10px;
            }
            .field {
              margin-bottom: 20px;
            }
            .field-label {
              font-size: 12px;
              font-weight: bold;
              text-transform: uppercase;
              letter-spacing: 0.2em;
              color: #888888;
              margin-bottom: 5px;
            }
            .field-value {
              font-size: 16px;
              color: #ffffff;
              line-height: 1.5;
              white-space: pre-line;
            }
            .footer {
              text-align: center;
              padding-top: 30px;
              border-top: 1px solid rgba(255, 255, 255, 0.1);
              margin-top: 40px;
            }
            .footer-text {
              font-size: 12px;
              color: #666666;
              text-transform: uppercase;
              letter-spacing: 0.1em;
            }
            .highlight {
              color: #ffffff;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">AETHERION</div>
              <div class="subtitle">DIGITAL AGENCY</div>
            </div>

            <div class="content">
              <div class="section-title">${type} Transmission</div>
              ${contentHtml}
            </div>

            <div class="footer">
              <div class="footer-text">
                This transmission was sent from the Aetherion contact protocol<br>
                <span class="highlight">Reply to: ${replyTo || 'no-reply@aetherion.com'}</span>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      from: 'aetherionagency@gmail.com',
      to: 'aetherionagency@gmail.com',
      subject: subject,
      text: body, // Fallback for plain text clients
      html: htmlTemplate,
      replyTo: replyTo || 'no-reply@aetherion.com'
    };

    await transporter.sendMail(mailOptions);

    console.log(`[SMTP Backend] Email sent successfully: ${type}`);
    res.json({ success: true, message: 'Email sent successfully' });

  } catch (error) {
    console.error('[SMTP Backend] Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'SMTP Backend is running' });
});

app.listen(PORT, () => {
  console.log(`SMTP Backend server running on port ${PORT}`);
});
