
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Monitor, Briefcase, Users, Phone, FileText, CreditCard, Zap } from 'lucide-react';
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
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
              Only At Time Fibre
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Home Details */}
            <div className="bg-white rounded-4xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group">
              <div className="p-8 flex flex-col items-center text-center h-full">
                <div className="mb-6 group-hover:scale-103 transition-transform">
                  <Image 
                    src="/images/home-card.png" 
                    alt="Home Fibre" 
                    width={250} 
                    height={250}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Home Fibre</h3>
                <p className="text-gray-600 mb-auto">Get the best deal for your home internet needs.</p>
                <Link href="/home" className="mt-8 bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-black transition-colors">
                  Explore now
                </Link>
              </div>
            </div>

            {/* Card 2: Business */}
            <div className="bg-white rounded-4xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group">
               <div className="p-8 flex flex-col items-center text-center h-full">
                <div className="mb-6 group-hover:scale-103 transition-transform">
                  <Image 
                    src="/images/business-card.png" 
                    alt="Business Fibre" 
                    width={250} 
                    height={250}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Fibre</h3>
                <p className="text-gray-600 mb-auto">Boost your business productivity with our ultra-fast connection.</p>
                <Link href="/business" className="mt-8 bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-black transition-colors">
                  Explore now
                </Link>
              </div>
            </div>

            {/* Card 3: Career */}
            <div className="bg-white rounded-4xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group">
               <div className="p-8 flex flex-col items-center text-center h-full">
                <div className="mb-6 group-hover:scale-103 transition-transform">
                  <Image 
                    src="/images/career-card.png" 
                    alt="Career" 
                    width={250} 
                    height={250}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Career</h3>
                <p className="text-gray-600 mb-auto">Join the team that connects the world. We are hiring!</p>
                <Link href="/career" className="mt-8 bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-black transition-colors">
                  Explore now
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Installation Steps Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Installation Procedure</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             {/* Left Column: Steps */}
             <div className="space-y-12">
                {/* Step 1 */}
                <div className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 transition-transform group-hover:scale-110 duration-300">
                     <Image 
                       src="/images/time-pick-date.webp" 
                       alt="Pick A Date" 
                       width={70} 
                       height={70}
                       className="object-contain"
                     />
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">1. Pick A Date</h3>
                     <p className="text-gray-600 text-lg leading-relaxed">Select an installation date when you sign up, and we’ll work it out for you.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 transition-transform group-hover:scale-110 duration-300">
                     <Image 
                       src="/images/time-waiting-installation.webp" 
                       alt="Sit Back, Relax" 
                       width={70} 
                       height={70} 
                       className="object-contain"
                     />
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">2. Sit Back, Relax</h3>
                     <p className="text-gray-600 text-lg leading-relaxed">Waiting for assistance from our installers one day before installation. Just be sure someone is home.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 transition-transform group-hover:scale-110 duration-300">
                     <Image 
                       src="/images/time-connection-test.webp" 
                       alt="Connection Test" 
                       width={70} 
                       height={70}
                       className="object-contain"
                     />
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">3. Connection Test</h3>
                     <p className="text-gray-600 text-lg leading-relaxed">Our installers will test connections and equipment and answer all your inquiries before signing up the contract.</p>
                  </div>
                </div>
             </div>

             {/* Right Column: Video */}
             <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5 transform transition-transform hover:scale-[1.02] duration-500">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/6QqJRTYCWDc" 
                  title="TIME Internet Installation Process"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
             </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Reach Us Anywhere, Anytime</h2>
            <p className="text-gray-600 text-lg mb-12">
              We’ve got everything you need to manage your account, take charge of your connection and more, all at your fingertips.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               <div className="flex flex-col items-center p-6">
                  <div className="mb-6">
                    <Image 
                      src="/images/technical-support.png" 
                      alt="Technical Support" 
                      width={160} 
                      height={160}
                      className="object-contain"
                    />
                  </div>
                  <a href="tel:1800181818" className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-500 hover:text-black transition-colors shadow-lg">
                    Technical Support
                  </a>
               </div>
               <div className="flex flex-col items-center p-6">
                  <div className="mb-6">
                    <Image 
                      src="/images/enquiry.png" 
                      alt="Sign Up Enquiries" 
                      width={160} 
                      height={160}
                      className="object-contain"
                    />
                  </div>
                  <a href="https://api.whatsapp.com/send?phone=601133038836&text=Hello%20TIME%20InternetI%20would%20like%20to%20know%20if%20my%20area%20is%20under%20TIME%20coverage%3FFull%20Address%20%3A%20Building%20Name%3A" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-500 hover:text-black transition-colors shadow-lg">
                    Sign Up Enquiries
                  </a>
               </div>
               <div className="flex flex-col items-center p-6">
                  <div className="mb-6">
                    <Image 
                      src="/images/pay.png" 
                      alt="Pay Now" 
                      width={160} 
                      height={160}
                      className="object-contain"
                    />
                  </div>
                   <a href="https://quickpay.time.com.my/web/account" className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-500 hover:text-black transition-colors shadow-lg">
                    Pay Now
                   </a>
               </div>
            </div>
        </div>
      </section>

      {/* Connect the World Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Image */}
               <Image 
                 src="/images/assets-evernet-network.webp" 
                 alt="Connect the World" 
                 width={900} 
                 height={700}
                 className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
               />
           

            {/* Right Column: Content */}
            <div className="space-y-8">
               <div className="flex items-center gap-3 text-primary font-bold text-lg animate-pulse">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span>Get Blazing Fast Internet</span>
               </div>
               
               <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
                 Connect the World with TIME FIBRE Malaysia
               </h2>
               
               <p className="text-xl text-gray-600 leading-relaxed">
                 It’s time to speed up your home internet and enjoy better value with our best-selling 600Mbps plan, only 139/month for 24month or 1Gbps plan with RM199/month for 24month
               </p>
               
               <div className="w-full h-px bg-gray-200"></div>
               
               <div>
                  <p className="text-lg font-bold text-gray-900 mb-4">
                    Whatsapp Us Now to Connect with TIME Fibre Home Broadband
                  </p>
                  <a 
                    href="https://api.whatsapp.com/send?phone=601133038836&text=Hello%20TIME%20InternetI%20would%20like%20to%20know%20if%20my%20area%20is%20under%20TIME%20coverage%3FFull%20Address%20%3A%20Building%20Name%3A" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#128C7E] transition-colors shadow-lg hover:shadow-xl gap-2"
                  >
                    <Image src="/images/whatsapp-icon.png" alt="" width={24} height={24} className="w-6 h-6 brightness-0 invert" onError={(e) => e.currentTarget.style.display = 'none'} />
                    Chat on WhatsApp
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
