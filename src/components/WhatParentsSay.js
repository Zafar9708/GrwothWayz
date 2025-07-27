import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Aarav’s Mom',
    message: 'GrowthWayz has transformed my child’s confidence and communication. Truly grateful!',
  },
  {
    name: 'Riya’s Dad',
    message: 'Excellent staff and personalized attention. My daughter enjoys every session here.',
  },
  {
    name: 'Kabir’s Parents',
    message: 'From speech delay to active conversation, the improvement is visible. Thank you!',
  },
  {
    name: 'Zoya’s Mom',
    message: 'The team is supportive, professional, and always welcoming. Highly recommended.',
  },
  {
    name: 'Advait’s Dad',
    message: 'Our child loves the center. The structured programs make a huge difference.',
  },
];

const WhatParentsSay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="py-16 bg-gray-50" data-aos="zoom-in-up">
      <h2 className="text-3xl font-bold text-center mb-4 text-indigo-600">What Parents Say</h2>
      <p className="text-center text-gray-600 mb-10">Here’s how GrowthWayz impacted families</p>

      <div className="relative max-w-3xl mx-auto px-4">
        <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-500">
          <p className="text-lg text-gray-700 italic mb-4">“{testimonials[currentIndex].message}”</p>
          <h4 className="text-right font-semibold text-indigo-600">– {testimonials[currentIndex].name}</h4>
        </div>

        <div className="flex justify-between mt-6 px-4">
          <button
            onClick={prevSlide}
            className="text-indigo-600 hover:text-indigo-800 transition"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="text-indigo-600 hover:text-indigo-800 transition"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatParentsSay;
