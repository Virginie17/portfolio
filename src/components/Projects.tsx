import React from 'react';
import data from '../../public/data.json';
import Image from 'next/image';

const Portfolio: React.FC = () => {
  return (
    <section id="projects" className="flex flex-col items-center w-full bg-tertiary-color box-border">
      <h2>Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.portfolio.map((project) => (
          <div key={project.id} className="p-4 border rounded shadow-md">
            <Image src={project.image} alt={project.alt} width={100} height={100} className="w-full h-auto" />
            <h3 className="text-xl font-bold">{project.name}</h3>
            <p>{project.texte}</p>
            <a href={project.url} className="text-blue-500 hover:underline">Voir le projet</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;