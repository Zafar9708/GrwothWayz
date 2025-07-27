// components/EmergencyBanner.tsx
"use client"
import React from 'react';

const EmergencyBanner = () => {
  return (
    <div className="bg-red-600 overflow-hidden whitespace-nowrap py-2">
      <p className="text-white text-lg font-semibold animate-scroll">
        Please WhatsApp in case of Emergency
      </p>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          display: inline-block;
          min-width: 100%;
          animation: scroll 20s linear infinite; /* Slowed down to 20 seconds */
        }
      `}</style>
    </div>
  );
};

export default EmergencyBanner;
