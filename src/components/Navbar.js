'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const services = [
        'Speech Therapy',
        'Occupational Therapy',
        'Behavior Therapy',
        'Special Education',
        'Parent Counseling',
    ];

    const treatments = [
        'Autism Treatment',
        'ADHD Management',
        'Speech Delay',
        'Sensory Integration',
        'Learning Disability',
    ];

    return (
        <nav className="bg-blue-950 text-white">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                {/* Logo */}
                <Link href="/">
                    <div className="w-15 h-15 overflow-hidden rounded-full">
                        <Image
                            src="/images/logo.png"
                            alt="GrowthWayz Logo"
                            width={110}        // smaller size
                            height={110}       // make square
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Menu */}
<div className="hidden md:flex gap-6 font-medium items-center relative">                    <Link href="/" className="hover:bg-blue-800 px-2 py-1 rounded">Home</Link>
                    <Link href="/about" className="hover:bg-blue-800 px-2 py-1 rounded">About Us</Link>

                    {/* Services Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <span className="cursor-pointer hover:bg-blue-800 px-2 py-1 rounded">Services We Offer</span>
                        {isServicesOpen && (
                            <div className="absolute bg-white text-black mt-2 p-3 rounded shadow-md z-50 w-56">
                                {services.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={`/services/${item.replace(/\s+/g, '-').toLowerCase()}`}
                                        className="block px-2 py-1 hover:bg-gray-200"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Treatments Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsTreatmentsOpen(true)}
                        onMouseLeave={() => setIsTreatmentsOpen(false)}
                    >
                        <span className="cursor-pointer hover:bg-blue-800 px-2 py-1 rounded">Treatments</span>
                        {isTreatmentsOpen && (
                            <div className="absolute bg-white  text-black mt-2 p-3 rounded shadow-md z-50 w-56">
                                {treatments.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={`/services/${item.replace(/\s+/g, '-').toLowerCase()}`}
                                        className="block px-2 py-1 hover:bg-gray-200"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/gallery" className="hover:bg-blue-800 px-2 py-1 rounded">Gallery</Link>
                    <Link href="/contact" className="hover:bg-blue-800 px-2 py-1 rounded">Contact Us</Link>
                </div>

                {/* Mobile menu toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-blue-700 text-white px-6 pb-4 pt-2 space-y-2">
                    <div>
                        <Link href="/" className="block py-2 border-b border-blue-500">Home</Link>
                        <Link href="/about" className="block py-2 border-b border-blue-500">About Us</Link>
                    </div>

                    <details className="bg-blue-600 rounded-md">
                        <summary className="cursor-pointer py-2 px-2 font-medium">Services We Offer</summary>
                        <div className="pl-4 pb-2">
                            {services.map((item, index) => (
                                <Link
                                    key={index}
                                    href={`/services/${item.replace(/\s+/g, '-').toLowerCase()}`}
                                    className="block py-1 text-sm"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </details>

                    <details className="bg-blue-600 rounded-md">
                        <summary className="cursor-pointer py-2 px-2 font-medium">Treatments</summary>
                        <div className="pl-4 pb-2">
                            {treatments.map((item, index) => (
                                <Link
                                    key={index}
                                    href={`/treatments/${item.replace(/\s+/g, '-').toLowerCase()}`}
                                    className="block py-1 text-sm"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </details>

                    <div>
                        <Link href="/gallery" className="block py-2 border-b border-blue-500">Gallery</Link>
                        <Link href="/contact" className="block py-2 border-b border-blue-500">Contact Us</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
