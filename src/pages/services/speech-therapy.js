"use client"
import React from 'react';
import Head from 'next/head';
import RootLayout from '@/app/layout';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaCheckCircle, FaChild, FaComments, FaUserMd } from 'react-icons/fa';

export default function SpeechTherapy() {
    return (
        <> 
            <div className="hidden md:block">
                <HeaderTop />
            </div>
            <Navbar />
            <Head>
                <title>Speech Therapy | GrowthWayz</title>
                <meta name="description" content="Professional speech therapy services for children at GrowthWayz" />
            </Head>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Speech Therapy</span> for Children
                            </h1>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Empowering children to find their voice through personalized, evidence-based speech therapy programs designed to boost communication skills and confidence.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    Book Free Consultation
                                </button>
                                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/therapyimage.jpg"
                                    alt="Child receiving speech therapy"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-blue-600/20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="text-blue-600">Speech Therapy</span> Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Comprehensive programs addressing all aspects of communication development
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <FaUserMd className="text-3xl text-blue-600" />,
                                title: "Certified Therapists",
                                description: "Licensed professionals with specialized pediatric training"
                            },
                            {
                                icon: <FaChild className="text-3xl text-indigo-600" />,
                                title: "Child-Focused",
                                description: "Play-based therapy tailored to each child's needs"
                            },
                            {
                                icon: <FaComments className="text-3xl text-blue-500" />,
                                title: "Multi-Method Approach",
                                description: "Combining verbal, non-verbal and social communication"
                            },
                            {
                                icon: <FaCheckCircle className="text-3xl text-indigo-500" />,
                                title: "Progress Tracking",
                                description: "Regular assessments and parent feedback"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-all duration-300">
                                <div className="flex justify-center mb-4">
                                    <div className="bg-white p-4 rounded-full shadow-sm">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 text-center">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who Needs Therapy */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Signs Your Child May Need <span className="text-blue-600">Speech Therapy</span>
                            </h2>
                            <div className="space-y-4">
                                {[
                                    "Difficulty pronouncing certain sounds or words",
                                    "Limited vocabulary for their age",
                                    "Struggles to follow directions or understand questions",
                                    "Frustration when trying to communicate",
                                    "Stuttering or prolonged pauses when speaking",
                                    "Difficulty with social interactions"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center">
                                                <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
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
                                        description: "We discuss your concerns and your child's history"
                                    },
                                    {
                                        title: "Comprehensive Evaluation",
                                        description: "Standardized tests and play-based assessments"
                                    },
                                    {
                                        title: "Personalized Plan",
                                        description: "Detailed report with recommended therapy goals"
                                    }
                                ].map((step, index) => (
                                    <div key={index} className="flex">
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 font-bold">
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
                            <button className="mt-6 w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
                                Schedule Assessment
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
                            Our <span className="text-blue-600">Therapy Approach</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Evidence-based methods delivered with care and creativity
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Play-Based Learning",
                                description: "Using games and activities to make therapy enjoyable while targeting specific goals",
                                color: "from-blue-100 to-blue-50"
                            },
                            {
                                title: "Family Involvement",
                                description: "Training parents to reinforce skills at home for faster progress",
                                color: "from-indigo-100 to-indigo-50"
                            },
                            {
                                title: "Multisensory Techniques",
                                description: "Engaging all senses to enhance learning and retention",
                                color: "from-blue-50 to-indigo-50"
                            }
                        ].map((approach, index) => (
                            <div key={index} className={`bg-gradient-to-br ${approach.color} p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full`}>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">{approach.title}</h3>
                                <p className="text-gray-600">{approach.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Help Your Child Find Their Voice?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        Contact us today to schedule an assessment or learn more about our speech therapy programs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition">
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