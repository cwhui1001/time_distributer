import Head from "next/head";
import React, { useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import SupportSection from "@/components/SupportSection";

export default function Career() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `Career Application:
    Name: ${formData.name}
    Phone: ${formData.phone}
    Email: ${formData.email}
    Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=601133038836&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Head>
        <title>Career - Time Fibre Internet</title>
      </Head>
      
      <section className="py-10 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h1 className="text-5xl font-extrabold text-violet-600 mb-4">Join Our Team</h1>
              <p className="text-lg text-gray-600">We are always looking for talented individuals to join our growing family. Fill out the form below to get in touch!</p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition-all text-gray-700"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  value={formData.phone} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition-all text-gray-700"
                  placeholder="012-345 6789"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition-all text-gray-700"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea 
                  name="message" 
                  rows={5} 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-y transition-all text-gray-700"
                  placeholder="Tell us about yourself..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full bg-violet-600 text-white font-bold py-4 rounded-full shadow-lg hover:bg-blue-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Support Section */}
      <SupportSection />
    </>
    
  );
}
