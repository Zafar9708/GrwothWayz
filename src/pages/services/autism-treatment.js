import React from 'react';
import HeaderTop from '../../components/HeaderTop';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AutismTreatment = () => {
  return (
    <>
      <div className="hidden md:block">
        <HeaderTop />
      </div>
      <Navbar />

      <main className="bg-blue-50 text-gray-800">
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Autism Treatment</h1>
            <p className="text-lg md:text-xl text-gray-600">
              Empowering children with autism through compassionate care, structured support, and individualized therapies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src="https://media.istockphoto.com/id/1053433092/photo/emotion-emoticons-used-by-a-psychologist-during-a-therapy-session-with-a-child-with-an-autism.jpg?s=612x612&w=0&k=20&c=tQBO6BvjU5QOwBeJsmbqcqByt2jOJ9R8anbq7ek97K0="
              alt="Autism Therapy"
              className="rounded-xl shadow-lg w-full"
            />

            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">What is Autism Spectrum Disorder (ASD)?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Autism Spectrum Disorder (ASD) is a developmental condition that affects communication, social interaction, and behavior.
                Each child with autism is unique, and early intervention with personalized therapy can make a big difference in development.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our goal is to create a safe, supportive, and structured environment to help your child achieve their full potential.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Our Treatment Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Behavioral Therapy (ABA)',
                  desc: 'Evidence-based techniques to improve positive behaviors and reduce negative ones.'
                },
                {
                  title: 'Speech and Language Therapy',
                  desc: 'Enhance verbal and non-verbal communication skills using fun and engaging activities.'
                },
                {
                  title: 'Occupational Therapy',
                  desc: 'Improve daily life skills, motor coordination, and sensory integration.'
                },
                {
                  title: 'Social Skills Training',
                  desc: 'Help children navigate social situations, understand emotions, and build relationships.'
                },
                {
                  title: 'Parental Involvement',
                  desc: 'We educate and involve parents in the therapeutic process for consistent progress at home.'
                },
                {
                  title: 'Individualized Education Plans',
                  desc: 'Customized goals based on the child’s unique strengths and developmental needs.'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-blue-100 hover:bg-blue-200 p-6 rounded-xl shadow-md transition duration-300"
                >
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-blue-100">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Choose Us?</h2>
            <ul className="text-left space-y-4 text-gray-700 text-lg">
              <li>✅ Experienced pediatric therapists with autism specialization</li>
              <li>✅ Child-friendly therapy rooms and tools</li>
              <li>✅ Holistic approach combining multiple therapies</li>
              <li>✅ Regular progress reports and parent consultations</li>
              <li>✅ Focus on building confidence, independence, and communication</li>
            </ul>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Help Your Child Thrive?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Contact us today to schedule a consultation and learn how we can support your child’s unique journey.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
              Book a Session
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AutismTreatment;
