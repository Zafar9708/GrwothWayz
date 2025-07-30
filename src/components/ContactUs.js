'use client';
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact <span className="text-blue-600">GrowthWayz</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or want to schedule an appointment? Reach out to us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Information */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Our Contact Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Our Location</h4>
                    <p className="text-gray-600">A264, Sector 46, Noida, 201301, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <FaPhoneAlt className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Phone Number</h4>
                    <a href="tel:+916388103445" className="text-gray-600 hover:text-blue-600 transition">
                      +91 63881 03445
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email Address</h4>
                    <a href="mailto:growthwayz@gmail.com" className="text-gray-600 hover:text-blue-600 transition">
                      growthwayz@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Working Hours</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-red-500">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100" data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300 flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}