// src/pages/services/speech-delay.js
import React from 'react';
import HeaderTop from '../../components/HeaderTop';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SpeechDelay = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      <div className="hidden md:block">
        <HeaderTop />
      </div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-100 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Speech Delay Treatment</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
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
            className="rounded-xl shadow-md w-full object-cover max-h-96"
            loading="lazy"
          />
          <div>
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">Understanding Speech Delay</h2>
            <p className="text-gray-700 mb-4">
              Speech delay occurs when a child isn’t developing speech and language skills at the expected rate. While every child develops at their own pace, a noticeable delay might require professional intervention to support healthy communication development.
            </p>
            <p className="text-gray-700">
              Early identification and intervention are key in helping children overcome speech challenges and build confidence in expressing themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Common Causes of Speech Delay</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 max-w-3xl mx-auto leading-relaxed">
            <li>Hearing impairments or frequent ear infections that affect auditory processing.</li>
            <li>Oral-motor issues impacting the movement and coordination of the tongue or jaws.</li>
            <li>Developmental disorders such as Autism Spectrum Disorder or Down Syndrome.</li>
            <li>Neurological conditions, including cerebral palsy or brain injury.</li>
            <li>Lack of adequate language stimulation or limited social interaction opportunities.</li>
            <li>Bilingual or multilingual environments where multiple languages are spoken.</li>
          </ul>
        </div>
      </section>

      {/* Signs Section */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Signs to Watch For</h2>
          <div className="grid md:grid-cols-3 gap-8 text-gray-700 max-w-5xl mx-auto">
            {[
              {
                title: 'Limited Vocabulary',
                desc: 'By age 2, children should have a vocabulary of 50 words or more.',
              },
              {
                title: 'Difficulty Combining Words',
                desc: 'Children may struggle to form simple two-word phrases like “more juice”.',
              },
              {
                title: 'Unclear Speech',
                desc: 'Speech may be difficult to understand even by familiar adults.',
              },
              {
                title: 'Lack of Gestures',
                desc: 'Limited use of non-verbal communication such as pointing or waving.',
              },
              {
                title: 'Frustration with Communication',
                desc: 'Frequent tantrums or withdrawal due to inability to express needs.',
              },
              {
                title: 'Delayed or Absent Babbling',
                desc: 'Reduced babbling sounds beyond 6 months of age.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 shadow hover:shadow-md transition duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Our Specialized Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Speech Therapy</h3>
              <p>
                One-on-one speech therapy sessions tailored to your child's specific needs, focusing on pronunciation, fluency, and articulation.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Language Development</h3>
              <p>
                Enhancing vocabulary, sentence structure, and communication skills to help your child speak more clearly and confidently.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Parent Counseling</h3>
              <p>
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
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
            Our experienced speech-language pathologists use evidence-based practices and personalized plans to ensure every child gets the support they need. We emphasize early intervention, family involvement, and fun, engaging sessions to foster communication growth.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            <ul className="list-disc pl-6 text-gray-700 space-y-3">
              <li>Certified and experienced speech therapists.</li>
              <li>Customized therapy programs that adapt as your child progresses.</li>
              <li>Interactive and play-based methods that keep children engaged.</li>
            </ul>
            <ul className="list-disc pl-6 text-gray-700 space-y-3">
              <li>Continuous progress tracking with goal-based milestones.</li>
              <li>Parental involvement with guided home exercises and coaching.</li>
              <li>Safe, welcoming, and child-friendly therapy environment.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips for Parents */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Tips for Supporting Your Child at Home</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-4 max-w-4xl mx-auto text-left text-lg leading-relaxed">
            <li>Engage in daily conversations with your child, even if they use limited words or gestures.</li>
            <li>Read aloud together regularly to build language skills and vocabulary.</li>
            <li>Use simple, clear language and repeat important words or phrases.</li>
            <li>Encourage play that involves sound, singing, or rhythm to stimulate speech.</li>
            <li>Be patient and provide plenty of positive reinforcement for communication efforts.</li>
            <li>Work closely with your child’s therapists and follow their home practice recommendations.</li>
          </ul>
        </div>
      </section>

      {/* Success Stories */}
      {/* <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-700 mb-8">Success Stories</h2>
          <div className="space-y-8 max-w-3xl mx-auto text-gray-700 text-lg italic">
            <blockquote className="bg-white p-6 rounded-lg shadow-md">
              “Thanks to GrowthWayz’s speech therapy, our daughter went from hardly speaking to confidently expressing her thoughts in just 8 months. The therapists are wonderfully supportive and knowledgeable.” 
              <footer className="mt-4 font-semibold text-blue-700">— Rina S.</footer>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-lg shadow-md">
              “The personalized therapy plan and consistent communication with us as parents made all the difference. We saw measurable progress and gained hope and confidence." 
              <footer className="mt-4 font-semibold text-blue-700">— James & Amelia T.</footer>
            </blockquote>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="bg-blue-100 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">Book a Free Consultation Today</h2>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto leading-relaxed text-lg">
            Early support can make a significant difference in your child’s life. Let’s work together to unlock their full potential.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
            Schedule Appointment
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpeechDelay;
