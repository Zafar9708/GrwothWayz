// src/pages/services/occupational-therapy.js
"use client";

import React from 'react';
import Head from 'next/head';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function OccupationalTherapy() {
  return (
    <>
    <div className="hidden md:block">
            <HeaderTop />
          </div>
      <Navbar />
      <Head>
        <title>Occupational Therapy | GrowthWayz</title>
        <meta
          name="description"
          content="Empowering children to build essential life skills through personalized occupational therapy sessions at GrowthWayz."
        />
      </Head>

      {/* Main Hero Section */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div data-aos="fade-right">
              <img
                src="/images/occupationaltherapy.jpg"
                alt="Occupational Therapy"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
            <div data-aos="fade-left">
              <h1 className="text-4xl font-extrabold text-green-800 mb-4">
                Occupational Therapy at GrowthWayz
              </h1>
              <p className="text-gray-700 mb-6 text-lg">
                Our Occupational Therapy sessions help children gain independence in daily life by strengthening motor skills, coordination, sensory processing, and emotional regulation.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-3 text-base">
                <li>Fine & gross motor development</li>
                <li>Sensory integration activities</li>
                <li>Self-care & daily routine training</li>
                <li>Play-based therapy techniques</li>
                <li>Certified therapists for every child</li>
              </ul>
              <button className="mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition">
                Schedule a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Holistic Approach */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Our Holistic Approach</h2>
          <p className="text-gray-700 text-lg mb-6">
            At GrowthWayz, we blend traditional therapy with creative, engaging activities to make learning fun. Sessions are goal-driven yet child-led to ensure lasting impact.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left mt-8">
            <div className="bg-green-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Individual Assessments</h3>
              <p className="text-gray-600">
                A comprehensive evaluation helps us create tailored treatment plans.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Customized Programs</h3>
              <p className="text-gray-600">
                Activities are crafted around your child’s strengths, pace, and interests.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Family Support</h3>
              <p className="text-gray-600">
                Parents are part of the process—we offer strategies and regular updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Support Your Child’s Growth Today</h2>
          <p className="text-lg mb-6">
            Book a free session with our expert occupational therapists and begin your child’s journey to independence.
          </p>
          <button className="px-8 py-3 bg-white text-green-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition">
            Book Your Session
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
