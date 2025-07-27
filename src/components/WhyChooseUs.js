'use client';
import React from 'react';

export default function WhyChooseUs() {
  return (
    <div className="py-16 px-6 md:px-20 bg-white" data-aos="zoom-in-up">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1" data-aos="zoom-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            We are committed to providing compassionate, personalized care tailored to each child’s needs. Here’s what makes us stand out:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-base">
            <li>Experienced and certified therapists</li>
            <li>Individualized therapy programs</li>
            <li>Friendly and inclusive environment</li>
            <li>Regular progress tracking and feedback</li>
            <li>Parent involvement and support</li>
            <li>Evidence-based intervention techniques</li>
          </ul>
        </div>

        {/* Image */}
        <div className="flex-1" data-aos="zoom-in-up">
          <img
            src="/images/why_choose_us.jpg"
            alt="Why Choose Us"
            className="w-full h-auto rounded-lg  object-cover"
          />
        </div>
      </div>
    </div>
  );
}
