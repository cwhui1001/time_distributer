
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SupportSection from "@/components/SupportSection";
import CoverageSection from "@/components/CoverageSection";
import CheckCoverageModal from "@/components/CheckCoverageModal";


export default function Application() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    apply_name: "",
    apply_email: "",
    apply_phone: "",
    apply_address: "",
    apply_building: "",
    apply_block: "",
    apply_floor: "",
    apply_unit: "",
    current_wifi: "N/A",
    interested_plan: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const message = `Form Submission Details:
        Apply Name: ${formData.apply_name}
        Apply Email: ${formData.apply_email}
        Apply Phone: ${formData.apply_phone}
        Apply Address: ${formData.apply_address}
        Building Name: ${formData.apply_building}
        Block: ${formData.apply_block}
        Floor Number: ${formData.apply_floor}
        Unit Number: ${formData.apply_unit}
        Apply Current Wifi: ${formData.current_wifi}
        Apply Plan: ${formData.interested_plan}`;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
    
    // Redirect to WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=601133038836&text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    // Send email in the background
    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'application',
          formData: formData,
        }),
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }
    
    // Redirect current tab to Thank You page
    router.push("/thank-you-register");
  };

  return (
    <>
      <Head>
        <title>Apply TIME Fibre - Registration</title>
      </Head>

      <div className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Apply TIME Fibre
            </h1>
            <p className="text-lg text-gray-600">
              Free installation! Fill in your details to register now!
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label htmlFor="apply_name" className="block text-sm font-bold text-gray-700 mb-2">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="apply_name"
                name="apply_name"
                required
                value={formData.apply_name}
                onChange={handleChange}
                className="text-gray-500 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="apply_email" className="block text-sm font-bold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="apply_email"
                name="apply_email"
                required
                value={formData.apply_email}
                onChange={handleChange}
                className="text-gray-500 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="Enter your email address"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="apply_phone" className="block text-sm font-bold text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="apply_phone"
                name="apply_phone"
                required
                value={formData.apply_phone}
                onChange={handleChange}
                className="text-gray-500 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="e.g. 0123456789"
              />
            </div>

            {/* Full Address */}
            <div>
              <label htmlFor="apply_address" className="block text-sm font-bold text-gray-700 mb-2">
                Full Address <span className="text-red-500">*</span>
              </label>
              <textarea
                id="apply_address"
                name="apply_address"
                rows={4}
                required
                value={formData.apply_address}
                onChange={handleChange}
                className="text-gray-500 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y"
                placeholder="Enter your installation address"
              ></textarea>
            </div>

            {/* Address Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Building Name */}
              <div>
                <label htmlFor="apply_building" className="block text-sm font-bold text-gray-700 mb-2">
                  Building Name
                </label>
                <input
                  type="text"
                  id="apply_building"
                  name="apply_building"
                  value={formData.apply_building}
                  onChange={handleChange}
                  className="text-gray-500 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              {/* Block */}
              <div>
                <label htmlFor="apply_block" className="block text-sm font-bold text-gray-700 mb-2">
                  Block
                </label>
                <input
                  type="text"
                  id="apply_block"
                  name="apply_block"
                  value={formData.apply_block}
                  onChange={handleChange}
                  className="text-gray-500 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              {/* Floor */}
              <div>
                <label htmlFor="apply_floor" className="block text-sm font-bold text-gray-700 mb-2">
                  Floor Number
                </label>
                <input
                  type="text"
                  id="apply_floor"
                  name="apply_floor"
                  value={formData.apply_floor}
                  onChange={handleChange}
                  className="text-gray-500 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              {/* Unit */}
              <div>
                <label htmlFor="apply_unit" className="block text-sm font-bold text-gray-700 mb-2">
                  Unit Number
                </label>
                <input
                  type="text"
                  id="apply_unit"
                  name="apply_unit"
                  value={formData.apply_unit}
                  onChange={handleChange}
                  className="text-gray-500 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
            </div>

            {/* Current WiFi */}
            <div>
              <label htmlFor="current_wifi" className="block text-sm font-bold text-gray-700 mb-2">
                Current Using Home WiFi <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="current_wifi"
                  name="current_wifi"
                  required
                  value={formData.current_wifi}
                  onChange={handleChange}
                  className="text-gray-500 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white"
                >
                  <option value="N/A">N/A</option>
                  <option value="Unifi">Unifi</option>
                  <option value="Maxis">Maxis</option>
                  <option value="Celcom">Celcom</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Interested Plan */}
            <div>
              <label htmlFor="interested_plan" className="block text-sm font-bold text-gray-700 mb-2">
                Interested Plan <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="interested_plan"
                  name="interested_plan"
                  required
                  value={formData.interested_plan}
                  onChange={handleChange}
                  className="text-gray-500 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white"
                >
                  <option value="">Choose Here</option>
                  <option value="TIME Fibre 200 Mbps Home Broadband">TIME Fibre 200 Mbps Home Broadband</option>
                  <option value="TIME Fibre 600 Mbps Home Broadband">TIME Fibre 600 Mbps Home Broadband</option>
                  <option value="TIME Fibre 1 Gbps Home Broadband">TIME Fibre 1 Gbps Home Broadband</option>
                  <option value="TIME Fibre 2 Gbps Home Broadband">TIME Fibre 2 Gbps Home Broadband</option>
                  <option value="TIME Fibre 300 Mbps Business">TIME Fibre 300 Mbps Business</option>
                  <option value="TIME Fibre 600 Mbps Business">TIME Fibre 600 Mbps Business</option>
                  <option value="TIME Fibre 1 Gbps Business">TIME Fibre 1 Gbps Business</option>
                  <option value="TIME Fibre 2 Gbps Business">TIME Fibre 2 Gbps Business</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-4 rounded-full text-lg hover:bg-black transition-colors shadow-lg hover:shadow-xl transform active:scale-95 duration-200"
              >
                Send Application
              </button>
            </div>
          </form>
        </div>
      </div>
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
