import emailjs from '@emailjs/browser';

// These environment variables will need to be set in .env.local
// Note: In Next.js, env variables accessible in the browser must start with NEXT_PUBLIC_
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string; // The formatted full details
}

export const sendEmail = async (data: EmailData) => {
  // If keys are missing, log error but don't crash app
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.warn('EmailJS keys are missing. Email will not be sent.');
    return;
  }

  const templateParams = {
    to_name: "Sales Team",
    from_name: data.name,
    from_email: data.email,
    from_phone: data.phone,
    subject: data.subject,
    message: data.message,
    reply_to: data.email,
  };

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    console.log('Email sent successfully!', response.status, response.text);
    return response;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};
