import React, { useState } from 'react';
import Head from 'next/head';
import data from '../../public/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBars, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio. I am a Front-End Developer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="My Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio. I am a Front-End Developer." />
        <meta property="og:image" content="/assets/img/banner.webp" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Portfolio" />
        <meta name="twitter:description" content="Welcome to my portfolio. I am a Front-End Developer." />
        <meta name="twitter:image" content="/assets/img/banner.webp" />
      </Head>
      <header className="relative flex flex-col items-center p-4">
        <div className="w-full flex justify-between items-center p-4">
          <button onClick={toggleMenu} className="text-black hover:text-gray-700 focus:outline-none">
            <FontAwesomeIcon icon={faBars} className="text-xl sm:text-2xl" />
          </button>
          <div className="flex space-x-4">
            <a href={`mailto:${data.email.url}`} aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} className="text-black text-xl sm:text-2xl" />
            </a>
            {data.links.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                {link.name.toLowerCase() === 'linkedin' && <FontAwesomeIcon icon={faLinkedin} className="text-black text-xl sm:text-2xl" />}
                {link.name.toLowerCase() === 'github' && <FontAwesomeIcon icon={faGithub} className="text-black text-xl sm:text-2xl" />}
              </a>
            ))}
            <button onClick={toggleLanguageMenu} className="text-black hover:text-gray-700 focus:outline-none">
              <FontAwesomeIcon icon={faGlobe} className="text-xl sm:text-2xl" />
            </button>
            {languageMenuOpen && (
              <div className="absolute top-16 right-0 w-40 bg-white shadow-md z-10">
                <div className="flex flex-col items-start p-4 space-y-2">
                  <a href="#" className="text-black hover:text-gray-700">English</a>
                  <a href="#" className="text-black hover:text-gray-700">Français</a>
                  <a href="#" className="text-black hover:text-gray-700">Español</a>
                  <a href="#" className="text-black hover:text-gray-700">Deutsch</a>
                  <a href="#" className="text-black hover:text-gray-700">日本語</a>
                </div>
              </div>
            )}
          </div>
        </div>
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md z-10">
            <div className="flex flex-col items-start p-4 space-y-2">
              <a href="#about" className="text-black hover:text-gray-700">About Me</a>
              <a href="#skills" className="text-black hover:text-gray-700">Skills</a>
              <a href="#projects" className="text-black hover:text-gray-700">Projects</a>
              <a href="#contact" className="text-black hover:text-gray-700">Contact</a>
            </div>
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-black mt-16 animate-fade-slide-up">Welcome to My Portfolio</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-black mt-4">
         My name is Virginie.<br />I am a Front-End Developer.
        </h2>
      </header>
    </>
  );
};

export default Header;