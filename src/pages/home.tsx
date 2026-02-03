
import HeroSlider from "@/components/HeroSlider";
import WhyWeBetter from "@/components/WhyWeBetter";
import CoverageSection from "@/components/CoverageSection";
import SupportSection from "@/components/SupportSection";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Check, Wifi, ArrowUpRight, Phone } from "lucide-react";
import React, { useState, useEffect } from "react";
import CheckCoverageModal from "@/components/CheckCoverageModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <>
      <Head>
        <title>For Home - Time Fibre Internet</title>
      </Head>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Why We Are Better Section */}
      {/* Why We Are Better Section */}
      <WhyWeBetter />
      

      {/* Pricing Plans Section */}
      <section className="py-10 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-9">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Your Desired Plan</h2>
                <p className="text-xl text-gray-600">Browse around. We want you to find your perfect match.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Plan 1: 200Mbps */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col">
                    <div className="p-8 flex-grow">
                        <div className="mb-5">
                            <h3 className="text-3xl font-extrabold text-primary">200Mbps</h3>
                            <p className="text-gray-500 font-medium">Starter Pack</p>
                        </div>
                        <div className="mb-5">
                            <span className="text-4xl font-bold text-gray-900">RM99</span>
                            <span className="text-gray-500">/month</span>
                            <p className="text-md text-black py-1">24-month contract</p>
                        </div>
                        <div className="bg-yellow-400 p-3 rounded-xl mb-6">
                            <p className="text-center text-md text-black font-bold">Free Installation</p>
                        </div>
                        <div className="space-y-4 mb-4">
                            <div className="flex items-start gap-3">
                                <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm">200Mbps / 200Mbps</span>
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
                    <div className="px-8 pb-8 pt-4 flex-grow mt-0">
                        <div className="mb-4">
                            <div className="flex items-center gap-2 h-9">
                                <h3 className="text-3xl font-extrabold text-primary">600Mbps</h3>
                                <div className="w-12 h-12 relative">
                                    <Image src="/images/promo-badge.png" alt="Offer" fill className="object-contain" />
                                </div>
                            </div>
                            <p className="text-gray-500 font-medium mt-0">Most Popular</p>
                        </div>
                        <div className="mb-4">
                            <span className="text-4xl font-bold text-gray-900">RM139</span>
                            <span className="text-gray-500">/month</span>
                            <p className="text-md text-black py-1">24-month contract</p>
                        </div>
                        <div className="bg-yellow-400 p-3 rounded-xl mb-6">
                             <p className="text-center text-md text-black font-bold">Free Installation</p>
                        </div>
                         <div className="space-y-4 mb-4">
                            <div className="flex items-start gap-3">
                                <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm">600Mbps / 500Mbps</span>
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
                        <div className="mb-5">
                            <div className="flex items-center gap-2 h-9">
                                <h3 className="text-3xl font-extrabold text-primary">1Gbps</h3>
                                <div className="w-12 h-12 relative">
                                    <Image src="/images/promo-badge.png" alt="Offer" fill className="object-contain" />
                                </div>
                            </div>
                            <p className="text-gray-500 font-medium">Ultra Fast</p>
                        </div>
                        <div className="mb-5">
                            <span className="text-4xl font-bold text-gray-900">RM199</span>
                            <span className="text-gray-500">/month</span>
                            <p className="text-md text-black">24-month contract</p>
                        </div>
                        <div className="bg-yellow-400 p-3 rounded-xl mb-6">
                             <p className="text-center text-md text-black font-bold">Free Installation</p>
                        </div>
                         <div className="space-y-4 mb-4">
                            <div className="flex items-start gap-3">
                                <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm">1Gbps / 500Mbps </span>
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
                        <div className="mb-5">
                            <h3 className="text-3xl font-extrabold text-primary">2Gbps</h3>
                            <p className="text-gray-500 font-medium">Maximum Speed</p>
                        </div>
                        <div className="mb-5">
                            <span className="text-4xl font-bold text-gray-900">RM379</span>
                            <span className="text-gray-500">/month</span>
                            <p className="text-md text-black">24-month contract</p>
                        </div>
                        <div className="bg-yellow-400 p-3 rounded-xl mb-6">
                             <p className="text-center text-md text-black font-bold">Free Installation</p>
                        </div>

                         <div className="space-y-4 mb-4">
                            <div className="flex items-start gap-3">
                                <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm">2Gbps / 500Mbps </span>
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
                <li>Our 2Gbps plan is only available in selected locations. We're working on bringing it as far and wide as we can.</li>
                <li>Promo discounts do not apply to prorated charges, only your full month's subscription fees.</li>
            </ul>
        </div>
      </section>

      {/* Device Coverage & Check Coverage Section */}
      <CoverageSection onOpenModal={() => setIsModalOpen(true)} />
      
      {/* Support Section */}
      <SupportSection />
        
        <CheckCoverageModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
        />
    </>
  );
}
