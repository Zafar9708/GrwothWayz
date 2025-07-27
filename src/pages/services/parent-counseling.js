// src/pages/services/parent-counseling.js
"use client"
import React from 'react';
import Head from 'next/head';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export default function ParentCounseling() {
  return (
    <>
<div className="hidden md:block">
        <HeaderTop />
      </div>
    <Navbar />
      <Head>
        <title>Parent Counseling | GrowthWayz</title>
        <meta name="description" content="Supportive parent counseling services to help you raise confident and emotionally resilient children." />
      </Head>

      <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
             <img
                src="/images/parent_counseling.jpg"
                alt="Occupational Therapy"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-4xl font-bold text-purple-900 mb-4">Parent Counseling</h2>
              <p className="text-gray-700 mb-4">
                Raising a child is one of the most rewarding yet challenging responsibilities. At GrowthWayz, we recognize the unique struggles that modern-day parents face. Our <strong>Parent Counseling</strong> sessions are designed to offer support, guidance, and clarity to help parents create a nurturing environment at home.
              </p>
              <p className="text-gray-700 mb-4">
                Whether you are navigating behavioral issues, dealing with academic pressure, or seeking to improve communication with your child, our expert counselors are here to guide you every step of the way.
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Individual & family-based counseling sessions</li>
                <li>Strategies for positive discipline and communication</li>
                <li>Support for managing stress, anxiety, and parental guilt</li>
                <li>Workshops on modern parenting techniques</li>
                <li>Customized action plans for behavior improvement</li>
              </ul>

              <div className="mt-6">
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition">
                  Book a Counseling Session
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h3 className="text-3xl font-semibold text-purple-800 mb-4">Why Parent Counseling Matters</h3>
            <p className="text-gray-700 mb-4">
              Parenting doesn’t come with a manual, but with the right guidance, every parent can make informed and confident decisions. Counseling bridges the gap between challenges and solutions by empowering you with emotional intelligence, better communication skills, and a deeper understanding of your child’s needs.
            </p>
            <p className="text-gray-700">
              Let us walk this journey with you — building stronger families, happier homes, and resilient children.
            </p>
          </div>
        </div>
      </section>

       <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-pink-800 mb-10">Why Parent Counseling Matters</h2>
          <div className="grid md:grid-cols-3 gap-8 text-gray-700">
            <div className="bg-pink-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Improved Communication</h3>
              <p>Learn effective ways to communicate with your child, helping bridge emotional and generational gaps.</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Managing Stress</h3>
              <p>Discover strategies to manage parenting stress, build patience, and maintain emotional balance.</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Behavioral Support</h3>
              <p>Get guidance for managing difficult behaviors, improving routines, and creating positive reinforcement systems.</p>
            </div>
          </div>
        </div>
      </section>

      
      
      <Footer/>
    </>
  );
}
