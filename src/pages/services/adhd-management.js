// src/pages/services/adhd-management.js
"use client";
import React from "react";
import Head from "next/head";
import HeaderTop from "../../components/HeaderTop";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ADHDManagement = () => {
  return (
    <>
      <Head>
        <title>ADHD Management | GrowthWayz</title>
        <meta
          name="description"
          content="Comprehensive ADHD management services for children and adults to improve focus, self-regulation, and success in daily life."
        />
      </Head>

      <div className="hidden md:block">
        <HeaderTop />
      </div>
      <Navbar />

      <main className="bg-gray-50 py-12 px-4 md:px-10 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Page Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 text-center leading-tight sm:px-6 lg:px-0">
            ADHD Management
          </h1>
          <p className="text-lg text-gray-700 mb-10 text-center max-w-4xl mx-auto px-4 sm:px-0 leading-relaxed">
            Our comprehensive ADHD Management program helps children and adults improve focus, reduce impulsivity,
            and develop practical strategies for academic, social, and daily life success.
          </p>

          {/* Intro Grid */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src="https://workscounselingcenter.com/wp-content/uploads/2024/09/Understanding-ADHD-1080x675.jpg"
              alt="ADHD therapy"
              className="rounded-2xl shadow-lg w-full max-h-[450px] object-cover"
              loading="lazy"
            />

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">What is ADHD?</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder characterized
                  by difficulty maintaining attention, hyperactivity, and impulsivity. It affects children and adults,
                  impacting learning, social relationships, and everyday functioning.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Early diagnosis and personalized interventions can significantly improve quality of life and
                  unlock potential.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our ADHD Services Include:</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Individualized behavior therapy plans tailored to each client’s needs</li>
                  <li>Parent coaching and education sessions to support home management</li>
                  <li>Classroom support and school collaboration for academic success</li>
                  <li>Executive function coaching for better time management and organization</li>
                  <li>Routine building and self-regulation strategies for everyday life</li>
                  <li>Social skills development emphasizing communication and peer relationships</li>
                </ul>
              </section>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <section className="mt-16 bg-white rounded-xl p-10 shadow-lg">
            <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Why Choose GrowthWayz for ADHD Management?</h2>
            <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg leading-relaxed">
              <div>
                <p className="mb-5">
                  Our experienced professionals utilize evidence-based methods such as Cognitive Behavioral Therapy (CBT),
                  behavioral interventions, and skills training to empower individuals with ADHD to thrive academically,
                  socially, and personally.
                </p>
                <p>
                  We take a holistic approach, partnering with families, educators, and medical providers to ensure
                  consistent support tailored to each individual's journey.
                </p>
              </div>
              <div>
                <p className="mb-5">
                  From managing impulsivity, improving focus, to enhancing organizational skills, our program provides
                  practical tools that foster lasting success.
                </p>
                <p>
                  At GrowthWayz, we believe ADHD is not a limitation but a difference, and our mission is to unlock
                  each person's unique potential.
                </p>
              </div>
            </div>
          </section>

          {/* Additional Content Section */}
          <section className="mt-16 max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">How We Support Your Child and Family</h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Our ADHD management services are designed to support not only the individual but the entire family by:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
              <li>Providing parent education to better understand ADHD and strategies for daily challenges</li>
              <li>Offering coaching for academic skills and study habits tailored to ADHD learning styles</li>
              <li>Helping develop coping mechanisms for emotional regulation and stress management</li>
              <li>Facilitating communication with schools to maximize educational support and accommodations</li>
              <li>Monitoring progress regularly to adjust treatment plans for maximum effectiveness</li>
            </ul>
          </section>

          {/* Call to Action */}
          <section className="mt-16 py-12 bg-blue-600 rounded-xl max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-extrabold text-white mb-6">
              Ready to Begin Your ADHD Journey?
            </h2>
            <p className="text-white mb-8 text-lg max-w-xl mx-auto leading-relaxed">
              Contact us today to schedule a comprehensive ADHD assessment and set your child or yourself on the path
              to improved focus, self-regulation, and success.
            </p>
            <button
              className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
              aria-label="Book a consultation"
            >
              Book a Consultation
            </button>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ADHDManagement;
