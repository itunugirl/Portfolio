'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

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

  // Function to render progress bar based on rating
  const renderProgressBar = (rating: number) => {
    return (
      <div className="w-full bg-gray-300 rounded-full h-3">
        <div
          className="bg-yellow-500 h-3 rounded-full transition-width"
          style={{ width: `${rating}%` }}
        ></div>
      </div>
    );
  };

  return (
    <section className="min-h-screen bg-orange bg-opacity-40 py-16 px-4 sm:px-8">
      <div className="flex justify-center">
        <div className="w-full max-w-6xl">
          <h1 className="text-lg font-bold font-Libre-Baskerville text-gray-800 sm:text-lg mb-2">My Skills</h1>
          <div className="mb-4">
            {/* Increased margins for more space */}
            <hr className="border-b-1 border-gray-300 ml-24 mr-20" /> {/* Increased left and right margin */}
          </div>
          <p className="text-lg text-gray-600 mb-8">Here are my skills</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                <div className="flex items-center space-x-4 mb-4">
                  {skill.icon ? (
                    <FontAwesomeIcon icon={skill.icon} className="text-3xl text-gray-700" />
                  ) : (
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-12 h-12 object-contain"
                    />
                  )}
                  <h2 className="text-xl md:text-lg sm:text-base font-bold text-gray-800">{skill.name}</h2>
                </div>
                <div className="mb-2 text-sm text-gray-600 font-Libre-Baskerville">Proficiency: {skill.rating}%</div>
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
