'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EducationPage = () => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="education" className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen py-10 px-4 sm:px-8">
      <div className="mb-10">
        <h1 className="text-2xl sm:text-lg font-bold font-Libre-Baskerville text-gray-200 mb-2" data-aos="fade-up">
          My Educational Journey
        </h1>
        <div className="mb-4">
          <hr className="border-b-2 border-gray-300 ml-24 mr-20" data-aos="fade-right" />
        </div>
        <p className="text-base sm:text-lg text-gray-400 mb-8 text-center" data-aos="fade-up" data-aos-delay="200">
          A timeline of my academic achievements and experiences.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl">
          <div className="absolute border-l-4 border-gray-400 h-full left-1/2 transform -translate-x-1/2"></div>

          {/* Education Entry */}
          <div className="mb-8 flex justify-end pr-2 sm:pr-6" data-aos="fade-right">
            <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 w-full sm:w-3/5">
              <h3 className="text-lg sm:text-xl font-semibold text-[gold]">AltSchool Africa</h3>
              <p className="text-gray-600">Aug 2023 - Aug 2024</p>
              <p className="text-gray-800 mt-2">
                Diploma in Front-End Web Development. Focused on building responsive web applications.
              </p>
            </div>
          </div>

          {/* Education Entry */}
          <div className="mb-8 flex justify-start pl-2 sm:pl-6" data-aos="fade-left" data-aos-delay="100">
            <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 w-full sm:w-3/5">
              <h3 className="text-lg sm:text-xl font-semibold text-[gold]">University of Lagos</h3>
              <p className="text-gray-600">Sept 2017 - June 2022</p>
              <p className="text-gray-800 mt-2">
                Bachelor&apos;s in Business Education, with a focus on teaching methodologies, business management, and practical skills in technology and education.
              </p>
            </div>
          </div>

          {/* Education Entry */}
          <div className="mb-8 flex justify-end pr-2 sm:pr-6" data-aos="fade-right" data-aos-delay="200">
            <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 w-full sm:w-3/5">
              <h3 className="text-lg sm:text-xl font-semibold text-[gold]">Cadel High School</h3>
              <p className="text-gray-600">Sept 2013 - June 2017</p>
              <p className="text-gray-800 mt-2">
                Graduated with a strong foundation in business studies and technology, excelling in subjects like mathematics and computer science.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="max-w-4xl mx-auto mt-12" data-aos="fade-up">
        <h2 className="text-lg sm:text-xl font-bold text-gray-200 mb-4">Certifications & Achievements</h2>
        <ul className="list-disc list-inside text-gray-400">
          <li>Certified Front-End Web Developer (Altschool Certification Body)</li>
          <li>JavaScript Bootcamp Completion (Online Learning Platform)</li>
        </ul>
      </div>

      {/* Connect Section */}
      <div className="text-center mt-16" data-aos="fade-up">
        <h2 className="text-lg sm:text-xl font-bold text-gray-200 mb-4">Let&apos;s Connect!</h2>
        <p className="text-gray-400 mb-4">I&apos;m always open to networking and collaboration!</p>
        <a
          href="mailto:itunuoluwafelicia@gmail.com"
          className="inline-block bg-[gold] text-black px-6 py-3 rounded-lg hover:bg-[#2c2b2b] hover:text-white transition duration-300 ease-in-out"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default EducationPage;
