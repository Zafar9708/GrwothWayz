// src/pages/services/sensory-integration.js
import React from 'react';
import HeaderTop from '../../components/HeaderTop';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SensoryIntegration = () => {
  return (
    <>
      <div className="hidden md:block">
        <HeaderTop />
      </div>
      <Navbar />

      {/* Introduction Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-800 mb-6">
              Sensory Integration Therapy
            </h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Sensory Integration Therapy helps children who have difficulty processing sensory input like touch, sound, movement, and body awareness. It is especially helpful for children with autism spectrum disorders, ADHD, and other developmental conditions.
            </p>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Our expert occupational therapists use a play-based approach to gradually expose children to sensory experiences in a structured, supportive environment. This helps them learn how to regulate their reactions and improve attention, coordination, and behavior.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Sensory integration therapy can make a significant impact in improving your child's ability to focus, interact with others, and succeed in school and daily life.
            </p>
          </div>

          <div className="rounded-xl shadow-lg overflow-hidden max-h-[450px] md:max-h-[500px]">
            <img
              src="https://img.freepik.com/free-photo/little-boy-doing-sensory-integration-therapy_23-2149114285.jpg"
              alt="Sensory Integration"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-100 py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            Benefits of Sensory Integration Therapy
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-lg list-disc list-inside">
            <li>Improved attention and focus</li>
            <li>Better balance and coordination</li>
            <li>Enhanced emotional regulation</li>
            <li>Decreased anxiety and meltdowns</li>
            <li>Greater participation in daily activities</li>
            <li>Improved social skills and communication</li>
            <li>Reduced sensory avoidant or seeking behaviors</li>
            <li>Better tolerance to environmental stimuli</li>
          </ul>
        </div>
      </section>

      {/* Who Can Benefit Section */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center max-w-4xl">
          <h3 className="text-3xl font-bold text-blue-800 mb-6">
            Is Sensory Integration Therapy Right for Your Child?
          </h3>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Children who are hyper- or hypo-sensitive to sensory stimuli like sounds, textures, lights, or movement may experience difficulty in daily activities, learning, and social interactions. Symptoms include:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg max-w-2xl mx-auto mb-8 text-left space-y-3">
            <li>Overwhelmed or distressed by loud noises or bright lights</li>
            <li>Dislike or avoidance of certain textures or clothing</li>
            <li>Difficulty sitting still or focusing for long periods</li>
            <li>Clumsiness or poor coordination</li>
            <li>Frequent tantrums or meltdowns triggered by sensory input</li>
            <li>Seeking intense sensory experiences (e.g., spinning, jumping)</li>
          </ul>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Our therapists conduct thorough assessments to identify your child’s unique sensory profile and develop a customized therapy plan tailored to their needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg"
            aria-label="Book a Sensory Integration Therapy consultation"
          >
            Book a Consultation
          </a>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-blue-50 py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            Our Therapy Approach
          </h3>
          <div className="grid md:grid-cols-3 gap-10 text-gray-700 text-lg leading-relaxed">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h4 className="font-bold mb-3 text-blue-700">Play-Based & Child-Centered</h4>
              <p>
                Therapy sessions use engaging play activities tailored to each child’s interests and sensory needs, making learning enjoyable and effective.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h4 className="font-bold mb-3 text-blue-700">Structured Sensory Exposure</h4>
              <p>
                Children are gently guided through controlled sensory experiences that help build tolerance and promote self-regulation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h4 className="font-bold mb-3 text-blue-700">Family Involvement & Education</h4>
              <p>
                We work closely with families, providing education and home strategies to support progress between therapy sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-800 mb-10">What Parents Say</h3>
          <div className="space-y-10 max-w-3xl mx-auto">
            <blockquote className="italic text-gray-700 text-lg">
              "The sensory integration therapy at GrowthWayz has transformed our child’s ability to cope with daily challenges. The therapists are so patient and skilled. Highly recommended!"
              <footer className="mt-3 font-semibold text-blue-700">— Sarah K.</footer>
            </blockquote>
            <blockquote className="italic text-gray-700 text-lg">
              "I’ve seen tremendous improvement in my son’s attention and behavior since starting therapy here. The family support is invaluable."
              <footer className="mt-3 font-semibold text-blue-700">— Michael T.</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-14 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-extrabold mb-6">
            Help Your Child Thrive with Sensory Integration Therapy
          </h2>
          <p className="mb-8 text-lg max-w-xl mx-auto leading-relaxed">
            Let GrowthWayz guide your child on a path towards better sensory processing, improved focus, and increased independence.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            aria-label="Book a Sensory Integration Therapy session"
          >
            Book a Session
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SensoryIntegration;
