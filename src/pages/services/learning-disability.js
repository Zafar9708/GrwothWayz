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
      <section className="bg-gradient-to-r from-purple-100 to-blue-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-purple-800 mb-6">Learning Disability Support</h1>
          <p className="text-lg text-gray-700 text-center mb-8">
            Empowering children with learning disabilities to thrive through individualized care, expert intervention, and compassionate support.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://media.istockphoto.com/id/1191463800/photo/kid-with-dyslexia-drawing-with-pencil-and-child-psychologist-looking-at-it.jpg?s=612x612&w=0&k=20&c=bHpNrRZT9nPnZ6QVyaStGW-vkTlGT5QnUG4p7oKxf4A="
                alt="Learning Disability"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">What Are Learning Disabilities?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Learning disabilities are neurological differences that affect how a person receives, processes, and responds to information. Common types include dyslexia (reading difficulty), dysgraphia (writing challenges), and dyscalculia (math struggles).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With timely intervention and specialized strategies, children with learning disabilities can develop the skills they need to succeed academically and socially.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Our Approach</h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Comprehensive evaluation to identify specific learning challenges.</li>
              <li>Customized learning plans aligned with your child’s strengths and needs.</li>
              <li>Multisensory teaching methods for better retention and engagement.</li>
              <li>One-on-one academic tutoring with special educators.</li>
              <li>Regular progress assessments and family consultations.</li>
            </ul>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Why Choose Us?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-700">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h4 className="font-bold text-lg mb-2 text-purple-600">Expert Team</h4>
                <p>Certified special educators, psychologists, and therapists work collaboratively to support your child.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h4 className="font-bold text-lg mb-2 text-purple-600">Proven Strategies</h4>
                <p>We use evidence-based approaches tailored to each child’s learning style and pace.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h4 className="font-bold text-lg mb-2 text-purple-600">Parental Guidance</h4>
                <p>We empower parents with tools and techniques to support learning at home.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-purple-50 p-6 rounded-xl text-center shadow-lg">
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">Ready to Help Your Child Excel?</h3>
            <p className="text-gray-700 mb-4">Schedule a consultation with our experts today and begin a transformative journey for your child’s learning and confidence.</p>
            <button className="mt-2 bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-full transition">
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
