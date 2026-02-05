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

import path from 'path';
import fs from 'fs';

// Map icon strings to components
const IconMap: { [key: string]: any } = {
  ArrowUpRight: ArrowUpRight,
  Wifi: Wifi,
  Phone: Phone,
  Check: Check
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'home_plans.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const homePlans = JSON.parse(jsonData);

  return {
    props: {
      homePlans,
    },
  };
}

interface PlanFeature {
  icon: string;
  text: string;
}

interface Plan {
  speed: string;
  price: string;
  subtitle: string;
  special: string;
  wifi7Badge?: boolean;
  promoBanner?: string;
  features: PlanFeature[];
}

interface HomeProps {
  homePlans: Plan[];
}

export default function Home({ homePlans }: HomeProps) {
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
      <WhyWeBetter />
      
      {/* Pricing Plans Section */}
      <HomePlansSection plans={homePlans} />


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

function HomePlansSection({ plans }: { plans: Plan[] }) {
    return (
        <section className="py-10 bg-pink-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-9">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Your Desired Plan</h2>
                    <p className="text-xl text-gray-600">Browse around. We want you to find your perfect match.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {plans.map((plan, index) => (
                        <div 
                            key={index} 
                            className={`bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col relative ${plan.promoBanner ? 'border-purple-500' : ''}`}
                        >
                            {plan.promoBanner && (
                                <div className="bg-purple-400 text-black text-center py-2 text-sm font-bold uppercase tracking-wider w-full">
                                    {plan.promoBanner}
                                </div>
                            )}

                            <div className={`p-8 flex-grow ${plan.promoBanner ? 'pt-4' : ''}`}>
                                <div className="mb-5">
                                    <div className="flex items-center gap-2 h-9">
                                        <h3 className="text-3xl font-extrabold text-primary">{plan.speed}</h3>
                                        {plan.wifi7Badge && (
                                            <div className="w-12 h-12 relative">
                                                <Image src="/images/promo-badge.png" alt="Offer" fill className="object-contain" />
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-gray-500 font-medium">{plan.subtitle}</p>
                                </div>
                                <div className="mb-5">
                                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                    <span className="text-gray-500">/month</span>
                                    <p className="text-md text-black py-1">24-month contract</p>
                                </div>
                                <div className="bg-yellow-400 p-3 rounded-xl mb-6">
                                    <p className="text-center text-md text-black font-bold">{plan.special}</p>
                                </div>
                                <div className="space-y-4 mb-4">
                                    {plan.features.map((feature, i) => {
                                        const IconComponent = IconMap[feature.icon] || ArrowUpRight;
                                        return (
                                            <div key={i} className="flex items-start gap-3">
                                                <IconComponent className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-600 text-sm">{feature.text}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="p-6 pt-0 mt-auto">
                                <a 
                                   href="/application"
                                   className="block w-full text-center bg-primary text-white py-3 rounded-full font-bold hover:bg-black transition-colors"
                                >
                                    SUBSCRIBE
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
