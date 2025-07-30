// src/pages/services/parent-counseling.js
"use client";
import React from "react";
import Head from "next/head";
import HeaderTop from "@/components/HeaderTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ParentCounseling() {
  return (
    <>
      <div className="hidden md:block">
        <HeaderTop />
      </div>
      <Navbar />
      <Head>
        <title>Parent Counseling | GrowthWayz</title>
        <meta
          name="description"
          content="Supportive parent counseling services to help you raise confident and emotionally resilient children."
        />
      </Head>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img
                src="/images/parent_counseling.jpg"
                alt="Parent Counseling"
                className="rounded-2xl shadow-xl w-full object-cover max-h-[400px] md:max-h-[500px]"
                loading="lazy"
              />
            </div>
            <div data-aos="fade-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-purple-900 mb-6 leading-tight">
                Compassionate Parent Counseling for Families
              </h1>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Raising children can be both joyful and challenging. At GrowthWayz, we provide expert parent
                counseling services focused on nurturing emotional resilience, enhancing communication, and
                supporting behavioral growth for your child.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Our experienced therapists guide parents through modern parenting challenges, helping build
                stronger family bonds and positive home environments.
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-8 text-lg">
                <li>Personalized individual and family counseling sessions</li>
                <li>Techniques for positive discipline and emotional connection</li>
                <li>Support managing stress, anxiety, and parental well-being</li>
                <li>Workshops and resources on child developmental milestones</li>
                <li>Tailored action plans to foster healthy behavior and self-esteem</li>
              </ul>

              <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-lg font-semibold transition duration-300 shadow-md">
                Book a Counseling Session
              </button>
            </div>
          </div>

          <div className="mt-20 max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">
              Why Parent Counseling Matters
            </h2>
            <p className="text-gray-700 mb-5 max-w-3xl mx-auto leading-relaxed text-lg">
              Parenting is a journey filled with unique challenges and opportunities. There is no one-size-fits-all
              manual, but with guidance and support, parents can gain the tools needed to raise confident,
              emotionally healthy children.
            </p>
            <p className="text-gray-700 mb-5 max-w-3xl mx-auto leading-relaxed text-lg">
              Our counseling services empower parents to develop emotional intelligence, improve communication, and
              understand their children's individual needs — creating stronger relationships and nurturing
              environments for growth.
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-lg">
              Together, we build resilient families — fostering happiness, understanding, and success from early
              childhood onwards.
            </p>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="bg-white py-16 px-6 md:px-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-800 mb-12">
            Key Benefits of Parent Counseling at GrowthWayz
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-gray-700">
            <div className="bg-pink-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-pink-700">
                Enhanced Communication Skills
              </h3>
              <p className="leading-relaxed text-lg">
                Learn effective communication techniques that bridge generational gaps and create emotional
                understanding with your child.
              </p>
            </div>
            <div className="bg-pink-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-pink-700">Stress & Anxiety Management</h3>
              <p className="leading-relaxed text-lg">
                Gain tools to handle parenting stress, reduce anxiety, and foster patience for a healthier family
                dynamic.
              </p>
            </div>
            <div className="bg-pink-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-pink-700">
                Support for Behavioral Challenges
              </h3>
              <p className="leading-relaxed text-lg">
                Receive expert guidance on managing difficult behaviors, setting boundaries, and nurturing positive
                habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="bg-purple-50 py-16 px-6 md:px-0">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 text-center mb-10">
            Our Approach to Child Therapy and Parent Support
          </h2>
          <div className="space-y-8 text-gray-800 text-lg leading-relaxed">
            <p>
              At GrowthWayz, we understand that child therapy is most effective when it involves the whole family.
              Our parent counseling sessions are designed to complement therapy for children by addressing parent
              concerns, improving family dynamics, and equipping caregivers with practical strategies.
            </p>
            <p>
              Our licensed counselors tailor sessions to your unique family situation, combining evidence-based
              therapeutic techniques with compassionate listening and guidance. We cover topics such as emotional
              regulation, managing developmental disorders, and fostering social skills.
            </p>
            <p>
              Whether your child is receiving occupational therapy, speech therapy, or behavioral intervention, our
              parent counseling services aim to reinforce progress and promote harmony at home.
            </p>
            <p>
              By working together, we help families create nurturing environments where children can thrive
              emotionally, socially, and academically.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-extrabold text-purple-900 mb-6">
            Ready to Support Your Family?
          </h2>
          <p className="text-gray-700 mb-8 text-lg max-w-xl mx-auto leading-relaxed">
            Contact us today to schedule a parent counseling session or learn more about how we can help your child
            and family grow stronger together.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300">
            Book a Session
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
