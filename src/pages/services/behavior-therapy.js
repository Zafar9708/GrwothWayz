// src/pages/services/behavior-therapy.js
"use client"
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BehaviorTherapy() {
  return (
    <>
      <Head>
        <title>Behavior Therapy | GrowthWayz</title>
        <meta name="description" content="Empowering children through personalized behavior therapy programs at GrowthWayz." />
      </Head>

      {/* Optional: HeaderTop for desktop */}
      <div className="hidden md:block">
        <HeaderTop />
      </div>

      <Navbar />

      <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div data-aos="fade-right">
              <img
                src="/images/behavioral_therapy.jpg"
                alt="Occupational Therapy"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>

            <div data-aos="fade-left">
              <h1 className="text-4xl font-bold text-orange-800 mb-6">
                Behavior Therapy
              </h1>
              <p className="text-gray-700 mb-4 leading-relaxed">
                At GrowthWayz, our Behavior Therapy program is tailored to help children understand, manage, and improve challenging behaviors. We believe every child deserves a safe and encouraging space to grow emotionally and socially.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Whether it's managing tantrums, improving focus, or learning new coping strategies, our therapists guide children and their families through structured, evidence-based approaches.
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Personalized Behavior Intervention Plans (BIPs)</li>
                <li>ABA (Applied Behavior Analysis) based methods</li>
                <li>Skill-building for emotional regulation</li>
                <li>Positive reinforcement strategies</li>
                <li>Parent training and collaboration</li>
              </ul>

              <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-orange-800 mb-4">
            Why Choose GrowthWayz for Behavior Therapy?
          </h2>
          <p className="text-gray-700 mb-4">
            Our team of certified behavior therapists work closely with families to create compassionate, individualized plans that promote lasting positive changes. We blend proven methods with play-based techniques to make learning engaging and effective for every child.
          </p>
          <p className="text-gray-700">
            At GrowthWayz, progress isn't just about outcomes—it's about nurturing potential and building confidence.
          </p>
        </div>
      </section>

      {/* What We Help With */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-semibold text-center text-yellow-800 mb-10">
            Challenges We Address
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              'Aggression and impulsivity',
              'Attention Deficit Hyperactivity Disorder (ADHD)',
              'Autism Spectrum Disorders',
              'Anxiety, fear, and phobias',
              'Defiant behavior and meltdowns',
              'Social communication difficulties',
              'Self-injurious or repetitive behaviors',
            ].map((item, i) => (
              <div
                key={i}
                className="bg-yellow-100 p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
              >
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-semibold text-yellow-800 text-center mb-10">
            Our Personalized Approach
          </h2>
          <div className="space-y-6 text-gray-700 text-lg">
            <p>
              Every child is unique — that's why our therapy plans are tailored based on an initial detailed assessment and family inputs. Our certified therapists collaborate with caregivers and educators to create a consistent environment for the child.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Applied Behavior Analysis (ABA) techniques</li>
              <li>Cognitive Behavioral Therapy (CBT)</li>
              <li>Positive Reinforcement strategies</li>
              <li>Play-based interventions for younger children</li>
              <li>Parent training and coaching</li>
              <li>Classroom observation and support plans</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-semibold text-center text-yellow-800 mb-10">
            Benefits of Behavior Therapy
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="list-disc list-inside text-gray-700 space-y-4 text-lg">
              <li>Improved emotional regulation and coping skills</li>
              <li>Stronger social and communication abilities</li>
              <li>Decreased frequency of disruptive behaviors</li>
              <li>Better classroom performance and attention</li>
              <li>Increased self-confidence and independence</li>
            </ul>
            <ul className="list-disc list-inside text-gray-700 space-y-4 text-lg">
              <li>Enhanced family relationships and cooperation</li>
              <li>Clearer routines and behavior expectations</li>
              <li>Better peer interactions and friendships</li>
              <li>Long-term development of life skills</li>
              <li>Support for parents and caregivers</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
