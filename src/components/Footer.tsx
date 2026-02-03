
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#f2f2f2] pt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="col-span-1 h-30 w-auto">
            <Image 
              src="/images/logo.png" 
              alt="Time Fibre Authorized Distributor" 
              width={200} 
              height={60} 
              className="h-30 w-auto"
              priority
            />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-primary hover:text-black">Home</Link></li>
              <li><Link href="/home" className="text-primary hover:text-black">For Home</Link></li>
              <li><Link href="/business" className="text-primary hover:text-black">For Business</Link></li>
              <li><Link href="/check-coverage" className="text-primary hover:text-black">Check Coverage</Link></li>
              <li><Link href="/career" className="text-primary hover:text-black">Career</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Call For Registration</p>
                  <a href="tel:01133038836" className="text-gray-800 font-bold hover:text-primary big-text">
                    +601133038836
                  </a>
                </div> 
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Call For Billing and Technical Support</p>
                  <a href="tel:1800181818" className="text-gray-800 font-bold hover:text-primary big-text">
                    1800-18-1818
                  </a>
                </div> 
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email Us</p>
                  <a href="mailto:sales@fiberinternetonline.my" className="text-gray-800 font-bold hover:text-primary big-text">
                    sales@fiberinternetonline.my
                  </a>
                </div>
              </li> 
            </ul>
          </div>

          
        </div>

        </div>
      
      <div className="w-full bg-black py-6 text-center mt-12">
        <p className="text-gray-300 text-base font-medium">
          TIME Authorised Distributor
        </p>
      </div>
    </footer>
  );
}
