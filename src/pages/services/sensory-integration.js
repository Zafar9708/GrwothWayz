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

      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-800 mb-6">
              Sensory Integration Therapy
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Sensory Integration Therapy helps children who have difficulty processing sensory input like touch, sound, movement, and body awareness. It is especially helpful for children with autism spectrum disorders, ADHD, and other developmental conditions.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Our expert occupational therapists use a play-based approach to gradually expose children to sensory experiences in a structured, supportive environment. This helps them learn how to regulate their reactions and improve attention, coordination, and behavior.
            </p>
            <p className="text-gray-700 text-lg">
              Sensory integration therapy can make a significant impact in improving your child's ability to focus, interact with others, and succeed in school and daily life.
            </p>
          </div>

          <div className="rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/little-boy-doing-sensory-integration-therapy_23-2149114285.jpg"
              alt="Sensory Integration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

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
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-800 mb-6">Is Your Child Sensitive to Sounds or Touch?</h3>
          <p className="text-gray-700 text-lg mb-6">
            If your child becomes overwhelmed by textures, sounds, or bright lights, or if they have difficulty staying still or focused, they may benefit from sensory integration therapy. Our therapists conduct a detailed assessment and create a personalized plan to help your child thrive.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            Book a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SensoryIntegration;
