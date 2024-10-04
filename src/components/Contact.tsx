import React from 'react';
import Form from './Form';
import infoImg from '../../public/assets/img/banner.webp';
import Image from 'next/image';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="flex flex-row w-full bg-primary-color mb-12 box-border shadow-lg md:h-[400px]">
      <Image loading="lazy" src={infoImg} alt="image avec un ordinateur et un télèphone" className="object-cover w-full md:max-w-full" />
      <section className="contact flex flex-col w-full box-border bg-secondary-color p-5 md:p-10">
        <h2 className="self-center pt-5 md:pt-12">Me contacter</h2>
        <Form />
      </section>
    </div>
  );
};

export default Contact;