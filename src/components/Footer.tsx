import React from 'react';
import data from '../../public/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative flex flex-col items-center gap-2.5 py-12 bg-tertiary-color">
      
      <ul className="flex flex-row gap-7 z-10">
        <li>
          <a href={`mailto:${data.email.url}`} aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} className="text-black text-2xl" />
          </a>
        </li>
        {data.links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
              {link.name.toLowerCase() === 'linkedin' && <FontAwesomeIcon icon={faLinkedin} className="text-black text-2xl" />}
              {link.name.toLowerCase() === 'github' && <FontAwesomeIcon icon={faGithub} className="text-black text-2xl" />}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-base z-10">© {currentYear} || Tous droits réservés</p>
    </footer>
  );
};

export default Footer;