import React from 'react';
import Image from 'next/image';
import bannerImg from '../../public/assets/img/banner.png';
import data from '../../public/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Header: React.FC = () => {
  return (
    <header className="relative">
      <div className="absolute top-0 right-0 flex space-x-4 p-4">
        {data.links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
            {link.name.toLowerCase() === 'linkedin' && <FontAwesomeIcon icon={faLinkedin} className="text-black text-2xl" />}
            {link.name.toLowerCase() === 'github' && <FontAwesomeIcon icon={faGithub} className="text-black text-2xl" />}
          </a>
        ))}
        <a href={data.email.url} aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} className="text-black text-2xl" />
        </a>
      </div>
      <section id="banner" className="relative flex flex-col items-center justify-center w-full h-[500px]">
        <nav className="flex space-x-4 mb-4">
          <a href="#about me" className="text-black">About Me</a>
          <a href="#skills" className="text-black">Skills</a>
          <a href="#projects" className="text-black">Projects</a>
          <a href="#contact" className="text-black">Contact</a>
        </nav>
        <figure className="absolute inset-0 m-0 w-full h-full z-[-1]">
          <Image
            src={bannerImg}
            alt="image avec bienvenue sur mon portfolio"
            className="block w-full h-full object-cover"
            layout="fill"
          />
        </figure>
      </section>
    </header>
  );
};

export default Header;