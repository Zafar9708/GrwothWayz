// src/pages/ContactUs.js
"use client"
import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

const ContactUs = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here (e.g., send to backend or email)
    alert('Message submitted successfully!');
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Header */}
      {/* <div className="hidden md:block">
        <HeaderTop />
      </div>
      <Navbar /> */}

      {/* Contact Hero */}
      <section className="bg-gradient-to-r from-indigo-100 to-purple-100 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          We'd love to hear from you. Fill out the form and we’ll get back to you soon.
        </p>
      </section>

      {/* Form Section */}
      <section className="bg-white py-12 px-6 md:px-20">
        <div className="bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                required
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-md text-lg font-semibold transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default ContactUs;
