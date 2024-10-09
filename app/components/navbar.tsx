'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  // Memoize the sections array to avoid reinitializing it on every render
  const sections = useMemo(() => ['home', 'skills', 'works', 'education', 'contact'], []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      let found = false; // Flag to check if any section is intersecting
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          found = true; // Set found to true if any section is active
        }
      });

      if (!found) {
        setActiveSection('home'); // Fallback to home if no section is active
      }
    }, { threshold: 0.1 }); // Adjusted threshold to 0.1

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 w-full font-libre-baskerville p-4 shadow bg-white z-10 transition-all duration-300 ${activeSection === 'home' ? 'bg-opacity-100' : 'bg-opacity-80'}`}>
      <div className="mx-auto flex justify-between items-center max-w-full px-4">
        <Link href="/" className="font-Libre-Baskerville text-black text-lg font-bold">
          ADEKUNLE <span className='text-transparent bg-clip-text bg-coral'>ITUNUOLUWA</span>
        </Link>
        <div className="flex items-center">
          <button
            className="text-coral ml-4 lg:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>

          <div className={`hidden lg:flex items-center space-x-4`}>
            {sections.map(section => (
              <Link
                key={section}
                href={`#${section}`}
                className={`text-black font-Libre-Baskerville font-bold hover:text-transparent bg-clip-text bg-coral ${activeSection === section ? 'text-coral underline' : ''}`} // underline for active section
              >
                {section.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden flex flex-col items-start mt-2 space-y-2 transition-all duration-500 ease-in-out mx-auto ${isOpen ? 'max-h-screen p-4' : 'max-h-0 p-0 overflow-hidden'}`}
        style={{
          maxWidth: '100%',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, rgba(230, 230, 250, 0.9), rgba(255, 204, 204, 0.9), rgba(255, 229, 180, 0.9))',
        }}
      >
        {sections.map(section => (
          <Link
            key={section}
            href={`#${section}`}
            className={`text-black font-Libre-Baskerville font-bold hover:text-transparent bg-clip-text bg-coral ${activeSection === section ? 'text-coral underline' : ''}`} // underline for active section
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            {section.toUpperCase()}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
