import React, { useState } from "react";
import { X } from "lucide-react";
import { sendEmail } from "@/utils/emailService";

interface CheckCoverageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckCoverageModal({ isOpen, onClose }: CheckCoverageModalProps) {
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

  if (!isOpen) return null;

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
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
    
    // Send email using EmailJS in background
    try {
      await sendEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: `Check Coverage Request: ${formData.name}`,
        message: message
      });
    } catch (error) {
       console.error("Error sending email:", error);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none bg-black/60">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[80vh] overflow-y-auto relative pointer-events-auto border border-gray-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
        >
          <X className="w-6 h-6 text-gray-500" />
        </button>

        <div className="p-6 md:p-8">
          {/* Header Image & Text */}
          <div className="text-center mb-5">
            <img 
                src="/images/logo.png" 
                alt="Time Distributor" 
                className="mx-auto rounded-lg mb-3 w-full max-w-[250px] object-contain"
            />
            <h2 className="text-xl font-extrabold text-purple-800 mb-2">Check TIME Coverage</h2>
            <p className="text-md text-gray-600">Let's check if TIME fibre can be installed at your home!</p>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-5 relative px-4">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
              <div className={`active-step-line absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-purple-600 -z-10 transition-all duration-300`} style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}></div>
              
              {[1, 2, 3].map((num) => (
                  <div key={num} className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-md transition-colors duration-300 ${step >= num ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                      {num}
                  </div>
              ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            
            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-3">
                 <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">City <span className="text-red-500">*</span></label>
                  <input type="text" name="city" required value={formData.city} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none" />
                 </div>
                 <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">State <span className="text-red-500">*</span></label>
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
                  <label className="block text-sm font-bold text-gray-700 mb-1">Postcode <span className="text-red-500">*</span></label>
                  <input type="text" name="postcode" required value={formData.postcode} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none" />
                 </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-3">
                  <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Unit No <span className="text-red-500">*</span></label>
                      <input type="text" name="unit_no" required value={formData.unit_no} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-gray-700" />
                  </div>
                  <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Building Name <span className="text-red-500">*</span></label>
                      <input type="text" name="building_name" required value={formData.building_name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-gray-700" />
                  </div>
                  <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Jalan / Kampung </label>
                      <input type="text" name="jalan"  value={formData.jalan} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-gray-700" />
                  </div>
                  <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Taman / Section / Kampung / Bandar </label>
                      <input type="text" name="taman"  value={formData.taman} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-gray-700" />
                  </div>
                 <div><p className="text-gray-600 mb-2">*put - if not applicable</p></div> 
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-3">
                  <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Your Name <span className="text-red-500">*</span></label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-gray-700" />
                  </div>
                  <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-gray-700" />
                  </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                          <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-gray-700" />
                      </div>
                      <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Alternate Phone</label>
                          <input type="tel" name="alternate_phone" value={formData.alternate_phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-gray-700" />
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
                      <label className="block text-sm font-bold text-gray-700 mb-2">Message To Us </label>
                      <textarea name="message"  rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none resize-y text-gray-700"></textarea>
                   </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
               {step > 1 ? (
                  <button type="button" onClick={handlePrev} className="px-6 py-2 rounded-full border-2 border-primary text-primary font-bold hover:bg-gray-50 transition-colors">
                      Previous
                  </button>
               ) : <div></div>} 

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
  );
}
