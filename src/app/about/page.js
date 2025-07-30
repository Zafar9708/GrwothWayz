"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaChild, FaHandsHelping, FaBrain, FaChartLine } from 'react-icons/fa';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="overflow-x-hidden bg-white text-gray-800">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24 px-6 md:px-20 text-center" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About GrowthWayz</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Where every child's potential is nurtured with care, expertise, and innovation
        </p>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-8 md:px-20 max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">Our Story</h2>
            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              Founded in 2025, GrowthWayz began with a simple vision: to create a space where children with diverse needs could thrive. 
              What started as a small clinic has grown into a comprehensive child development center serving hundreds of families.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Our journey has been guided by the belief that every child deserves personalized care and the opportunity to reach their full potential.
            </p>
          </div>
          <div data-aos="fade-left" className="flex justify-center">
            <img
              src="/images/about-us.jpg"
              alt="Our story"
              className="rounded-xl shadow-xl w-full max-w-md object-cover h-80"
            />
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-gray-50 py-16 px-4 sm:px-8 md:px-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Our Unique Approach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine evidence-based therapies with compassionate care to create transformative experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaChild className="text-4xl text-blue-600 mb-4" />,
                title: "Child-Centered",
                description: "Every program is tailored to the child's unique needs and learning style"
              },
              {
                icon: <FaHandsHelping className="text-4xl text-indigo-600 mb-4" />,
                title: "Family Focused",
                description: "We involve parents as partners in the therapeutic process"
              },
              {
                icon: <FaBrain className="text-4xl text-blue-500 mb-4" />,
                title: "Evidence-Based",
                description: "Using scientifically validated methods for maximum effectiveness"
              },
              {
                icon: <FaChartLine className="text-4xl text-indigo-500 mb-4" />,
                title: "Progress Tracking",
                description: "Regular assessments to measure and celebrate every milestone"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center"
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
              >
                {item.icon}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 px-4 sm:px-8 md:px-20 max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" className="order-2 md:order-1">
            <img
              src="https://ik.imagekit.io/d7t01fhx21/Ovum_Hospitals/Blogs/Child%20development%20centre-01.jpg?updatedAt=1689942135890"
              alt="Our impact"
              className="rounded-xl shadow-xl w-full max-w-md object-cover h-80"
            />
          </div>
          <div className="order-1 md:order-2" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">Our Impact</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                </div>
                <p className="text-lg text-gray-600">
                  <span className="font-bold">500+</span> children supported through our programs
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                </div>
                <p className="text-lg text-gray-600">
                  <span className="font-bold">95%</span> of families report significant improvements
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                </div>
                <p className="text-lg text-gray-600">
                  <span className="font-bold">50+</span> schools partnered with for inclusive education
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                </div>
                <p className="text-lg text-gray-600">
                  <span className="font-bold">10+</span> community outreach programs annually
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Child's Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how GrowthWayz can support your child's development and growth
          </p>
          <button className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;