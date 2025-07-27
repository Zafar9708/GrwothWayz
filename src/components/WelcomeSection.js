'use client';
import React from 'react';
import Link from 'next/link';

export default function WelcomeSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-white" data-aos="zoom-in-up">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0" data-aos="zoom-in-up">
        <img
          src="/images/Welcome.jpg"
          alt="Child Development"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left" data-aos="zoom-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Welcome to GrowthWayz Child Development Center
        </h2>

        <h3 className="text-xl font-semibold text-red-600 mb-2">ABOUT US</h3>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          At GrowthWayz, we are dedicated to nurturing the intellectual, emotional,
          and social growth of children through personalized learning and
          expert-guided development programs. Our mission is to empower each child
          with confidence, creativity, and skills to thrive in a dynamic world.
        </p>

        {/* Learn More Button */}
        <Link href="/about">
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
