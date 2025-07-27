// src/pages/services/speech-therapy.js
"use client"
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import RootLayout from '@/app/layout';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SpeechTherapy() {
    return (
        <> 
         <div className="hidden md:block">
                 <HeaderTop />
               </div>
          <Navbar />
            <Head>
                <title>Speech Therapy | GrowthWayz</title>
            </Head>

            <section className="bg-gradient-to-b from-blue-50 to-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <img
                                src="/images/therapyimage.jpg"
                                alt="Speech Therapy"
                                className="rounded-2xl shadow-xl w-full object-cover"
                            />

                        </div>
                        <div>
                            <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Speech Therapy</h1>
                            <p className="text-lg text-gray-700 mb-6">
                                Our speech therapy program is designed to empower children with effective communication skills. We address various speech and language disorders through engaging and individualized therapy plans.
                            </p>
                            <ul className="list-disc text-gray-700 pl-6 space-y-2 text-base">
                                <li>Certified and experienced speech therapists</li>
                                <li>Personalized therapy plans for each child</li>
                                <li>Focus on verbal, non-verbal, and social communication</li>
                                <li>Integration of fun, interactive activities</li>
                                <li>Continuous progress tracking and feedback</li>
                            </ul>
                            <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-md transition duration-300">
                                Book a Free Consultation
                            </button>
                        </div>
                    </div>

                    {/* Who Needs Speech Therapy */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-blue-700 mb-4">Who Needs Speech Therapy?</h2>
                        <p className="text-gray-700 mb-4">
                            Children may benefit from speech therapy if they show signs of:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Speech delays or unclear articulation</li>
                            <li>Stuttering or fluency issues</li>
                            <li>Language comprehension or expression difficulties</li>
                            <li>Social communication challenges</li>
                            <li>Voice or resonance issues</li>
                        </ul>
                    </div>

                    {/* Our Approach */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Approach</h2>
                        <p className="text-gray-700 mb-4">
                            We follow a child-centric and family-inclusive therapy approach:
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 bg-white shadow rounded-xl">
                                <h4 className="text-xl font-semibold text-blue-600 mb-2">Initial Assessment</h4>
                                <p className="text-gray-600">We conduct a thorough speech and language evaluation to understand your child’s needs.</p>
                            </div>
                            <div className="p-6 bg-white shadow rounded-xl">
                                <h4 className="text-xl font-semibold text-blue-600 mb-2">Customized Plan</h4>
                                <p className="text-gray-600">We develop an individualized therapy plan with measurable goals tailored to your child.</p>
                            </div>
                            <div className="p-6 bg-white shadow rounded-xl">
                                <h4 className="text-xl font-semibold text-blue-600 mb-2">Engaging Sessions</h4>
                                <p className="text-gray-600">Therapy sessions are interactive, motivating, and age-appropriate to keep your child engaged.</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">What Parents Say</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    name: 'Aditi Sharma',
                                    text: 'The therapists were patient and amazing with my son. His confidence has grown tremendously.',
                                },
                                {
                                    name: 'Rahul Verma',
                                    text: 'We saw improvement in just a few sessions. Highly professional and child-friendly environment.',
                                },
                                {
                                    name: 'Sneha Kapoor',
                                    text: 'Thanks to GrowthWayz, my daughter now speaks clearly and confidently. Highly recommended!',
                                },
                            ].map((review, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl shadow">
                                    <p className="text-gray-700 italic mb-4">“{review.text}”</p>
                                    <p className="text-blue-800 font-semibold text-sm">— {review.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="bg-blue-600 text-white py-10 rounded-xl shadow text-center">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to Support Your Child’s Speech Journey?</h2>
                        <p className="mb-6">Book a session or get a free consultation with our experts today.</p>
                        <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-100 transition">
                            Schedule Now
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
