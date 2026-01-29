
import Link from 'next/link';
import { ArrowRight, Monitor, Briefcase, Users, Phone, FileText, CreditCard } from 'lucide-react';
import Head from 'next/head';
import HeroSlider from '@/components/HeroSlider';

export default function Main() {
  return (
    <>
      <Head>
        <title>Time Fibre Distributor</title>
        <meta name="description" content="Time Fibre Internet Malaysia - Only At Time Fibre" />
      </Head>

      {/* Hero Slider */}
      <HeroSlider />

      {/* Cards Section */}
      <section id="cards-section" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#E6007E] mb-4">
              Only At Time Fibre
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the fastest and most stable 100% Fibre network in Malaysia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Home Details */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group">
              <div className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 bg-[#ffe6f2] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Monitor className="w-8 h-8 text-[#E6007E]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Home Fibre</h3>
                <p className="text-gray-600 mb-auto">GET UP TO RM600 OFF when you sign up for 500Mbps & above!</p>
                <Link href="/home" className="mt-8 text-[#E6007E] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Explore now <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Card 2: Business */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group">
               <div className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 bg-[#e6f2ff] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-8 h-8 text-[#0066cc]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Fibre</h3>
                <p className="text-gray-600 mb-auto">Boost your business productivity with our ultra-fast connection.</p>
                <Link href="/business" className="mt-8 text-[#0066cc] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Explore now <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Card 3: Career */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group">
               <div className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 bg-[#e6fffa] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-[#00a896]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Career</h3>
                <p className="text-gray-600 mb-auto">Join the team that connects the world. We are hiring!</p>
                <Link href="/career" className="mt-8 text-[#00a896] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Explore now <ArrowRight size={18} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Reach Us Anywhere, Anytime</h2>
            <p className="text-gray-600 text-lg mb-12">
              We’ve got everything you need to manage your account, take charge of your connection and more, all at your fingertips.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="flex flex-col items-center p-6 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                  <Phone className="w-10 h-10 text-[#E6007E] mb-4" />
                  <h4 className="font-bold text-lg mb-2">Technical support</h4>
                  <a href="tel:1800181818" className="text-gray-600 hover:text-[#E6007E]">1800 18 1818</a>
               </div>
               <div className="flex flex-col items-center p-6 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                  <FileText className="w-10 h-10 text-[#E6007E] mb-4" />
                  <h4 className="font-bold text-lg mb-2">Sign up Enquiries</h4>
                  <a href="tel:01170700703" className="text-gray-600 hover:text-[#E6007E]">011 7070 0703</a>
               </div>
               <div className="flex flex-col items-center p-6 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                  <CreditCard className="w-10 h-10 text-[#E6007E] mb-4" />
                  <h4 className="font-bold text-lg mb-2">Pay Bill</h4>
                   <a href="#" className="text-gray-600 hover:text-[#E6007E]">Pay Now</a>
               </div>
            </div>
        </div>
      </section>
    </>
  );
}
