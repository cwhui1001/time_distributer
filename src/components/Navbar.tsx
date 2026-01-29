import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Personal", href: "/personal" },
    { name: "Business", href: "/business" },
    { name: "Check Coverage", href: "/check-coverage" },
    { name: "Career", href: "/career" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#E6007E]">
                Time Fibre
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#E6007E] font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/application"
              className="bg-[#E6007E] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#c4006b] transition-colors"
            >
              APPLY NOW
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#E6007E] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-[#E6007E] hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/application"
              className="block w-full text-center mt-4 bg-[#E6007E] text-white px-3 py-3 rounded-full font-bold hover:bg-[#c4006b]"
              onClick={() => setIsOpen(false)}
            >
              APPLY NOW
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
