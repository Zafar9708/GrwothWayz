'use client';
import React from 'react';

export default function ServicesSection() {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-20" data-aos="zoom-in-up">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Therapy Services Card */}
        <div className="bg-white shadow-md rounded-lg p-8" data-aos="zoom-in-up">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">Our Therapy Services</h2>
          <ul className="text-gray-700 leading-relaxed space-y-3">
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">•</span>
              <span>Early childhood intervention programs</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">•</span>
              <span>Speech and language therapy</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">•</span>
              <span>Occupational therapy for sensory integration</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">•</span>
              <span>Behavioral therapy and social skills training</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">•</span>
              <span>Individualized education plans</span>
            </li>
          </ul>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300">
            Learn About Our Therapies
          </button>
        </div>

        {/* Approach Card */}
        <div className="bg-white shadow-md rounded-lg p-8" data-aos="zoom-in-up">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">Our Unique Approach</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-yellow-100 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Child-Centered Care</h3>
                <p className="text-gray-600 text-sm">Programs tailored to each child's unique needs and abilities</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-yellow-100 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Evidence-Based Methods</h3>
                <p className="text-gray-600 text-sm">Using scientifically validated techniques for maximum effectiveness</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-yellow-100 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Family Involvement</h3>
                <p className="text-gray-600 text-sm">Engaging parents in the therapeutic process for lasting results</p>
              </div>
            </div>
          </div>
          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition duration-300">
            Our Treatment Philosophy
          </button>
        </div>
      </div>
    </div>
  );
}