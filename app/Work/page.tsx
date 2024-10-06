'use client';

import React from 'react';
import Image from 'next/image';

const WorkPage = () => {
  // Projects hosted on Vercel and Netlify
  const works = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio to showcase my skills and projects.',
      liveUrl: 'https://myportfolio.vercel.app', // Example Vercel link
      imageUrl: 'https://i.postimg.cc/MTZh0k2v/portfolio-image.jpg', // Replace with actual image
      platform: 'Vercel',
    },
    {
      title: 'Salon Website',
      description: 'A website for managing a salon business, including online bookings and services.',
      liveUrl: 'https://itunu-for-individuals.netlify.app', // Example Netlify link
      imageUrl: 'https://i.postimg.cc/3Nb7bpXq/salon-webpage.png',
      platform: 'Vercel',
    },
    
    {
      title: 'Healthcare Website',
      description: 'A website aims to help users find, export, and share hospitals within the region.',
      liveUrl: 'https://carefinder-medease.vercel.app', // Example Vercel link
      imageUrl: 'https://i.postimg.cc/15NLZLsX/Medease.png', // Replace with actual image
      platform: 'Vercel',
    },
    {
        title: 'Form Webpage',
        description: 'A form submission page with validation.',
        liveUrl: 'https://myportfolio.vercel.app', // Example Vercel link
        imageUrl: 'https://i.postimg.cc/bN7fDq31/form-individual.png',
        platform: 'Vercel',
      },
  ];

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Works</h1>
        <p className="text-lg text-gray-600 mb-8">Here are some of my projects hosted on Vercel and Netlify:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative h-56">
                <Image
                  src={work.imageUrl}
                  alt={`${work.title} screenshot`}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{work.title}</h2>
                <p className="text-gray-600 mb-4">{work.description}</p>
                <a
                  href={work.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Project on {work.platform}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkPage;
