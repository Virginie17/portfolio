import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <div
          className="fixed bottom-12 right-1 md:right-5 w-8 h-8 bg-secondary-color text-white rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 relative"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} />
          <span className="absolute bottom-[-42px] left-[40%] md:left-[50%] transform -translate-x-1/2 text-black text-sm opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
            Revenir en haut
          </span>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;