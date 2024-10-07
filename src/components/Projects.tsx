import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Project {
  id: number;
  name: string;
  texte: string;
  image: string;
  alt: string;
  url: string;
}

interface NextArrowProps {
  className: string;
  style: object;
  onClick: () => void;
}

const NextArrow: React.FC<NextArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
};

const PrevArrow: React.FC<NextArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
};

const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setProjects(data.projets))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow className="" style={{}} onClick={() => {}} />,
    prevArrow: <PrevArrow className="" style={{}} onClick={() => {}} />,
  };

  return (
    <section id="projects" className="flex flex-col items-center w-full box-border py-10">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="w-full max-w-2xl p-4 rounded-lg bg-gray-100 shadow-lg border-2 border-black">
        <Slider {...settings} className="w-full">
          {projects.map((project) => (
            <div key={project.id} className="p-4">
              <Image src={project.image} alt={project.alt} width={600} height={300} className="w-full h-auto max-h-64 mx-auto" />
              <h3 className="text-xl font-bold text-center mt-4">{project.name}</h3>
              <p className="text-center">{project.texte}</p>
              <a href={project.url} className="text-blue-500 hover:underline block text-center mt-2">Voir le projet</a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;