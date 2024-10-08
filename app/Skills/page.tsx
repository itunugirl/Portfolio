'use client';

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Image from 'next/image'; // Import Next.js Image component

const SkillsPage = () => {
  // Skills, Icons, Images, and Ratings
  const skills = [
    { name: 'HTML', icon: faHtml5, rating: 100 },
    { name: 'CSS', icon: faCss3Alt, rating: 100 },
    { name: 'JavaScript', icon: faJs, rating: 80 },
    { name: 'React.js', icon: faReact, rating: 80 },
    {
      name: 'Next.js',
      image: 'https://i.postimg.cc/fyWH69Hx/next-images.png', // Next.js image URL
      rating: 80,
    },
    {
      name: 'Tailwind CSS',
      image: 'https://i.postimg.cc/xC3xxRPf/tailwind-css.png', // Tailwind CSS image URL
      rating: 100,
    },
    {
      name: 'C Programming',
      image: 'https://i.postimg.cc/J7QvP1TN/c-programming.png', // C programming image URL
      rating: 60,
    },
  ];

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Function to render progress bar based on rating
  const renderProgressBar = (rating: number) => {
    return (
      <div className="w-full bg-gray-300 rounded-full h-3">
        <div
          className="bg-yellow-500 h-3 rounded-full transition-all duration-700 progress-bar"
          style={{ width: `${rating}%` }}
        ></div>
      </div>
    );
  };

  return (
    <section id="skills" className="min-h-screen bg-orange bg-opacity-40 py-16 px-4 sm:px-8">
      <div className="flex justify-center">
        <div className="w-full max-w-6xl">
          <h1
            className="text-lg font-bold font-Libre-Baskerville text-gray-800 sm:text-lg mb-2"
            data-aos="fade-up"
          >
            My Skills
          </h1>
          <div className="mb-4">
            <hr className="border-b-2 border-gray-300 mx-auto w-1/2" data-aos="fade-right" />
          </div>
          <p className="text-lg text-gray-600 mb-8" data-aos="fade-right">
            Here are my skills
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6"
                data-aos="fade-up"
              >
                <div className="flex items-center space-x-4 mb-4">
                  {skill.icon ? (
                    <FontAwesomeIcon
                      icon={skill.icon}
                      className="text-3xl text-gray-700"
                    />
                  ) : (
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={48} // Set a width for the image
                      height={48} // Set a height for the image
                      className="object-contain"
                    />
                  )}
                  <h2 className="text-xl md:text-lg sm:text-base font-semibold text-gray-800">
                    {skill.name}
                  </h2>
                </div>
                <div className="mb-2 text-sm text-gray-600">Proficiency: {skill.rating}%</div>
                {renderProgressBar(skill.rating)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
