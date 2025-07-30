"use client"
import React from 'react';
import Head from 'next/head';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaChild, FaBrain, FaHandsHelping, FaUsers, FaChartLine, FaSmile } from 'react-icons/fa';

export default function BehaviorTherapy() {
  return (
    <>
      <Head>
        <title>Behavior Therapy | GrowthWayz</title>
        <meta name="description" content="Transformative behavior therapy for children at GrowthWayz - building skills for life through evidence-based approaches." />
      </Head>

      <div className="hidden md:block">
        <HeaderTop />
      </div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  Behavior Therapy
                </span> That Works
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Empowering children to develop positive behaviors, emotional regulation, and social skills through compassionate, evidence-based therapy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Book Free Assessment
                </button>
                <button className="px-8 py-3 border-2 border-amber-600 text-amber-600 font-semibold rounded-full hover:bg-amber-50 transition">
                  Learn Our Methods
                </button>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/behavioral_therapy.jpg"
                  alt="Child receiving behavior therapy"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-amber-600/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-amber-600">Behavior Therapy</span> Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs addressing behavioral challenges with proven techniques
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBrain className="text-3xl text-amber-600" />,
                title: "ABA Therapy",
                description: "Applied Behavior Analysis for measurable progress"
              },
              {
                icon: <FaChild className="text-3xl text-orange-600" />,
                title: "Social Skills",
                description: "Building positive peer interactions and friendships"
              },
              {
                icon: <FaHandsHelping className="text-3xl text-amber-500" />,
                title: "Emotional Regulation",
                description: "Teaching coping strategies and self-control"
              },
              {
                icon: <FaUsers className="text-3xl text-orange-500" />,
                title: "Parent Training",
                description: "Empowering families with effective strategies"
              },
              {
                icon: <FaChartLine className="text-3xl text-amber-400" />,
                title: "Progress Tracking",
                description: "Data-driven approach to measure improvement"
              },
              {
                icon: <FaSmile className="text-3xl text-orange-400" />,
                title: "Positive Reinforcement",
                description: "Encouraging desired behaviors naturally"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-white p-4 rounded-full shadow-sm">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Addressed */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Challenges We <span className="text-amber-600">Address</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "ADHD behaviors",
                  "Autism Spectrum",
                  "Anxiety & fears",
                  "Aggression",
                  "Defiance",
                  "Meltdowns",
                  "Social difficulties",
                  "School refusal"
                ].map((challenge, index) => (
                  <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 bg-amber-100 rounded-full flex items-center justify-center">
                        <div className="h-2 w-2 bg-amber-600 rounded-full"></div>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Assessment Process</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Initial Consultation",
                    description: "Discuss concerns and child's history"
                  },
                  {
                    title: "Behavioral Evaluation",
                    description: "Standardized assessments and observation"
                  },
                  {
                    title: "Customized Plan",
                    description: "Tailored intervention strategies"
                  },
                  {
                    title: "Ongoing Support",
                    description: "Regular reviews and adjustments"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-100 text-amber-600 font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition">
                Start Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lasting <span className="text-amber-600">Benefits</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How behavior therapy transforms children's lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Improved Behavior",
                description: "Reduction in challenging behaviors and increased positive actions"
              },
              {
                title: "Emotional Growth",
                description: "Better coping skills and emotional regulation"
              },
              {
                title: "Social Success",
                description: "Stronger peer relationships and communication"
              },
              {
                title: "Academic Progress",
                description: "Increased focus and classroom participation"
              },
              {
                title: "Family Harmony",
                description: "Reduced stress and improved home dynamics"
              },
              {
                title: "Life Skills",
                description: "Development of independence and self-care abilities"
              }
            ].map((benefit, index) => (
              <div key={index} className={`border-l-4 border-amber-500 pl-6 py-4 hover:bg-amber-50 transition-all duration-300`}>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to See Positive Changes?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Our behavior therapists are ready to help your child develop essential skills for success at home, school, and life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-amber-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition">
              Book Appointment
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition">
              Call Us Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}