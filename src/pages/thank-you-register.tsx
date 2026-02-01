import Head from "next/head";
import Link from "next/link";
import { CheckCircle, Home, Phone } from "lucide-react";

export default function ThankYouRegister() {
  return (
    <>
      <Head>
        <title>Thank You - TIME Fibre</title>
      </Head>

      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-pink-50 flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full bg-white p-10 rounded-3xl shadow-2xl transform transition-all hover:scale-[1.01] duration-300 border border-gray-100 relative overflow-hidden">
            
            {/* Decorative Background Blob */}
             <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>

          <div className="relative text-center space-y-8">
            {/* Success Icon */}
             <div className="flex justify-center">
                <div className="bg-green-100 p-4 rounded-full animate-bounce-slow">
                    <CheckCircle className="w-16 h-16 text-green-500" strokeWidth={2.5} />
                </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                    Thank You For Registering!
                </h1>
                <p className="text-lg text-primary font-medium">
                    We have received your application.
                </p>
            </div>

            {/* Divider */}
            <div className="w-16 h-1 bg-gray-200 mx-auto rounded-full"></div>

            {/* Subtext */}
            <div className="text-gray-600 space-y-1 text-base">
              <p>Our team will review your details and contact you shortly.</p>
              <p>For immediate assistance, please reach out to us directly:</p>
            </div>

            {/* Contact Button */}
            <div className="flex flex-col gap-4 items-center justify-center pt-2">
              <a 
                href="https://api.whatsapp.com/send?phone=601133038836" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-black hover:shadow-xl transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                <span>+60 11-3303 8836</span>
              </a>

               <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-medium transition-colors text-sm mt-4">
                    <Home className="w-4 h-4" />
                    Back to Homepage
               </Link>
            </div>
          </div>
        </div>
        
        
      </div>
    </>
  );
}
