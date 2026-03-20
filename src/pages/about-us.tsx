import Head from 'next/head';
import { Target, CheckCircle, ShieldCheck, Zap } from 'lucide-react';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | Fiber Internet Online</title>
        <meta name="description" content="About Fiber Internet Online" />
      </Head>
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-white to-gray-50 pt-10 pb-10 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
        
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-8">
             <Zap className="w-5 h-5 text-primary" />
             <span className="text-sm font-bold text-gray-700 tracking-wider uppercase"> fiberinternetonline.my</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Your Trusted Partner for High-Speed Fiber Connectivity
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-[1.1rem] md:text-xl text-gray-600 leading-relaxed font-light">
            Welcome to <strong className="text-gray-900 font-semibold">Fiber Internet Online</strong>. We are a specialized sales and consultation agency dedicated to helping residential and business customers in Malaysia find the best high-speed internet solutions.
          </p>
        </div>
      </div>

      {/* Our Role Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl translate-x-4 translate-y-4"></div>
              <div className="bg-white p-10 md:p-12 rounded-3xl shadow-sm border border-gray-100 relative z-10 h-full">
                 <div className="space-y-6">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                         <CheckCircle className="text-green-500 w-6 h-6" /> 
                       </div>
                       <span className="text-lg text-gray-800 font-semibold">Expert Advice</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                         <CheckCircle className="text-green-500 w-6 h-6" /> 
                       </div>
                       <span className="text-lg text-gray-800 font-semibold">Coverage Checking</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                         <CheckCircle className="text-green-500 w-6 h-6" /> 
                       </div>
                       <span className="text-lg text-gray-800 font-semibold">Plan Selection</span>
                    </div>
                 </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-primary w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Role</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We operate as an Authorized Independent Dealer for TIME dotCom Berhad. Our mission is to simplify the application process by providing expert advice, checking coverage availability, and assisting with plan selection.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">A seamless journey from initial interest to getting you fully connected.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (hidden on mobile) */}
            <div className="hidden md:block absolute top-12 left-[18%] right-[18%] h-0.5 bg-gray-200 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center shadow-md mb-6 transition-transform group-hover:scale-105 group-hover:border-primary">
                 <span className="text-3xl font-black text-primary">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Consultation</h3>
              <p className="text-gray-600 leading-relaxed px-4">
                We help you identify the best TIME fiber plan for your needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center shadow-md mb-6 transition-transform group-hover:scale-105 group-hover:border-primary">
                 <span className="text-3xl font-black text-primary">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Application</h3>
              <p className="text-gray-600 leading-relaxed px-4">
                We process your registration through the official TIME Authorized Dealer Portal.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center shadow-md mb-6 transition-transform group-hover:scale-105 group-hover:border-primary">
                 <span className="text-3xl font-black text-primary">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fulfillment</h3>
              <p className="text-gray-600 leading-relaxed px-4">
                Once submitted, the brand owner handles physical installation, technical setup, and ongoing billing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Authorized Partnership Section */}
      <div className="py-24 bg-pink-700 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center justify-center p-6 bg-white/10 rounded-full mb-8 backdrop-blur-sm">
            <ShieldCheck className="text-white w-12 h-12" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Authorized Partnership</h2>
          <p className="text-lg md:text-xl text-white leading-relaxed">
            We are proud to be an appointed agent, an official Authorized Distributor for TIME dotCom. This partnership ensures that every application we handle is legitimate, secure, and processed directly through the provider's infrastructure.
          </p>
        </div>
      </div>
    </>
  );
}
