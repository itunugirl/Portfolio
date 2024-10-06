'use client'

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="font-libre-baskerville p-4 shadow">
      <div className="mx-auto flex justify-between items-center max-w-full px-4">
        <Link href="/" className="font-Libre-Baskerville text-black text-lg font-bold">
          ADEKUNLE <span className='text-transparent bg-clip-text bg-coral'>ITUNUOLUWA</span>
        </Link>
        <div className="flex items-center">
          {/* Hamburger Icon */}
          <button
            className="text-coral ml-4 lg:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isOpen}
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

          {/* Desktop Menu Links */}
          <div className={`hidden lg:flex items-center space-x-4`}>
            <Link href="/" className="text-black hover:text-transparent bg-clip-text bg-coral">HOME</Link>
            <Link href="/Skills" className="text-black hover:text-transparent bg-clip-text bg-coral">SKILLS</Link>
            <Link href="/works" className="text-black hover:text-transparent bg-clip-text bg-coral">WORKS</Link>
            <Link href="/Resume" className="text-black hover:text-transparent bg-clip-text bg-coral">RESUME</Link>
            <Link href="/contact" className="text-black hover:text-transparent bg-clip-text bg-coral">CONTACT</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden flex flex-col items-start mt-2 space-y-2 transition-all duration-500 ease-in-out mx-auto ${isOpen ? 'max-h-screen p-4' : 'max-h-0 p-0 overflow-hidden'}`}
        style={{
          maxWidth: '100%',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, rgba(230, 230, 250, 0.9), rgba(255, 204, 204, 0.9), rgba(255, 229, 180, 0.9))',
        }}
      >
        <Link href="/" className="text-black hover:text-transparent bg-clip-text bg-coral">Home</Link>
        <Link href="/Skills" className="text-black hover:text-transparent bg-clip-text bg-coral">Skills</Link>
        <Link href="/works" className="text-black hover:text-transparent bg-clip-text bg-coral">Works</Link>
        <Link href="/Resume" className="text-black hover:text-transparent bg-clip-text bg-coral">Resume</Link>
        <Link href="/contact" className="text-black hover:text-transparent bg-clip-text bg-coral">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
