import React from 'react';
import HeaderTop from '../../components/HeaderTop';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SpeechDelay = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
         <div className="hidden md:block">
        <HeaderTop />
      </div>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-blue-100 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Speech Delay Treatment</h1>
          <p className="text-lg text-gray-700">
            Empowering children with the tools to express themselves effectively through personalized speech and language therapy.
          </p>
        </div>
      </section>

      {/* Image & Introduction */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://media.istockphoto.com/id/1364504091/photo/speech-therapy.jpg?s=612x612&w=0&k=20&c=d4qKur8XdS0TPZ3iXRtD6AN3NP-fVxw5Csu9JSoTDxE="
            alt="Speech Delay Therapy"
            className="rounded-xl shadow-md"
          />
          <div>
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">Understanding Speech Delay</h2>
            <p className="text-gray-700 mb-4">
              Speech delay occurs when a child isn’t developing speech and language skills at the expected rate. While every child
              develops at their own pace, a noticeable delay might require professional intervention to support healthy communication
              development.
            </p>
            <p className="text-gray-700">
              Early identification and intervention are key in helping children overcome speech challenges and build confidence in expressing
              themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Common Causes of Speech Delay</h2>
          <ul className="list-disc pl-5 space-y-3 text-gray-700">
            <li>Hearing impairments or frequent ear infections</li>
            <li>Oral-motor issues impacting the movement of the tongue or jaw</li>
            <li>Developmental disorders such as Autism or Down Syndrome</li>
            <li>Neurological conditions like cerebral palsy</li>
            <li>Lack of stimulation or limited social interaction</li>
            <li>Bilingual homes where children hear multiple languages</li>
          </ul>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Our Specialized Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Speech Therapy</h3>
              <p className="text-gray-700">
                One-on-one speech therapy sessions tailored to your child's specific needs, focusing on pronunciation, fluency, and articulation.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Language Development</h3>
              <p className="text-gray-700">
                Enhancing vocabulary, sentence structure, and communication skills to help your child speak more clearly and confidently.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Parent Counseling</h3>
              <p className="text-gray-700">
                Supporting parents with techniques and strategies to reinforce speech development at home in daily routines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Why Choose Our Center?</h2>
          <p className="text-gray-700 mb-6">
            Our experienced speech-language pathologists use evidence-based practices and personalized plans to ensure every child gets the support they need. We emphasize early intervention, family involvement, and fun, engaging sessions to foster communication growth.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Certified and experienced speech therapists</li>
              <li>Customized therapy programs</li>
              <li>Interactive and play-based methods</li>
            </ul>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Progress tracking and goal-based milestones</li>
              <li>Parental involvement and home exercises</li>
              <li>Friendly and child-safe environment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-100 py-10 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Book a Free Consultation Today</h2>
          <p className="text-gray-700 mb-6">
            Early support can make a significant difference in your child’s life. Let’s work together to unlock their potential.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300">
            Schedule Appointment
          </button>
        </div>
      </section>
      <Footer />
    </div>
    
  );
};

export default SpeechDelay;
