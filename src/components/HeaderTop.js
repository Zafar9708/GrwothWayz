// src/components/HeaderTop.tsx
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function HeaderTop() {
  return (
    <div className="bg-blue-200 text-sm text-gray-800">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
        
        {/* Left: WhatsApp */}
        <div className="flex items-center gap-2">
          <FaWhatsapp className="text-green-600 text-base" />
          <a
            href="https://wa.me/916388103445"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline font-medium"
          >
            +91 63881 03445
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
