import React, { useEffect, useState } from 'react';
import Link from './Link';
import Image from 'next/image';

interface Skill {
  name: string;
  img: string;
  alt: string;
  url: string;
  category: string;
}

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setSkills(data.skills))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const frontSkills = skills.filter(skill => skill.category === 'Front');
  const otherSkills = skills.filter(skill => skill.category === 'Autres');

  return (
    <article id="skills" className="flex flex-col items-center w-full py-10">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="relative flex flex-col items-center w-full gap-2.5 box-border md:flex-row md:justify-center md:gap-7.5 md:p-10">
        <section className="flex flex-col items-center rounded-[100px_0_100px_0] m-3 p-5 w-4/5 bg-gray-100 border-2 border-black shadow-lg transition-all duration-200 ease-in-out md:w-[400px] md:h-[400px] md:p-0 md:pr-2.5 md:pb-10">
          <h3 className="text-2xl font-bold mb-4">Front-end</h3>
          <ul className="flex flex-wrap justify-center gap-2.5 pt-5 md:gap-5 md:pt-7.5">
            {frontSkills.map((skill, index) => (
              <li key={index} className="w-[calc((100%-40px)/2)] mb-5 md:w-[calc((100%-60px)/3)] flex flex-col items-center animate-zoom-rotate">
                <Image src={skill.img} alt={skill.alt} width={40} height={40} className="w-10 h-10 mb-2" />
                <Link content={skill.name} />
              </li>
            ))}
          </ul>
        </section>
        <section className="flex flex-col items-center rounded-[100px_0_100px_0] m-3 p-5 w-4/5 bg-gray-100 border-2 border-black shadow-lg transition-all duration-200 ease-in-out md:w-[400px] md:h-[400px] md:p-0 md:pr-2.5 md:pb-10">
          <h3 className="text-2xl font-bold mb-4">More</h3>
          <ul className="flex flex-wrap justify-center gap-2.5 pt-5 md:gap-5 md:pt-7.5">
            {otherSkills.map((skill, index) => (
              <li key={index} className="w-[calc((100%-40px)/2)] mb-5 md:w-[calc((100%-60px)/3)] flex flex-col items-center animate-zoom-rotate">
                <Image src={skill.img} alt={skill.alt} width={30} height={30} className="w-8 h-8 mb-2" />
                <Link content={skill.name} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
};

export default Skills;