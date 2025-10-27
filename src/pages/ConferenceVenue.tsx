import React from 'react';
import Footer from '@/components/Footer';
import { Map, MapPin, Building } from 'lucide-react';

const ConferenceVenue = () => {
  const venueImages = [
    {
      src: "/lovable-uploads/university-main.jpeg",
      alt: "Aerial view of Dong Nai Technology University (DNTU)"
    },
    {
      src: "/lovable-uploads/dongNai2.webp",
      alt: "DNTU campus with students"
    },
    {
      src: "/lovable-uploads/dongNai3.webp",
      alt: "DNTU main building"
    },
    {
      src: "/lovable-uploads/dongNai5.webp",
      alt: "Students walking on DNTU campus"
    }
  ];

  const visaExemptCountries = [
    'Austria', 'Croatia', 'Denmark', 'France', 'Iceland', 'Lithuania', 'Netherlands', 'Portugal', 'Slovenia', 'Belgium',
    'Estonia', 'Germany', 'Latvia', 'Luxembourg', 'Norway', 'Romania', 'Spain', 'Bulgaria', 'Czech Republic', 'Finland',
    'Hungary', 'Liechtenstein', 'Malta', 'Poland', 'Slovakia', 'Sweden'
  ];

  const locationImages = [
    { src: "/lovable-uploads/beinHoa.jpg", alt: "Bien Hoa City skyline and cultural center" },
    { src: "/lovable-uploads/veitnam1.jpeg", alt: "Traditional Vietnamese architecture in Dong Nai" },
    { src: "/lovable-uploads/veitnam2.jpg", alt: "Modern Bien Hoa industrial and technology district" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">VENUE</h1>
          
          {/* Main venue section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="grid grid-cols-2 gap-4">
              {venueImages.map((image, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">DONG NAI TECHNOLOGY UNIVERSITY (DNTU)</h2>
              <div className="flex items-start gap-3 mb-3">
                <Building className="mt-1 flex-shrink-0" size={20} />
                <p>Dong Nai Technology University is a leading applied research and education institution in Dong Nai province, Vietnam, focused on technology-driven learning and community engagement.</p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="mt-1 flex-shrink-0" size={20} />
                <p>D. Nguyen Khuyen, Quarter 5, Bien Hoa, Dong Nai, Vietnam</p>
              </div>
              <a 
                href="https://maps.google.com/?q=Dong+Nai+Technology+University+Bien+Hoa+Dong+Nai+Vietnam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline mt-2"
              >
                <Map className="mr-1" size={16} />
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Location section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">LOCATION</h2>
              <p className="text-justify">
                Dong Nai Technology University (DNTU), D. Nguyen Khuyen, Quarter 5, Bien Hoa, Dong Nai, Vietnam
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.7211757481023!2d106.86615977583995!3d10.984405855321397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174ddb237f9dd59%3A0x3ff1538c511f05d7!2sDong%20Nai%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1761551718404!5m2!1sen!2sin"
                width="100%" 
                height="300" 
                style={{border: 0}} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Visa section */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">VISA</h2>
            
            <p className="mb-6 text-justify">
              International attendees should check visa requirements with their local Vietnamese embassy or consulate. Visa policies vary by nationality and processing times can differ—please plan accordingly.
            </p>

            <p className="text-justify mb-4 text-sm text-gray-600">
              If you require an official invitation letter for visa purposes, please register for the conference and contact the conference secretariat at{' '}
              <a href="mailto:icstss.congress@gmail.com" className="text-blue-600 hover:underline">
                icstss.congress@gmail.com
              </a>. Invitation letters will be issued to registered participants and authors upon request and payment confirmation. Note that an invitation letter does not guarantee visa approval.
            </p>
          </div>

          {/* Vietnam & Bien Hoa section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">VIETNAM & BIEN HOA</h2>
            
            <p className="mb-6 text-justify">
              Bien Hoa, located in Dong Nai Province, is a dynamic industrial hub and cultural center just 30 kilometers northeast of Ho Chi Minh City. As one of Vietnam's fastest-growing urban areas, it combines modern development with rich cultural heritage. The city is known for its industrial parks, technological advancement, and educational institutions, making it an ideal venue for discussions on smart technologies and sustainable development. Visitors can experience Vietnam's renowned hospitality, explore local cuisine, and discover the perfect blend of tradition and innovation that characterizes modern Vietnam.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {locationImages.map((image, index) => (
                <div key={index} className="bg-black p-2 rounded-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConferenceVenue;
