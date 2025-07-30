"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Phone, MessageCircle } from 'lucide-react';

import Carousel from './Carousel';
import EmergencyBanner from './EmergencyBanner';
import WelcomeSection from './WelcomeSection';
import MissionVisionSection from './MissionVisionSection';
import ServicesWeProvide from './ServicesWeProvide';
import WhyChooseUs from './WhyChooseUs';
import GallerySlider from './GallerySlider';
import WhatParentsSay from './WhatParentsSay';
import ContactUs from './ContactUs';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-quart',
      offset: 120,
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <EmergencyBanner />
      <Carousel />
      <WelcomeSection />
      <MissionVisionSection />
      <ServicesWeProvide />
      <WhyChooseUs />
      <GallerySlider title="Explore Our Activities" />
      <WhatParentsSay />
      <ContactUs />

      {/* Floating Contact Buttons - Left WhatsApp, Right Phone */}
      <div className="fixed bottom-6 left-6 z-50">
        <a 
          href="https://wa.me/YOUR_PHONE_NUMBER" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="tel:YOUR_PHONE_NUMBER" 
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          aria-label="Call us"
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
}