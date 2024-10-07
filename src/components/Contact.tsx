import React from 'react';
import Form from './Form';
import infoImg from '../../public/assets/img/logo.webp';
import Image from 'next/image';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="flex flex-col md:flex-row w-full bg-primary-color mt-20 mb-12 box-border shadow-lg md:h-[400px]">
      <div className="flex justify-center items-center p-5 md:p-10">
        <Image loading="lazy" src={infoImg} alt="image avec mon logo" className="object-cover w-full h-auto max-w-xs md:max-w-sm rounded-lg" />
      </div>
      <section className="contact flex flex-col w-full box-border bg-gray-100 p-5 md:p-10 border-2 border-black rounded-[100px_0_100px_0]">
        <h2 className="self-center pt-5 md:pt-12">Me contacter</h2>
        <Form />
      </section>
    </section>
  );
};

export default Contact;