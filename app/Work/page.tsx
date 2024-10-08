'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WorkPage = () => {
  // Projects hosted on Vercel and Netlify
  const works = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio to showcase my skills and projects.',
      liveUrl: 'https://portfolio-g9hn.vercel.app',
      imageUrl: 'https://i.postimg.cc/jd7PQhQB/portfolio-img.png',
      platform: 'Vercel',
    },
    {
      title: 'Salon Website',
      description: 'A website for managing a salon business, including online bookings and services.',
      liveUrl: 'https://sleek-and-chic-salon.vercel.app/',
      imageUrl: 'https://i.postimg.cc/3Nb7bpXq/salon-webpage.png',
      platform: 'Vercel',
    },
    {
      title: 'Healthcare Website',
      description: 'A website aims to help users find, export, and share hospitals within the region.',
      liveUrl: 'https://carefinder-medease.vercel.app',
      imageUrl: 'https://i.postimg.cc/15NLZLsX/Medease.png',
      platform: 'Vercel',
    },
    {
      title: 'Form Webpage',
      description: 'A form submission page with validation.',
      liveUrl: 'https://itunu-for-individuals.netlify.app',
      imageUrl: 'https://i.postimg.cc/bN7fDq31/form-individual.png',
      platform: 'Netlify',
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const initialWorksMobile = works.slice(0, 2); // Show 2 works on mobile
  const initialWorksDesktop = works.slice(0, 3); // Show 3 works on larger screens

  // Handle screen size on client-side only
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    // Set initial value
    handleResize();

    // Add event listener to track window size changes
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Animation duration
  }, []);

  return (
    <section id="works" className="min-h-screen bg-gradient-to-r from-[#f3e5f5] via-[#e1bee7] to-[#f8bbd0] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-lg font-bold font-Libre-Baskerville text-gray-800 sm:text-lg mb-2" data-aos="fade-down">
          My Works
        </h1>
        <hr className="border-b-2 border-gray-300 mx-auto w-1/2" data-aos="fade-right" />

        <p className="text-lg text-gray-600 mb-8" data-aos="fade-right">
          Here are some of my projects hosted on Vercel and Netlify:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {(showMore ? works : (isMobile ? initialWorksMobile : initialWorksDesktop)).map((work, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-up">
              <a href={work.liveUrl} target="_blank" rel="noopener noreferrer">
                <div className="relative h-56">
                  <Image
                    src={work.imageUrl}
                    alt={`${work.title} screenshot`}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform"
                  />
                </div>
              </a>
              <div className="p-6">
                <h2 className="text-xl font-bold font-Playfair-Display text-gray-800 mb-2">{work.title}</h2>
                <p className="text-gray-600 mb-4">{work.description}</p>
                <a
                  href={work.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral hover:underline font-Edu-AU-VIC-WA-NT-Guides"
                >
                  View Project on {work.platform}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* See More/Less Button */}
        <div className="text-center mt-8" data-aos="zoom-in">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-buttoncoral text-white px-4 py-2 rounded hover:bg-buttoncoral-hover transition"
          >
            {showMore ? 'See Less' : 'See More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkPage;
