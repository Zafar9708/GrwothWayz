"use client"
import React, { useEffect, useState } from 'react';

const slides = [
  {
    image: '/images/Carasoul3.jpg',
    title: 'Welcome to Our Clinic',
    subtitle: 'Your smile is our priority',
    description: 'We provide personalized care to ensure every visit is comfortable and effective.',
    cta: 'Book an Appointment',
  },
  {
    image: '/images/Carasoul4.jpg',
    title: 'Expert Dental Care',
    subtitle: 'Compassionate and skilled professionals',
    description: 'Our experienced team uses the latest technology to deliver exceptional results.',
    cta: 'Meet Our Team',
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url("${slide.image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Text content centered */}
          <div className="w-full h-full bg-black/40 flex justify-center items-center text-white text-center px-4">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h2>
              <p className="text-base md:text-lg mb-2">{slide.subtitle}</p>
              <p className="max-w-xl text-sm md:text-base mb-4 mx-auto">{slide.description}</p>
              <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
