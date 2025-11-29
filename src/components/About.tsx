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
            The International Conference on Computer Vision for Smart Sustainable Systems (CV-S3 2026) invites researchers, academicians, industry professionals, and practitioners to submit high-quality original research papers. CV-S3 2026 aims to bring together global experts to discuss cutting-edge innovations in Computer Vision and its transformative role in building smart, sustainable, and resilient systems for the future.
          </p>

          <p className="font-publico text-lg text-goldsmiths-text mb-6 leading-relaxed text-justify">
            The conference will serve as a premier forum to present advancements, exchange ideas, and explore emerging applications that integrate Computer Vision, Artificial Intelligence, and Sustainability across diverse domains.
          </p>

          <div className="font-publico text-lg text-goldsmiths-text leading-relaxed text-justify mb-4">
            <strong className="block mb-2">Why Attend CV-S3 2026?</strong>
            <ul className="list-disc ml-6 space-y-2">
              <li>Opportunity to publish in highly reputed indexed proceedings</li>
              <li>Interaction with leading researchers and industry experts</li>
              <li>Exposure to global research trends in Computer Vision & Sustainable AI</li>
              <li>Workshops, keynote talks, and panel discussions by eminent speakers</li>
            </ul>
          </div>

          {/* <Link to="https://cmt3.research.microsoft.com/CV-S32026" >
            <Button className="mt-4">Paper Submission Link</Button>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default About;
