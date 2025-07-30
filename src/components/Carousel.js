"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const slides = [
  {
    image: '/images/carasoul3.jpg', // Verified correct path
    title: 'Welcome to GrowthWayz',
    subtitle: 'Nurturing Young Minds',
    description: 'Specialized child therapy programs',
    cta: 'Schedule Assessment'
  },
  {
    image: '/images/carasoul4.jpg', // Verified correct path
    title: 'Expert Child Development',
    subtitle: 'Compassionate Care',
    description: 'Evidence-based approaches',
    cta: 'Meet Our Therapists'
  }
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return (
    <div className="w-full h-[300px] md:h-[350px] bg-gray-100 flex items-center justify-center">
      <p>Loading carousel...</p>
    </div>
  );

  return (
    <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Fallback div if image fails */}
          <div className="absolute inset-0 bg-gray-800 z-0"></div>
          
          <Image
            src={slide.image}
            alt=""
            fill
            className="object-cover z-10"
            priority={index === 0}
            onError={(e) => {
              console.error('Image failed to load:', slide.image);
              e.currentTarget.style.display = 'none';
            }}
          />
          
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h2>
            <p className="text-lg md:text-xl mb-3">{slide.subtitle}</p>
            <p className="text-base mb-4 max-w-md">{slide.description}</p>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-4 py-2 rounded-full">
              {slide.cta}
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <button 
        onClick={() => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full z-30"
      >
        {/* Left arrow icon */}
      </button>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
        {slides.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full ${i === currentSlide ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}