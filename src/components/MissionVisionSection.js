'use client';
import React from 'react';

export default function MissionVisionSection() {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-20" data-aos="zoom-in-up">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <div className="bg-white shadow-md rounded-lg p-8"data-aos="zoom-in-up" >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At GrowthWayz, our mission is to provide a nurturing and engaging
            environment where children can grow intellectually, emotionally,
            and socially. We strive to build a foundation that supports each
            child's individual development, helping them reach their full
            potential through expert guidance, personalized programs, and a
            child-centric approach.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white shadow-md rounded-lg p-8" data-aos="zoom-in-up">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Our vision is to become a trusted center of excellence in child
            development, where innovation and compassion combine to shape
            confident, creative, and capable individuals. We envision a future
            where every child receives the tools and support they need to excel
            in life and contribute meaningfully to society.
          </p>
        </div>
      </div>
    </div>
  );
}
