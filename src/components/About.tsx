
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-goldsmiths-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-druk text-3xl md:text-4xl text-goldsmiths-text border-b-4 border-goldsmiths-blue pb-2 inline-block">
            About Conference
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white shadow-lg border border-gray-200 rounded-lg p-6">
          <p className="font-publico text-lg text-goldsmiths-text mb-6 leading-relaxed text-justify">
            The International Conference on Smart Technologies & Sustainable Systems (ICSTSS 2026) aims to bring together leading academicians, researchers, innovators, and industry experts to explore cutting-edge advancements in smart technologies and their role in building sustainable systems for the future.
          </p>
          <p className="font-publico text-lg text-goldsmiths-text mb-6 leading-relaxed text-justify">
            In today’s rapidly evolving digital landscape, the convergence of Artificial Intelligence (AI), Internet of Things (IoT), Smart Grids, Green Energy, Blockchain, Cloud Computing, and Data Analytics plays a transformative role in shaping sustainable societies. This conference serves as a premier platform to exchange ideas, present novel research, and discuss innovative solutions that address global challenges such as climate change, energy efficiency, smart cities, sustainable manufacturing, and digital governance.
          </p>
          <p className="font-publico text-lg text-goldsmiths-text leading-relaxed text-justify">
            <strong>ICSTSS 2026 will feature keynote lectures from eminent speakers, technical paper presentations, panel discussions, industry sessions, and workshops designed to foster collaboration between academia and industry.</strong>
          </p>
          <Link to={"https://cmt3.research.microsoft.com/ICSTSS2026"}>
          <Button className='mt-4'>Paper Submission Link</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
