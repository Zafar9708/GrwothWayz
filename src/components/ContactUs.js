'use client';
import React from 'react';

export default function ContactUs() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left - Location Info */}
        <div className="space-y-6" data-aos="zoom-in-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700">
            We'd love to hear from you! Reach out to us through any of the following ways.
          </p>
          <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
            <p className="text-gray-800"><strong>📍 Address:</strong> A264, Sector 46, Noida, 201301, India</p>
            <p className="text-gray-800"><strong>📞 Phone:</strong> 6388103445</p>
            <p className="text-gray-800"><strong>✉️ Email:</strong> laiba3959@gmail.com</p>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-xl" data-aos="zoom-in-up">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a message</h3>
          <form
            action="mailto:laiba3959@gmail.com"
            method="POST"
            encType="text/plain"
            className="space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="First Name"
                placeholder="First Name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="Last Name"
                placeholder="Last Name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="tel"
              name="Phone"
              placeholder="Your Phone"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="Message"
              rows="4"
              placeholder="Type your message..."
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
