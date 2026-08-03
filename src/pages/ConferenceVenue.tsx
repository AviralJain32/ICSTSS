import React from 'react';
import Footer from '@/components/Footer';
import { Map, MapPin, Building } from 'lucide-react';

const ConferenceVenue = () => {
  const venueImages = [
    {
      src: "/lovable-uploads/university-main.webp",
      alt: "Manipal University Dubai campus aerial view"
    },
    {
      src: "/lovable-uploads/dongNai2.webp",
      alt: "Manipal University Dubai campus students"
    },
    {
      src: "/lovable-uploads/dongNai3.webp",
      alt: "Manipal University Dubai building"
    },
    {
      src: "/lovable-uploads/dongNai5.webp",
      alt: "Manipal University Dubai campus walkway"
    }
  ];

  const locationImages = [
    { src: "/lovable-uploads/beinHoa.jpg", alt: "Dubai skyline" },
    { src: "/lovable-uploads/veitnam1.jpeg", alt: "Dubai architecture" },
    { src: "/lovable-uploads/veitnam2.jpg", alt: "Academic City Dubai" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">VENUE</h1>
          
          {/* Main Venue Section */}
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
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">MANIPAL UNIVERSITY DUBAI</h2>
              <div className="flex items-start gap-3 mb-3">
                <Building className="mt-1 flex-shrink-0" size={20} />
                <p>Manipal University Dubai (MUD) is a leading multidisciplinary university in Dubai International Academic City, offering world-class education and cutting-edge research facilities.</p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="mt-1 flex-shrink-0" size={20} />
                <p>G04 - Al Rowaiyah First, Academic City, Dubai, United Arab Emirates</p>
              </div>
              <a 
                href="https://maps.google.com/?q=Manipal+University+Dubai"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline mt-2"
              >
                <Map className="mr-1" size={16} />
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Location Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">LOCATION</h2>
              <p className="text-justify">
                Manipal University Dubai, G04 - Al Rowaiyah First, Academic City, Dubai, United Arab Emirates.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14446.979706877468!2d55.37891875!3d25.11620535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bf62a1f4f0d%3A0x7a1c89eacdd5b43b!2sManipal%20Academy%20of%20Higher%20Education%20Dubai%20Campus!5e0!3m2!1sen!2sin!4v1701551825500"
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

          {/* Visa Section */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">VISA</h2>
            
            <p className="mb-6 text-justify">
              International attendees should verify UAE visa requirements based on their nationality. Some countries are eligible for visa-on-arrival, while others require pre-approved visas. Processing times vary, so early preparation is advised.
            </p>

            <p className="text-justify mb-4 text-sm text-gray-600">
              If you need an official invitation letter for visa purposes, please register for the conference and email the conference secretariat at{' '}
              <a href="mailto:cvs3.congress@gmail.com" className="text-blue-600 hover:underline">
                cvs3.congress@gmail.com
              </a>.  
              Invitation letters are issued upon request and after registration/payment confirmation. Note that this does not guarantee visa approval.
            </p>
          </div>

          {/* Dubai Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">DUBAI</h2>
            
            <p className="mb-6 text-justify">
              Dubai, a global hub for innovation and technology, offers a blend of cutting-edge infrastructure, multicultural lifestyle, and rich cultural heritage. Dubai International Academic City (DIAC), home to Manipal University Dubai, is the largest education hub in the region. Visitors can enjoy world-class attractions, diverse cuisine, and safe, modern urban experiences.
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
