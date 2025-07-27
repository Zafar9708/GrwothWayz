"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="overflow-x-hidden bg-white text-gray-800">
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 md:px-20 text-center" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About GrowthWayz</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Empowering children to discover their true potential through love, learning, and leadership.
        </p>
      </section>
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-8 md:px-20 max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="zoom-in-up">
            <h2 className="text-4xl font-bold mb-4 text-[#2c3e50]">About Us</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Welcome to our institute where we believe in nurturing every child’s potential. Our goal is to provide a safe, caring, and stimulating environment that encourages learning and growth.
            </p>
            <p className="mt-4 text-gray-600">
              We are committed to excellence in education, instilling values, and building strong foundations for a brighter future.
            </p>
          </div>

          <div data-aos="zoom-in-left" className="flex justify-center">
            <img
              src="/images/about-us.jpg"
              alt="About Us"
              className="rounded-xl shadow-xl w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16 px-4 sm:px-8 md:px-20 max-w-screen-xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-3xl font-semibold text-[#34495e]">Our Mission & Vision</h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            To empower every learner with the skills, confidence, and passion to thrive in life.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div data-aos="fade-right" className="bg-white shadow-lg p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-2 text-[#2c3e50]">Our Mission</h4>
            <p className="text-gray-600">
              Our mission is to foster intellectual and emotional development through a blend of academics and co-curricular activities.
            </p>
          </div>
          <div data-aos="fade-left" className="bg-white shadow-lg p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-2 text-[#2c3e50]">Our Vision</h4>
            <p className="text-gray-600">
              To be a center of excellence in early childhood education, building confident, compassionate future leaders.
            </p>
          </div>
        </div>
      </section>
      {/* Our Team */}
      <section className="py-16 px-6 md:px-20 bg-gray-100" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-10">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: 'Dr. Ayesha Khan', role: 'Child Psychologist', image: '/images/team1.jpg' },
              { name: 'Mr. Arjun Mehta', role: 'Occupational Therapist', image: '/images/team2.jpg' },
              { name: 'Ms. Rina Paul', role: 'Speech Therapist', image: '/images/team3.jpg' },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300" data-aos="zoom-in-up">
                <img src={member.image} alt={member.name} className="w-32 h-32 object-cover mx-auto rounded-full mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      {/* <section className="py-16 px-4 sm:px-8 md:px-20 max-w-screen-xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-3xl font-semibold text-[#34495e]">Our Core Values</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div data-aos="flip-left" className="p-6 shadow-lg bg-white rounded-lg hover:shadow-2xl transition">
            <img src="/icons/compassion1.jpg" alt="Compassion" className="mx-auto h-16 mb-4" />
            <h4 className="font-bold text-lg text-[#2c3e50]">Compassion</h4>
            <p className="text-gray-600 mt-2">
              We nurture empathy and kindness in every child.
            </p>
          </div>
          <div data-aos="flip-left" className="p-6 shadow-lg bg-white rounded-lg hover:shadow-2xl transition">
            <img src="/icons/excellence.svg" alt="Excellence" className="mx-auto h-16 mb-4" />
            <h4 className="font-bold text-lg text-[#2c3e50]">Excellence</h4>
            <p className="text-gray-600 mt-2">
              We pursue high standards in education and personal growth.
            </p>
          </div>
          <div data-aos="flip-left" className="p-6 shadow-lg bg-white rounded-lg hover:shadow-2xl transition">
            <img src="/icons/integrity.svg" alt="Integrity" className="mx-auto h-16 mb-4" />
            <h4 className="font-bold text-lg text-[#2c3e50]">Integrity</h4>
            <p className="text-gray-600 mt-2">
              We teach honesty, responsibility, and respect.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutUs;
