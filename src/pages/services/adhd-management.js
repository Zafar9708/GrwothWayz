// src/pages/services/adhd-management.js

import React from 'react';
import HeaderTop from '../../components/HeaderTop';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ADHDManagement = () => {
  return (
    <>
      <div className="hidden md:block">
        <HeaderTop />
      </div>
      <Navbar />

      <main className="bg-gray-50 py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
            ADHD Management
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
            Our comprehensive ADHD Management program helps children and adults improve focus,
            reduce impulsivity, and develop strategies for success in academic, social,
            and daily life.
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src="https://workscounselingcenter.com/wp-content/uploads/2024/09/Understanding-ADHD-1080x675.jpg"
              alt="ADHD therapy"
              className="rounded-2xl shadow-lg"
            />

            <div>
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                What is ADHD?
              </h2>
              <p className="text-gray-700 mb-4">
                Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental
                disorder that affects attention, self-control, and the ability to sit still.
                It can impact learning, relationships, and overall functioning.
              </p>

              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Our ADHD Services Include:
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Individualized behavior therapy plans</li>
                <li>Parent coaching and education sessions</li>
                <li>Classroom support and school collaboration</li>
                <li>Executive function coaching</li>
                <li>Routine building and self-regulation strategies</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-3">
                  Our experienced professionals use evidence-based strategies like
                  Cognitive Behavioral Therapy (CBT), behavioral interventions,
                  and skill-building to help individuals with ADHD thrive.
                </p>
                <p className="text-gray-700">
                  We work closely with families and schools to ensure consistency and
                  progress in all areas of life.
                </p>
              </div>
              <div>
                <p className="text-gray-700 mb-3">
                  Whether your child struggles with impulsivity, organization, focus,
                  or time management, we offer practical tools that promote long-term success.
                </p>
                <p className="text-gray-700">
                  ADHD does not define your child’s potential — we help unlock it.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              Ready to Begin?
            </h3>
            <p className="text-gray-700 mb-6">
              Contact us today to schedule an ADHD assessment and begin personalized treatment.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md transition">
              Book a Consultation
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ADHDManagement;
