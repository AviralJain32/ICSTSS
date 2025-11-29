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
          <h1 className="font-druk text-3xl md:text-5xl text-white text-center">
            About Us
          </h1>
        </div>
      </div>
      
      {/* About the University Section */}
      <section className="py-16 bg-goldsmiths-beige">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-6">
            
            {/* University Image */}
            <div className="md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/university-main.webp" 
                alt="Manipal University Dubai Campus" 
                className="w-full h-64 object-cover rounded-lg shadow-lg border border-gray-200"
              />
            </div>
            
            {/* Text Section */}
            <div className="md:w-2/3">
              <h2 className="font-druk text-2xl md:text-3xl text-goldsmiths-text mb-6 border-b-4 border-goldsmiths-blue pb-2 inline-block">
                About the University
              </h2>
              
              <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-6">
                
                <p className="font-publico text-lg text-goldsmiths-text mb-4 leading-relaxed">
                  Manipal Academy of Higher Education (MAHE), Dubai Campus—commonly known as  
                  <strong> Manipal University Dubai (MUD)</strong>—is one of the UAE’s leading multidisciplinary universities.  
                  With over <strong>25 years of academic excellence</strong> in the region, the university is recognized for  
                  high-quality education, global standards, and a strong emphasis on research and innovation.
                </p>

                <p className="font-publico text-lg text-goldsmiths-text mb-4 leading-relaxed">
                  Established in 2000, Manipal University Dubai is the first overseas branch campus of MAHE, India—one of Asia’s largest and most prestigious private universities.  
                  Today, the Dubai campus hosts a vibrant multicultural community with <strong>3,100+ students from over 50 countries</strong>, offering a global learning environment in the heart of Dubai International Academic City.
                </p>

                <p className="font-publico text-lg text-goldsmiths-text leading-relaxed">
                  The university is rated <strong>5 Stars by KHDA</strong> in areas including teaching, employability, overall facilities, and research.  
                  With state-of-the-art laboratories, studios, technology hubs, and innovation centers, Manipal University Dubai continues to strengthen its mission of fostering academic excellence, promoting applied research, and preparing students to meet the needs of a rapidly evolving digital and sustainable world.
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
