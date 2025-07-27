// src/pages/services/special-education.js
import React from 'react';
import Head from 'next/head';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export default function SpecialEducation() {
  return (
    <>
    <div className="hidden md:block">
            <HeaderTop />
          </div>
    <Navbar />
      <Head>
        <title>Special Education | GrowthWayz</title>
      </Head>
      <section className="bg-gradient-to-br from-violet-100 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <img
                src="/images/special_education.jpg"
                alt="Occupational Therapy"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
          </div>
          <div data-aos="fade-left">
            <h2 className="text-4xl font-bold text-violet-900 mb-6">
              Special Education Services
            </h2>
            <p className="text-gray-700 mb-4">
              At GrowthWayz, we believe that every child deserves an equal opportunity to learn and thrive. Our Special Education services are tailored to support children with learning differences, developmental delays, and diverse educational needs.
            </p>
            <p className="text-gray-700 mb-4">
              With certified special educators and a personalized approach, we work closely with children, parents, and schools to create inclusive and effective learning environments.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Individualized Education Plans (IEPs)</li>
              <li>One-on-one and small group sessions</li>
              <li>Support for children with ADHD, Autism, Dyslexia, and other learning differences</li>
              <li>Inclusive teaching strategies tailored to each child’s pace</li>
              <li>Speech, language, and social skills enhancement</li>
              <li>Parent training and guidance for home-based learning</li>
              <li>Progress monitoring and feedback reporting</li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold text-violet-800 mb-4">Why Choose GrowthWayz?</h3>
          <p className="text-gray-700 mb-6">
            Our holistic approach ensures that each child receives a nurturing environment where they feel supported, understood, and motivated to learn. We blend evidence-based practices with compassion and creativity to deliver lasting impact.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 text-left">
            <div className="p-5 border rounded-lg shadow-md bg-violet-50">
              <h4 className="text-lg font-bold mb-2 text-violet-900">Qualified Experts</h4>
              <p className="text-gray-600">Our educators are trained professionals with years of experience in special education.</p>
            </div>
            <div className="p-5 border rounded-lg shadow-md bg-violet-50">
              <h4 className="text-lg font-bold mb-2 text-violet-900">Child-Centered Learning</h4>
              <p className="text-gray-600">Every session is tailored to the unique learning style, pace, and needs of the child.</p>
            </div>
            <div className="p-5 border rounded-lg shadow-md bg-violet-50">
              <h4 className="text-lg font-bold mb-2 text-violet-900">Collaborative Approach</h4>
              <p className="text-gray-600">We involve parents, therapists, and teachers to ensure consistent support across environments.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
