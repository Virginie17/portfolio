import React from 'react';
import skillsdata from '../../public/data.json';
import Link from './Link';

const Skills: React.FC = () => {
  const frontSkills = skillsdata.skills.filter(skill => skill.category === 'Front');
  const otherSkills = skillsdata.skills.filter(skill => skill.category === 'Autres');

  return (
    <article id="skills" className="flex flex-col items-center w-full py-10">
      <h2>Skills</h2>
      <div className="relative flex flex-col items-center w-full gap-2.5 box-border md:flex-row md:justify-center md:gap-7.5 md:p-10">
        <div className="relative w-50 border border-tertiary-color md:hidden">
          <div className="absolute w-0.5 h-5 bg-tertiary-color top-2.5 right-[-1px] transform -translate-y-1/2"></div>
          <div className="absolute w-0.5 h-5 bg-tertiary-color bottom-2.5 left-[-1px] transform translate-y-1/2"></div>
        </div>
        <section className="flex flex-col items-center rounded-[100px_0_100px_0] m-3 p-5 w-4/5 bg-primary-color shadow-lg transition-all duration-200 ease-in-out md:w-[400px] md:h-[400px] md:p-0 md:pr-2.5 md:pb-10">
          <h3>Front-end</h3>
          <ul className="flex flex-wrap justify-center gap-2.5 pt-5 md:gap-5 md:pt-7.5">
            {frontSkills.map((skill, index) => (
              <li key={index} className="w-[calc((100%-40px)/2)] mb-5 md:w-[calc((100%-60px)/3)]">
                <Link url={skill.url} content={skill.name} />
              </li>
            ))}
          </ul>
        </section>
        <div className="relative w-50 border border-tertiary-color md:hidden">
          <div className="absolute w-0.5 h-5 bg-tertiary-color top-[-2.5px] right-[-1px] transform -translate-y-1/2"></div>
          <div className="absolute w-0.5 h-5 bg-tertiary-color bottom-[-2.5px] left-[-1px] transform translate-y-1/2"></div>
        </div>
        <section className="flex flex-col items-center rounded-[100px_0_100px_0] m-3 p-5 w-4/5 bg-primary-color shadow-lg transition-all duration-200 ease-in-out md:w-[400px] md:h-[400px] md:p-0 md:pr-2.5 md:pb-10">
          <h3>More</h3>
          <ul className="flex flex-wrap justify-center gap-2.5 pt-5 md:gap-5 md:pt-7.5">
            {otherSkills.map((skill, index) => (
              <li key={index} className="w-[calc((100%-40px)/2)] mb-5 md:w-[calc((100%-60px)/3)]">
                <Link url={skill.url} content={skill.name} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
};

export default Skills;