
import React from 'react';
import About from '@/components/About';
import Objectives from '@/components/Objectives';
import ImportantDatesSection from '@/components/ImportantDatesSection';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import IndexingSection from '@/components/IndexingSection';

const Index: React.FC = () => {
  const carouselImages = [
    // { src: "/lovable-uploads/dongNai1.jpg", alt: "Goldsmiths University Main Building" },
    // { src: "/lovable-uploads/dongNai2.webp", alt: "Goldsmiths University Ivy Building" },
    { src: "/lovable-uploads/dongNai4.webp", alt: "Department of Computing" },
    { src: "/lovable-uploads/dongNai5.webp", alt: "Goldsmiths Church Building" },
    { src: "/lovable-uploads/dongNai6.webp", alt: "Goldsmiths Entrance" },
    { src: "/lovable-uploads/dongNai7.webp", alt: "Aerial view of Goldsmiths University" },
    { src: "/lovable-uploads/dongNai8.webp", alt: "Goldsmiths University campus with students" },
    { src: "/lovable-uploads/dongNai3.webp", alt: "Goldsmiths Modern Building" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <ImageCarousel images={carouselImages} />
      <IndexingSection />
      <About />
      <Objectives />
      <ImportantDatesSection />
      <Footer />
    </div>
  );
};

export default Index;
