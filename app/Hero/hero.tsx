'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const textToDisplay = "Hi, I'm Adekunle Itunuoluwa";

  useEffect(() => {
    // Initialize AOS when component mounts
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });

    let index = 0;
    let tempText = '';

    const typingEffect = () => {
      if (index < textToDisplay.length) {
        tempText += textToDisplay[index];
        setDisplayedText(tempText);
        index += 1;
      } else {
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(typingEffect, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [textToDisplay]);

  return (
    <section
      className="px-14 flex flex-col lg:flex-row items-center justify-between py-20 bg-gradient-to-r from-lavender-500 to-peach-300 relative overflow-hidden"
      data-aos="fade-up" // AOS animation for the whole section
    >
      {/* Image Section for Mobile */}
      <div
        className="lg:hidden relative flex justify-center items-center mb-6" // Show only on mobile
        data-aos="fade-left" // Add AOS animation to image section
      >
        <div className="relative z-10 w-64 h-64 overflow-hidden rounded-full shadow-lg">
          <Image
            src="https://i.postimg.cc/sXh4pDNC/my-image-removebg-preview.png"
            alt="Adekunle Itunuoluwa"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>

      {/* Text Content */}
      <div
        className="lg:w-1/2 text-center lg:text-left z-10"
        data-aos="fade-right" // Add AOS animation to text section
      >
        <h1 className="text-xl lg:text-2xl font-bold font-Libre-Baskerville text-gray-900 mb-4">
          {displayedText}
        </h1>
        <p className="text-base lg:text-lg text-gray-700 mb-6">
          I'm a{' '}
          <span className="font-bold text-transparent bg-clip-text bg-coral">Front-End Software Engineer</span> passionate about creating elegant and functional user interfaces.
        </p>

        {/* Social Media Links */}
        <div className="flex lg:justify-start justify-center space-x-4 mb-6" data-aos="fade-up">
          <a
            href="https://www.linkedin.com/in/adekunle-itunuoluwa-043618252"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-xl hover:text-coral-600 transition-colors"
            />
          </a>
          <a
            href="https://github.com/itunugirl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-xl hover:text-coral-600 transition-colors"
            />
          </a>
          <a
            href="https://twitter.com/itunutechgirl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-xl hover:text-coral-600 transition-colors"
            />
          </a>
          <a
            href="https://www.facebook.com/adekunle.itunuoluwa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-xl hover:text-coral-600 transition-colors"
            />
          </a>
          <a
            href="mailto:itunuoluwafelicia@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-xl hover:text-coral-600 transition-colors"
            />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex lg:justify-start justify-center space-x-4" data-aos="fade-up">
          <a
            href="#hire-me"
            className="bg-black text-white px-6 py-2 rounded hover:bg-[white] hover:text-black transition"
          >
            Hire Me
          </a>
          <a
            href="/Miss-Itunuoluwa-Adekunle-FlowCV-Resume-20241002.pdf"
            download
            className="bg-white text-black px-6 py-2 border border-gray-300 rounded hover:bg-orange hover:text-white transition flex items-center"
          >
            Resume
            <FontAwesomeIcon icon={faDownload} className="ml-2" />
          </a>
        </div>
      </div>

      {/* Image Section for Desktop */}
      <div
        className="hidden lg:block lg:w-1/2 mt-10 lg:mt-0 relative flex justify-center items-center"
        data-aos="fade-left" // Add AOS animation to image section
      >
        <div className="absolute -right-20 -top-24 z-0">
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M200 0C300 0 400 100 400 200C400 300 300 400 200 400C100 400 0 300 0 200C0 100 100 0 200 0Z"
              fill="#FF6F61"
              opacity="0.5"
            />
          </svg>
        </div>

        <div className="relative z-10 w-64 h-64 overflow-hidden rounded-full shadow-lg ml-20">
          <Image
            src="https://i.postimg.cc/sXh4pDNC/my-image-removebg-preview.png"
            alt="Adekunle Itunuoluwa"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
