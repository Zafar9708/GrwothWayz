"use client"
import React from 'react';
import Head from 'next/head';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaBookOpen, FaUserGraduate, FaChalkboardTeacher, FaHandsHelping, FaClipboardList, FaSchool } from 'react-icons/fa';

export default function SpecialEducation() {
  return (
    <>
      <div className="hidden md:block">
        <HeaderTop />
      </div>
      <Navbar />
      
      <Head>
        <title>Special Education | GrowthWayz</title>
        <meta name="description" content="Personalized special education services for children with diverse learning needs at GrowthWayz" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-50 to-indigo-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                  Special Education
                </span> Services
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Empowering children with diverse learning needs through personalized education plans that celebrate their unique abilities and learning styles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Book Free Assessment
                </button>
                <button className="px-8 py-3 border-2 border-violet-600 text-violet-600 font-semibold rounded-full hover:bg-violet-50 transition">
                  Learn Our Approach
                </button>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/special_education.jpg"
                  alt="Child receiving special education support"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-violet-600/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-violet-600">Special Education</span> Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored learning solutions designed for diverse needs and abilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBookOpen className="text-3xl text-violet-600" />,
                title: "Individualized Education",
                description: "Custom learning plans aligned with each child's strengths and needs"
              },
              {
                icon: <FaUserGraduate className="text-3xl text-indigo-600" />,
                title: "Learning Differences",
                description: "Specialized support for dyslexia, dyscalculia, and other challenges"
              },
              {
                icon: <FaChalkboardTeacher className="text-3xl text-violet-500" />,
                title: "Academic Support",
                description: "One-on-one tutoring in core subjects at the child's pace"
              },
              {
                icon: <FaHandsHelping className="text-3xl text-indigo-500" />,
                title: "Social Skills Development",
                description: "Building communication and interaction abilities"
              },
              {
                icon: <FaClipboardList className="text-3xl text-violet-400" />,
                title: "IEP Development",
                description: "Comprehensive Individualized Education Programs"
              },
              {
                icon: <FaSchool className="text-3xl text-indigo-400" />,
                title: "School Collaboration",
                description: "Working with your child's school for consistent support"
              }
            ].map((program, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-white p-4 rounded-full shadow-sm">
                    {program.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{program.title}</h3>
                <p className="text-gray-600 text-center">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Children We <span className="text-violet-600">Support</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Autism Spectrum",
                  "ADHD/ADD",
                  "Dyslexia",
                  "Dyscalculia",
                  "Speech Delays",
                  "Sensory Issues",
                  "Learning Disabilities",
                  "Developmental Delays"
                ].map((item, index) => (
                  <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 bg-violet-100 rounded-full flex items-center justify-center">
                        <div className="h-2 w-2 bg-violet-600 rounded-full"></div>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">{item}</p>
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
                    description: "Discuss your child's educational history and challenges"
                  },
                  {
                    title: "Comprehensive Evaluation",
                    description: "Standardized testing and skill assessments"
                  },
                  {
                    title: "Personalized Plan",
                    description: "Development of customized learning strategies"
                  },
                  {
                    title: "Ongoing Support",
                    description: "Regular progress reviews and plan adjustments"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-violet-100 text-violet-600 font-bold">
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
              <button className="mt-6 w-full px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition">
                Begin Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-violet-600">Teaching</span> Philosophy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Evidence-based methods that make learning accessible and enjoyable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Multisensory Learning",
                description: "Engaging visual, auditory, and kinesthetic pathways for better retention",
                color: "from-violet-100 to-violet-50"
              },
              {
                title: "Strength-Based Approach",
                description: "Building on each child's abilities rather than focusing on limitations",
                color: "from-indigo-100 to-indigo-50"
              },
              {
                title: "Structured Flexibility",
                description: "Consistent routines with adaptability to individual needs",
                color: "from-violet-50 to-indigo-50"
              }
            ].map((method, index) => (
              <div key={index} className={`bg-gradient-to-br ${method.color} p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full`}>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Unlock Your Child's Learning Potential
          </h2>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Our special education experts are ready to help your child succeed academically and beyond.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-violet-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition">
              Enroll Now
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}