'use client';
import React from 'react';

export default function SpecializedPrograms() {
  return (
    <div className="py-16 px-6 md:px-20 bg-gray-50" data-aos="zoom-in-up">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-aos="zoom-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Specialized Programs
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tailored interventions designed to support your child's unique developmental journey
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Program 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105" data-aos="zoom-in-up">
            <div className="h-48 overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/2205514687/photo/physical-therapist-helps-a-young-girl-develop-her-motor-skills.jpg?s=612x612&w=0&k=20&c=DL6Ip9mNFAlHnl7j10w4S5KmqAB9Bh0TI6NKxWRp2SY="
                alt="Early Intervention Program"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Early Intervention</h3>
              <p className="text-gray-600 mb-4">
                For children 0-3 years showing developmental delays, with play-based therapies to boost milestones.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition">
                Learn More →
              </button>
            </div>
          </div>

          {/* Program 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105" data-aos="zoom-in-up">
            <div className="h-48 overflow-hidden">
              <img
                src="https://lifeway.life/wp-content/uploads/2020/12/speech-therapy-in-ajman.jpg"
                alt="Speech & Language Therapy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-700 mb-2">Speech & Language</h3>
              <p className="text-gray-600 mb-4">
                Customized programs for articulation, language comprehension, and social communication skills.
              </p>
              <button className="text-green-600 font-medium hover:text-green-800 transition">
                Learn More →
              </button>
            </div>
          </div>

          {/* Program 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105" data-aos="zoom-in-up">
            <div className="h-48 overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/1130450506/photo/toddler-girl-in-child-occupational-therapy-session-doing-sensory-playful-exercises-with-her.jpg?s=612x612&w=0&k=20&c=GdJYVjiEiGaMmFMt-4m4_pqjwGO6JV1En-UJmZ0awNo="
                alt="Sensory Integration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-purple-700 mb-2">Sensory Integration</h3>
              <p className="text-gray-600 mb-4">
                Helping children process sensory information effectively through specialized OT techniques.
              </p>
              <button className="text-purple-600 font-medium hover:text-purple-800 transition">
                Learn More →
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12" data-aos="zoom-in-up">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-full text-lg transition-all shadow-lg">
            View All Programs
          </button>
        </div>
      </div>
    </div>
  );
}