// src/components/HeaderTop.tsx
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function HeaderTop() {
  return (
    <div className="bg-blue-900 text-white text-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          
          {/* Contact Info - Left Side */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {/* WhatsApp */}
            <div className="flex items-center gap-2 group">
              <div className="bg-green-500 p-1 rounded-full group-hover:bg-green-600 transition">
                <FaWhatsapp className="text-white text-sm" />
              </div>
              <a
                href="https://wa.me/916388103445"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-medium flex items-center gap-1"
              >
                +91 63881 03445
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 group">
              <div className="bg-blue-500 p-1 rounded-full group-hover:bg-blue-600 transition">
                <FaPhone className="text-white text-sm" />
              </div>
              <a
                href="tel:+916388103445"
                className="hover:underline font-medium flex items-center gap-1"
              >
                +91 63881 03445
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 group">
              <div className="bg-red-500 p-1 rounded-full group-hover:bg-red-600 transition">
                <MdEmail className="text-white text-sm" />
              </div>
              <a
                href="mailto:info@growthwayz.com"
                className="hover:underline font-medium flex items-center gap-1"
              >
                info@growthwayz.com
              </a>
            </div>
          </div>

          {/* Social Icons - Right Side */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full transition"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-white text-sm" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition"
              aria-label="Instagram"
            >
              <FaInstagram className="text-white text-sm" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}