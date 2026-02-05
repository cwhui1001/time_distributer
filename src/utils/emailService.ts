interface EmailData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    // Send data to the PHP script in the public folder
    const response = await fetch('/send-mail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to send email');
    }

    console.log('Email sent successfully via PHP:', result);
    return result;
  } catch (error) {
    console.error('Failed to send email:', error);
    // Determine if we are running locally where PHP is not available
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
        console.warn("NOTE: PHP scripts cannot run in the local Next.js dev environment. This will only work when hosted on a PHP-enabled server like Hostinger.");
        alert("Email simulation (Localhost): Code attempted to call /send-mail.php. This works on Hostinger.");
    }
    throw error;
  }
};
