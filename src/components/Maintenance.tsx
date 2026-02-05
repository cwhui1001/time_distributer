import React from 'react';
import Link from 'next/link';

const Maintenance = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 text-gray-800">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-2xl w-full text-center border border-gray-100 relative overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 to-[#E6007E]"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-pink-100 rounded-full blur-3xl opacity-50"></div>

        <div className="relative z-10">
          {/* Logo / Brand */}
          <img src="/images/logo.png" alt="Logo" className="w-40 mb-8" />

          {/* Icon */}
          <div className="mb-8 flex justify-center">
             <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-25"></div>
                <div className="bg-primary p-6 rounded-full relative">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-16 w-16 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
             </div>
          </div>

          {/* Main Text */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Under Maintenance</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
            We are currently updating our website to serve you better. We'll be back online shortly with a better experience for you.
          </p>

          {/* Contact Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href="https://wa.me/601133038836" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20bd5a] transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                  (window as any).gtag_report_conversion();
                }
              }}
            >
              <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
              WhatsApp Us
            </a>
            <a 
              href="mailto:sales@fiberinternetonline.my"
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Email Support
            </a>
          </div>

           <div className="border-t border-gray-100 pt-6">
              <p className="text-sm text-gray-500">Need immediate coverage check?</p>
              <p className="text-sm text-gray-500 font-medium">Contact our hotline:</p>
              <a href="tel:01133038836" className="text-sm text-gray-500 hover:text-primary">
                    +601133038836
                  </a>
           </div>
        </div>
      </div>
      
      <p className="mt-8 text-gray-400 text-sm">Time Authorized Distributor</p>
    </div>
  );
};

export default Maintenance;
