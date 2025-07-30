'use client'
import React from 'react';
import { FaChild, FaUserMd, FaHeart, FaBrain } from 'react-icons/fa';

export default function OurExpertTeam() {
  return (
    <div className="py-16 px-6 md:px-20 bg-white" data-aos="zoom-in-up">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Expert Team
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Dedicated professionals committed to your child's growth and development
          </p>
        </div>

        {/* Team Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="text-center p-6 bg-blue-50 rounded-xl" data-aos="zoom-in-up">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <FaChild className="text-blue-600 text-2xl" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Pediatric Specialists</h3>
            <p className="text-gray-600">
              Certified therapists with specialized training in child development
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-6 bg-purple-100 rounded-xl" data-aos="zoom-in-up">
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-100 p-4 rounded-full">
                <FaBrain className="text-yellow-600 text-2xl" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Nurturing Environment</h3>
            <p className="text-gray-600">
              Warm, welcoming space where children feel safe to learn and grow
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-6 bg-yellow-50 rounded-xl" data-aos="zoom-in-up">
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-100 p-4 rounded-full">
                <FaHeart className="text-yellow-600 text-2xl" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Compassionate Care</h3>
            <p className="text-gray-600">
              Warm, patient approach that makes children feel comfortable
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-center p-6 bg-purple-50 rounded-xl" data-aos="zoom-in-up">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 p-4 rounded-full">
                <FaBrain className="text-purple-600 text-2xl" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Innovative Methods</h3>
            <p className="text-gray-600">
              Using evidence-based, cutting-edge therapeutic techniques
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-3 rounded-full text-lg transition-all shadow-lg">
            Meet Our Team
          </button>
        </div>
      </div>
    </div>
  );
}