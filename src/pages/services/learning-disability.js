// src/pages/services/learning-disability.js
import React from 'react';
import HeaderTop from '../../components/HeaderTop';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const LearningDisability = () => {
  return (
    <>
      <div className="hidden md:block">
        <HeaderTop />
      </div>
      <Navbar />
      <section className="bg-gradient-to-r from-purple-100 to-blue-100 py-12 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">
            Learning Disability Support
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            Empowering children with learning disabilities to thrive through individualized care, expert intervention,
            and compassionate support that fosters confidence both inside and outside the classroom.
          </p>

          {/* Intro Grid */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div data-aos="fade-right">
              <img
                src="https://media.istockphoto.com/id/1191463800/photo/kid-with-dyslexia-drawing-with-pencil-and-child-psychologist-looking-at-it.jpg?s=612x612&w=0&k=20&c=bHpNrRZT9nPnZ6QVyaStGW-vkTlGT5QnUG4p7oKxf4A="
                alt="Learning Disability"
                className="rounded-2xl shadow-xl w-full max-h-[420px] object-cover"
                loading="lazy"
              />
            </div>
            <div data-aos="fade-left" className="space-y-6">
              <h2 className="text-2xl font-semibold text-purple-700">
                What Are Learning Disabilities?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Learning disabilities are neurodevelopmental differences that affect how a person receives, processes,
                and responds to information. They can manifest as challenges in reading (dyslexia), writing (dysgraphia),
                math (dyscalculia), attention, memory, or executive function skills.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Early identification and tailored support help children overcome obstacles and unlock their full potential
                academically, socially, and emotionally.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our specialists work closely with families to create individualized learning plans that match each child's strengths
                and areas for growth.
              </p>
            </div>
          </div>

          {/* Our Approach */}
          <div className="mt-16" data-aos="fade-up">
            <h3 className="text-2xl font-semibold text-purple-700 mb-6 text-center">
              Our Approach to Supporting Learning Disabilities
            </h3>
            <ul className="list-disc list-inside text-gray-700 max-w-3xl mx-auto space-y-3 leading-relaxed text-lg">
              <li>Comprehensive evaluations using validated assessment tools.</li>
              <li>Design customized, evidence-based learning plans addressing individual needs.</li>
              <li>Utilize multisensory teaching methods that engage different learning styles.</li>
              <li>Provide one-on-one tutoring and therapeutic support with experienced special educators.</li>
              <li>Regular progress tracking with ongoing family and school collaboration.</li>
              <li>Teach self-advocacy skills and emotional resilience to empower lifelong success.</li>
            </ul>
          </div>

          {/* Services Highlights */}
          <div className="mt-16" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-semibold text-purple-700 mb-8 text-center">
              Our Specialized Support Services
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-gray-700">
              {[
                {
                  title: "Dyslexia Support",
                  desc: "Targeted reading interventions focusing on phonemic awareness, fluency, and comprehension.",
                },
                {
                  title: "Dysgraphia Therapy",
                  desc: "Improving writing skills through fine motor exercises and adaptive strategies.",
                },
                {
                  title: "Dyscalculia Assistance",
                  desc: "Teaching math concepts using visual aids and concrete examples for better understanding.",
                },
                {
                  title: "Executive Function Coaching",
                  desc: "Helping children develop planning, organization, and time management skills.",
                },
                {
                  title: "Social-Emotional Learning (SEL)",
                  desc: "Supporting emotional regulation, self-confidence, and positive peer relationships.",
                },
                {
                  title: "Parental Training & Guidance",
                  desc: "Empowering parents with tools to support learning and foster independence at home.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                  <h4 className="font-bold text-lg mb-3 text-purple-600">{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-16" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-semibold text-purple-700 mb-6 text-center">
              Why Choose GrowthWayz?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-700 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h4 className="font-bold text-lg mb-3 text-purple-600">Expert Team</h4>
                <p>
                  Our certified special educators, psychologists, and therapists collaborate to provide compassionate,
                  effective support tailored to your child’s unique needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h4 className="font-bold text-lg mb-3 text-purple-600">Research-Backed Methods</h4>
                <p>
                  We implement proven, evidence-based strategies combined with innovative teaching techniques to
                  maximize learning outcomes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h4 className="font-bold text-lg mb-3 text-purple-600">Parental Partnership</h4>
                <p>
                  We actively involve parents through education, training, and collaboration to create supportive
                  home environments that reinforce skills.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className="mt-20 bg-purple-50 p-8 rounded-xl text-center shadow-lg max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-3xl font-semibold text-purple-700 mb-4">
              Ready to Help Your Child Excel?
            </h3>
            <p className="text-gray-700 mb-6 max-w-xl mx-auto leading-relaxed text-lg">
              Schedule a consultation with our learning disability experts today and begin a transformative journey
              towards academic success, confidence, and independence.
            </p>
            <button className="mt-2 bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-full transition shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-400">
              Book a Consultation
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LearningDisability;
