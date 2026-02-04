import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { formType, formData } = req.body;

  // 1. Configure the transporter to use Generic SMTP (Works with Gmail, Hostinger, Zoho, etc.)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',  // e.g. smtp.hostinger.com
    port: parseInt(process.env.SMTP_PORT || '465'),   // e.g. 465 (SSL) or 587 (TLS)
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // e.g. noreply@fiberinternetonline.my
      pass: process.env.SMTP_PASS, // The password for that account
    },
  });

  const adminEmail = process.env.ADMIN_EMAIL || 'sales@fiberinternetonline.my'; 

  // 2. Identify the Customer's Email from the form data
  const customerEmail = formType === 'coverage' ? formData.email : formData.apply_email;
  const customerName = formType === 'coverage' ? formData.name : formData.apply_name;

  // 3. Construct the email content
  let subject = '';
  let text = '';
  
  if (formType === 'coverage') {
    subject = `Check Coverage Request: ${customerName}`;
    text = `
      Check Coverage Request:
      
      Name: ${formData.name}
      Phone: ${formData.phone}
      Email: ${customerEmail}
      Address: ${formData.unit_no}, ${formData.building_name}, ${formData.jalan}, ${formData.taman}, ${formData.city}, ${formData.state}, ${formData.postcode}
      Package Interested: ${formData.fibre_package}
      Current Mobile: ${formData.mobile_service}
      Current ISP: ${formData.current_isp}
      Message: ${formData.message}
    `;
  } else if (formType === 'application') {
    subject = `New Application: ${customerName}`;
    text = `
      Form Submission Details:
      
      Apply Name: ${formData.apply_name}
      Apply Email: ${customerEmail}
      Apply Phone: ${formData.apply_phone}
      Apply Address: ${formData.apply_address}
      Building Name: ${formData.apply_building}
      Block: ${formData.apply_block}
      Floor Number: ${formData.apply_floor}
      Unit Number: ${formData.apply_unit}
      Current Wifi: ${formData.current_wifi}
      Apply Plan: ${formData.interested_plan}
    `;
  } else {
    return res.status(400).json({ message: 'Invalid form type' });
  }

  // 4. Send emails
  try {
    // A. Send to Admin (Sales Team)
    // From: System (SMTP_USER), To: Admin
    // Reply-To: Customer
    await transporter.sendMail({
      from: `"Time Fibre System" <${process.env.SMTP_USER}>`, // "Pretty Name" <email@domain.com>
      to: adminEmail,
      replyTo: customerEmail,
      subject: `[Admin] ${subject}`,
      text: text,
    });

    // B. Send Copy to Customer
    // From: System (SMTP_USER), To: Customer (from Form)
    if (customerEmail) {
      await transporter.sendMail({
        from: `"Time Fibre Application" <${process.env.SMTP_USER}>`,
        to: customerEmail,
        subject: `[Received] ${subject}`,
        text: `Hi ${customerName},\n\nWe have received your submission. Here is a copy of the details you submitted:\n\n${text}\n\nWe will be in touch shortly via WhatsApp or Email.`,
      });
    }

    return res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error: any) {
    console.error('Email sending error:', error);
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}
