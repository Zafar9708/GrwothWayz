"use client"
import React, { useEffect, useState } from 'react';

const slides = [
  {
    image: '/images/carasoul3.jpg',
    title: 'Welcome to GrowthWayz',
    subtitle: 'Nurturing Young Minds, Building Bright Futures',
    description: 'Specialized therapy programs to help children reach their full potential.',
    cta: 'Schedule Assessment',
  },
  {
    image: '/images/carasoul4.jpg',
    title: 'Expert Child Development',
    subtitle: 'Compassionate Care for Your Little Ones',
    description: 'Evidence-based approaches to support your child\'s development.',
    cta: 'Meet Our Therapists',
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url("${slide.image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Text content directly on image */}
          <div className="relative w-full h-full flex flex-col justify-center items-center text-center px-4 z-20 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-md">{slide.title}</h2>
            <p className="text-lg md:text-xl mb-3 drop-shadow-md">{slide.subtitle}</p>
            <p className="text-sm md:text-base mb-4 max-w-md drop-shadow-md">{slide.description}</p>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-medium px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300">
              {slide.cta}
            </button>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-1 rounded-full shadow-md transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-1 rounded-full shadow-md transition-all duration-300"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-yellow-400 w-4' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;