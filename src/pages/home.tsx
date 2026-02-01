
import HeroSlider from "@/components/HeroSlider";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Check, Wifi, ArrowUpRight, Phone } from "lucide-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>For Home - Time Fibre Internet</title>
      </Head>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Why We Are Better Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-9">Here’s Why We’re Better</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Affordable */}
                <div className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="mb-6">
                        <Image src="/images/affordable.png" alt="Affordable" width={200} height={200} className="object-contain" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable</h3>
                    <p className="text-gray-600">Lowest price per Mbps</p>
                </div>

                {/* Fast */}
                <div className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="mb-6">
                        <Image src="/images/fast.png" alt="Fast" width={200} height={200} className="object-contain" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Fast</h3>
                    <p className="text-gray-600">2Gbps - 'Nuff said</p>
                </div>

                {/* Stable */}
                <div className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="mb-6">
                         <Image src="/images/stable.png" alt="Stable" width={200} height={200} className="object-contain" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Stable</h3>
                    <p className="text-gray-600">Through ups and downs</p>
                </div>

                {/* Helpful */}
                <div className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="mb-6">
                        <Image src="/images/helpful.png" alt="Helpful" width={200} height={200} className="object-contain" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Helpful</h3>
                    <p className="text-gray-600">Here for you 24/7</p>
                </div>
            </div>
        </div>
      </section>
      

      {/* Pricing Plans Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-9">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Desired Plan</h2>
                <p className="text-xl text-gray-600">Browse around. We want you to find your perfect match.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Plan 1: 200Mbps */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col">
                    <div className="p-8 flex-grow">
                        <div className="mb-6">
                            <h3 className="text-3xl font-extrabold text-primary">200Mbps</h3>
                            <p className="text-gray-500 font-medium">Starter Pack</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-gray-900">RM99</span>
                            <span className="text-gray-500">/month</span>
                        </div>
                        <div className="bg-yellow-400 p-4 rounded-xl mb-6">
                            <p className="text-center text-md font-semibold text-black">24-month contract</p>
                            <p className="text-center text-sm text-black mt-1">Free Installation</p>
                        </div>
                        <div className="space-y-4 mb-4">
                            <div className="flex items-start gap-3">
                                <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm">200Mbps Download / 200Mbps Upload</span>
                            </div>
                             <div className="flex items-start gap-3">
                                <Wifi className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm">1 x Wi-Fi 6 Router</span>
                            </div>
                             <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm">Voice Home Basic (Pay-as-you-use)</span>
                            </div>
                        </div>

                        
                    </div>
                    <div className="p-6 pt-0 mt-auto">
                        <a 
                           href="https://api.whatsapp.com/send?phone=601133038836&text=Hi%20TIME%20Internet,%20I%20am%20interested%20in%20the%20200Mbps%20Plan" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="block w-full text-center bg-primary text-white py-3 rounded-full font-bold hover:bg-black transition-colors"
                        >
                            SUBSCRIBE
                        </a>
                    </div>
                </div>

                {/* Plan 2: 600Mbps */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl border-purple-500 transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col relative">
                    <div className="bg-purple-400 text-black text-center py-2 text-sm font-bold uppercase tracking-wider w-full">
                        RM99 for first 6 months
                    </div>
                    <div className="p-6 flex-grow">
                        <div className="mb-1">
                            <div className="flex items-center gap-2">
                                <h3 className="text-3xl font-extrabold text-primary">600Mbps</h3>
                                <div className="w-12 h-12 relative">
                                    <Image src="/images/promo-badge.png" alt="Offer" fill className="object-contain" />
                                </div>
                            </div>
                            <p className="text-gray-500 font-medium">Most Popular</p>
                        </div>
                        <div className="mb-4">
                            <span className="text-4xl font-bold text-gray-900">RM139</span>
                            <span className="text-gray-500">/month</span>
                        </div>
                        <div className="bg-yellow-400 p-4 rounded-xl mb-6">
                             <p className="text-center text-md font-semibold text-black">24-month contract</p>
                             <p className="text-center text-sm text-black mt-1">Free Installation</p>
                        </div>
                         <div className="space-y-4 mb-4">
                            <div className="flex items-start gap-3">
                                <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm">600Mbps Download / 500Mbps Upload</span>
                            </div>
                             <div className="flex items-start gap-3">
                                <Wifi className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm">1 x Wi-Fi 7 Router</span>
                            </div>

                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm">Voice Home Basic (Pay-as-you-use)</span>
                            </div>
                        </div>

                        
                    </div>
                    <div className="p-6 pt-0 mt-auto">
                        <a 
                           href="https://api.whatsapp.com/send?phone=601133038836&text=Hi%20TIME%20Internet,%20I%20am%20interested%20in%20the%20600Mbps%20Plan" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="block w-full text-center bg-primary text-white py-3 rounded-full font-bold hover:bg-black transition-colors"
                        >
                            SUBSCRIBE
                        </a>
                    </div>
                </div>

                {/* Plan 3: 1Gbps */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col">
                    <div className="p-8 flex-grow">
                        <div className="mb-4">
                            <div className="flex items-center gap-2">
                                <h3 className="text-3xl font-extrabold text-primary">1Gbps</h3>
                                <div className="w-12 h-12 relative">
                                    <Image src="/images/promo-badge.png" alt="Offer" fill className="object-contain" />
                                </div>
                            </div>
                            <p className="text-gray-500 font-medium">Ultra Fast</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-gray-900">RM199</span>
                            <span className="text-gray-500">/month</span>
                        </div>
                        <div className="bg-yellow-400 p-4 rounded-xl mb-6">
                             <p className="text-center text-md font-semibold text-black">24-month contract</p>
                             <p className="text-center text-sm text-black mt-1">Free Installation</p>
                        </div>
                         <div className="space-y-4 mb-4">
                            <div className="flex items-start gap-3">
                                <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm">1Gbps Download / 500Mbps Upload</span>
                            </div>
                             <div className="flex items-start gap-3">
                                <Wifi className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm">1 x Wi-Fi 7 Router</span>
                            </div>

                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm">Voice Home Basic (Pay-as-you-use)</span>
                            </div>
                        </div>

                         
                    </div>
                    <div className="p-6 pt-0 mt-auto">
                        <a 
                           href="https://api.whatsapp.com/send?phone=601133038836&text=Hi%20TIME%20Internet,%20I%20am%20interested%20in%20the%201Gbps%20Plan" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="block w-full text-center bg-primary text-white py-3 rounded-full font-bold hover:bg-black transition-colors"
                        >
                            SUBSCRIBE
                        </a>
                    </div>
                </div>

                {/* Plan 4: 2Gbps */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col">
                    <div className="p-8 flex-grow">
                        <div className="mb-6">
                            <h3 className="text-3xl font-extrabold text-primary">2Gbps</h3>
                            <p className="text-gray-500 font-medium">Maximum Speed</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-gray-900">RM379</span>
                            <span className="text-gray-500">/month</span>
                        </div>
                        <div className="bg-yellow-400 p-4 rounded-xl mb-6">
                             <p className="text-center text-md font-semibold text-black">24-month contract</p>
                             <p className="text-center text-sm text-black mt-1">Free Installation</p>
                        </div>

                         <div className="space-y-4 mb-4">
                            <div className="flex items-start gap-3">
                                <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm">2Gbps Download / 500Mbps Upload</span>
                            </div>
                             <div className="flex items-start gap-3">
                                <Wifi className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm">1 x 2Gbps Wi-Fi 7 Router</span>
                            </div>
                             <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm">Voice Home Basic (Pay-as-you-use)</span>
                            </div>
                        </div>

                         
                    </div>
                    <div className="p-6 pt-0 mt-auto"> 
                        <a 
                           href="https://api.whatsapp.com/send?phone=601133038836&text=Hi%20TIME%20Internet,%20I%20am%20interested%20in%20the%202Gbps%20Plan" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="block w-full text-center bg-primary text-white py-3 rounded-full font-bold hover:bg-black transition-colors"
                        >
                            SUBSCRIBE
                        </a>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Terms & Conditions</h3>
            <ul className="list-decimal pl-5 space-y-2 text-sm text-gray-600">
                <li>Price(s) displayed are subject to 6% Service Tax where applicable.</li>
                <li>The bill discount(s) apply to your full month's subscription fee(s). Other charges such as voice calls, deposits, add-ons etc still apply.</li>
                <li>Our 2Gbps plan is only available in selected locations. We're working on bringing it as far and wide as we can.</li>
                <li>All promotions displayed are applicable to 24-month contract plans and available for a limited time only. Terms and conditions apply.</li>
                <li>Fibre-To-The-Room (FTTR) is only available in selected locations.</li>
                <li>To use voice services, you'll need a fixed line phone, available at most electronic retailers.</li>
            </ul>
        </div>
      </section>

      {/* Device Coverage & Check Coverage Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Card: Device Coverage */}
                <div className="bg-blue-300 rounded-3xl shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center">
                    <div className="w-full max-w-sm ">
                        <Image 
                            src="/images/home-devices-WiFi-6.webp" 
                            alt="WiFi 6 Devices" 
                            width={500}  
                            height={400} 
                            className="w-[390px] h-[290px] object-contain"
                        />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">When One Device Does Not Cover It</h3>
                    <p className="text-gray-600 mb-8 max-w-md">From seamless mesh Wi-Fi to speed demon routers, you can create the home network of your dreams.</p>
                    <a 
                        href="/application" 
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-colors"
                    >
                        SUBSCRIBE
                    </a>
                </div>

                {/* Right Card: Check Coverage */}
                <div className="bg-purple-300 rounded-3xl shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center justify-center">
                    <div className="w-[200px] h-[200px] mb-8 relative">
                         <Image 
                            src="/images/icon-check-coverage.png" 
                            alt="Check Coverage Icon" 
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Check Coverage Time<br/>Have we got you covered?</h3>
                    <p className="text-gray-600 mb-8 max-w-md">Fill up your building name/ street name/ postal code for coverage check.<br/>Time Home Fibre Coverage</p>
                    <Link 
                        href="/check-coverage" 
                        className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-colors"
                    >
                        CHECK NOW
                    </Link>
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
    </>
  );
}
