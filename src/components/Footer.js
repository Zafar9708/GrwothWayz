import { FaWhatsapp, FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1440px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold text-blue-600 mb-4">ABOUT US</h3>
          <p className="text-sm leading-relaxed">
          Welcome to our hub of diverse services designed to support individuals facing unique challenges.
          Explore a range of speciallized offerings crafted to empower and uplift,tailored for those navigating life's hurdles with resilience and determination.
                    </p>
          {/* <p className="mt-4 font-semibold text-sm text-blue-200">Dr. Laiba Siddiq</p> */}
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-xl font-bold text-blue-600 mb-4">OUR SERVICES</h3>
          <ul className="text-sm space-y-2">
            <li>Occupational Therapy</li>
            <li>Speech Therapy</li>
            <li>Behavioral Therapy</li>
            <li>Parent Counseling</li>
            <li>Developmental Screening</li>
            <li>ADHD Management</li>
            <li>Autism Support</li>
            <li>Early Intervention</li>
            <li>Special Education</li>
            <li>Social Skills Training</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold text-blue-600 mb-4">USEFUL LINKS</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Therapies</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Appointments</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold text-blue-600 mb-4">CONTACT US</h3>
          <div className="flex items-center gap-2 mb-2">
            <FaWhatsapp className="text-green-600" />
            <span>Phone: +91 63881 03445</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <FaEnvelope className="text-red-600" />
            <span>Email: growthwayz@gmail.com</span>
          </div>
          <h4 className="text-base font-semibold mb-2">FOLLOW US</h4>
          <div className="flex gap-4 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
              <FaInstagram />
            </a>
          </div>

        <h4 className="text-base font-semibold mb-2 mt-4 text-blue-400">OUR OFFICES</h4>
                    <p><strong>📍 Address:</strong> A264, Sector 46, Noida, 201301, India</p>


          
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-white text-center py-3 text-sm">
        Growth Wayz © 2025 All rights reserved
      </div>
    </footer>
  );
}
