// src/pages/services/Gallery.js

import React from 'react';


const images = [
  {
    url:'/images/gallery1.jpg',
    alt: 'Therapy Session 1',
  },
  {
    url: '/images/gallery2.jpg',
    alt: 'Learning Activity',
  },
  {
    url: '/images/gallery3.jpg',
    alt: 'Autism Support',
  },
  {
    url: '/images/gallery4.jpg',
    alt: 'Sensory Integration Therapy',
  },
  {
    url: '/images/gallery5.jpg',
    alt: 'Speech Therapy Session',
  },
  {
    url: '/images/gallery6.jpg',
    alt: 'Child Development Activity',
  },
];

const Gallery = () => {
  return (
    <div>
      {/* Header */}
      {/* <div className="hidden md:block">
        <HeaderTop />
      </div>
      <Navbar /> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-200 to-pink-100 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Gallery</h1>
        <p className="text-lg text-gray-600">
          Take a look at some moments from our sessions, activities, and workshops.
        </p>
      </section>

      {/* Image Grid */}
      <section className="px-6 py-12 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 bg-gray-50">
                <h3 className="text-md font-semibold text-gray-700">{img.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Gallery;
