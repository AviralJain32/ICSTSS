
import React from 'react';
import Footer from '@/components/Footer';
import { Book, Computer } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Image with Overlay */}
      <div 
        className="w-full h-64 bg-goldsmiths-blue relative"
        style={{
          backgroundImage: "linear-gradient(rgba(141, 169, 214, 0.8), rgba(141, 169, 214, 0.8)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto h-full flex items-center justify-center px-4">
          <h1 className="font-druk text-3xl md:text-5xl text-white text-center">About Us</h1>
        </div>
      </div>
      
      {/* About the University Section */}
      <section className="py-16 bg-goldsmiths-beige">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/fc596d5c-e4c3-45a5-9917-f9a2fb0d0d4c.png" 
                alt="Goldsmiths University Main Building" 
                className="w-full h-64 object-cover rounded-lg shadow-lg border border-gray-200"
              />
            </div>
            
            <div className="md:w-2/3">
              <h2 className="font-druk text-2xl md:text-3xl text-goldsmiths-text mb-6 border-b-4 border-goldsmiths-blue pb-2 inline-block">
                About the University
              </h2>
              
              <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-6">
                <p className="font-publico text-lg text-goldsmiths-text mb-4 leading-relaxed">
                  Dong Nai Technology University (DNTU) stands as a beacon of educational innovation and regional advancement in Vietnam. Established on June 16th, 2011, the university was founded with a clear mandate to address the growing workforce demands within Dong Nai’s rapidly evolving socio-economic landscape.
                </p>
                <p className="font-publico text-lg text-goldsmiths-text mb-4 leading-relaxed">
                  Looking ahead to 2035, DNTU aspires to establish itself as a leading applied research institution, recognized not only within Vietnam but across Asia. This vision is underpinned by the university’s commitment to fostering a modern, learner-centered educational environment that seamlessly integrates academic excellence with community engagement.
                </p>
                <p className="font-publico text-lg text-goldsmiths-text leading-relaxed">
                  At its core, DNTU’s mission is to deliver high-quality human resources training, built upon technological innovation and experiential learning. The university actively promotes applied scientific research and knowledge transfer, ensuring that its academic and research activities align with societal needs, international integration, and sustainable development goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
};

export default AboutUs;
