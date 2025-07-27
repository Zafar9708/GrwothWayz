"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div>
    <EmergencyBanner />

      <Carousel />
       <WelcomeSection />
       <MissionVisionSection />
       <ServicesWeProvide />
       <WhyChooseUs />
       <GallerySlider title="Explore Our Activities" />
       <WhatParentsSay />
       <ContactUs />

    </div>
  );
}
