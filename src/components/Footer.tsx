
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#f2f2f2] pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="col-span-1">
            <h3 className="text-[#E6007E] text-2xl font-bold mb-4">Time Fibre</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Experience the fastest and most stable fibre internet connection in Malaysia. 
              100% Fibre, 0% Compromise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-600 hover:text-[#E6007E]">Home</Link></li>
              <li><Link href="/personal" className="text-gray-600 hover:text-[#E6007E]">For Home</Link></li>
              <li><Link href="/business" className="text-gray-600 hover:text-[#E6007E]">For Business</Link></li>
              <li><Link href="/check-coverage" className="text-gray-600 hover:text-[#E6007E]">Check Coverage</Link></li>
              <li><Link href="/career" className="text-gray-600 hover:text-[#E6007E]">Career</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#E6007E] mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Call For Registration</p>
                  <a href="tel:01170700703" className="text-gray-800 font-bold hover:text-[#E6007E] big-text">
                    +6011-7070 0703
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#E6007E] mt-0.5" />
                <div>
                   <p className="text-sm text-gray-500 mb-1">Email Us</p>
                  <a href="mailto:sales@fibre-internet.com.my" className="text-gray-800 hover:text-[#E6007E]">
                    sales@fibre-internet.com.my
                  </a>
                </div>
              </li>
            </ul>
          </div>

           {/* Legal */}
           <div>
            <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider">Polices</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-gray-600 hover:text-[#E6007E]">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-[#E6007E]">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Time Fibre Internet. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
