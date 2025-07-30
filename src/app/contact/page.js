"use client";
import React, { useState } from "react";
import HeaderTop from "@/components/HeaderTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactUs = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    setSubmitted(true);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 flex flex-col">
      {/* Uncomment below lines if you want header and navbar */}
      {/* <HeaderTop /> */}
      {/* <Navbar /> */}

      {/* Hero */}
      <section className="bg-white shadow-md rounded-b-3xl max-w-7xl mx-auto mt-12 p-10 text-center">
        <h1 className="text-5xl font-extrabold text-purple-900 mb-4">Contact Us</h1>
        <p className="text-lg max-w-3xl mx-auto text-purple-700">
          We're here to help. If you have any questions or want to schedule an appointment, please fill the form or use the contact info below.
        </p>
      </section>

      {/* Content Grid */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 p-6 md:p-12 mt-10 bg-white rounded-3xl shadow-lg">
        {/* Contact Form */}
        <div className="flex-1 w-full box-border">
          <h2 className="text-2xl font-semibold text-purple-800 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Stack vertically on mobile, horizontal on sm and up */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                placeholder="First Name"
                className="flex-1 p-3 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
              />
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
                placeholder="Last Name"
                className="flex-1 p-3 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
              />
            </div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full p-3 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number (Optional)"
              className="w-full p-3 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
            />
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500 focus:outline-none transition resize-y"
            />
            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold transition shadow"
            >
              Send Message
            </button>
          </form>
          {submitted && (
            <p className="mt-4 text-green-600 font-medium">
              Thank you for reaching out! We'll respond shortly.
            </p>
          )}
        </div>

        {/* Contact Info and Map */}
        <div className="flex-1 w-full box-border text-purple-800">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <p className="mb-4">
            <strong>Address:</strong>
            <br />
            A264, Sector 46,
            <br />
            Noida, 201301, India
          </p>
          <p className="mb-4">
            <strong>Phone:</strong>
            <br />
            6388103445
          </p>
          <p className="mb-4">
            <strong>Email:</strong>
            <br />
            info@growthwayz.com
          </p>
          <p className="mb-6">Follow us on social media for updates &amp; tips:</p>
          <div className="flex gap-4 mb-8">
            <a href="#" aria-label="Facebook" className="underline hover:text-purple-900">
              Facebook
            </a>
            <a href="#" aria-label="Instagram" className="underline hover:text-purple-900">
              Instagram
            </a>
            <a href="#" aria-label="Twitter" className="underline hover:text-purple-900">
              Twitter
            </a>
          </div>
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Our Location"
              src="https://maps.google.com/maps?q=123%20Therapy%20Lane,%20Wellness%20City&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              className="border-0"
            />
          </div>
        </div>
      </section>

      {/* Uncomment if you want footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default ContactUs;
