
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Fiber Internet Online</title>
        <meta name="description" content="Privacy Policy for Fiber Internet Online" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">Privacy Policy</h1>
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200 text-gray-700 space-y-6">
          <p className="italic text-sm text-gray-500">Last Updated: February 14, 2026</p>
          
          <p className="leading-relaxed mb-6">
            At <strong>fiberinternetonline.my</strong>, we are committed to protecting your personal data and ensuring your privacy. This Privacy Policy explains how we collect, use, and protect your information in compliance with the Malaysian Personal Data Protection Act (PDPA) 2010.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed mb-4">
              When you apply for a TIME Fiber broadband subscription through our website, we collect personal information including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Full Name (as per NRIC/Passport)</li>
              <li>NRIC/Passport Number (for service registration only)</li>
              <li>Contact Number and Email Address</li>
              <li>Installation Address</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">
              Your information is used strictly for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To verify coverage for the requested installation address.</li>
              <li>To register and process your application through the official service provider's Dealer Portal.</li>
              <li>To provide updates regarding your installation and service status.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Protection and Security</h2>
            <p className="leading-relaxed mb-4">
              We take security seriously:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Direct Submission:</strong> Information is entered directly into the authorized service provider's system (TIME dotCom Berhad) for order fulfillment.</li>
              <li><strong>No Permanent Storage:</strong> We do not maintain a permanent local database of sensitive personal documents. Once the application is processed, temporary records are securely deleted.</li>
              <li><strong>Confidentiality:</strong> Access to your data is strictly limited to the site administrator for the sole purpose of application processing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Disclosure to Third Parties</h2>
            <p className="leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to outside parties. Your data is only shared with TIME dotCom Berhad as the service provider to fulfill your subscription request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
            <p className="leading-relaxed">
              Under the PDPA 2010, you have the right to access, correct, or request the deletion of your personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
            <p className="leading-relaxed mb-4">
              If you have any questions regarding this Privacy Policy or how your data is handled, you may contact our support team:
            </p>
            <ul className="list-none space-y-2">
               <li><strong>Email:</strong> <a href="mailto:sales@fiberinternetonline.my" className="text-primary hover:underline">sales@fiberinternetonline.my</a></li>
               <li><strong>Phone/WhatsApp:</strong> <a href="https://wa.me/601133038836" className="text-primary hover:underline">+601133038836</a></li>
               <li><strong>Website:</strong> <a href="https://fiberinternetonline.my" className="text-primary hover:underline">https://fiberinternetonline.my</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
    </>
  );
}
