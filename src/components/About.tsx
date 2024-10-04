import React, { useState } from 'react';
import AboutImg from '../../public/assets/img/about.png';
import Button from './Button';
{/*import Modal from './Modal';/*/}
import Image from 'next/image';

const About: React.FC = () => {
 

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="about" className="flex flex-col items-center md:items-stretch md:pb-12 bg-transparent">
      <figure className="flex flex-col items-center justify-center gap-5 md:flex-row md:items-center md:justify-center md:gap-15 bg-transparent">
        <Image
          src={AboutImg}
          alt="photo de virginie"
          loading="lazy"
          className="w-auto h-auto max-w-xs shadow-lg rounded-lg bg-transparent" 
        />
        <figcaption>
          <Button text="Qui suis-je ?" onClick={openModal} />
        </figcaption>
      </figure>

      
    </section>
  );
};

export default About;