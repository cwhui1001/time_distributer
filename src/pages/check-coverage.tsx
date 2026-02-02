
import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";
import SupportSection from "@/components/SupportSection";

export default function CheckCoverage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    city: "",
    state: "",
    postcode: "",
    unit_no: "",
    building_name: "",
    jalan: "",
    taman: "",
    name: "",
    email: "",
    phone: "",
    alternate_phone: "",
    fibre_package: "",
    mobile_service: "",
    current_isp: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    // Basic validation could go here
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the WhatsApp message for Coverage Check
    const message = `Check Coverage Request:
        Name: ${formData.name}
        Phone: ${formData.phone}
        Email: ${formData.email}
        Address: ${formData.unit_no}, ${formData.building_name}, ${formData.jalan}, ${formData.taman}, ${formData.city}, ${formData.state}, ${formData.postcode}
        Package Interested: ${formData.fibre_package}
        Current Mobile: ${formData.mobile_service}
        Current ISP: ${formData.current_isp}
        Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=601133038836&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    // Optionally redirect to a thank you page
    // router.push("/thank-you"); 
  };

  return (
    <>
      <Head>
        <title>Check Coverage - Time Fibre Internet</title>
      </Head>

      <div className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            
          {/* Header Image & Text */}
          <div className="text-center mb-8">
            
            <h1 className="text-4xl font-extrabold text-purple-800 mb-2">Check TIME Coverage</h1>
            <p className="text-lg text-gray-600">Let's check if TIME fibre can be installed at your home!</p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-8 relative">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
                <div className={`active-step-line absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-purple-600 -z-10 transition-all duration-300`} style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}></div>
                
                {[1, 2, 3].map((num) => (
                    <div key={num} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors duration-300 ${step >= num ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        {num}
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-5">
                   <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">City <span className="text-red-500">*</span></label>
                    <input type="text" name="city" required value={formData.city} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-gray-700" placeholder="Enter your city" />
                   </div>
                   <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">State <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <select name="state" required value={formData.state} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none appearance-none bg-white text-gray-700">
                            <option value="">-- choose here --</option>
                            <option value="Johor">Johor</option>
                            <option value="Kedah">Kedah</option>
                            <option value="Kelantan">Kelantan</option>
                            <option value="Kuala Lumpur">Kuala Lumpur</option>
                            <option value="Melaka">Melaka</option>
                            <option value="Negeri Sembilan">Negeri Sembilan</option>
                            <option value="Pahang">Pahang</option>
                            <option value="Perak">Perak</option>
                            <option value="Perlis">Perlis</option>
                            <option value="Pulau Pinang">Pulau Pinang</option>
                            <option value="Putrajaya">Putrajaya</option>
                            <option value="Sabah">Sabah</option>
                            <option value="Sarawak">Sarawak</option>
                            <option value="Selangor">Selangor</option>
                            <option value="Terengganu">Terengganu</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                   </div>
                   <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Postcode <span className="text-red-500">*</span></label>
                    <input type="text" name="postcode" required value={formData.postcode} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-gray-700" placeholder="Enter your postcode" />
                   </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-5">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Unit No <span className="text-red-500">*</span></label>
                        <input type="text" name="unit_no" required value={formData.unit_no} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-gray-700" placeholder="Enter your unit number" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Building Name</label>
                        <input type="text" name="building_name" value={formData.building_name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-gray-700" placeholder="Enter your building name" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Jalan / Kampung <span className="text-red-500">*</span></label>
                        <input type="text" name="jalan" required value={formData.jalan} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-gray-700" placeholder="Enter your jalan / kampung" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Taman / Section / Kampung / Bandar <span className="text-red-500">*</span></label>
                        <input type="text" name="taman" required value={formData.taman} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-gray-700" placeholder="Enter your taman / section / kampung / bandar" />
                    </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="space-y-5">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Your Name <span className="text-red-500">*</span></label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-gray-700" placeholder="Enter your name" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-gray-700" placeholder="Enter your email" />
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                            <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-gray-700" placeholder="Enter your phone number" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Alternate Phone</label>
                            <input type="tel" name="alternate_phone" value={formData.alternate_phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-gray-700" placeholder="Enter your alternate phone number" />
                        </div>
                     </div>
                     <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">TIME Fibre Package <span className="text-red-500">*</span></label>
                        <div className="relative">
                            <select name="fibre_package" required value={formData.fibre_package} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none appearance-none bg-white text-gray-700">
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
                               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </div>
                        </div>
                     </div>
                     <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Current Mobile Services <span className="text-red-500">*</span></label>
                         <div className="relative">
                            <select name="mobile_service" required value={formData.mobile_service} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none appearance-none bg-white text-gray-700">
                                <option value="">Choose the Answer</option>
                                <option value="Celcomdigi Postpaid(Prabayar) 60 or above">Celcomdigi Postpaid(Prabayar) 60 or above</option>
                                <option value="Celcomdigi Postpaid(Prabayar) 40">Celcomdigi Postpaid(Prabayar) 40</option>
                                <option value="Celcomdigi Prepaid(Pascabayar) User">Celcomdigi Prepaid(Pascabayar) User</option>
                                <option value="Maxis Postpaid user">Maxis Postpaid user</option>
                                <option value="Other user">Other user</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </div>
                        </div>
                     </div>
                     <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Current Internet Service Provider</label>
                         <div className="relative">
                            <select name="current_isp" value={formData.current_isp} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none appearance-none bg-white text-gray-700">
                                <option value="N/A">N/A</option>
                                <option value="Maxis">Maxis</option>
                                <option value="Celcom">Celcom</option>
                                <option value="Unifi">Unifi</option>
                            </select>
                             <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </div>
                        </div>
                     </div>
                     <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Message To Us <span className="text-red-500">*</span></label>
                        <textarea name="message" required rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none resize-y text-gray-700" placeholder="Enter your message to us"></textarea>
                     </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                 {step > 1 ? (
                    <button type="button" onClick={handlePrev} className="px-6 py-2 rounded-full border-2 border-primary text-primary font-bold hover:bg-gray-50 transition-colors">
                        Previous
                    </button>
                 ) : <div></div>} {/* Spacer for flex */}

                 {step < 3 ? (
                    <button type="button" onClick={handleNext} className="px-8 py-3 rounded-full bg-purple-700 text-white font-bold hover:bg-black transition-colors shadow-lg">
                        Next
                    </button>
                 ) : (
                    <button type="submit" className="px-8 py-3 rounded-full bg-purple-700 text-white font-bold hover:bg-black transition-colors shadow-lg">
                        Check Coverage Now
                    </button>
                 )}
              </div>

            </form>
          </div>
        </div>
      </div>
      {/* Support Section */}
      <SupportSection />
    </>
  );
}
