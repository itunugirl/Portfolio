'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const textToDisplay = "Hi, I'm Adekunle Itunuoluwa"; // Fixed apostrophe issue

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

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
    return () => clearInterval(intervalId);
  }, [textToDisplay]);

  return (
    <section id="home" className="px-14 flex flex-col lg:flex-row items-center justify-between py-20 bg-gradient-to-r from-lavender-500 to-peach-300 relative overflow-hidden" data-aos="fade-up">
      {/* Mobile Image */}
      <div className="lg:hidden relative flex justify-center items-center mb-6" data-aos="fade-left">
        <div className="relative z-10 w-96 h-96 overflow-hidden rounded-full shadow-lg"> {/* Increased dimensions */}
          <Image 
            src="https://i.postimg.cc/BbJdCwH0/nice-image.jpg" 
            alt="Adekunle Itunuoluwa" 
            width={384} // Updated width
            height={384} // Updated height
            objectFit="cover" 
            className="rounded-full" 
            priority 
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left z-10" data-aos="fade-right">
        <h1 className="text-xl lg:text-2xl font-bold font-Libre-Baskerville text-gray-900 mb-4">{displayedText}</h1>
        <p className="text-base lg:text-lg text-gray-700 mb-6">
          I&apos;m a <span className="font-bold text-transparent bg-clip-text bg-coral">Front-End Software Engineer</span> passionate about creating elegant and functional user interfaces.
        </p>

        {/* Social Media Links */}
        <div className="flex lg:justify-start justify-center space-x-4 mb-6" data-aos="fade-up">
          {[
            { href: "https://www.linkedin.com/in/adekunle-itunuoluwa-043618252", icon: faLinkedin, label: "LinkedIn" },
            { href: "https://github.com/itunugirl", icon: faGithub, label: "GitHub" },
            { href: "https://twitter.com/itunutechgirl", icon: faTwitter, label: "Twitter" },
            { href: "https://www.facebook.com/adekunle.itunuoluwa", icon: faFacebook, label: "Facebook" },
            { href: "mailto:itunuoluwafelicia@gmail.com", icon: faEnvelope, label: "Email" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="social-icon" // Add this class for hover effect
            >
              <FontAwesomeIcon icon={link.icon} className="text-xl transition-all duration-300 hover:text-coral-600" />
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex lg:justify-start justify-center space-x-4" data-aos="fade-up">
          <a href="/Contact" className="bg-black text-white px-6 py-2 rounded hover:bg-white hover:text-black transition">Hire Me</a>
          <a href="/Miss-Itunuoluwa-Adekunle-FlowCV-Resume-20241002.pdf" download className="bg-white text-black px-6 py-2 border border-gray-300 rounded hover:bg-orange hover:text-white transition flex items-center">
            Resume <FontAwesomeIcon icon={faDownload} className="ml-2" />
          </a>
        </div>
      </div>

      {/* Desktop Image */}
      <div className="hidden lg:block lg:w-1/2 mt-10 lg:mt-0 relative flex justify-center items-center" data-aos="fade-left">
        <div className="absolute -right-20 -top-24 z-0" aria-hidden="true">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="responsive-svg">
            <path d="M200 0C300 0 400 100 400 200C400 300 300 400 200 400C100 400 0 300 0 200C0 100 100 0 200 0Z" fill="#FF6F61" opacity="0.5" />
          </svg>
        </div>
        <div className="relative z-10 w-96 h-96 overflow-hidden rounded-full shadow-lg ml-20"> {/* Increased dimensions */}
          <Image 
            src="https://i.postimg.cc/BbJdCwH0/nice-image.jpg" 
            alt="Adekunle Itunuoluwa" 
            width={384} // Updated width
            height={384} // Updated height
            objectFit="cover" 
            className="rounded-full" 
            priority 
          />
        </div>
      </div>

      {/* Styling for Social Icons */}
      <style jsx>{`
        .social-icon:hover {
          transform: scale(1.1);
          transition: transform 0.2s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
