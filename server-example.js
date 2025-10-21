// Example Node.js + Express + Nodemailer Backend
// This is a reference implementation for the contact form API
// To use: Create a separate backend project and copy this code

import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = (globalThis && globalThis.process && globalThis.process.env && globalThis.process.env.PORT) || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email service
  auth: {
    user: globalThis?.process?.env?.EMAIL_USER, // your email
    pass: globalThis?.process?.env?.EMAIL_PASS, // your email password or app password
  },
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      status: 'error',
      message: 'All fields are required',
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid email address',
    });
  }

  try {
    // Send email
    await transporter.sendMail({
      from: globalThis?.process?.env?.EMAIL_USER,
      to: globalThis?.process?.env?.EMAIL_USER, // Send to yourself
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    res.json({
      status: 'success',
      message: 'Message sent successfully!',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to send message. Please try again later.',
    });
  }
});

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

/* 
Backend Setup Instructions:

1. Create a new directory for the backend:
   mkdir portfolio-backend
   cd portfolio-backend

2. Initialize npm:
   npm init -y

3. Install dependencies:
   npm install express cors nodemailer dotenv

4. Create .env file:
   PORT=5000
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password

5. Update package.json to add type module:
   "type": "module"

6. Run the server:
   node server.js

7. For Gmail, you need to:
   - Enable 2-factor authentication
   - Generate an App Password
   - Use the App Password in EMAIL_PASS

Alternative Services:
- Formspree: https://formspree.io/
- EmailJS: https://www.emailjs.com/
- SendGrid: https://sendgrid.com/
- Resend: https://resend.com/
*/
