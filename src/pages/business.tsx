

import HeroSlider from "@/components/HeroSlider";
import WhyWeBetter from "@/components/WhyWeBetter";
import CoverageSection from "@/components/CoverageSection";
import SupportSection from "@/components/SupportSection";
import Head from "next/head";
import Image from "next/image";
import { ArrowUpRight, Wifi, Phone, Cloud } from "lucide-react";
import React, { useState, useEffect } from "react";
import path from 'path';
import fs from 'fs';

// Map icon strings to components
const IconMap: { [key: string]: any } = {
  ArrowUpRight: ArrowUpRight,
  Wifi: Wifi,
  Phone: Phone,
  Cloud: Cloud
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'business_plans.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const businessPlans = JSON.parse(jsonData);

  return {
    props: {
      businessPlans,
    },
  };
}

interface PlanFeature {
    icon: string;
    text: string;
    highlight?: boolean;
}

interface Plan {
    speed: string;
    price: string;
    subtitle: string;
    special: string;
    features: PlanFeature[];
}

interface BusinessProps {
    businessPlans: Plan[];
}

export default function Business({ businessPlans }: BusinessProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);
  
  return (
    <>
      <Head>
        <title>Business - Time Fibre Internet</title>
      </Head>
      {/* Hero Slider */}
        <HeroSlider />

        {/* Why We Are Better Section */}
        <WhyWeBetter title="Level Up Your Business" />
        
        <BusinessPlans onOpenModal={() => setIsModalOpen(true)} plans={businessPlans} />
        
        {/* <CheckCoverageModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
        /> */}
    </>
  );
}

// Add plan section
interface BusinessPlansProps {
    onOpenModal: () => void;
    plans: Plan[];
}

function BusinessPlans({ onOpenModal, plans }: BusinessPlansProps) {
    return (
        <>
        <section className="py-10 bg-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-9">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Your Business Plan</h2>
                    <p className="text-xl text-gray-600">It’s our objectives to make sure you do well.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {plans.map((plan, index) => (
                        <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col">
                            <div className="p-8 flex-grow">
                                <div className="mb-6">
                                    <h3 className="text-3xl font-extrabold text-purple-700">{plan.speed}</h3>
                                    <p className="text-gray-500 font-medium">{plan.subtitle}</p>
                                </div>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                    <span className="text-gray-500">/month</span>
                                    <p className="text-md text-black">24-month contract</p>
                                </div>

                                <div className="bg-yellow-400 p-4 rounded-xl mb-6">
                                    <p className="text-center text-md font-bold text-black">{plan.special}</p>
                                </div>

                                <div className="space-y-4 mb-4">
                                    {plan.features.map((feature, i) => {
                                        const IconComponent = IconMap[feature.icon] || ArrowUpRight;
                                        return (
                                        <div key={i} className="flex items-start gap-3">
                                            <IconComponent className={`w-5 h-5 flex-shrink-0 mt-0.5 ${feature.highlight ? 'text-green-500' : 'text-purple-700'}`} />
                                            <span className={`text-sm ${feature.highlight ? 'text-green-600 font-bold' : 'text-gray-600'}`}>{feature.text}</span>
                                        </div>
                                        );
                                    })}
                                </div>
                            </div>
                            
                            <div className="p-6 pt-0 mt-auto">
                                <a 
                                    href="/application" 
                                    className="block w-full text-center bg-purple-700 text-white py-3 rounded-full font-bold hover:bg-black transition-colors"
                                >
                                    SUBSCRIBE
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        
              <section className="py-12 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Terms & Conditions</h3>
                    <ul className="list-decimal pl-5 space-y-2 text-sm text-gray-600">
                        <li>Symmetrical upload and download speeds apply only for the 300Mbps plan.</li>
                        <li>Calls are charged at 11 sen/min to all fixed and mobile numbers nationwide, and 8 sen/min for IDD calls to 60 countries. If you need additional lines and features, subscribe to Time Business Voice Lines here.</li>
                        <li>Optional Fixed IP add-on at only RM200/month.</li>
                        <li>All plan are subjected to 24 months contract terms.</li>
                    </ul>
                </div>
              </section>
        
              {/* Device Coverage & Check Coverage Section */}
              <CoverageSection onOpenModal={onOpenModal} />

              {/* Support Section */}
              <SupportSection />
                
        </>
    )
}
