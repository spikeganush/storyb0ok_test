import React, { useState } from 'react';

const HeaderAi = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/products', text: 'Products' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <header className="relative bg-gray-800 px-6 py-4 text-white">
      {' '}
      {/* Added relative */}
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          Your Logo
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden space-x-6 md:flex">
          {navLinks.map((link) => (
            <a key={link.to} href={link.to} className="hover:text-gray-300">
              {link.text}
            </a>
          ))}
        </nav>

        {/* Burger Menu */}
        <button className="focus:outline-none md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 top-full z-10 w-full space-y-2 bg-gray-700 py-4 md:hidden ${
            isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          } transition-all duration-300`}
        >
          {' '}
          {/* Updated translate-x to left-0 for animation from left */}
          {navLinks.map((link) => (
            <a key={link.to} href={link.to} className="block px-4 hover:bg-gray-600">
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default HeaderAi;
