import React from 'react';
import Image from 'next/image';

interface CardProps {
  project: {
    image: string;
    alt: string;
    category: string;
    name: string;
  };
  onCardClick: () => void;
  isActive: boolean;
}

const Card: React.FC<CardProps> = ({ project, onCardClick, isActive }) => {
  const { image, alt, category, name } = project;

  return (
    <figure
      onClick={onCardClick}
      className={`flex-1 min-w-[250px] bg-primary-color m-4 p-2 overflow-hidden rounded-md cursor-pointer transition-transform duration-300 ease-in-out ${
        isActive ? 'transform -translate-y-4 shadow-lg' : ''
      } md:gap-2`}
    >
      <Image
        src={image}
        alt={alt}
        width={300}
        height={300}
        loading="lazy"
        className="w-full h-[200px] rounded-t-lg object-cover"
      />
      <figcaption className="flex flex-col items-center w-full">
        <h3 className="text-secondary-color m-2">{name}</h3>
        <p className="p-2 border border-black rounded-[50%_20%_/_10%_40%] self-end text-sm">
          {category}
        </p>
      </figcaption>
    </figure>
  );
};

export default Card;