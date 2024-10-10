
import AboutImg from '../../public/assets/img/photo de moi.webp';
import React, { useState } from 'react';
import Button from '../components/Button';
import Image from 'next/image';
import Modal from '../components/Modal';

const About: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="about" className="flex flex-col items-center md:items-stretch md:pb-12 bg-transparent">
      <figure className="flex flex-col items-center justify-center gap-5 md:gap-15 bg-transparent">
        <Image
          src={AboutImg}
          alt="photo de virginie"
          loading="lazy"
          className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg shadow-lg rounded-lg bg-transparent"
        />
        <figcaption className="mt-5">
          <Button text="Qui suis-je ?" onClick={openModal} />
        </figcaption>
      </figure>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <p>Hello my name is Virginie</p>
      </Modal>
    </section>
  );
};

export default About;